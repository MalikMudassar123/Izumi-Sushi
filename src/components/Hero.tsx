"use client";

import { useEffect, useRef } from "react";
import useMagnetic from "@/hooks/useMagnetic";
import { smoothScrollTo } from "@/lib/lenis";

const IZUMI = "Izumi".split("");
const SUSHI = "Sushi".split("");

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const parallaxRef  = useRef<HTMLDivElement>(null);
  const primaryCtaRef = useRef<HTMLButtonElement>(null);
  const outlineCtaRef = useRef<HTMLButtonElement>(null);
  useMagnetic(primaryCtaRef);
  useMagnetic(outlineCtaRef);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (parallaxRef.current) {
          parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.38}px)`;
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => smoothScrollTo(href);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-label="Izumi Sushi — Premium Japanese Fine Dining"
    >
      {/* ── Background + parallax ──────────────────────────────────── */}
      <div ref={parallaxRef} className="absolute will-change-transform" style={{ inset: "-10% 0 0 0" }}>
        <img
          src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1920&q=85&auto=format&fit=crop"
          alt="Elegant sushi platter"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        {/* Layered overlays for depth */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(8,8,8,0.72) 0%, rgba(8,8,8,0.42) 38%, rgba(8,8,8,0.75) 78%, rgba(8,8,8,0.99) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "rgba(8,8,8,0.28)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 68% 52% at 50% 52%, rgba(8,8,8,0.70) 0%, rgba(8,8,8,0.30) 45%, transparent 75%)" }} />
        {/* Warm gold ambient glow behind headline */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 40% 35% at 50% 48%, rgba(201,160,80,0.06) 0%, transparent 65%)" }} />
      </div>

      {/* ── Slow-spinning decorative rings ──────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          width: "clamp(340px, 55vw, 650px)",
          height: "clamp(340px, 55vw, 650px)",
          top: "50%",
          left: "50%",
          borderRadius: "50%",
          border: "1px solid rgba(201,160,80,0.09)",
          animation: "spin-slow 80s linear infinite",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          width: "clamp(480px, 76vw, 900px)",
          height: "clamp(480px, 76vw, 900px)",
          top: "50%",
          left: "50%",
          borderRadius: "50%",
          border: "1px solid rgba(201,160,80,0.045)",
          animation: "spin-slow-reverse 120s linear infinite",
        }}
      />

      {/* ── Corner frames ────────────────────────────────────────────── */}
      <div className="absolute top-28 left-8 md:left-14 w-14 h-14 border-t border-l border-[var(--color-gold)] opacity-35" />
      <div className="absolute top-28 right-8 md:right-14 w-14 h-14 border-t border-r border-[var(--color-gold)] opacity-35" />
      <div className="absolute bottom-14 left-8 md:left-14 w-14 h-14 border-b border-l border-[var(--color-gold)] opacity-35" />
      <div className="absolute bottom-14 right-8 md:right-14 w-14 h-14 border-b border-r border-[var(--color-gold)] opacity-35" />

      {/* ── Main content ────────────────────────────────────────────── */}
      <div className="relative flex flex-col items-center justify-center flex-1 text-center px-6 pt-36 pb-28">

        {/* Michelin badge */}
        <div
          className="michelin-badge hero-fade-in mb-7"
          style={{ animationDelay: "60ms" }}
        >
          <span style={{ color: "var(--color-gold)", fontSize: "0.8rem", letterSpacing: "0.1em" }}>★★★</span>
          <span>Three Michelin Stars · Est. 2009</span>
        </div>

        {/* Eyebrow */}
        <div className="hero-fade-in mb-6" style={{ animationDelay: "200ms" }}>
          <span style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.65rem",
            fontWeight: 500,
            letterSpacing: "0.38em",
            textTransform: "uppercase",
            color: "var(--color-white-muted)",
            textShadow: "0 1px 12px rgba(8,8,8,0.8)",
          }}>
            Japanese Fine Dining · West Village, New York
          </span>
        </div>

        {/* ── Headline — character-by-character entrance ─────────── */}
        <h1
          style={{
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: "-0.015em",
            marginBottom: "2.2rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "baseline",
            justifyContent: "center",
            gap: "0 0.18em",
          }}
        >
          {/* "Izumi" — solid white, char by char */}
          <span style={{ display: "inline-flex" }}>
            {IZUMI.map((ch, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(3.5rem, 9vw, 8rem)",
                  color: "var(--color-white)",
                  display: "inline-block",
                  textShadow: "0 2px 28px rgba(8,8,8,0.6)",
                  opacity: 0,
                  animation: `char-in 0.75s var(--ease-out-expo) ${380 + i * 60}ms forwards`,
                }}
              >
                {ch}
              </span>
            ))}
          </span>

          {/* "Sushi" — ghost/outline, char by char */}
          <span style={{ display: "inline-flex" }}>
            {SUSHI.map((ch, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(3.5rem, 9vw, 8rem)",
                  display: "inline-block",
                  color: "rgba(201,160,80,0.12)",
                  WebkitTextStroke: "1.5px var(--color-gold)",
                  paintOrder: "stroke fill",
                  filter: "drop-shadow(0 2px 18px rgba(8,8,8,0.7))",
                  opacity: 0,
                  animation: `char-in 0.75s var(--ease-out-expo) ${380 + (IZUMI.length + i) * 60}ms forwards`,
                }}
              >
                {ch}
              </span>
            ))}
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="hero-fade-in max-w-md mx-auto"
          style={{
            animationDelay: "920ms",
            fontSize: "clamp(0.85rem, 1.3vw, 1rem)",
            letterSpacing: "0.05em",
            lineHeight: 1.78,
            color: "var(--color-white)",
            opacity: 0.88,
            textShadow: "0 1px 14px rgba(8,8,8,0.8)",
            marginBottom: "2.6rem",
          }}
        >
          Where precision meets poetry. An intimate omakase experience rooted in centuries of Japanese culinary tradition.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 hero-fade-in"
          style={{ animationDelay: "1070ms" }}
        >
          <button ref={primaryCtaRef} onClick={() => go("#reservations")} className="btn btn--primary">
            <span>Reserve Your Table</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button ref={outlineCtaRef} onClick={() => go("#menu")} className="btn btn--outline">
            <span>Explore Menu</span>
          </button>
        </div>

        {/* Stats */}
        <div
          className="flex items-center mt-16 hero-fade-in"
          style={{ animationDelay: "1220ms" }}
        >
          {[
            { value: "15+", label: "Years of Craft" },
            { value: "18",  label: "Course Omakase" },
            { value: "3",   label: "Michelin Stars" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center px-8 md:px-12"
              style={{ borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none" }}
            >
              <p style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
                fontWeight: 300,
                color: "var(--color-gold)",
                lineHeight: 1,
                textShadow: "0 0 28px rgba(201,160,80,0.32)",
              }}>
                {stat.value}
              </p>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-white-muted)",
                marginTop: "0.35rem",
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator — mouse + line ─────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 hero-fade-in" style={{ animationDelay: "1400ms" }}>
        <svg
          width="22"
          height="34"
          viewBox="0 0 22 34"
          fill="none"
          aria-hidden="true"
          style={{ opacity: 0.45 }}
        >
          <rect x="1" y="1" width="20" height="32" rx="10" stroke="var(--color-gold)" strokeWidth="1" />
          <rect x="10" y="7" width="2" height="8" rx="1" fill="var(--color-gold)" className="scroll-wheel-dot" />
        </svg>
        <span style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.55rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--color-white-muted)",
          opacity: 0.45,
        }}>
          Scroll
        </span>
      </div>

      {/* ── Keyframes scoped to Hero ─────────────────────────────────── */}
      <style>{`
        .hero-fade-in {
          opacity: 0;
          animation: fade-up-in 0.9s var(--ease-out-expo) both;
        }
        @keyframes scroll-wheel {
          0%, 100% { transform: translateY(0);  opacity: 1; }
          60%       { transform: translateY(6px); opacity: 0.2; }
        }
        .scroll-wheel-dot {
          animation: scroll-wheel 2.2s ease-in-out infinite;
        }
        @media (max-width: 640px) {
          .hero-ghost-char { -webkit-text-stroke-width: 1px; }
        }
      `}</style>
    </section>
  );
}
