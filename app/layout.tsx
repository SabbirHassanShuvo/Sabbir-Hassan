/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata, Viewport } from "next";
// @ts-ignore
import "./globals.css";
// CustomCursor removed — using native browser cursor
import { Navigation } from "./components/Navigation";
import { NewFooter } from "./components/sections/NewFooter";
import { Toaster } from "sonner";
import { LenisScroll } from "./components/LenisScroll";
import { ScrollObserver, ThreeScene } from "./components/ThreeScene";
import { ScrollReveal } from "./components/ScrollReveal";
import { PHProvider } from "./providers";

const siteUrl = "https://sabbir-hassan.vercel.app";
const siteTitle = "Sabbir Hassan | Laravel Developer & Full Stack Engineer";
const siteDescription =
  "Experienced Laravel Developer with expertise in building secure, scalable, and high-performance web applications, RESTful APIs, authentication, and database management.";
const ogImage = {
  url: "/share-cover.png",
  width: 1200,
  height: 630,
  alt: "Sabbir Hassan – Laravel Developer & Full Stack Engineer",
  type: "image/png",
};

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | Sabbir Hassan",
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Sabbir Hassan", url: siteUrl }],
  creator: "Sabbir Hassan",
  publisher: "Sabbir Hassan",
  category: "Technology",
  keywords: [
    "Sabbir Hassan",
    "Sabbir Hassan Shuvo",
    "Laravel Developer",
    "PHP Developer",
    "Full Stack Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "RESTful API Developer",
    "Bangladeshi Developer",
    "Portfolio",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "Sabbir Hassan — Portfolio",
    locale: "en_US",
    images: [ogImage],
    firstName: "Sabbir",
    lastName: "Hassan",
    username: "sabbirhassanshuvo",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080808" },
    { media: "(prefers-color-scheme: light)", color: "#080808" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sabbir Hassan",
    url: siteUrl,
    image: "/share-cover.png",
    jobTitle: "Laravel Developer",
    description: siteDescription,
    nationality: "Bangladeshi",
    knowsAbout: [
      "Laravel Developer",
      "PHP Developer",
      "Full Stack Developer",
      "Backend Developer",
      "RESTful APIs",
      "MySQL",
      "React Developer",
    ],
    sameAs: [
      "https://github.com/SabbirHassanShuvo",
      "https://www.linkedin.com/in/sabbirhassan100",
      "https://sabbir-hassan.vercel.app/",
    ],
  };

  return (
    <html lang="en" className="font-sans" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&family=Syne:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <PHProvider>
          <canvas id="canvas-bg"></canvas>

          <ThreeScene />
          <ScrollObserver />
          <LenisScroll />
          <ScrollReveal />
          <Navigation />
          <Toaster richColors position="top-right" />
          {children}
          <NewFooter />
        </PHProvider>
      </body>
    </html>
  );
}
