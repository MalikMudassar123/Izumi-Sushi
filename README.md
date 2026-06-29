# Izumi Sushi — Premium Japanese Fine Dining

A production-ready, single-page marketing website for a fictional high-end Japanese restaurant, built with **Next.js 16**, **TypeScript**, and **Tailwind CSS 4**. The design centres on a black / luxury-gold / white palette with refined typography, scroll-reveal animations, and polished carousels.

## ✨ Features

- **Cinematic hero** with parallax background, split solid/outline headline, and animated entrance
- **Sticky navigation** with a full-screen split overlay menu (image + links / contact info) and morphing menu icon
- **Filterable menu** with category tabs (Japanese labels), dish cards, prices, and hover micro-interactions
- **Immersive experience** section with parallax and the *ichi-go ichi-e* philosophy
- **Gallery & testimonials carousels** (Swiper) with custom gold navigation and pagination
- **Chef spotlight** with awards, a **reservation form** with success state, **contact** with hours/transport, and a rich **footer**
- Scroll-reveal animations via `IntersectionObserver`
- Fully **responsive**, **accessible** (ARIA, keyboard, focus states), and **SEO-optimised** (Open Graph, Twitter, semantic markup)

## 🛠 Tech Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 + CSS custom properties |
| Carousels | Swiper |
| Fonts | Cormorant Garamond (serif) + DM Sans (sans) |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev
# → http://localhost:3000

# Production build
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Design tokens, base styles, components, animations
│   ├── layout.tsx       # Fonts + SEO metadata
│   └── page.tsx         # Section assembly
├── components/          # Navigation, Hero, About, Menu, Experience,
│                        # Gallery, Chef, Testimonials, Reservations,
│                        # Contact, Footer, ArrowButton
├── hooks/
│   └── useScrollReveal.ts
└── lib/
    └── data.ts          # Menu items, categories, testimonials
```

## 📝 License

This project is for demonstration purposes. Imagery courtesy of [Unsplash](https://unsplash.com).
