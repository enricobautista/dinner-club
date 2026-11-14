import type { Course, Guest } from "@/data/menus";

type Props = {
  courses: Course[];
  guests: Guest[];
  selected: string[];
  onChange: (dishes: string[]) => void;
  editingId?: string | null;
};

export default function DishChecklist({ courses, guests, selected, onChange, editingId }: Props) {
  const claims = new Map(guests.filter(g => !editingId || g.id !== editingId)
    .flatMap(g => (g.dishes || []).map(dish => [dish, g.name] as const)));
  return (
    <fieldset className="dish-checklist">
      <legend className="smallcaps">Choose your dishes (required)</legend>
      <p className="dish-help">Select at least one. Checked, locked dishes are already claimed.</p>
      {courses.map(course => (
        <div key={course.heading} className="dish-course">
          <h3 className="smallcaps">{course.heading}</h3>
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
    </fieldset>
  );
}
