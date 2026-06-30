"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import useScrollReveal from "@/hooks/useScrollReveal";
import ArrowButton from "@/components/ArrowButton";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=1100&q=80&auto=format&fit=crop",
    alt: "Kaiseki course platter",
    caption: "Kaiseki Course",
  },
  {
    src: "https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=1100&q=80&auto=format&fit=crop",
    alt: "Dragon roll topped with tuna",
    caption: "Dragon Roll",
  },
  {
    src: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1100&q=80&auto=format&fit=crop",
    alt: "Chef preparing sushi at the counter",
    caption: "The Craft",
  },
  {
    src: "https://images.unsplash.com/photo-1615361200141-f45040f367be?w=1100&q=80&auto=format&fit=crop",
    alt: "Uni sea urchin nigiri",
    caption: "Uni Nigiri",
  },
  {
    src: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=1100&q=80&auto=format&fit=crop",
    alt: "Omakase sushi selection",
    caption: "Omakase Selection",
  },
  {
    src: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=1100&q=80&auto=format&fit=crop",
    alt: "Sashimi platter on ice",
    caption: "Sashimi Platter",
  },
  {
    src: "https://images.unsplash.com/photo-1547592180-85f173990554?w=1100&q=80&auto=format&fit=crop",
    alt: "A5 wagyu beef",
    caption: "A5 Wagyu",
  },
  {
    src: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=1100&q=80&auto=format&fit=crop",
    alt: "Matcha mille-crêpe dessert",
    caption: "Matcha Dessert",
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  useScrollReveal(sectionRef);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(
    () => setLightboxIndex(i => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length)),
    []
  );
  const showNext = useCallback(
    () => setLightboxIndex(i => (i === null ? null : (i + 1) % galleryImages.length)),
    []
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative py-32 lg:py-44 overflow-hidden"
      aria-labelledby="gallery-heading"
    >
      <div className="container mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="section-label reveal">Gallery</span>
            <div className="gold-line reveal delay-1" />
            <h2 id="gallery-heading" className="reveal delay-2" style={{ fontWeight: 300 }}>
              Every Dish<br />
              <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>A Canvas</em>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-6">
            <p className="reveal delay-3 max-w-sm md:text-right" style={{ fontSize: "0.9rem" }}>
              Food is our medium. Each plating is composed with the same care as a brushstroke — purposeful, balanced, alive.
            </p>
            {/* Arrow controls in header (editorial placement) */}
            <div className="flex items-center gap-3 reveal delay-4">
              <ArrowButton direction="prev" innerRef={prevRef} />
              <ArrowButton direction="next" innerRef={nextRef} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Swiper ─────────────────────────────────────────────── */}
      <div>
        <Swiper
          modules={[Autoplay, Navigation, Pagination, A11y]}
          slidesPerView={1.15}
          spaceBetween={16}
          centeredSlides
          loop
          observer
          observeParents
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper: SwiperClass) => {
            // Bind our custom refs before Swiper initialises navigation
            // @ts-expect-error — navigation params accept element refs
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-expect-error — navigation params accept element refs
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          onSwiper={(swiper: SwiperClass) => {
            setTimeout(() => swiper.update(), 60);
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          grabCursor
          breakpoints={{
            640: { slidesPerView: 1.4, spaceBetween: 20 },
            768: { slidesPerView: 1.8, spaceBetween: 24 },
            1024: { slidesPerView: 2.4, spaceBetween: 28 },
            1280: { slidesPerView: 3.2, spaceBetween: 32 },
          }}
          style={{ paddingBottom: "56px" }}
          aria-label="Food gallery"
        >
          {galleryImages.map((img, i) => (
            <SwiperSlide key={img.src}>
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="relative overflow-hidden group w-full text-left"
                style={{ aspectRatio: "4/3" }}
                aria-label={`View larger image: ${img.caption}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Caption overlay */}
                <div
                  className="absolute inset-0 flex items-end justify-between p-6 opacity-0 group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(to top, rgba(8,8,8,0.85) 0%, transparent 60%)",
                    transition: "opacity 400ms var(--ease-out-expo)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.4rem",
                      fontWeight: 300,
                      color: "var(--color-white)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {img.caption}
                  </span>
                  <span
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      border: "1px solid rgba(201,160,80,0.5)",
                      background: "rgba(8,8,8,0.4)",
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </span>
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ── Lightbox ───────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          style={{ background: "rgba(8,8,8,0.96)", animation: "fade-up-in 300ms var(--ease-out-expo)" }}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute top-5 right-5 md:top-8 md:right-8 flex items-center justify-center"
            style={{ width: "44px", height: "44px", border: "1px solid rgba(255,255,255,0.15)", color: "var(--color-white)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <button
            type="button"
            onClick={e => { e.stopPropagation(); showPrev(); }}
            aria-label="Previous image"
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 flex items-center justify-center"
            style={{ width: "48px", height: "48px", border: "1px solid rgba(255,255,255,0.15)", color: "var(--color-white)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={e => { e.stopPropagation(); showNext(); }}
            aria-label="Next image"
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 flex items-center justify-center"
            style={{ width: "48px", height: "48px", border: "1px solid rgba(255,255,255,0.15)", color: "var(--color-white)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div
            className="relative max-w-4xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightboxIndex].src.replace("w=1100", "w=1800")}
              alt={galleryImages[lightboxIndex].alt}
              className="w-full h-auto max-h-[78vh] object-contain mx-auto"
              style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.6)" }}
            />
            <div className="text-center mt-6">
              <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", fontWeight: 300, color: "var(--color-white)" }}>
                {galleryImages[lightboxIndex].caption}
              </span>
              <p className="section-label mt-2" style={{ fontSize: "0.6rem" }}>
                {lightboxIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
