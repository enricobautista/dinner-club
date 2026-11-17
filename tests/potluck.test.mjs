import test from 'node:test';
import assert from 'node:assert/strict';
import { englishCourse, hideUnclaimedDishes, potluckCourses } from '../lib/potluck.ts';
const courses = [{ heading: 'Antipasti', items: [{ name: 'Salad' }, { name: 'Soup' }] }, { heading: 'Dolce', items: [{ name: 'Cake' }] }];
const guests = [{ name: 'Alex', dishes: ['Salad'], customDishes: [{ name: 'Brownies', description: 'Chocolate and walnuts.', course: 'Dessert' }] }];

test('Italian course names have clear English labels', () => {
  assert.equal(englishCourse('Antipasto'), 'Appetizer');
  assert.equal(englishCourse('Secondi'), 'Main course');
  assert.equal(englishCourse('Contorni'), 'Side dish');
  assert.equal(englishCourse('Dolci'), 'Dessert');
  assert.equal(englishCourse('Other'), 'Other');
});

test('cutoff begins at midnight Eastern the day before and remains active after the event', () => {
  assert.equal(hideUnclaimedDishes('2026-12-06', new Date('2026-12-05T04:59:59Z')), false);
  assert.equal(hideUnclaimedDishes('2026-12-06', new Date('2026-12-05T05:00:00Z')), true);
  assert.equal(hideUnclaimedDishes('2026-12-06', new Date('2026-12-06T17:00:00Z')), true);
  assert.equal(hideUnclaimedDishes('2026-12-06', new Date('2026-12-07T17:00:00Z')), true);
  assert.equal(hideUnclaimedDishes('2026-11-02', new Date('2026-11-01T04:00:00Z')), true);
});

test('visible menu includes custom dishes and filters unclaimed choices without altering signup options', () => {
  assert.deepEqual(potluckCourses(courses, guests, false).flatMap(c => c.items.map(i => i.name)), ['Salad', 'Soup', 'Cake', 'Brownies']);
  const filtered = potluckCourses(courses, guests, true);
  assert.deepEqual(filtered.flatMap(c => c.items.map(i => i.name)), ['Salad', 'Brownies']);
  assert.equal(filtered[1].items[0].blurb, 'Chocolate and walnuts.');
  assert.equal(filtered[1].heading, 'Dessert');
  assert.equal(courses[0].items.length, 2);
  assert.equal(courses[1].items[0].name, 'Cake');
  assert.deepEqual(potluckCourses(courses, [], true), []);
});

test('late claims appear immediately and removing a guest removes their visible dishes', () => {
  const late = [...guests, { name: 'Sam', dishes: ['Soup'] }];
  assert.ok(potluckCourses(courses, late, true).flatMap(c => c.items).some(i => i.name === 'Soup'));
  assert.deepEqual(potluckCourses(courses, late.slice(1), true).flatMap(c => c.items.map(i => i.name)), ['Soup']);
});
