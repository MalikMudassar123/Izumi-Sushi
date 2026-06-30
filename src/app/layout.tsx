import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Izumi Sushi — Premium Japanese Fine Dining",
  description:
    "Experience the art of Japanese fine dining at Izumi Sushi. Omakase courses, premium nigiri, and curated sake selections in an atmosphere of refined elegance.",
  keywords: [
    "Izumi Sushi",
    "Japanese fine dining",
    "omakase",
    "sushi restaurant",
    "premium sushi",
    "Japanese cuisine",
  ],
  authors: [{ name: "Izumi Sushi" }],
  creator: "Izumi Sushi",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Izumi Sushi — Premium Japanese Fine Dining",
    description:
      "Experience the art of Japanese fine dining. Omakase courses, premium nigiri, and curated sake in an atmosphere of refined elegance.",
    siteName: "Izumi Sushi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Izumi Sushi — Premium Japanese Fine Dining",
    description:
      "Experience the art of Japanese fine dining. Omakase courses, premium nigiri, and curated sake in an atmosphere of refined elegance.",
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body suppressHydrationWarning>
        <SmoothScroll />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
