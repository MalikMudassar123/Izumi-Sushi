"use client";

import { useRef } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { smoothScrollTo } from "@/lib/lenis";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 lg:py-44 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 72% 50%, rgba(201,160,80,0.05) 0%, transparent 70%)" }} />

      {/* Faint Japanese character watermark */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none select-none"
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(12rem, 22vw, 22rem)",
          fontWeight: 300,
          color: "rgba(201,160,80,0.03)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          transform: "translateY(-50%) translateX(18%)",
        }}
        aria-hidden="true"
      >
        和
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Image column ──────────────────────────────────── */}
          <div className="reveal-left order-2 lg:order-1">
            <div className="relative">
              {/* Main image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/5", boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }}>
                <img
                  src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=85&auto=format&fit=crop"
                  alt="Master chef preparing nigiri with precision"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,8,8,0.5) 0%, transparent 55%)" }} />
              </div>

              {/* Floating accent card */}
              <div
                className="absolute -bottom-8 -right-5 md:-right-10 p-6 reveal delay-3 glass-card"
                style={{ minWidth: "11rem" }}
              >
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "2.8rem", fontWeight: 300, color: "var(--color-gold)", lineHeight: 1, textShadow: "0 0 24px rgba(201,160,80,0.3)" }}>
                  2009
                </p>
                <span className="section-label mt-1 block">Est. in Kyoto</span>
              </div>

              {/* Gold corner decoration */}
              <div className="absolute -top-5 -left-5 w-28 h-28 border-t border-l border-[var(--color-gold)] opacity-40" />
            </div>
          </div>

          {/* ── Text column ───────────────────────────────────── */}
          <div className="order-1 lg:order-2 reveal-right">
            <span className="section-label reveal delay-1">Our Philosophy</span>
            <div className="gold-line reveal delay-1" />

            <h2
              id="about-heading"
              className="reveal delay-2"
              style={{ fontWeight: 300, marginBottom: "1.5rem" }}
            >
              The Art of<br />
              <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>Itamae</em>
            </h2>

            <p className="reveal delay-3" style={{ marginBottom: "1.5rem" }}>
              Izumi — meaning <em>"spring" or "fountain"</em> in Japanese — embodies our belief that great cuisine flows from respect: respect for the ingredients, for tradition, and for the guest. Our executive chef, trained under three generations of Tokyo masters, brings that ethos to every plate.
            </p>

            <p className="reveal delay-4" style={{ marginBottom: "2.5rem" }}>
              Each evening begins with a conversation. We learn your preferences, your memories, what flavours speak to you. From there, our kitchen composes a journey — course by course, season by season — that is entirely your own.
            </p>

            {/* Principles grid */}
            <div className="grid grid-cols-2 gap-4 reveal delay-5" style={{ marginBottom: "2.5rem" }}>
              {[
                { title: "Shun", desc: "Seasonal ingredients at peak perfection" },
                { title: "Ma",   desc: "The beauty found in negative space" },
                { title: "Wabi", desc: "Simplicity as the highest refinement" },
                { title: "Sabi", desc: "The elegance of imperfection" },
              ].map((p) => (
                <div
                  key={p.title}
                  className="group pl-4 py-2 transition-all duration-300 hover:pl-5"
                  style={{ borderLeft: "2px solid rgba(201,160,80,0.35)" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(201,160,80,0.75)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(201,160,80,0.35)")}
                >
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--color-gold)", marginBottom: "0.2rem", transition: "color 300ms" }}>
                    {p.title}
                  </p>
                  <p style={{ fontSize: "0.8rem", lineHeight: 1.5 }}>{p.desc}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => smoothScrollTo("#experience")}
              className="btn btn--ghost reveal delay-6"
            >
              Discover the Experience
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
