import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

// Update this once the final domain is known (used for absolute OG image URLs).
const siteUrl = "https://giddipass-crest.vercel.app";
const description =
  "Rooftop restaurant in central Tamale. Banku & tilapia, jollof, grills, cold drinks and the best sunset view in the city. Open daily 8 AM – 11:30 PM.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Giddipass Crest | Rooftop Restaurant in Tamale",
  description,
  openGraph: {
    title: "Giddipass Crest | Rooftop Restaurant in Tamale",
    description,
    url: siteUrl,
    siteName: "Giddipass Crest",
    locale: "en_GH",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Sunset over the rooftops, Giddipass Crest" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Giddipass Crest | Rooftop Restaurant in Tamale",
    description,
    images: ["/images/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0F1419",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
