import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/config";
import { siteContent } from "@/data/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: `${siteContent.brand.shortName} | ${siteContent.hero.headline}`,
    template: `%s | ${siteContent.brand.shortName}`,
  },
  description: siteContent.hero.subparagraph,
  keywords: [
    "Kalaignar Marathon",
    "Kalaignar Memorial International Marathon",
    "Chennai Marathon",
    "Guinness World Record Marathon",
    "Marina Beach Marathon",
    "Charity Marathon India",
    "Public Health Marathon",
  ],
  authors: [{ name: siteContent.brand.name }],
  creator: siteContent.brand.name,
  publisher: siteContent.brand.name,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${siteContent.brand.name} | Official Showcase`,
    description: siteContent.hero.subparagraph,
    url: siteConfig.url,
    siteName: siteContent.brand.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteContent.brand.name} | Official Showcase`,
    description: siteContent.hero.subparagraph,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen w-full bg-white text-[#111111] antialiased flex flex-col font-sans selection:bg-[#F26A1B] selection:text-white overflow-x-hidden"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
