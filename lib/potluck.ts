import type { Course, CustomDish, Guest } from "../data/menus";

export const DISH_COURSES = ["Drinks", "Appetizer", "First course", "Main course", "Side dish", "Dessert"] as const;
const COURSE_NAMES: Record<string, string> = {
  aperitivo: "Drinks", aperitivi: "Drinks", antipasto: "Appetizer", antipasti: "Appetizer",
  primo: "First course", primi: "First course", secondo: "Main course", secondi: "Main course",
  contorno: "Side dish", contorni: "Side dish", dolce: "Dessert", dolci: "Dessert",
};
export const englishCourse = (heading: string) => COURSE_NAMES[heading.trim().toLowerCase()] || heading;
export const normalizedDishName = (name: string) => name.trim().normalize("NFKC").toLocaleLowerCase("en-US");
export const customDishIsComplete = (dish: CustomDish) => !!dish.name.trim() && !!dish.description.trim() && DISH_COURSES.includes(dish.course as typeof DISH_COURSES[number]);

// Use the event's calendar date in Eastern time, including across DST changes.
export function hideUnclaimedDishes(dateISO: string, now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(now);
  const part = (type: Intl.DateTimeFormatPartTypes) => parts.find(p => p.type === type)!.value;
  const today = Date.parse(`${part("year")}-${part("month")}-${part("day")}T00:00:00Z`);
  const eventDay = Date.parse(`${dateISO.slice(0, 10)}T00:00:00Z`);
  return Number.isFinite(eventDay) && today >= eventDay - 86400000;
}

export function potluckCourses(courses: Course[], guests: Guest[], claimedOnly: boolean): Course[] {
  const claimed = new Set(guests.flatMap(g => g.dishes || []));
  const result = courses.map(c => ({ heading: englishCourse(c.heading), items: c.items.filter(item => !claimedOnly || claimed.has(item.name)) }));
  for (const dish of guests.flatMap(g => g.customDishes || [])) {
    let course = result.find(c => c.heading === englishCourse(dish.course));
    if (!course) { course = { heading: englishCourse(dish.course), items: [] }; result.push(course); }
    course.items.push({ name: dish.name, blurb: dish.description });
  }
  return result.filter(c => c.items.length > 0);
}
