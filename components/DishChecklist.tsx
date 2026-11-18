import type { Course, Guest } from "@/data/menus";
import { englishCourse } from "@/lib/potluck";

type Props = {
  courses: Course[];
  guests: Guest[];
  selected: string[];
  onChange: (dishes: string[]) => void;
  editingId?: string | null;
};

export default function DishChecklist({ courses, guests, selected, onChange, editingId }: Props) {
  const otherGuests = guests.filter(g => !editingId || g.id !== editingId);
  const customClaims = otherGuests.flatMap(g => (g.customDishes || []).map(d => ({ ...d, owner: g.name })));
  const claims = new Map(otherGuests
    .flatMap(g => (g.dishes || []).map(dish => [dish, g.name] as const)));
  return (
    <fieldset className="dish-checklist">
      <legend className="smallcaps">Choose your dishes</legend>
      <p className="dish-help">Select a menu dish here or add your own using the button above. Checked, locked dishes are already claimed.</p>
      {courses.map(course => (
        <div key={course.heading} className="dish-course">
          <h3 className="smallcaps">{englishCourse(course.heading)}</h3>
          {course.items.map(item => {
            const owner = claims.get(item.name);
            return (
              <label key={item.name} className={`dish-option${owner ? " is-claimed" : ""}`}>
                <input type="checkbox" className="guest-checkbox" checked={!!owner || selected.includes(item.name)}
                  disabled={!!owner}
                  onChange={e => onChange(e.target.checked ? [...selected, item.name] : selected.filter(d => d !== item.name))} />
                <span>{item.name}{owner ? <span className="dish-owner"> — Locked · {owner}</span> : null}</span>
              </label>
            );
          })}
        </div>
      ))}
      {customClaims.length ? <div className="dish-course">
        <h3 className="smallcaps">Guests’ own dishes</h3>
        {customClaims.map((dish, i) => <label className="dish-option is-claimed" key={i}>
          <input type="checkbox" className="guest-checkbox" checked disabled />
          <span>{dish.name}<span className="dish-owner"> — Locked · {dish.owner} · {englishCourse(dish.course)}</span><br />{dish.description}</span>
        </label>)}
      </div> : null}
    </fieldset>
  );
}
