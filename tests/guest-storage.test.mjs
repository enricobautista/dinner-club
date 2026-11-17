import test, { mock } from 'node:test';
import assert from 'node:assert/strict';

let headImpl;
let getImpl;
class NotFound extends Error {}
mock.module('@vercel/blob', { namedExports: {
  head: (...args) => headImpl(...args), get: (...args) => getImpl(...args), BlobNotFoundError: NotFound,
} });
const { readGuestList } = await import('../lib/guest-storage.ts');
const menu = { slug: 'test-potluck', guests: [] };
const result = (guests, etag) => ({ statusCode: 200, blob: { etag }, stream: new Response(JSON.stringify(guests)).body });

test('public storage uses versioned content and the origin ETag for conditional writes', async () => {
  headImpl = async () => ({ url: 'https://test.public.blob.vercel-storage.com/guestlists/test-potluck.json', etag: 'origin-v2' });
  getImpl = async url => {
    assert.equal(new URL(url).searchParams.get('v'), 'origin-v2');
    return result([{ id: 'a', name: 'Already signed up' }], '"origin-v2"');
  };
  const read = await readGuestList(menu, 'test-token');
  assert.equal(read.etag, 'origin-v2'); // Not the quoted HTTP/CDN ETag.
  assert.equal(read.guests[0].name, 'Already signed up');
});

test('stale public content is rejected and read again before a mutation', async () => {
  let reads = 0;
  headImpl = async () => ({ url: 'https://test.public.blob.vercel-storage.com/guestlists/test-potluck.json', etag: 'new-version' });
  getImpl = async () => ++reads === 1 ? result([], 'old-version') : result([{ name: 'Latest guest' }], 'W/"new-version"');
  const read = await readGuestList(menu, 'test-token');
  assert.equal(reads, 2);
  assert.equal(read.guests[0].name, 'Latest guest');
  assert.equal(read.etag, 'new-version');
});

test('missing storage uses seeded guests, while an outage cannot masquerade as an empty list', async () => {
  headImpl = async () => { throw new NotFound(); };
  const read = await readGuestList({ ...menu, guests: [{ name: 'Seed' }] }, 'test-token');
  assert.equal(read.etag, undefined);
  assert.equal(read.guests[0].id, 'seed-0');
  headImpl = async () => { throw new Error('Storage outage'); };
  await assert.rejects(readGuestList(menu, 'test-token'), /Storage outage/);
});
