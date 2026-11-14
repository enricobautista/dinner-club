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
