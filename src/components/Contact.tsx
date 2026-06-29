"use client";

import { useRef } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

const hours = [
  { day: "Monday – Tuesday", time: "Closed" },
  { day: "Wednesday – Thursday", time: "18:00 – 22:00" },
  { day: "Friday – Saturday", time: "17:30 – 23:00" },
  { day: "Sunday", time: "17:30 – 21:30" },
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
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--color-black-soft)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(201,160,80,0.04) 0%, transparent 70%)" }}
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
                  lineHeight: 1.7,
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
                  style={{ fontSize: "0.9rem", color: "var(--color-white-muted)" }}
                  className="hover:text-[var(--color-gold)] transition-colors duration-300"
                >
                  +1 (212) 555-0132
                </a>
                <a
                  href="mailto:reservations@izumisushi.com"
                  style={{ fontSize: "0.9rem", color: "var(--color-white-muted)" }}
                  className="hover:text-[var(--color-gold)] transition-colors duration-300"
                >
                  reservations@izumisushi.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="reveal delay-5">
              <p className="section-label mb-4">Opening Hours</p>
              <ul className="flex flex-col gap-3">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between py-2.5"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <span style={{ fontSize: "0.85rem", color: "var(--color-white-muted)" }}>
                      {h.day}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "0.95rem",
                        color: h.time === "Closed" ? "var(--color-gray)" : "var(--color-gold)",
                      }}
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Right: Map placeholder + quick links ─────────── */}
          <div className="reveal-right">
            {/* Stylised map placeholder */}
            <div
              className="relative overflow-hidden mb-8"
              style={{ aspectRatio: "4/3", border: "1px solid rgba(201,160,80,0.2)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80&auto=format&fit=crop"
                alt="New York city street near Izumi Sushi"
                className="w-full h-full object-cover opacity-40"
                loading="lazy"
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                style={{ background: "rgba(8,8,8,0.4)" }}
              >
                {/* Pin icon */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.1rem",
                    color: "var(--color-white)",
                    letterSpacing: "0.05em",
                  }}
                >
                  142 Sakura Boulevard
                </span>
                <span className="section-label">West Village, New York</span>
              </div>
            </div>

            {/* Transport */}
            <div
              className="p-6 reveal delay-3"
              style={{ background: "var(--color-black-card)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p className="section-label mb-4">Getting Here</p>
              <ul className="flex flex-col gap-3">
                {[
                  { icon: "🚇", text: "Subway: A/C/E to 14th St (5 min walk)" },
                  { icon: "🚕", text: "Taxi / Rideshare: Drop-off on Sakura Blvd" },
                  { icon: "🅿️", text: "Parking: Hudson St Garage (2 min walk)" },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span style={{ fontSize: "1rem" }} role="img" aria-hidden="true">{item.icon}</span>
                    <span style={{ fontSize: "0.85rem", color: "var(--color-white-muted)", lineHeight: 1.5 }}>
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
