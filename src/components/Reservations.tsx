"use client";

import { useRef, useState } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import useMagnetic from "@/hooks/useMagnetic";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.038)",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "var(--color-white)",
  fontFamily: "var(--font-sans)",
  fontSize: "0.88rem",
  padding: "0.9em 1.1em",
  outline: "none",
  transition: "border-color 350ms, background 350ms, box-shadow 350ms",
  borderRadius: 0,
  appearance: "none" as const,
};

export default function Reservations() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", date: "",
    time: "", guests: "2", occasion: "", notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const submitBtnRef = useRef<HTMLButtonElement>(null);
  useMagnetic(submitBtnRef, 0.15);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section
      ref={sectionRef}
      id="reservations"
      className="relative py-32 lg:py-44 overflow-hidden"
      aria-labelledby="reservations-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0" style={{ background: "rgba(8,8,8,0.92)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(201,160,80,0.065) 0%, transparent 70%)" }} />
      </div>

      <div className="relative container">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <span className="section-label reveal">Reservations</span>
            <div className="gold-line gold-line--center reveal delay-1" />
            <h2
              id="reservations-heading"
              className="reveal delay-2"
              style={{ fontWeight: 300, marginBottom: "1rem" }}
            >
              Secure Your<br />
              <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>Evening</em>
            </h2>
            <p className="reveal delay-3">
              Reservations are recommended at least one week in advance. For special occasions or private dining inquiries, please call us directly.
            </p>
          </div>

          {submitted ? (
            /* ── Success state ──────────────────────────────── */
            <div
              className="text-center py-16 reveal glass-card"
              style={{ padding: "4rem 2rem" }}
            >
              {/* Gold circle check */}
              <div
                className="mx-auto mb-8 flex items-center justify-center"
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  border: "1px solid rgba(201,160,80,0.5)",
                  background: "rgba(201,160,80,0.08)",
                  animation: "pulse-glow 3s ease-in-out infinite",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2rem",
                  fontWeight: 300,
                  color: "var(--color-gold)",
                  display: "block",
                  marginBottom: "1rem",
                  opacity: 0.2,
                  letterSpacing: "0.1em",
                }}
                aria-hidden="true"
              >
                ✦
              </span>

              <h3 style={{ fontWeight: 300, marginBottom: "1rem", fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                Request Received
              </h3>
              <p style={{ marginBottom: "0.75rem" }}>
                Thank you, {formData.name}. We will confirm your reservation<br />
                at <span style={{ color: "var(--color-gold)" }}>{formData.email}</span> within 24 hours.
              </p>
              <p style={{ fontSize: "0.78rem", color: "var(--color-gold)", marginTop: "1.5rem", letterSpacing: "0.1em" }}>
                We look forward to welcoming you. — Izumi Sushi
              </p>
            </div>
          ) : (
            /* ── Form ──────────────────────────────────────── */
            <form
              onSubmit={handleSubmit}
              className="reveal delay-4"
              noValidate
              aria-label="Reservation request form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">

                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="section-label" style={{ fontSize: "0.6rem" }}>Full Name *</label>
                  <input
                    id="name" name="name" type="text" required
                    value={formData.name} onChange={handleChange}
                    placeholder="Your full name"
                    style={inputStyle}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="section-label" style={{ fontSize: "0.6rem" }}>Email *</label>
                  <input
                    id="email" name="email" type="email" required
                    value={formData.email} onChange={handleChange}
                    placeholder="your@email.com"
                    style={inputStyle}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="section-label" style={{ fontSize: "0.6rem" }}>Phone</label>
                  <input
                    id="phone" name="phone" type="tel"
                    value={formData.phone} onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    style={inputStyle}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="guests" className="section-label" style={{ fontSize: "0.6rem" }}>Guests *</label>
                  <select
                    id="guests" name="guests" required
                    value={formData.guests} onChange={handleChange}
                    style={inputStyle}
                  >
                    {[1,2,3,4,5,6,7,8].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
                    ))}
                    <option value="9+">9+ guests (contact us)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="date" className="section-label" style={{ fontSize: "0.6rem" }}>Preferred Date *</label>
                  <input
                    id="date" name="date" type="date" required
                    value={formData.date} onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    style={inputStyle}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="time" className="section-label" style={{ fontSize: "0.6rem" }}>Preferred Time *</label>
                  <select
                    id="time" name="time" required
                    value={formData.time} onChange={handleChange}
                    style={inputStyle}
                  >
                    <option value="">Select time</option>
                    {["17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00"].map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

              </div>

              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="occasion" className="section-label" style={{ fontSize: "0.6rem" }}>Special Occasion</label>
                <select
                  id="occasion" name="occasion"
                  value={formData.occasion} onChange={handleChange}
                  style={inputStyle}
                >
                  <option value="">None</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="proposal">Proposal</option>
                  <option value="business">Business Dinner</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 mb-8">
                <label htmlFor="notes" className="section-label" style={{ fontSize: "0.6rem" }}>Dietary Notes & Requests</label>
                <textarea
                  id="notes" name="notes" rows={3}
                  value={formData.notes} onChange={handleChange}
                  placeholder="Allergies, dietary requirements, seating preferences..."
                  style={{ ...inputStyle, resize: "vertical" as const, minHeight: "90px" }}
                />
              </div>

              <button
                ref={submitBtnRef}
                type="submit"
                className="btn btn--primary w-full justify-center"
                disabled={submitting}
                style={{ opacity: submitting ? 0.7 : 1, transition: "opacity 300ms" }}
              >
                {submitting ? (
                  <>
                    <span
                      style={{
                        display: "inline-block",
                        width: "14px",
                        height: "14px",
                        border: "1.5px solid currentColor",
                        borderTopColor: "transparent",
                        borderRadius: "50%",
                        animation: "spin-slow 0.7s linear infinite",
                      }}
                      aria-hidden="true"
                    />
                    <span>Submitting…</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Reservation Request</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>

              <p style={{ fontSize: "0.7rem", color: "var(--color-gray)", textAlign: "center", marginTop: "1.2rem" }}>
                By submitting you agree to our privacy policy. We never share your data.
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        input, select, textarea { color-scheme: dark; }
        @keyframes form-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
