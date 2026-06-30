"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "@/lib/data";
import useScrollReveal from "@/hooks/useScrollReveal";
import ArrowButton from "@/components/ArrowButton";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill={i < count ? "var(--color-gold)" : "none"}
          stroke="var(--color-gold)"
          strokeWidth="1.5"
          aria-hidden="true"
          style={{ filter: i < count ? "drop-shadow(0 0 4px rgba(201,160,80,0.5))" : "none" }}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name.split(" ").map(n => n[0]).slice(0, 2).join("");
  const colors = [
    ["#1a1210", "#C9A050"],
    ["#0d1a12", "#8BC4A0"],
    ["#0f0d1a", "#A097C9"],
    ["#1a0f0d", "#C9907A"],
    ["#0d181a", "#79B8C9"],
    ["#181a0d", "#B8C97A"],
  ];
  const idx = name.charCodeAt(0) % colors.length;
  const [bg, fg] = colors[idx];

  return (
    <div
      style={{
        width: "42px",
        height: "42px",
        borderRadius: "50%",
        background: bg,
        border: `1px solid ${fg}40`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <span style={{
        fontFamily: "var(--font-serif)",
        fontSize: "0.95rem",
        fontWeight: 400,
        color: fg,
        letterSpacing: "0.02em",
      }}>
        {initials}
      </span>
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const prevRef    = useRef<HTMLButtonElement>(null);
  const nextRef    = useRef<HTMLButtonElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-32 lg:py-44 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--color-black-soft)" }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 85% 55% at 50% 50%, rgba(201,160,80,0.055) 0%, transparent 70%)" }}
      />

      <div className="relative container">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label reveal">Guest Voices</span>
          <div className="gold-line gold-line--center reveal delay-1" />
          <h2
            id="testimonials-heading"
            className="reveal delay-2"
            style={{ fontWeight: 300 }}
          >
            What Our Guests<br />
            <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>Remember</em>
          </h2>
        </div>

        {/* Arrow controls */}
        <div className="flex items-center justify-center gap-3 mb-12 reveal delay-3">
          <ArrowButton direction="prev" innerRef={prevRef} />
          <ArrowButton direction="next" innerRef={nextRef} />
        </div>

        <div>
          <Swiper
            modules={[Autoplay, Navigation, Pagination, A11y]}
            slidesPerView={1.08}
            spaceBetween={20}
            rewind
            observer
            observeParents
            autoHeight={false}
            autoplay={{ delay: 5500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper: SwiperClass) => {
              // @ts-expect-error — navigation params accept element refs
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-expect-error — navigation params accept element refs
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            onSwiper={(swiper: SwiperClass) => { setTimeout(() => swiper.update(), 60); }}
            pagination={{ clickable: true }}
            grabCursor
            breakpoints={{
              640:  { slidesPerView: 1.4, spaceBetween: 24 },
              1024: { slidesPerView: 2,   spaceBetween: 28 },
              1280: { slidesPerView: 2.5, spaceBetween: 32 },
            }}
            className="!items-stretch"
            style={{ paddingBottom: "56px" }}
            aria-label="Guest testimonials"
          >
            {testimonials.map(t => (
              <SwiperSlide key={t.id}>
                <div
                  className="flex flex-col h-full p-8 md:p-10 glass-card group transition-all duration-400"
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(201,160,80,0.22)";
                    el.style.boxShadow = "0 20px 50px rgba(0,0,0,0.4)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "";
                    el.style.boxShadow = "";
                  }}
                >
                  {/* Large floating quote mark */}
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "6rem",
                      color: "var(--color-gold)",
                      opacity: 0.12,
                      lineHeight: 0.75,
                      display: "block",
                      marginBottom: "1.2rem",
                      userSelect: "none",
                      transition: "opacity 300ms",
                    }}
                    className="group-hover:opacity-20"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>

                  <Stars count={t.rating} />

                  <blockquote
                    className="flex-1 mt-5"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
                      fontWeight: 300,
                      fontStyle: "italic",
                      color: "var(--color-white)",
                      lineHeight: 1.75,
                      marginBottom: "2rem",
                      opacity: 0.92,
                    }}
                  >
                    {t.quote}
                  </blockquote>

                  <div
                    className="flex items-center gap-3 mt-auto pt-6"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <Avatar name={t.name} />
                    <div>
                      <p style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--color-white)", marginBottom: "0.15rem" }}>
                        {t.name}
                      </p>
                      <p style={{ fontSize: "0.7rem", letterSpacing: "0.08em", color: "var(--color-gold)", opacity: 0.8 }}>
                        {t.title}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
