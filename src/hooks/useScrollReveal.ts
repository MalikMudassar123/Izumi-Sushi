"use client";

import { useEffect, RefObject } from "react";

export default function useScrollReveal(
  containerRef: RefObject<HTMLElement | null>,
  options?: IntersectionObserverInit
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const selectors = ".reveal, .reveal-left, .reveal-right, .reveal-scale";
    const elements = container.querySelectorAll<HTMLElement>(selectors);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px", ...options }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [containerRef, options]);
}
