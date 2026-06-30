"use client";

import { useState } from "react";
import { smoothScrollTo } from "@/lib/lenis";

const navLinks = [
  { label: "About",        href: "#about" },
  { label: "Menu",         href: "#menu" },
  { label: "Experience",   href: "#experience" },
  { label: "Gallery",      href: "#gallery" },
  { label: "Chef",         href: "#chef" },
  { label: "Contact",      href: "#contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "TripAdvisor",
    href: "#",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail]       = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNav = (href: string) => {
    smoothScrollTo(href);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "var(--color-black-soft)",
        borderTop: "1px solid rgba(201,160,80,0.12)",
      }}
    >
      {/* Ambient glow at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, var(--color-gold), transparent)", opacity: 0.35 }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(201,160,80,0.35), transparent)" }}
        aria-hidden="true"
      />

      {/* Background radial accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(201,160,80,0.04) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      {/* ── Newsletter strip ────────────────────────────────── */}
      <div
        className="relative border-b"
        style={{ borderColor: "rgba(201,160,80,0.1)" }}
      >
        <div className="container py-12 md:py-14">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 max-w-4xl mx-auto">
            <div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)", fontWeight: 300, marginBottom: "0.4rem" }}>
                Stay at the Table
              </h3>
              <p style={{ fontSize: "0.85rem", maxWidth: "34ch" }}>
                Seasonal menus, special events, and rare sake arrivals — delivered quietly to your inbox.
              </p>
            </div>

            {subscribed ? (
              <div className="flex items-center gap-3" style={{ minWidth: "clamp(260px, 36vw, 420px)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", color: "var(--color-gold)", fontStyle: "italic" }}>
                  Thank you. You're on the list.
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex w-full"
                style={{ minWidth: "clamp(260px, 36vw, 420px)" }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  aria-label="Email address for newsletter"
                  className="footer-newsletter-input"
                  style={{
                    flex: 1,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRight: "none",
                    color: "var(--color-white)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.85rem",
                    padding: "0.85em 1.1em",
                    outline: "none",
                    transition: "border-color 350ms, background 350ms, box-shadow 350ms",
                  }}
                />
                <button
                  type="submit"
                  className="btn btn--primary"
                  style={{ padding: "0 1.6em", fontSize: "0.65rem", flexShrink: 0 }}
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ── Main footer content ──────────────────────────────── */}
      <div className="container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <span style={{
                fontFamily: "var(--font-serif)",
                fontSize: "2.1rem",
                fontWeight: 300,
                color: "var(--color-white)",
                display: "block",
                lineHeight: 1,
                marginBottom: "0.3rem",
              }}>
                Izumi
              </span>
              <span style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.53rem",
                letterSpacing: "0.38em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
              }}>
                Sushi
              </span>
            </div>

            <p style={{ fontSize: "0.82rem", lineHeight: 1.72, maxWidth: "23ch", marginBottom: "1.5rem" }}>
              Premium Japanese fine dining in the heart of New York. Where every meal is a ceremony.
            </p>

            {/* Michelin badge */}
            <div
              className="michelin-badge"
              style={{ display: "inline-flex", fontSize: "0.55rem", padding: "0.38em 1em" }}
            >
              <span style={{ color: "var(--color-gold)", fontSize: "0.65rem" }}>★★★</span>
              <span>Three Michelin Stars</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="section-label mb-5">Navigation</p>
            <ul className="flex flex-col gap-3" role="list">
              {navLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    style={{ fontSize: "0.85rem", color: "var(--color-white-muted)" }}
                    className="hover:text-[var(--color-gold)] transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-5">Contact</p>
            <address style={{ fontStyle: "normal" }} className="flex flex-col gap-3">
              <p style={{ fontSize: "0.85rem", color: "var(--color-white-muted)", lineHeight: 1.65 }}>
                142 Sakura Boulevard<br />
                West Village, New York<br />
                NY 10014
              </p>
              <a href="tel:+12125550132" style={{ fontSize: "0.85rem", color: "var(--color-white-muted)" }}
                className="hover:text-[var(--color-gold)] transition-colors duration-300">
                +1 (212) 555-0132
              </a>
              <a href="mailto:reservations@izumisushi.com" style={{ fontSize: "0.85rem", color: "var(--color-white-muted)" }}
                className="hover:text-[var(--color-gold)] transition-colors duration-300">
                reservations@izumisushi.com
              </a>
            </address>
          </div>

          {/* Hours & Social */}
          <div>
            <p className="section-label mb-4">Hours</p>
            <ul className="flex flex-col gap-2 mb-8">
              {[
                { d: "Wed – Thu", t: "18:00 – 22:00" },
                { d: "Fri – Sat", t: "17:30 – 23:00" },
                { d: "Sunday",    t: "17:30 – 21:30" },
                { d: "Mon – Tue", t: "Closed" },
              ].map(h => (
                <li key={h.d} className="flex justify-between items-center gap-4">
                  <span style={{ fontSize: "0.78rem", color: "var(--color-gray)" }}>{h.d}</span>
                  <span style={{ fontSize: "0.78rem", color: h.t === "Closed" ? "var(--color-gray)" : "var(--color-gold)" }}>
                    {h.t}
                  </span>
                </li>
              ))}
            </ul>

            <p className="section-label mb-3">Follow Us</p>
            <div className="flex gap-2.5">
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex items-center justify-center w-9 h-9 transition-all duration-300"
                  style={{ border: "1px solid rgba(255,255,255,0.1)", color: "var(--color-white-muted)" }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "var(--color-gold)";
                    el.style.borderColor = "rgba(201,160,80,0.45)";
                    el.style.background = "rgba(201,160,80,0.06)";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "var(--color-white-muted)";
                    el.style.borderColor = "rgba(255,255,255,0.1)";
                    el.style.background = "";
                    el.style.transform = "";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* ── Bottom bar ──────────────────────────────────── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p style={{ fontSize: "0.7rem", color: "var(--color-gray)", letterSpacing: "0.05em" }}>
            © {new Date().getFullYear()} Izumi Sushi. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Accessibility"].map(link => (
              <a
                key={link}
                href="#"
                style={{ fontSize: "0.7rem", color: "var(--color-gray)" }}
                className="hover:text-[var(--color-white)] transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
