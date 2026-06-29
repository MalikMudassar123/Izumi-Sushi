"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const parallaxRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!parallaxRef.current) return;
      parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.38}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-label="Izumi Sushi — Premium Japanese Fine Dining"
    >
      {/* ── Background + parallax ──────────────────────────────────── */}
      <div ref={parallaxRef} className="absolute inset-0 will-change-transform" style={{ inset: "-10% 0 0 0" }}>
        <img
          src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1920&q=85&auto=format&fit=crop"
          alt="Elegant sushi platter"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        {/* Base vertical gradient — anchors top nav + bottom transition */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(8,8,8,0.70) 0%, rgba(8,8,8,0.45) 38%, rgba(8,8,8,0.72) 78%, rgba(8,8,8,0.98) 100%)" }} />
        {/* Overall tint to deepen bright spots (wood / mat) */}
        <div className="absolute inset-0" style={{ background: "rgba(8,8,8,0.30)" }} />
        {/* Focused radial scrim behind the headline for crisp legibility */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 55% at 50% 52%, rgba(8,8,8,0.72) 0%, rgba(8,8,8,0.35) 45%, transparent 75%)" }} />
      </div>

      {/* ── Decorative corner frames ────────────────────────────────── */}
      <div className="absolute top-28 left-8 md:left-14 w-14 h-14 border-t border-l border-[var(--color-gold)] opacity-35" />
      <div className="absolute top-28 right-8 md:right-14 w-14 h-14 border-t border-r border-[var(--color-gold)] opacity-35" />
      <div className="absolute bottom-14 left-8 md:left-14 w-14 h-14 border-b border-l border-[var(--color-gold)] opacity-35" />
      <div className="absolute bottom-14 right-8 md:right-14 w-14 h-14 border-b border-r border-[var(--color-gold)] opacity-35" />

      {/* ── Main content ────────────────────────────────────────────── */}
      <div className="relative flex flex-col items-center justify-center flex-1 text-center px-6 pt-36 pb-28">

        {/* Eyebrow label */}
        <div
          className="hero-eyebrow animate-fade-in-up"
          style={{ animationDelay: "150ms", marginBottom: "2rem" }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "var(--color-white-muted)",
              textShadow: "0 1px 12px rgba(8,8,8,0.7)",
            }}
          >
            Japanese Fine Dining
          </span>
        </div>

        {/* ── SPLIT HEADLINE — solid + ghost ─────────────────────── */}
        {/*
          Inspired by restaurantgem.com: first word is solid white,
          second word is outline / ghost text in gold stroke.
        */}
        <h1
          className="animate-fade-in-up"
          style={{
            animationDelay: "320ms",
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: "-0.01em",
            marginBottom: "2rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "baseline",
            justifyContent: "center",
            gap: "0 0.25em",
          }}
        >
          {/* Solid word */}
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3.5rem, 9vw, 8rem)",
              color: "var(--color-white)",
              display: "inline-block",
              textShadow: "0 2px 30px rgba(8,8,8,0.55), 0 1px 6px rgba(8,8,8,0.5)",
            }}
          >
            Izumi
          </span>
          {/* Ghost / outline word */}
          <span
            className="hero-ghost-text"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3.5rem, 9vw, 8rem)",
              display: "inline-block",
            }}
          >
            Sushi
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="animate-fade-in-up max-w-md mx-auto"
          style={{
            animationDelay: "500ms",
            fontSize: "clamp(0.85rem, 1.3vw, 1rem)",
            letterSpacing: "0.04em",
            lineHeight: 1.75,
            color: "var(--color-white)",
            opacity: 0.92,
            textShadow: "0 1px 14px rgba(8,8,8,0.8)",
            marginBottom: "2.5rem",
          }}
        >
          Where precision meets poetry. An intimate omakase experience rooted in centuries of Japanese culinary tradition.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "660ms" }}
        >
          <button onClick={() => go("#reservations")} className="btn btn--primary">
            <span>Reserve Your Table</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button onClick={() => go("#menu")} className="btn btn--outline">
            <span>View Menu</span>
          </button>
        </div>

        {/* Stats */}
        <div
          className="flex items-center mt-16 animate-fade-in-up"
          style={{ animationDelay: "820ms" }}
        >
          {[
            { value: "15+", label: "Years of Craft" },
            { value: "18",  label: "Course Omakase" },
            { value: "3",   label: "Michelin Stars" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center px-8 md:px-12"
              style={{ borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.12)" : "none" }}
            >
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 300, color: "var(--color-gold)", lineHeight: 1 }}>
                {stat.value}
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-white-muted)", marginTop: "0.3rem" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* ── Scroll indicator ────────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.58rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--color-white-muted)" }}>
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[var(--color-gold)] to-transparent animate-scroll-line" />
      </div>

      {/* ── Keyframes ───────────────────────────────────────────────── */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 0.85s var(--ease-out-expo) both;
        }
        @keyframes scroll-line {
          0%, 100% { transform: scaleY(1); opacity: 0.5; }
          50%       { transform: scaleY(0.45); opacity: 0.15; }
        }
        .animate-scroll-line {
          animation: scroll-line 2.2s ease-in-out infinite;
        }

        /* Ghost / outline heading word — subtle gold fill + stroke keeps it
           legible over bright areas of the background image */
        .hero-ghost-text {
          color: rgba(201, 160, 80, 0.18);
          -webkit-text-stroke: 1.5px var(--color-gold);
          paint-order: stroke fill;
          filter: drop-shadow(0 2px 16px rgba(8,8,8,0.65));
        }

        @media (max-width: 640px) {
          .hero-ghost-text { -webkit-text-stroke-width: 1px; }
        }
      `}</style>
    </section>
  );
}
