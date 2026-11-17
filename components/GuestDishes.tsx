import type { Guest } from "@/data/menus";
import { englishCourse } from "@/lib/potluck";

export default function GuestDishes({ guest }: { guest: Pick<Guest, "dishes" | "customDishes"> }) {
  return <>
    {guest.dishes?.length ? <p className="guest-dishes">Bringing: {guest.dishes.join(", ")}</p> : null}
    {guest.customDishes?.map((dish, i) => <p className="guest-dishes" key={i}>Bringing: {dish.name} · {englishCourse(dish.course)} — {dish.description}</p>)}
  </>;
}
