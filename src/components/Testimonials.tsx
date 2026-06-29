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
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < count ? "var(--color-gold)" : "none"}
          stroke="var(--color-gold)"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-32 lg:py-44 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--color-black-soft)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(201,160,80,0.05) 0%, transparent 70%)" }}
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

        {/* Swiper — no transform-based reveal wrapper (it breaks Swiper's
            width measurement for loop + centeredSlides) */}
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
            onSwiper={(swiper: SwiperClass) => {
              setTimeout(() => swiper.update(), 60);
            }}
            pagination={{ clickable: true }}
            grabCursor
            breakpoints={{
              640:  { slidesPerView: 1.4, spaceBetween: 24 },
              1024: { slidesPerView: 2, spaceBetween: 28 },
              1280: { slidesPerView: 2.5, spaceBetween: 32 },
            }}
            className="!items-stretch"
            style={{ paddingBottom: "56px" }}
            aria-label="Guest testimonials"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div
                  className="flex flex-col h-full p-8 md:p-10"
                  style={{
                    background: "var(--color-black-card)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {/* Quote mark */}
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "5rem",
                      color: "var(--color-gold)",
                      opacity: 0.15,
                      lineHeight: 0.8,
                      display: "block",
                      marginBottom: "1rem",
                      userSelect: "none",
                    }}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>

                  <Stars count={t.rating} />

                  <blockquote
                    className="flex-1 mt-4"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                      fontWeight: 300,
                      fontStyle: "italic",
                      color: "var(--color-white)",
                      lineHeight: 1.7,
                      marginBottom: "2rem",
                    }}
                  >
                    {t.quote}
                  </blockquote>

                  <div className="flex items-center gap-3 mt-auto pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                    <div>
                      <p style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--color-white)", marginBottom: "0.1rem" }}>
                        {t.name}
                      </p>
                      <p style={{ fontSize: "0.72rem", letterSpacing: "0.08em", color: "var(--color-gold)" }}>
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
