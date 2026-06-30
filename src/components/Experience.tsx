"use client";

import { useRef, useEffect } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

const pillars = [
  {
    title: "Sake Pairing",
    desc: "Over 80 curated sake labels, from crisp junmai to aged koshu. Our sommeliers compose a pairing that evolves with each course.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8 2h8l1 7H7L8 2z" />
        <path d="M7 9c0 5 2 8 5 10 3-2 5-5 5-10" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="9" y1="22" x2="15" y2="22" />
      </svg>
    ),
  },
  {
    title: "Seasonal Menu",
    desc: "Our menu is rewritten with each season — spring's delicate sweetness, winter's profound umami. Nothing frozen, everything fresh.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Private Dining",
    desc: "Two intimate private rooms for up to 8 guests. Ideal for celebrations, proposals, and conversations that deserve silence.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  useScrollReveal(sectionRef);

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = -rect.top / (rect.height + window.innerHeight);
      bgRef.current.style.transform = `translateY(${progress * 80}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden"
      aria-labelledby="experience-heading"
    >
      {/* Parallax background */}
      <div ref={bgRef} className="absolute inset-[-10%] will-change-transform">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=85&auto=format&fit=crop"
          alt="Elegant Japanese restaurant interior"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: "rgba(8,8,8,0.84)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(8,8,8,1) 0%, transparent 18%, transparent 82%, rgba(8,8,8,1) 100%)" }} />
        {/* Gold ambient glow */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(201,160,80,0.06) 0%, transparent 65%)" }} />
      </div>

      {/* Content */}
      <div className="relative container py-32">
        <div className="max-w-3xl mx-auto text-center">

          <span className="section-label reveal mb-6 block">The Izumi Experience</span>

          {/* Large decorative Japanese characters */}
          <div className="reveal delay-1 relative" style={{ marginBottom: "1.5rem" }}>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(4rem, 10vw, 9rem)",
                fontWeight: 300,
                color: "var(--color-gold)",
                opacity: 0.09,
                lineHeight: 1,
                display: "block",
                letterSpacing: "0.15em",
                userSelect: "none",
                animation: "pulse-glow 4s ease-in-out infinite",
              }}
              aria-hidden="true"
            >
              一期一会
            </span>
          </div>

          <h2
            id="experience-heading"
            className="reveal delay-2"
            style={{ fontWeight: 300, marginBottom: "1.5rem", lineHeight: 1.15 }}
          >
            <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>Ichi-go ichi-e</em><br />
            Once in a Lifetime
          </h2>

          <p className="reveal delay-3" style={{ fontSize: "1rem", lineHeight: 1.88, marginBottom: "2rem" }}>
            The Japanese concept of <em>ichi-go ichi-e</em> — "one time, one meeting" — is the soul of Izumi. Every table, every evening, every plate is unrepeatable. We do not chase consistency; we chase presence.
          </p>

          <div className="jp-divider reveal delay-4">
            <span>✦</span>
          </div>

          {/* Three pillars — glassmorphism cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`reveal delay-${i + 4} group flex flex-col items-center text-center p-8 glass-card--gold transition-all duration-400`}
                style={{ cursor: "default" }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(201,160,80,0.4)";
                  el.style.background = "rgba(201,160,80,0.09)";
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 20px 50px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "";
                  el.style.background = "";
                  el.style.transform = "";
                  el.style.boxShadow = "";
                }}
              >
                <div
                  className="flex items-center justify-center w-14 h-14 mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    border: "1px solid rgba(201,160,80,0.3)",
                    color: "var(--color-gold)",
                  }}
                >
                  {pillar.icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", fontWeight: 300, marginBottom: "0.75rem", color: "var(--color-white)" }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.72, color: "var(--color-white-muted)" }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
