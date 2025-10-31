"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { getRecipe } from "@/data/recipes";

export default function RecipePage() {
  const params = useParams<{ slug: string | string[] }>();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const recipe = getRecipe(slug);
  const [crossed, setCrossed] = useState<Set<number>>(new Set());
  if (!recipe) {
    return <p className="centered">Recipe not found.</p>;
  }
  const toggle = (idx: number) => {
    setCrossed(prev => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx); else next.add(idx);
      return next;
    });
  };
  return (
    <article className="menu centered" aria-label={recipe.title}>
      <h2 className="smallcaps">{recipe.title}</h2>
      {recipe.blurb ? <p style={{ opacity:.8 }}>{recipe.blurb}</p> : null}
      <div style={{ textAlign: "left" }}>
        <div className="hair" aria-hidden />
        <section className="course">
          <h2 className="smallcaps">Ingredients</h2>
          <ul>
            {recipe.ingredients.map((i, idx) => (
              <li
                key={idx}
                onClick={() => toggle(idx)}
                style={{ cursor:"pointer", userSelect:"none", textDecoration: crossed.has(idx)?"line-through":"none", opacity: crossed.has(idx)? .6: 1 }}
              >
                {i}
              </li>
            ))}
          </ul>
        </section>
        <div className="hair" aria-hidden />
        <section className="course">
          <h2 className="smallcaps">Steps</h2>
          <ul style={{ margin: 0, paddingLeft: 0, listStyle: "disc inside" }}>
            {recipe.steps.map((s, idx) => <li key={idx} style={{ margin: ".25rem 0" }}>{s}</li>)}
          </ul>
        </section>
      </div>
    </article>
  );
}
