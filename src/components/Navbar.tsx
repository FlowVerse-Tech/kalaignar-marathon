"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShieldCheck } from "lucide-react";
import { siteContent } from "@/data/content";
import { Button } from "./Button";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Run on initial mount to catch any pre-scrolled page states
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-black/[0.06] shadow-sm py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24 flex items-center justify-between">
          {/* Left: Brand Title Lockup Image */}
          <Link
            href="#hero"
            className="group flex items-center focus:outline-hidden"
            aria-label={siteContent.brand.name}
          >
            <div
              className={`relative transition-all duration-300 rounded-2xl flex items-center justify-center ${
                scrolled
                  ? "bg-transparent h-12 w-32 sm:h-14 sm:w-40 lg:h-16 lg:w-48"
                  : "bg-white/95 backdrop-blur-md px-3 py-1.5 shadow-md border border-white/60 h-13 w-36 sm:h-15 sm:w-44 lg:h-17 lg:w-52"
              }`}
            >
              <Image
                src={siteContent.brand.titleLockup}
                alt={siteContent.brand.name}
                fill
                sizes="(max-width: 640px) 144px, 208px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Center Links (Desktop) */}
          <nav
            aria-label="Main Navigation"
            className={`hidden md:flex items-center gap-1 rounded-full px-4 py-1.5 transition-colors duration-200 ${
              scrolled
                ? "bg-neutral-100/90 border border-black/[0.05]"
                : "bg-black/35 backdrop-blur-md border border-white/15"
            }`}
          >
            {siteContent.navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-center gap-1.5 px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 ${
                  scrolled
                    ? "text-[#4B5563] hover:text-[#111111] hover:bg-white"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="text-[10px] opacity-60 font-mono">
                  0{index + 1}
                </span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Right CTA Button (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant={scrolled ? "orange" : "white"}
              size="sm"
              isRegistrationCTA={true}
            />
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
              scrolled
                ? "bg-neutral-100 text-[#111111]"
                : "bg-white/20 text-white backdrop-blur-md"
            }`}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-white p-6 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-neutral-100">
            <div className="relative h-12 w-36">
              <Image
                src={siteContent.brand.titleLockup}
                alt={siteContent.brand.name}
                fill
                sizes="144px"
                className="object-contain object-left"
              />
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-neutral-100 text-[#111111]"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-2 mt-6">
            {siteContent.navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-3 rounded-xl text-sm font-semibold text-[#111111] hover:bg-neutral-100 transition-colors"
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono text-[#F26A1B]">
                  0{index + 1}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-neutral-100 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-xs text-[#6B7280]">
            <ShieldCheck className="w-4 h-4 text-[#F26A1B]" />
            <span>Guinness World Record Holder</span>
          </div>
          <Button
            variant="orange"
            size="md"
            isRegistrationCTA={true}
            className="w-full justify-between"
          />
        </div>
      </div>
    </>
  );
};
