"use client";

import { useRef } from "react";
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
          {galleryImages.map((img) => (
            <SwiperSlide key={img.src}>
              <div className="relative overflow-hidden group" style={{ aspectRatio: "4/3" }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Caption overlay */}
                <div
                  className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100"
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
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
