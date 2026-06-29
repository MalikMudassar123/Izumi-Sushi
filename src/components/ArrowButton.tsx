"use client";

import { RefObject } from "react";

type ArrowButtonProps = {
  direction: "prev" | "next";
  innerRef: RefObject<HTMLButtonElement | null>;
};

/** Premium circular gold carousel arrow, controlled via Swiper navigation refs. */
export default function ArrowButton({ direction, innerRef }: ArrowButtonProps) {
  return (
    <button
      ref={innerRef}
      type="button"
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      className="gallery-arrow group"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        style={{ transform: direction === "prev" ? "rotate(180deg)" : "none" }}
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </button>
  );
}
