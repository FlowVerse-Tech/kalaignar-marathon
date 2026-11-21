"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { siteContent } from "@/data/content";

// High quality crisp SVG icons for social channels
const SocialIcon: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case "Instagram":
      return (
        <svg
          className="w-4 h-4 fill-none stroke-currentColor stroke-2"
          viewBox="0 0 24 24"
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
        <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "YouTube":
    case "Youtube":
      return (
        <svg
          className="w-4 h-4 fill-none stroke-currentColor stroke-2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <path d="m10 15 5-3-5-3z" fill="currentColor" />
        </svg>
      );
    case "Facebook":
      return (
        <svg
          className="w-4 h-4 fill-none stroke-currentColor stroke-2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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
      className="bg-white text-[#111111] pt-20 pb-12 border-t border-black/[0.06] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Four Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-black/[0.06]">
          {/* Col 1: Brand & Blurb (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-[#111111]">
                  {siteContent.brand.shortName}
                </span>
                <span className="h-2 w-2 rounded-full bg-[#F26A1B]" />
              </div>
              <p className="mt-1 text-[10px] font-bold tracking-widest uppercase text-[#F26A1B]">
                {siteContent.brand.motto}
              </p>
              <p className="mt-4 text-xs sm:text-sm text-[#6B7280] leading-relaxed max-w-sm">
                {siteContent.footer.aboutBlurb}
              </p>
            </div>

            {/* Social Icons Squares */}
            <div className="mt-6 flex items-center gap-2.5">
              {siteContent.footer.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Official ${social.name} page`}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-[#FAFAFA] text-[#111111] transition-all hover:border-[#F26A1B] hover:bg-[#F26A1B] hover:text-white"
                >
                  <SocialIcon name={social.iconName} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Pages (Smooth-scroll links) (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#6B7280]">
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
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-4">
              Reference
            </h4>
            <ul className="space-y-2.5 text-xs text-[#6B7280]">
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
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
              {siteContent.footer.newsletter.heading}
            </h4>
            <p className="text-xs text-[#6B7280] mb-4 leading-relaxed">
              {siteContent.footer.newsletter.subtext}
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2.5 text-xs font-semibold text-emerald-800 border border-emerald-200">
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
                  className="w-full rounded-full border border-black/10 bg-[#FAFAFA] pl-4 pr-12 py-2.5 text-xs text-[#111111] placeholder:text-[#9CA3AF] focus:border-[#F26A1B] focus:bg-white focus:outline-hidden transition-all"
                />
                <button
                  type="submit"
                  aria-label="Submit newsletter subscription"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-[#F26A1B] text-white hover:bg-[#DC5A10] transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <p className="mt-3 text-[10px] text-[#9CA3AF] leading-tight">
              {siteContent.footer.disclaimer}
            </p>
          </div>
        </div>

        {/* Giant Wordmark "Kalaignar Marathon" with Orange-to-White Vertical Gradient Fade */}
        <div className="pt-12 pb-4 text-center select-none overflow-hidden">
          <div className="relative">
            <h2 className="text-[10vw] sm:text-[11vw] font-black tracking-tighter leading-none uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#F26A1B]/70 via-[#F26A1B]/20 to-white/0">
              {siteContent.footer.wordmark}
            </h2>
          </div>
        </div>

        {/* Small Bottom Copyright Line */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9CA3AF]">
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
      </div>
    </footer>
  );
};
