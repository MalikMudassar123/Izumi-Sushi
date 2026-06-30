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
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 28% 50%, rgba(201,160,80,0.04) 0%, transparent 70%)" }}
      />

      {/* Faint Japanese watermark */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none"
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(10rem, 20vw, 20rem)",
          fontWeight: 300,
          color: "rgba(201,160,80,0.025)",
          lineHeight: 1,
          transform: "translateY(-50%) translateX(-12%)",
        }}
        aria-hidden="true"
      >
        匠
      </div>

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

            <p className="reveal delay-4" style={{ marginBottom: "2rem" }}>
              His philosophy is simple: honour the ingredient. "The fish tells you everything," he says. "My job is to listen." That philosophy — of restraint, attention, and deep respect — permeates every element of the Izumi experience.
            </p>

            {/* Pull quote */}
            <div
              className="reveal delay-5 pl-6 mb-8"
              style={{ borderLeft: "2px solid rgba(201,160,80,0.5)" }}
            >
              <p style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
                fontStyle: "italic",
                color: "var(--color-white)",
                lineHeight: 1.65,
                opacity: 0.88,
              }}>
                "The fish tells you everything. My job is to listen."
              </p>
              <span className="section-label mt-2 block" style={{ fontSize: "0.58rem", opacity: 0.6 }}>
                — Kenji Tanaka
              </span>
            </div>

            {/* Signature */}
            <div className="reveal delay-5 mb-8">
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2.4rem",
                  fontStyle: "italic",
                  color: "var(--color-gold)",
                  opacity: 0.75,
                  letterSpacing: "0.04em",
                  textShadow: "0 0 24px rgba(201,160,80,0.25)",
                }}
              >
                Kenji Tanaka
              </span>
            </div>

            {/* Awards */}
            <div className="reveal delay-6">
              <p className="section-label mb-4">Awards & Recognition</p>
              <ul className="flex flex-col">
                {awards.map((a, i) => (
                  <li
                    key={a.award}
                    className="flex items-center justify-between py-3.5 group transition-colors duration-300"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderBottomColor = "rgba(201,160,80,0.2)")}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderBottomColor = "rgba(255,255,255,0.06)")}
                  >
                    <div>
                      <p style={{ fontSize: "0.9rem", color: "var(--color-white)", fontWeight: 400, marginBottom: "0.1rem" }}>
                        {a.award}
                      </p>
                      <p style={{ fontSize: "0.72rem", color: "var(--color-gray)", letterSpacing: "0.06em" }}>
                        {a.body}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span style={{ fontFamily: "var(--font-serif)", fontSize: "0.88rem", color: "var(--color-gold)", opacity: 0.65 }}>
                        {a.year}
                      </span>
                      {i === 0 && (
                        <span style={{
                          fontSize: "0.55rem",
                          letterSpacing: "0.18em",
                          color: "var(--color-black)",
                          background: "var(--color-gold)",
                          padding: "0.2em 0.65em",
                          textTransform: "uppercase",
                          fontFamily: "var(--font-sans)",
                          fontWeight: 600,
                        }}>
                          Current
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Image column ──────────────────────────────────── */}
          <div className="reveal-right">
            <div className="relative">
              {/* Main portrait */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "3/4", boxShadow: "0 40px 90px rgba(0,0,0,0.55)" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80&auto=format&fit=crop"
                  alt="Executive Chef Kenji Tanaka"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,8,8,0.55) 0%, transparent 60%)" }} />

                {/* Overlay label */}
                <div className="absolute bottom-6 left-6">
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--color-white)", opacity: 0.9 }}>
                    Executive Chef
                  </p>
                  <p className="section-label" style={{ fontSize: "0.58rem" }}>Izumi Sushi · New York</p>
                </div>
              </div>

              {/* Floating stat card */}
              <div
                className="absolute -bottom-6 -left-6 md:-left-10 p-6 reveal delay-3 glass-card"
              >
                <p style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2.6rem",
                  fontWeight: 300,
                  color: "var(--color-gold)",
                  lineHeight: 1,
                  marginBottom: "0.3rem",
                  textShadow: "0 0 22px rgba(201,160,80,0.3)",
                }}>
                  20+
                </p>
                <span className="section-label">Years of Mastery</span>
              </div>

              {/* Gold corner */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-[var(--color-gold)] opacity-40" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
