"use client";

import { useRef } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

const awards = [
  { year: "2024", award: "Three Michelin Stars", body: "Michelin Guide" },
  { year: "2023", award: "Best Asian Restaurant", body: "World Restaurant Awards" },
  { year: "2022", award: "Chef of the Year", body: "James Beard Foundation" },
  { year: "2019", award: "One to Watch", body: "Asia's 50 Best" },
];

export default function Chef() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="chef"
      className="relative py-32 lg:py-44 overflow-hidden"
      aria-labelledby="chef-heading"
    >
      {/* Background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(201,160,80,0.04) 0%, transparent 70%)" }}
      />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* ── Text column ───────────────────────────────────── */}
          <div>
            <span className="section-label reveal">The Chef</span>
            <div className="gold-line reveal delay-1" />
            <h2
              id="chef-heading"
              className="reveal delay-2"
              style={{ fontWeight: 300, marginBottom: "1.5rem" }}
            >
              Kenji<br />
              <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>Tanaka</em>
            </h2>

            <p className="reveal delay-3" style={{ marginBottom: "1.25rem" }}>
              Born in Osaka, trained in the kitchens of Tokyo's most celebrated sushi masters, Chef Kenji Tanaka brings over two decades of obsessive craftsmanship to Izumi. At 19 he moved to Japan's legendary Tsukiji market; by 30, he had earned his first Michelin star.
            </p>

            <p className="reveal delay-4" style={{ marginBottom: "2.5rem" }}>
              His philosophy is simple: honour the ingredient. "The fish tells you everything," he says. "My job is to listen." That philosophy — of restraint, attention, and deep respect — permeates every element of the Izumi experience.
            </p>

            {/* Signature */}
            <div className="reveal delay-5 mb-8">
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2.2rem",
                  fontStyle: "italic",
                  color: "var(--color-gold)",
                  opacity: 0.8,
                  letterSpacing: "0.04em",
                }}
              >
                Kenji Tanaka
              </span>
            </div>

            {/* Awards */}
            <div className="reveal delay-6">
              <p className="section-label mb-4">Awards & Recognition</p>
              <ul className="flex flex-col gap-3">
                {awards.map((a) => (
                  <li
                    key={a.award}
                    className="flex items-center justify-between py-3"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <div>
                      <p style={{ fontSize: "0.9rem", color: "var(--color-white)", fontWeight: 400 }}>
                        {a.award}
                      </p>
                      <p style={{ fontSize: "0.75rem", color: "var(--color-gray)", letterSpacing: "0.05em" }}>
                        {a.body}
                      </p>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "0.9rem",
                        color: "var(--color-gold)",
                        opacity: 0.7,
                      }}
                    >
                      {a.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Image column ──────────────────────────────────── */}
          <div className="reveal-right">
            <div className="relative">
              {/* Main portrait */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80&auto=format&fit=crop"
                  alt="Executive Chef Kenji Tanaka"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(8,8,8,0.5) 0%, transparent 60%)" }}
                />
              </div>

              {/* Floating stat */}
              <div
                className="absolute -bottom-6 -left-6 md:-left-10 p-6 reveal delay-3"
                style={{ background: "var(--color-black-card)", border: "1px solid rgba(201,160,80,0.25)" }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2.5rem",
                    fontWeight: 300,
                    color: "var(--color-gold)",
                    lineHeight: 1,
                    marginBottom: "0.25rem",
                  }}
                >
                  20+
                </p>
                <span className="section-label">Years of Mastery</span>
              </div>

              {/* Gold border */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-[var(--color-gold)] opacity-40" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
