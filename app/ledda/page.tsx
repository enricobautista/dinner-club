"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { Recipe } from "@/data/ledda_recipes";

function groupBy<T extends Record<string, unknown>>(arr: T[], key: keyof T) {
  return arr.reduce((acc, item) => {
    const k = String(item[key] ?? "");
    (acc[k] ||= []).push(item);
    return acc;
  }, {} as Record<string, T[]>);
}

const STORAGE_KEY = "ledda_token";

export default function LeddaRecipes() {
  const [tokenInput, setTokenInput] = useState("");
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
  const [status, setStatus] = useState<"locked" | "loading" | "ready">("locked");
  const [error, setError] = useState<string | null>(null);

  const loadRecipes = async (token: string) => {
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/ledda/recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
        body: JSON.stringify({ token }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || "Unauthorized.");
      }
      setRecipes(data.recipes || []);
      setStatus("ready");
      setError(null);
      setTokenInput(token);
      if (typeof window !== "undefined") window.sessionStorage.setItem(STORAGE_KEY, token);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to unlock.";
      setStatus("locked");
      setError(message);
      if (typeof window !== "undefined") window.sessionStorage.removeItem(STORAGE_KEY);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.sessionStorage.getItem(STORAGE_KEY);
    if (saved) {
      setTokenInput(saved);
      loadRecipes(saved);
    }
  }, []);

  const ordered = useMemo(() => {
    if (!recipes) return [];
    const byCourse = groupBy(recipes, "course");
    const courseOrder = ["Aperitivo", "Antipasto", "Antipasti", "Primo", "Primi", "Contorni", "Secondo", "Secondi", "Dolce"];
    const norm = (s: string) => String(s || "").trim();
    const orderedCourses = Object.keys(byCourse).sort((a, b) => {
      const ia = courseOrder.indexOf(norm(a));
      const ib = courseOrder.indexOf(norm(b));
      return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
    });
    return orderedCourses.map(course => {
      const group = byCourse[course];
      const byType = groupBy(group, "type");
      const types = Object.keys(byType).sort();
      return { course, types, byType };
    });
  }, [recipes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tokenInput.trim()) {
      setError("Enter the password.");
      return;
    }
    loadRecipes(tokenInput.trim());
  };

  if (status !== "ready" || !recipes) {
    return (
      <section
        className="menu centered"
        aria-label="Protected recipes"
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
          <p style={{ opacity:.8, marginTop: 0 }}>Enter the password to view.</p>
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
    <section className="menu centered" aria-label="Family recipe repository">
      <h2 className="smallcaps" style={{ marginBottom: ".25rem" }}>Family Recipes</h2>
      <p style={{ opacity:.85, marginBottom: ".5rem" }}>Browse by course and type</p>
      <div className="hair" aria-hidden />

      {ordered.map(({ course, types, byType }, i) => (
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
                      <Link href={`/ledda/${r.slug}`} style={{ color: "inherit" }}>
                        {r.title}
                      </Link>
                      {r.blurb ? <span style={{ opacity:.8 }}> – {r.blurb}</span> : null}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
          {i < ordered.length - 1 && <div className="hair" aria-hidden />}
        </section>
      ))}
    </section>
  );
}
