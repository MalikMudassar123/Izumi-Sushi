"use client";

import { useRef, useEffect } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  useScrollReveal(sectionRef);

  /* ── Parallax background ──────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = -rect.top / (rect.height + window.innerHeight);
      const y = progress * 80;
      bgRef.current.style.transform = `translateY(${y}px)`;
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
        <div className="absolute inset-0" style={{ background: "rgba(8,8,8,0.82)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(8,8,8,1) 0%, transparent 15%, transparent 85%, rgba(8,8,8,1) 100%)" }} />
      </div>

      {/* Content */}
      <div className="relative container py-32">
        <div className="max-w-3xl mx-auto text-center">

          <span className="section-label reveal mb-6 block">The Izumi Experience</span>

          {/* Large decorative Japanese character */}
          <div className="reveal delay-1" style={{ marginBottom: "1.5rem" }}>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(4rem, 10vw, 8rem)",
                fontWeight: 300,
                color: "var(--color-gold)",
                opacity: 0.12,
                lineHeight: 1,
                display: "block",
                letterSpacing: "0.1em",
                userSelect: "none",
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

          <p className="reveal delay-3" style={{ fontSize: "1rem", lineHeight: 1.85, marginBottom: "2rem" }}>
            The Japanese concept of <em>ichi-go ichi-e</em> — "one time, one meeting" — is the soul of Izumi. Every table, every evening, every plate is unrepeatable. We do not chase consistency; we chase presence.
          </p>

          <div className="jp-divider reveal delay-4">
            <span>&#10022;</span>
          </div>

          {/* Three pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: "🍶",
                title: "Sake Pairing",
                desc: "Over 80 curated sake labels, from crisp junmai to aged koshu. Our sommeliers compose a pairing that evolves with each course.",
              },
              {
                icon: "🌸",
                title: "Seasonal Menu",
                desc: "Our menu is rewritten with each season — spring's delicate sweetness, winter's profound umami. Nothing frozen, everything fresh.",
              },
              {
                icon: "🏮",
                title: "Private Dining",
                desc: "Two intimate private rooms for up to 8 guests. Ideal for celebrations, proposals, and conversations that deserve silence.",
              },
            ].map((pillar, i) => (
              <div
                key={pillar.title}
                className={`reveal delay-${i + 4} flex flex-col items-center text-center p-8`}
                style={{ border: "1px solid rgba(201,160,80,0.15)" }}
              >
                <span className="text-3xl mb-4" role="img" aria-label={pillar.title}>{pillar.icon}</span>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 300, marginBottom: "0.75rem" }}>{pillar.title}</h3>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.7 }}>{pillar.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
