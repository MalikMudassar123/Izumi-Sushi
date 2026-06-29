"use client";

import { useRef, useState } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function Reservations() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      id="reservations"
      className="relative py-32 lg:py-44 overflow-hidden"
      aria-labelledby="reservations-heading"
    >
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0" style={{ background: "rgba(8,8,8,0.91)" }} />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(201,160,80,0.06) 0%, transparent 70%)" }}
        />
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
              className="text-center py-16 reveal"
              style={{ border: "1px solid rgba(201,160,80,0.3)" }}
            >
              <div className="mb-6">
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "3rem",
                    color: "var(--color-gold)",
                  }}
                >
                  ✦
                </span>
              </div>
              <h3 style={{ fontWeight: 300, marginBottom: "1rem" }}>
                Request Received
              </h3>
              <p style={{ marginBottom: "1.5rem" }}>
                Thank you, {formData.name}. We will confirm your reservation at {formData.email} within 24 hours.
              </p>
              <p style={{ fontSize: "0.8rem", color: "var(--color-gold)" }}>
                We look forward to welcoming you.
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">

                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="section-label">Full Name *</label>
                  <input
                    id="name" name="name" type="text" required
                    value={formData.name} onChange={handleChange}
                    placeholder="Your full name"
                    className="form-input"
                    style={inputStyle}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="section-label">Email *</label>
                  <input
                    id="email" name="email" type="email" required
                    value={formData.email} onChange={handleChange}
                    placeholder="your@email.com"
                    style={inputStyle}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="section-label">Phone</label>
                  <input
                    id="phone" name="phone" type="tel"
                    value={formData.phone} onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    style={inputStyle}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="guests" className="section-label">Guests *</label>
                  <select
                    id="guests" name="guests" required
                    value={formData.guests} onChange={handleChange}
                    style={{ ...inputStyle, appearance: "none" as const }}
                  >
                    {[1,2,3,4,5,6,7,8].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
                    ))}
                    <option value="9+">9+ guests (contact us)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="date" className="section-label">Preferred Date *</label>
                  <input
                    id="date" name="date" type="date" required
                    value={formData.date} onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    style={inputStyle}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="time" className="section-label">Preferred Time *</label>
                  <select
                    id="time" name="time" required
                    value={formData.time} onChange={handleChange}
                    style={{ ...inputStyle, appearance: "none" as const }}
                  >
                    <option value="">Select time</option>
                    {["17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00"].map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

              </div>

              <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="occasion" className="section-label">Special Occasion</label>
                <select
                  id="occasion" name="occasion"
                  value={formData.occasion} onChange={handleChange}
                  style={{ ...inputStyle, appearance: "none" as const }}
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
                <label htmlFor="notes" className="section-label">Dietary Notes & Requests</label>
                <textarea
                  id="notes" name="notes" rows={3}
                  value={formData.notes} onChange={handleChange}
                  placeholder="Allergies, dietary requirements, seating preferences..."
                  style={{ ...inputStyle, resize: "vertical" as const, minHeight: "80px" }}
                />
              </div>

              <button type="submit" className="btn btn--primary w-full justify-center">
                <span>Confirm Reservation Request</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <p style={{ fontSize: "0.72rem", color: "var(--color-gray)", textAlign: "center", marginTop: "1rem" }}>
                By submitting you agree to our privacy policy. We never share your data.
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        input, select, textarea {
          color-scheme: dark;
        }
      `}</style>
    </section>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "var(--color-white)",
  fontFamily: "var(--font-sans)",
  fontSize: "0.875rem",
  padding: "0.85em 1em",
  outline: "none",
  transition: "border-color 300ms",
  borderRadius: 0,
};
