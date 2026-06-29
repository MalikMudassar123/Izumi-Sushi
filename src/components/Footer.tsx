"use client";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Chef", href: "#chef" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "TripAdvisor",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative pt-20 pb-8 overflow-hidden"
      style={{ background: "var(--color-black-soft)", borderTop: "1px solid rgba(201,160,80,0.15)" }}
    >
      {/* Decorative top accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[var(--color-gold)] to-transparent opacity-40" />

      <div className="container">

        {/* ── Main footer content ──────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2rem",
                  fontWeight: 300,
                  color: "var(--color-white)",
                  display: "block",
                  lineHeight: 1,
                  marginBottom: "0.3rem",
                }}
              >
                Izumi
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.55rem",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "var(--color-gold)",
                }}
              >
                Sushi
              </span>
            </div>
            <p style={{ fontSize: "0.82rem", lineHeight: 1.7, maxWidth: "22ch" }}>
              Premium Japanese fine dining in the heart of New York City. Where every meal is a ceremony.
            </p>
            {/* Michelin badge */}
            <div className="flex items-center gap-2 mt-5">
              <span style={{ fontSize: "1.1rem" }} role="img" aria-label="Michelin star">⭐</span>
              <span style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: "var(--color-gold)", textTransform: "uppercase" }}>
                Three Michelin Stars
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="section-label mb-5">Navigation</p>
            <ul className="flex flex-col gap-3" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    style={{ fontSize: "0.85rem", color: "var(--color-white-muted)" }}
                    className="hover:text-[var(--color-gold)] transition-colors duration-300"
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
              <p style={{ fontSize: "0.85rem", color: "var(--color-white-muted)", lineHeight: 1.6 }}>
                142 Sakura Boulevard<br />
                West Village, New York<br />
                NY 10014
              </p>
              <a
                href="tel:+12125550132"
                style={{ fontSize: "0.85rem", color: "var(--color-white-muted)" }}
                className="hover:text-[var(--color-gold)] transition-colors duration-300"
              >
                +1 (212) 555-0132
              </a>
              <a
                href="mailto:reservations@izumisushi.com"
                style={{ fontSize: "0.85rem", color: "var(--color-white-muted)" }}
                className="hover:text-[var(--color-gold)] transition-colors duration-300"
              >
                reservations@izumisushi.com
              </a>
            </address>
          </div>

          {/* Hours & Social */}
          <div>
            <p className="section-label mb-5">Hours</p>
            <ul className="flex flex-col gap-2 mb-8">
              {[
                { d: "Wed – Thu", t: "18:00 – 22:00" },
                { d: "Fri – Sat", t: "17:30 – 23:00" },
                { d: "Sunday", t: "17:30 – 21:30" },
                { d: "Mon – Tue", t: "Closed" },
              ].map((h) => (
                <li key={h.d} className="flex justify-between items-center gap-4">
                  <span style={{ fontSize: "0.78rem", color: "var(--color-gray)" }}>{h.d}</span>
                  <span style={{ fontSize: "0.78rem", color: h.t === "Closed" ? "var(--color-gray)" : "var(--color-gold)" }}>
                    {h.t}
                  </span>
                </li>
              ))}
            </ul>

            {/* Social */}
            <p className="section-label mb-3">Follow Us</p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex items-center justify-center w-9 h-9 transition-all duration-300"
                  style={{
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "var(--color-white-muted)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--color-gold)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,160,80,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--color-white-muted)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
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
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p style={{ fontSize: "0.72rem", color: "var(--color-gray)", letterSpacing: "0.05em" }}>
            © {new Date().getFullYear()} Izumi Sushi. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Accessibility"].map((link) => (
              <a
                key={link}
                href="#"
                style={{ fontSize: "0.72rem", color: "var(--color-gray)" }}
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
