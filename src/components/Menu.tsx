"use client";

import { useRef, useState } from "react";
import { menuItems, menuCategories, type MenuItem } from "@/lib/data";
import useScrollReveal from "@/hooks/useScrollReveal";

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <article
      className="menu-card group relative flex flex-col overflow-hidden"
      style={{
        background: "var(--color-black-card)",
        border: "1px solid rgba(255,255,255,0.06)",
        transition: "border-color 400ms var(--ease-out-expo), transform 400ms var(--ease-out-expo)",
        animationDelay: `${Math.min(index, 7) * 70}ms`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,160,80,0.35)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ background: "linear-gradient(to top, rgba(8,8,8,0.7) 0%, transparent 60%)" }}
        />
        {item.tag && (
          <span
            className="absolute top-3 left-3"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.6rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-black)",
              background: "var(--color-gold)",
              padding: "0.3em 0.8em",
            }}
          >
            {item.tag}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <h3 style={{ fontSize: "1.15rem", fontWeight: 400, marginBottom: "0.15rem" }}>
              {item.name}
            </h3>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "0.85rem",
                color: "var(--color-gold)",
                opacity: 0.7,
              }}
            >
              {item.nameJp}
            </span>
          </div>
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.3rem",
              fontWeight: 300,
              color: "var(--color-gold)",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {item.price}
          </span>
        </div>

        <p style={{ fontSize: "0.82rem", lineHeight: 1.65, flexGrow: 1, marginTop: "0.5rem" }}>
          {item.description}
        </p>

        {/* Hover reveal line */}
        <div
          className="h-px bg-[var(--color-gold)] mt-4 origin-left scale-x-0 group-hover:scale-x-100"
          style={{ transition: "transform 400ms var(--ease-out-expo)" }}
        />
      </div>
    </article>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  const filtered =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((i) => i.category === activeCategory);

  return (
    <section
      ref={sectionRef}
      id="menu"
      className="relative py-32 lg:py-44 overflow-hidden"
      aria-labelledby="menu-heading"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 20% 80%, rgba(201,160,80,0.04) 0%, transparent 70%)" }}
      />

      <div className="container">

        {/* ── Section header ──────────────────────────────────── */}
        <div className="text-center mb-16">
          <span className="section-label reveal">Our Menu</span>
          <div className="gold-line gold-line--center reveal delay-1" />
          <h2 id="menu-heading" className="reveal delay-2" style={{ fontWeight: 300, marginBottom: "1rem" }}>
            A Seasonal<br />
            <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>Collection</em>
          </h2>
          <p className="reveal delay-3 max-w-xl mx-auto">
            Our menu changes with each season, reflecting the finest ingredients Japan and the world's oceans have to offer. Every dish is a moment of intention.
          </p>
        </div>

        {/* ── Category tabs ────────────────────────────────────── */}
        <nav
          aria-label="Menu categories"
          className="flex flex-wrap justify-center gap-2 mb-14 reveal delay-4"
        >
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="relative px-5 py-2 transition-all duration-300"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                background: activeCategory === cat.id ? "var(--color-gold)" : "transparent",
                color: activeCategory === cat.id ? "var(--color-black)" : "var(--color-white-muted)",
                border: `1px solid ${activeCategory === cat.id ? "var(--color-gold)" : "rgba(255,255,255,0.12)"}`,
              }}
              aria-pressed={activeCategory === cat.id}
            >
              {cat.label}
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.65rem",
                  color: activeCategory === cat.id ? "rgba(8,8,8,0.6)" : "var(--color-gold)",
                  letterSpacing: "0.1em",
                  lineHeight: 1.2,
                  opacity: 0.8,
                }}
              >
                {cat.labelJp}
              </span>
            </button>
          ))}
        </nav>

        {/* ── Grid ────────────────────────────────────────────── */}
        <div
          key={activeCategory}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filtered.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* ── Bottom CTA ──────────────────────────────────────── */}
        <div className="text-center mt-16 reveal">
          <p className="mb-6" style={{ fontSize: "0.9rem" }}>
            Dietary requirements? Allergies? We accommodate every need.
          </p>
          <button
            onClick={() => document.getElementById("reservations")?.scrollIntoView({ behavior: "smooth" })}
            className="btn btn--primary"
          >
            <span>Make a Reservation</span>
          </button>
        </div>

      </div>

      {/* Card mount animation — replays whenever the grid remounts on filter
          change, so cards are never left invisible (independent of the
          scroll-reveal observer). */}
      <style>{`
        @keyframes menu-card-in {
          from { opacity: 0; translate: 0 28px; }
          to   { opacity: 1; translate: 0 0; }
        }
        /* Uses the standalone 'translate' property so the hover-lift
           'transform' on the card composes cleanly without conflict. */
        .menu-card {
          opacity: 0;
          animation: menu-card-in 0.6s var(--ease-out-expo) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .menu-card { animation: none; opacity: 1; }
        }
      `}</style>
    </section>
  );
}
