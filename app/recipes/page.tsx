import Link from "next/link";
import { recipes } from "@/data/recipes";

function groupBy<T extends Record<string, any>>(arr: T[], key: keyof T) {
  return arr.reduce((acc, item) => {
    const k = String(item[key]);
    (acc[k] ||= []).push(item);
    return acc;
  }, {} as Record<string, T[]>);
}

export default function RecipesIndex() {
  const byCourse = groupBy(recipes, "course");
  const courseOrder = ["Aperitivo", "Antipasti", "Primo", "Secondo", "Dolce"];
  const orderedCourses = Object.keys(byCourse).sort((a, b) => {
    const ia = courseOrder.indexOf(a);
    const ib = courseOrder.indexOf(b);
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
  });

  return (
    <section className="menu centered" aria-label="Recipe repository">
      <h2 className="smallcaps" style={{ marginBottom: ".25rem" }}>Recipes</h2>
      <p style={{ opacity:.85, marginBottom: ".5rem" }}>Browse by course and type</p>
      <div className="hair" aria-hidden />

      {orderedCourses.map((course, i) => {
        const group = byCourse[course];
        const byType = groupBy(group, "type");
        const types = Object.keys(byType).sort();
        return (
          <section key={course} className="course" aria-labelledby={course}>
            <h2 className="smallcaps">{course}</h2>
            {types.map(t => (
              <div key={t} style={{ marginBottom: ".35rem" }}>
                <p className="smallcaps" style={{ opacity:.75 }}>{t}</p>
                <ul>
                  {byType[t]
                    .slice()
                    .sort((a,b)=>a.title.localeCompare(b.title))
                    .map(r => (
                      <li key={r.slug}>
                        <Link href={`/recipes/${r.slug}`} style={{ textDecoration: "none", color: "inherit"}}>
                          {r.title}
                        </Link>
                        {r.blurb ? <span style={{ opacity:.8 }}> – {r.blurb}</span> : null}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
            {i < orderedCourses.length - 1 && <div className="hair" aria-hidden />}
          </section>
        );
      })}
    </section>
  );
}
