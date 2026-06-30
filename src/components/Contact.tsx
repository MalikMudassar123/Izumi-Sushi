"use client";

import { useRef } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

const hours = [
  { day: "Monday – Tuesday",    time: "Closed" },
  { day: "Wednesday – Thursday", time: "18:00 – 22:00" },
  { day: "Friday – Saturday",   time: "17:30 – 23:00" },
  { day: "Sunday",              time: "17:30 – 21:30" },
];

const transport = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
        <line x1="9" y1="9" x2="9" y2="21" />
        <line x1="15" y1="9" x2="15" y2="21" />
      </svg>
    ),
    text: "Subway: A / C / E to 14th St — 5 min walk",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" />
        <rect x="9" y="11" width="14" height="10" rx="2" />
        <circle cx="12" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
      </svg>
    ),
    text: "Taxi / Rideshare — Drop-off on Sakura Blvd",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
    text: "Parking: Hudson St Garage — 2 min walk",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 lg:py-44 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--color-black-soft)" }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 65% 55% at 82% 50%, rgba(201,160,80,0.045) 0%, transparent 70%)" }}
      />

      <div className="relative container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">

          {/* ── Left: info ────────────────────────────────────── */}
          <div>
            <span className="section-label reveal">Find Us</span>
            <div className="gold-line reveal delay-1" />
            <h2
              id="contact-heading"
              className="reveal delay-2"
              style={{ fontWeight: 300, marginBottom: "2rem" }}
            >
              Visit<br />
              <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>Izumi</em>
            </h2>

            {/* Address */}
            <div className="reveal delay-3 mb-8">
              <p className="section-label mb-3">Address</p>
              <address
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.1rem",
                  fontStyle: "normal",
                  color: "var(--color-white)",
                  lineHeight: 1.75,
                }}
              >
                142 Sakura Boulevard<br />
                West Village, New York<br />
                NY 10014
              </address>
            </div>

            {/* Contact details */}
            <div className="reveal delay-4 mb-8">
              <p className="section-label mb-3">Contact</p>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+12125550132"
                  style={{ fontSize: "0.92rem", color: "var(--color-white-muted)" }}
                  className="hover:text-[var(--color-gold)] transition-colors duration-300 w-fit"
                >
                  +1 (212) 555-0132
                </a>
                <a
                  href="mailto:reservations@izumisushi.com"
                  style={{ fontSize: "0.92rem", color: "var(--color-white-muted)" }}
                  className="hover:text-[var(--color-gold)] transition-colors duration-300 w-fit"
                >
                  reservations@izumisushi.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="reveal delay-5">
              <p className="section-label mb-4">Opening Hours</p>
              <ul className="flex flex-col gap-1">
                {hours.map(h => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between py-3 transition-colors duration-300 group"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderBottomColor = "rgba(201,160,80,0.18)")}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderBottomColor = "rgba(255,255,255,0.06)")}
                  >
                    <span style={{ fontSize: "0.85rem", color: "var(--color-white-muted)" }}>{h.day}</span>
                    <span style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "0.95rem",
                      color: h.time === "Closed" ? "var(--color-gray)" : "var(--color-gold)",
                    }}>
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Right: Map + transport ────────────────────────── */}
          <div className="reveal-right">
            {/* Map placeholder */}
            <div
              className="relative overflow-hidden mb-6"
              style={{ aspectRatio: "4/3", border: "1px solid rgba(201,160,80,0.18)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80&auto=format&fit=crop"
                alt="New York city street near Izumi Sushi"
                className="w-full h-full object-cover opacity-35 transition-opacity duration-500 hover:opacity-50"
                loading="lazy"
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                style={{ background: "rgba(8,8,8,0.38)" }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "rgba(201,160,80,0.12)",
                    border: "1px solid rgba(201,160,80,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animation: "pulse-glow 3s ease-in-out infinite",
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>
                <div className="text-center">
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--color-white)", letterSpacing: "0.04em", display: "block" }}>
                    142 Sakura Boulevard
                  </span>
                  <span className="section-label" style={{ fontSize: "0.58rem" }}>West Village, New York</span>
                </div>
              </div>
            </div>

            {/* Transport — glass cards */}
            <div className="glass-card p-6 reveal delay-3">
              <p className="section-label mb-5">Getting Here</p>
              <ul className="flex flex-col gap-4">
                {transport.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 group"
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        width: "38px",
                        height: "38px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(201,160,80,0.22)",
                        color: "var(--color-gold)",
                        transition: "border-color 300ms, background 300ms",
                      }}
                      className="group-hover:border-[rgba(201,160,80,0.5)] group-hover:bg-[rgba(201,160,80,0.06)]"
                    >
                      {item.icon}
                    </div>
                    <span style={{ fontSize: "0.85rem", color: "var(--color-white-muted)", lineHeight: 1.6, paddingTop: "0.55rem" }}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
