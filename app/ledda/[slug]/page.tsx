"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import type { Recipe } from "@/data/ledda_recipes";

type Status = "locked" | "loading" | "ready" | "not-found";
const STORAGE_KEY = "ledda_token";

export default function LeddaRecipePage() {
  const params = useParams<{ slug: string | string[] }>();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const [tokenInput, setTokenInput] = useState("");
  const [status, setStatus] = useState<Status>("locked");
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [crossed, setCrossed] = useState<Set<number>>(new Set());

  const loadRecipe = async (token: string) => {
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/ledda/recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
        body: JSON.stringify({ token }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Unauthorized.");
      const found = (data.recipes as Recipe[] | undefined)?.find(r => r.slug === slug);
      if (!found) {
        setStatus("not-found");
        setRecipe(null);
        if (typeof window !== "undefined") window.sessionStorage.removeItem(STORAGE_KEY);
        return;
      }
      setRecipe(found);
      setStatus("ready");
      setTokenInput(token);
      if (typeof window !== "undefined") window.sessionStorage.setItem(STORAGE_KEY, token);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to unlock.";
      setStatus("locked");
      setError(message);
      setRecipe(null);
      if (typeof window !== "undefined") window.sessionStorage.removeItem(STORAGE_KEY);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.sessionStorage.getItem(STORAGE_KEY);
    if (saved) {
      setTokenInput(saved);
      loadRecipe(saved);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tokenInput.trim()) {
      setError("Enter the password.");
      return;
    }
    loadRecipe(tokenInput.trim());
  };

  const toggle = (idx: number) => {
    setCrossed(prev => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx); else next.add(idx);
      return next;
    });
  };

  if (status === "not-found") {
    return <p className="centered">Recipe not found.</p>;
  }

  if (status !== "ready" || !recipe) {
    return (
      <section
        className="menu centered"
        aria-label="Protected recipe"
        style={{
          maxWidth: 520,
          width: "100%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div style={{ display: "grid", gap: ".5rem", justifyItems: "center", width: "100%" }}>
          <h2 className="smallcaps" style={{ marginBottom: ".35rem" }}>Family Recipes</h2>
          <p style={{ opacity:.8, marginTop: 0 }}>Enter the password to view this recipe.</p>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "grid",
              gap: ".5rem",
              width: "min(320px, 100%)",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <label className="smallcaps" htmlFor="ledda-password" style={{ justifySelf: "center", width: "100%" }}>Password</label>
            <input
              id="ledda-password"
              type="password"
              value={tokenInput}
              onChange={e => setTokenInput(e.target.value)}
              className="guest-input underline"
              autoComplete="current-password"
              placeholder="Enter password"
              disabled={status === "loading"}
              style={{ textAlign: "center", width: "100%" }}
            />
            <button type="submit" className="guest-btn primary" disabled={status === "loading"} style={{ width: "100%" }}>
              {status === "loading" ? "Checking..." : "Unlock"}
            </button>
            {error ? <p style={{ color: "#b00020", margin: 0 }}>{error}</p> : null}
          </form>
        </div>
      </section>
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
