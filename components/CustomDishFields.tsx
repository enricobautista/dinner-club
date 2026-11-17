import type { CustomDish } from "@/data/menus";
import { DISH_COURSES } from "@/lib/potluck";

type Props = { dishes: CustomDish[]; onChange: (dishes: CustomDish[]) => void };
export default function CustomDishFields({ dishes, onChange }: Props) {
  function update(index: number, field: keyof CustomDish, value: string) {
    onChange(dishes.map((dish, i) => i === index ? { ...dish, [field]: value } : dish));
  }
  return (
    <div className="custom-dish-fields">
      {dishes.map((dish, index) => (
        <fieldset className="dish-checklist" key={index}>
          <legend className="smallcaps">Your own dish {index + 1}</legend>
          <p className="dish-help">All three fields are required.</p>
          <label>Dish name<input className="guest-input underline" value={dish.name} maxLength={150} onChange={e => update(index, "name", e.target.value)} required /></label>
          <label>Description<textarea className="guest-input underline" value={dish.description} maxLength={1000} onChange={e => update(index, "description", e.target.value)} required rows={2} /></label>
          <label>Course<select className="guest-input underline" value={dish.course} onChange={e => update(index, "course", e.target.value)} required>
            <option value="">Choose a course</option>
            {DISH_COURSES.map(course => <option key={course}>{course}</option>)}
          </select></label>
          <button className="guest-btn ghost" type="button" onClick={() => onChange(dishes.filter((_, i) => i !== index))}>Remove this dish</button>
        </fieldset>
      ))}
      <button className="guest-btn ghost" type="button" disabled={dishes.length >= 20} onClick={() => onChange([...dishes, { name: "", description: "", course: "" }])}>Add a dish not on the menu</button>
    </div>
  );
}
