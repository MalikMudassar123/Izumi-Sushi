"use client";

import type Lenis from "lenis";

let instance: Lenis | null = null;

export function setLenisInstance(l: Lenis | null) {
  instance = l;
}

/** Smoothly scrolls to a selector or element, accounting for the fixed header. Falls back to native smooth scroll if Lenis hasn't mounted yet. */
export function smoothScrollTo(target: string | HTMLElement, offset = -96) {
  if (instance) {
    instance.scrollTo(target, { offset, duration: 1.3 });
    return;
  }
  const el = typeof target === "string" ? document.querySelector(target) : target;
  el?.scrollIntoView({ behavior: "smooth" });
}
