"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { siteContent } from "@/data/content";

// Reliable SVG icons with explicit stroke & fill attributes
const SocialIcon: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case "Instagram":
      return (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case "X":
    case "Twitter":
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "YouTube":
    case "Youtube":
      return (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <path d="m10 15 5-3-5-3z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "Facebook":
      return (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    default:
      return null;
  }
};

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
  };

  return (
    <footer
      aria-label="Site Footer"
      className="bg-white text-[#111111] pt-20 pb-12 border-t border-black/[0.06] overflow-hidden w-full"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24">
        {/* Four Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-16 border-b border-black/[0.06]">
          {/* Col 1: Brand & Blurb (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="relative h-12 w-20 shrink-0">
                  <Image
                    src={siteContent.brand.logo}
                    alt={`${siteContent.brand.name} Logo`}
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#111111]">
                      {siteContent.brand.shortName}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[#F26A1B]" />
                  </div>
                  <p className="mt-0.5 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#F26A1B]">
                    {siteContent.brand.motto}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs sm:text-sm text-[#6B7280] leading-relaxed max-w-md">
                {siteContent.footer.aboutBlurb}
              </p>
            </div>

            {/* Social Icons Squares */}
            <div className="mt-8 flex items-center gap-3">
              {siteContent.footer.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Official ${social.name} page`}
                  className="flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10 bg-[#FAFAFA] text-[#111111] transition-all hover:border-[#F26A1B] hover:bg-[#F26A1B] hover:text-white shadow-2xs"
                >
                  <SocialIcon name={social.name} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Pages (Smooth-scroll links) (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#111111] mb-4">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#6B7280]">
              {siteContent.footer.linksPages.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#F26A1B] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Reference & Resources (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#111111] mb-4">
              Reference
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#6B7280]">
              {siteContent.footer.linksReference.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#F26A1B] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter & Press Updates (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#111111] mb-1">
              {siteContent.footer.newsletter.heading}
            </h4>
            <p className="text-xs sm:text-sm text-[#6B7280] mb-5 leading-relaxed">
              {siteContent.footer.newsletter.subtext}
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-3 text-xs sm:text-sm font-semibold text-emerald-800 border border-emerald-200">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Thank you for subscribing.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="relative">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={siteContent.footer.newsletter.placeholder}
                  className="w-full rounded-full border border-black/10 bg-[#FAFAFA] pl-5 pr-14 py-3 text-xs sm:text-sm text-[#111111] placeholder:text-[#9CA3AF] focus:border-[#F26A1B] focus:bg-white focus:outline-hidden transition-all"
                />
                <button
                  type="submit"
                  aria-label="Submit newsletter subscription"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-[#F26A1B] text-white hover:bg-[#DC5A10] transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            <p className="mt-3 text-[11px] text-[#9CA3AF] leading-normal">
              {siteContent.footer.disclaimer}
            </p>
          </div>
        </div>

        {/* Giant Wordmark "Kalaignar Marathon" - Full width responsive SVG scaling */}
        {/* Ensures the ENTIRE phrase "KALAIGNAR MARATHON" fits 100% on any screen without truncation */}
        <div className="pt-10 pb-4 text-center select-none overflow-hidden w-full">
          <svg
            viewBox="0 0 1350 140"
            className="w-full h-auto max-h-[160px] pointer-events-none select-none"
            preserveAspectRatio="xMidYMid meet"
            aria-label={siteContent.footer.wordmark}
            role="img"
          >
            <defs>
              <linearGradient id="wordmarkGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F26A1B" stopOpacity="0.85" />
                <stop offset="45%" stopColor="#F26A1B" stopOpacity="0.4" />
                <stop offset="85%" stopColor="#F26A1B" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="110"
              textAnchor="middle"
              fill="url(#wordmarkGrad)"
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "116px",
                fontWeight: 900,
                letterSpacing: "-0.045em",
              }}
            >
              {siteContent.footer.wordmark}
            </text>
          </svg>
        </div>

        {/* Small Bottom Copyright Line */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9CA3AF]">
          <p>{siteContent.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#6B7280] transition-colors cursor-pointer">
              Privacy Protocol
            </span>
            <span className="hover:text-[#6B7280] transition-colors cursor-pointer">
              Terms of Accreditation
            </span>
            <span className="hover:text-[#6B7280] transition-colors cursor-pointer">
              Charity Disclosures
            </span>
          </div>
        </div>

        {/* Bottom-most Attribution */}
        <div className="mt-6 pt-4 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#9CA3AF]">
          <p className="flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
            <span>{siteContent.footer.credits.label}</span>
            <a
              href={siteContent.footer.credits.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#6B7280] hover:text-[#F26A1B] transition-colors underline decoration-black/15 underline-offset-2 hover:decoration-[#F26A1B]"
            >
              {siteContent.footer.credits.company}
            </a>
          </p>
          <a
            href={siteContent.footer.credits.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-[#6B7280] hover:text-[#F26A1B] transition-colors"
          >
            <span>{siteContent.footer.credits.displayUrl}</span>
            <span className="text-[10px] text-[#F26A1B]" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
