"use client";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { getRecipe } from "@/data/recipes";

type UnlockStatus = "checking" | "locked" | "unlocked";

export default function RecipePage() {
  const params = useParams<{ slug: string | string[] }>();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const recipe = useMemo(() => getRecipe(slug), [slug]);
  const [crossed, setCrossed] = useState<Set<number>>(new Set());
  const [status, setStatus] = useState<UnlockStatus>(recipe?.requiresToken ? "checking" : "unlocked");
  const [error, setError] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    let cancelled = false;
    if (!recipe?.requiresToken) return;
    const check = async () => {
      setStatus("checking");
      try {
        const res = await fetch("/api/recipe-auth", { method: "GET", credentials: "include" });
        const data = await res.json();
        if (cancelled) return;
        setStatus(data?.authorized ? "unlocked" : "locked");
      } catch {
        if (cancelled) return;
        setStatus("locked");
      }
    };
    check();
    return () => { cancelled = true; };
  }, [recipe?.requiresToken]);

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

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!password.trim()) {
      setError("Enter a password.");
      return;
    }
    setError("");
    setStatus("checking");
    try {
      const res = await fetch("/api/recipe-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (res.ok && data?.authorized) {
        setStatus("unlocked");
        setPassword("");
      } else {
        setStatus("locked");
        setError(data?.error || "Incorrect password.");
      }
    } catch {
      setStatus("locked");
      setError("Unable to verify password right now.");
    }
  };

  if (recipe.requiresToken && status !== "unlocked") {
    return (
      <article className="menu centered" aria-label={recipe.title}>
        <h2 className="smallcaps">{recipe.title}</h2>
        <p style={{ opacity:.8 }}>{recipe.blurb || "This recipe is protected."}</p>
        <div className="hair" aria-hidden />
        <form onSubmit={onSubmit} style={{ display: "grid", gap: ".5rem", maxWidth: 320, margin: "0 auto" }}>
          <label className="smallcaps" htmlFor="recipe-password">Enter recipe password</label>
          <input
            id="recipe-password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="current-password"
            placeholder="Recipe password"
            className="guest-input underline"
            disabled={status === "checking"}
          />
          <button
            type="submit"
            disabled={status === "checking"}
            className="guest-btn primary"
            style={{ width: "100%" }}
          >
            {status === "checking" ? "Checking..." : "Unlock recipe"}
          </button>
          {error ? <p style={{ color: "#b00020", margin: 0 }}>{error}</p> : null}
        </form>
      </article>
    );
  }

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
