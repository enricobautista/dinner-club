import test from 'node:test';
import assert from 'node:assert/strict';
import { updateGuestList, GuestListError } from '../lib/guest-list.ts';

const menu = { potluck: true, courses: [{ heading: 'Dinner', items: [{ name: 'Rice' }, { name: 'Beans' }, { name: 'Cake' }] }] };
const add = (guests, body, options = {}) => updateGuestList(guests, { ...menu, ...options }, 10, { action: 'add', name: 'Alex', ...body }, false);
const rejects = (fn, status) => assert.throws(fn, e => e instanceof GuestListError && e.status === status);

test('potluck requires a dish, rejects invalid choices, and requires a name', () => {
  for (const dishes of [undefined, [], 'Rice', [1], ['Unknown']]) rejects(() => add([], { dishes }), 400);
  rejects(() => add([], { name: '  ', dishes: ['Rice'] }), 400);
});

test('standard menus retain signup without dishes', () => {
  const [g] = add([], { plusOne: true, dietary: 'Vegetarian' }, { potluck: false });
  assert.equal(g.name, 'Alex'); assert.equal(g.plusOne, true); assert.equal(g.dietary, 'Vegetarian');
  assert.equal(g.dishes, undefined);
});

test('multiple dish choices persist and duplicates are normalized', () => {
  const [g] = add([], { dishes: ['Rice', 'Cake', 'Rice'] });
  assert.deepEqual(g.dishes, ['Rice', 'Cake']); assert.ok(g.id);
});

test('claimed dishes are exclusive across guests', () => {
  const guests = add([], { dishes: ['Rice'] });
  rejects(() => add(guests, { dishes: ['Rice'], name: 'Sam' }), 409);
  assert.equal(add(guests, { dishes: ['Beans'], name: 'Sam' }).length, 2);
});

test('editing preserves own claim and can change name, plus one, dietary and dishes', () => {
  const guests = add([], { dishes: ['Rice'] });
  const id = guests[0].id;
  const retained = updateGuestList(guests, menu, 10, { action: 'edit', id, name: 'Alex Updated' }, false);
  assert.deepEqual(retained[0].dishes, ['Rice']);
  const edited = updateGuestList(retained, menu, 10, { action: 'edit', id, dishes: ['Beans'], plusOne: true, dietary: 'No nuts' }, false);
  assert.equal(edited[0].plusOne, true); assert.equal(edited[0].dietary, 'No nuts');
  assert.ok(edited[0].history.some(h => h.field === 'dishes'));
  assert.equal(add(edited, { name: 'Sam', dishes: ['Rice'] }).length, 2);
});

test('edit cannot steal another claim, clear all dishes, or use an unknown guest', () => {
  const guests = add(add([], { dishes: ['Rice'] }), { name: 'Sam', dishes: ['Beans'] });
  const id = guests[0].id;
  rejects(() => updateGuestList(guests, menu, 10, { action: 'edit', id, dishes: ['Beans'] }, false), 409);
  rejects(() => updateGuestList(guests, menu, 10, { action: 'edit', id, dishes: [] }, false), 400);
  rejects(() => updateGuestList(guests, menu, 10, { action: 'edit', id: 'missing' }, false), 404);
  rejects(() => updateGuestList(guests, menu, 10, { action: 'edit', id, name: ' ' }, false), 400);
  assert.deepEqual(guests[0].dishes, ['Rice']);
});

test('capacity includes plus ones on add and edit, but existing guests can edit a full list', () => {
  const guests = add([], { dishes: ['Rice'] });
  rejects(() => updateGuestList(guests, menu, 2, { action: 'add', name: 'Sam', plusOne: true, dishes: ['Beans'] }, false), 409);
  const full = add(guests, { name: 'Sam', dishes: ['Beans'] });
  rejects(() => updateGuestList(full, menu, 2, { action: 'edit', id: full[0].id, plusOne: true }, false), 409);
  assert.equal(updateGuestList(full, menu, 2, { action: 'edit', id: full[0].id, name: 'Updated' }, false)[0].name, 'Updated');
});

test('admin-only deletion releases dish claims', () => {
  const guests = add([], { dishes: ['Rice'] });
  rejects(() => updateGuestList(guests, menu, 10, { action: 'delete', id: guests[0].id }, false), 401);
  const deleted = updateGuestList(guests, menu, 10, { action: 'delete', id: guests[0].id }, true);
  assert.equal(add(deleted, { dishes: ['Rice'] }).length, 1);
});

test('public removal frees a signup, its plus one, and all its dishes', () => {
  const guests = add(add([], { dishes: ['Rice', 'Cake'], plusOne: true }), { name: 'Sam', dishes: ['Beans'] });
  const removed = updateGuestList(guests, menu, 3, { action: 'remove', id: guests[0].id }, false);
  assert.deepEqual(removed, [guests[1]]);
  const replacement = updateGuestList(removed, menu, 3, { action: 'add', name: 'Replacement', plusOne: true, dishes: ['Rice', 'Cake'] }, false);
  assert.equal(replacement.length, 2);
  assert.equal(guests.length, 2);
});

test('public removal requires an exact existing guest ID', () => {
  const guests = add([], { dishes: ['Rice'] });
  for (const id of [undefined, '', ' ', 1]) {
    rejects(() => updateGuestList(guests, menu, 10, { action: 'remove', id, name: 'Alex' }, false), 400);
  }
  rejects(() => updateGuestList(guests, menu, 10, { action: 'remove', id: 'missing' }, false), 404);
  const standard = add([], {}, { potluck: false });
  assert.deepEqual(updateGuestList(standard, { ...menu, potluck: false }, 10, { action: 'remove', id: standard[0].id }, false), []);
});

const custom = { name: 'Mango Salad', description: 'Mango, lime, and herbs.', course: 'Appetizer' };

test('a complete custom dish satisfies signup and can be edited and removed', () => {
  const guests = add([], { customDishes: [custom] });
  assert.deepEqual(guests[0].dishes, []);
  assert.deepEqual(guests[0].customDishes, [custom]);
  const edited = updateGuestList(guests, menu, 10, { action: 'edit', id: guests[0].id, customDishes: [{ ...custom, description: 'With mint.' }] }, false);
  assert.equal(edited[0].customDishes[0].description, 'With mint.');
  assert.ok(edited[0].history.some(h => h.field === 'customDishes'));
  const changed = updateGuestList(edited, menu, 10, { action: 'edit', id: guests[0].id, customDishes: [], dishes: ['Rice'] }, false);
  assert.deepEqual(changed[0].customDishes, []);
  assert.deepEqual(updateGuestList(guests, menu, 10, { action: 'remove', id: guests[0].id }, false), []);
});

test('custom dishes require complete fields and a valid English course', () => {
  for (const dish of [{ ...custom, name: ' ' }, { ...custom, description: '' }, { ...custom, course: 'Bogus' }, { ...custom, name: 'x'.repeat(151) }, null]) {
    rejects(() => add([], { customDishes: [dish] }), 400);
  }
  rejects(() => add([], { customDishes: 'Mango Salad' }), 400);
  rejects(() => add([], { dishes: ['Rice'], customDishes: [{ ...custom, description: '' }] }), 400);
});

test('custom dishes cannot duplicate menu choices or another guest custom dish', () => {
  rejects(() => add([], { customDishes: [{ ...custom, name: ' rice ' }] }), 400);
  const guests = add([], { customDishes: [custom] });
  rejects(() => add(guests, { name: 'Another guest', customDishes: [{ ...custom, name: 'MANGO SALAD' }] }), 409);
  rejects(() => add([], { customDishes: [custom, custom] }), 400);
});

test('concurrent saves retry automatically, retain different guests and prevent duplicate claims', async () => {
  const { saveGuestList } = await import('../lib/guest-list.ts');
  let guests = [], version = 0, conflicts = 0;
  const store = {
    read: async () => ({ guests: structuredClone(guests), etag: String(version) }),
    write: async (next, etag) => {
      if (etag !== String(version)) { conflicts++; return false; }
      guests = next; version++; return true;
    },
  };
  const save = (name, dish) => saveGuestList(store, menu, 10, { action: 'add', name, dishes: [dish] }, false);
  await Promise.all([save('Alex', 'Rice'), save('Sam', 'Beans')]);
  assert.equal(guests.length, 2);
  assert.ok(conflicts > 0);
  const competing = await Promise.allSettled([save('Jamie', 'Cake'), save('Casey', 'Cake')]);
  assert.equal(competing.filter(r => r.status === 'fulfilled').length, 1);
  assert.equal(competing.find(r => r.status === 'rejected').reason.status, 409);
  assert.equal(guests.length, 3);
});
