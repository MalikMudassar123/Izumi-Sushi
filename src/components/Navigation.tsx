"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home",         href: "#hero" },
  { label: "About",        href: "#about" },
  { label: "Experience",   href: "#experience" },
  { label: "Menu",         href: "#menu" },
  { label: "Gallery",      href: "#gallery" },
  { label: "Reservations", href: "#reservations" },
];

const socialLinks = [
  {
    label: "Instagram",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Email",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted]   = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* Close on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const navigate = (href: string) => {
    const wasOpen = menuOpen;
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, wasOpen ? 550 : 0);
  };

  return (
    <>
      {/* ── Top bar ────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-700 ${
          scrolled && !menuOpen ? "bg-[var(--color-black)]/85 backdrop-blur-md" : "bg-transparent"
        }`}
        aria-label="Site header"
      >
        <div className="flex items-center justify-between px-7 sm:px-10 md:px-16 lg:px-20 h-20 md:h-24">

          {/* Logo */}
          <button
            onClick={() => navigate("#hero")}
            aria-label="Izumi Sushi — back to top"
            className="flex flex-col leading-none group"
          >
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.6rem",
                fontWeight: 300,
                color: "var(--color-white)",
                lineHeight: 1.05,
                letterSpacing: "0.02em",
              }}
              className="group-hover:text-[var(--color-gold)] transition-colors duration-300"
            >
              Izumi
            </span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.52rem",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                lineHeight: 1.6,
                paddingLeft: "0.1em",
              }}
            >
              Sushi
            </span>
          </button>

          {/* MENU / CLOSE trigger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex items-center gap-3.5 group"
          >
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
              }}
              className="group-hover:text-[var(--color-gold-light)] transition-colors duration-300"
            >
              {menuOpen ? "Close" : "Menu"}
            </span>

            {/* Animated icon — two lines morph into X */}
            <div className="relative w-8 h-4 flex flex-col justify-center gap-[7px]">
              <span
                className="block h-px origin-center w-full"
                style={{
                  background: "var(--color-white)",
                  transform: menuOpen ? "rotate(45deg) translateY(4px)" : "none",
                  transition: "transform 450ms var(--ease-out-expo)",
                }}
              />
              <span
                className="block h-px origin-center ml-auto"
                style={{
                  background: "var(--color-gold)",
                  width: menuOpen ? "100%" : "62%",
                  transform: menuOpen ? "rotate(-45deg) translateY(-4px)" : "none",
                  transition: "transform 450ms var(--ease-out-expo), width 350ms var(--ease-out-expo)",
                }}
              />
            </div>
          </button>

        </div>
      </header>

      {/* ── Full-screen split overlay ───────────────────────────────── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!menuOpen}
        className="fixed inset-0 z-50 flex flex-col md:flex-row"
        style={{
          pointerEvents: menuOpen ? "auto" : "none",
          visibility: mounted ? "visible" : "hidden",
        }}
      >
        {/* ── LEFT panel: image + nav links ─────────────────────────── */}
        <div
          className="relative flex flex-col justify-center overflow-hidden w-full md:w-[56%] h-[45%] md:h-full"
          style={{
            transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 750ms var(--ease-out-expo)",
          }}
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1200&q=80&auto=format&fit=crop"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: "rgba(8,8,8,0.74)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, transparent 60%, var(--color-black-soft) 100%)" }} />
          </div>

          {/* Nav links */}
          <nav
            aria-label="Primary navigation"
            className="relative px-10 sm:px-14 md:px-16 lg:px-24 py-10"
          >
            <ul className="flex flex-col gap-1 md:gap-3" role="list">
              {navLinks.map((link, i) => (
                <li key={link.href} className="overflow-hidden">
                  <button
                    onClick={() => navigate(link.href)}
                    tabIndex={menuOpen ? 0 : -1}
                    className="group flex items-baseline gap-5"
                    style={{
                      opacity: menuOpen ? 1 : 0,
                      transform: menuOpen ? "translateY(0)" : "translateY(110%)",
                      transition: `opacity 700ms var(--ease-out-expo) ${250 + i * 75}ms, transform 700ms var(--ease-out-expo) ${250 + i * 75}ms`,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.6rem",
                        fontWeight: 500,
                        letterSpacing: "0.15em",
                        color: "var(--color-gold)",
                        opacity: 0.55,
                        minWidth: "1.6rem",
                        textAlign: "left",
                      }}
                    >
                      0{i + 1}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(1.9rem, 4vw, 3.1rem)",
                        fontWeight: 300,
                        color: "var(--color-white)",
                        lineHeight: 1.35,
                        letterSpacing: "-0.01em",
                      }}
                      className="transition-all duration-300 group-hover:text-[var(--color-gold)] group-hover:translate-x-2 inline-block"
                    >
                      {link.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* ── RIGHT panel: contact info ─────────────────────────────── */}
        <div
          className="relative flex flex-col w-full md:w-[44%] h-[55%] md:h-full overflow-hidden"
          style={{
            background: "var(--color-black-soft)",
            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 750ms var(--ease-out-expo)",
          }}
        >
          {/* inner padding wrapper — clears header, balances vertical rhythm */}
          <div className="flex flex-col justify-center flex-1 gap-10 md:gap-14 px-10 sm:px-14 md:px-14 lg:px-20 pt-28 md:pt-32 pb-12 md:pb-16">

            {/* Eyebrow */}
            <div
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(-16px)",
                transition: `opacity 700ms var(--ease-out-expo) 400ms, transform 700ms var(--ease-out-expo) 400ms`,
              }}
            >
              <span className="section-label">Get in Touch</span>
              <div className="w-12 h-px mt-3" style={{ background: "rgba(201,160,80,0.4)" }} />
            </div>

            {/* Contact details */}
            <div
              className="flex flex-col gap-7"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 700ms var(--ease-out-expo) 500ms, transform 700ms var(--ease-out-expo) 500ms`,
              }}
            >
              <address style={{ fontStyle: "normal" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.05rem, 1.6vw, 1.35rem)", fontWeight: 300, color: "var(--color-white)", lineHeight: 1.7 }}>
                  142 Sakura Boulevard<br />
                  West Village, New York<br />
                  NY 10014
                </p>
              </address>

              <div className="flex flex-col gap-3">
                <a
                  href="tel:+12125550132"
                  tabIndex={menuOpen ? 0 : -1}
                  style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.05rem, 1.6vw, 1.3rem)", fontWeight: 300, color: "var(--color-white)", letterSpacing: "0.04em" }}
                  className="hover:text-[var(--color-gold)] transition-colors duration-300 w-fit"
                >
                  +1 (212) 555-0132
                </a>
                <a
                  href="mailto:reservations@izumisushi.com"
                  tabIndex={menuOpen ? 0 : -1}
                  style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(0.78rem, 1.1vw, 0.92rem)", color: "var(--color-white-muted)", letterSpacing: "0.02em" }}
                  className="hover:text-[var(--color-gold)] transition-colors duration-300 w-fit"
                >
                  reservations@izumisushi.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div
              className="flex flex-col gap-2"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 700ms var(--ease-out-expo) 580ms, transform 700ms var(--ease-out-expo) 580ms`,
              }}
            >
              <span className="section-label" style={{ marginBottom: "0.4rem" }}>Hours</span>
              <div className="flex justify-between max-w-xs">
                <span style={{ fontSize: "0.8rem", color: "var(--color-white-muted)" }}>Wed – Sat</span>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "0.9rem", color: "var(--color-gold)" }}>18:00 – 23:00</span>
              </div>
              <div className="flex justify-between max-w-xs">
                <span style={{ fontSize: "0.8rem", color: "var(--color-white-muted)" }}>Sunday</span>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "0.9rem", color: "var(--color-gold)" }}>17:30 – 21:30</span>
              </div>
            </div>

            {/* Social */}
            <div
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 700ms var(--ease-out-expo) 660ms, transform 700ms var(--ease-out-expo) 660ms`,
              }}
            >
              <div className="flex items-center">
                {socialLinks.map((s, i) => (
                  <div key={s.label} className="flex items-center">
                    <a
                      href="#"
                      aria-label={s.label}
                      tabIndex={menuOpen ? 0 : -1}
                      style={{ color: "var(--color-white-muted)" }}
                      className="hover:text-[var(--color-gold)] transition-colors duration-300 p-1.5"
                    >
                      {s.icon}
                    </a>
                    {i < socialLinks.length - 1 && (
                      <span className="block h-px" style={{ width: "clamp(18px, 2.5vw, 30px)", background: "rgba(201,160,80,0.3)" }} />
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
