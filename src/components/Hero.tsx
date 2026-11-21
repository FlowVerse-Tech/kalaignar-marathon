"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Calendar, Award } from "lucide-react";
import { siteContent } from "@/data/content";
import { useMounted } from "@/hooks/useMounted";
import { Button } from "./Button";
import { ImagePlaceholder } from "./ImagePlaceholder";

export const Hero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const mounted = useMounted();

  // Animation variants
  const lineVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.15,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        delay: 0.4,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="hero"
      aria-label="Hero Showcase"
      className="relative min-h-[95vh] lg:min-h-screen w-full flex items-end overflow-hidden pb-16 pt-32 lg:pt-36"
    >
      {/* Background Hero Photo Placeholder with subtle slow zoom */}
      <motion.div
        className="absolute inset-0 z-0 h-full w-full"
        initial={false}
        animate={
          prefersReducedMotion || !mounted
            ? { scale: 1 }
            : {
                scale: [1, 1.04, 1],
                transition: {
                  duration: 24,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut" as const,
                },
              }
        }
      >
        <ImagePlaceholder
          label={siteContent.hero.bgPlaceholderLabel}
          aspectRatio="h-full w-full"
          className="h-full w-full rounded-none border-none shadow-none"
        />
      </motion.div>

      {/* Dark gradient overlay for ultra-crisp typography & contrast */}
      <div
        className="pointer-events-none absolute inset-0 z-1 bg-gradient-to-t from-black/95 via-black/55 to-black/35"
        aria-hidden="true"
      />

      {/* Subtle radial lighting accent */}
      <div
        className="pointer-events-none absolute inset-0 z-1 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#F26A1B] via-transparent to-transparent"
        aria-hidden="true"
      />

      {/* Expansive Full-Screen Container */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24 flex flex-col justify-between min-h-[75vh]">
        {/* Top bar over hero: Trust badge (far-left) & Floating edition card (far-right) */}
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
          {/* Top-Left Trust Badge: Avatar stack + 73,000+ registered runners */}
          <motion.div
            initial={mounted ? { opacity: 0, y: -20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 text-white shadow-lg"
          >
            {/* Avatar stack placeholders */}
            <div className="flex -space-x-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#F26A1B] text-[10px] font-bold text-white ring-2 ring-white/50">
                73K
              </span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-neutral-800 text-[10px] font-bold text-white ring-2 ring-white/50">
                GWR
              </span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white ring-2 ring-white/50">
                TN
              </span>
            </div>
            <div className="text-xs sm:text-sm">
              <span className="font-bold text-white">
                {siteContent.hero.badgeStack.count}
              </span>{" "}
              <span className="text-white/80 font-normal">
                {siteContent.hero.badgeStack.text}
              </span>
            </div>
          </motion.div>

          {/* Top-Right Floating White Card */}
          <motion.div
            variants={cardVariants}
            initial={mounted ? "hidden" : false}
            animate="visible"
            className="w-full sm:w-auto max-w-sm rounded-[22px] bg-white/95 backdrop-blur-md p-4 text-[#111111] shadow-2xl border border-white/60 transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-center gap-3">
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-black/5 bg-neutral-100">
                <ImagePlaceholder
                  label={siteContent.hero.latestEditionCard.thumbnailLabel}
                  aspectRatio="h-full w-full"
                  className="rounded-xl border-none shadow-none text-[8px]"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#F26A1B]/10 px-2 py-0.5 text-[10px] font-bold text-[#F26A1B] uppercase tracking-wide">
                    <Award className="h-3 w-3" />
                    {siteContent.hero.latestEditionCard.badge}
                  </span>
                </div>
                <h2 className="mt-1 text-xs sm:text-sm font-bold text-[#111111] truncate">
                  {siteContent.hero.latestEditionCard.title}
                </h2>
                <div className="mt-1 flex flex-col gap-0.5 text-[11px] text-[#6B7280]">
                  <span className="flex items-center gap-1 font-medium">
                    <Calendar className="h-3 w-3 text-[#F26A1B] shrink-0" />
                    {siteContent.hero.latestEditionCard.date}
                  </span>
                  <span className="flex items-center gap-1 truncate">
                    <MapPin className="h-3 w-3 text-[#6B7280] shrink-0" />
                    {siteContent.hero.latestEditionCard.location}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Hero Content: Expansive Headline, Sub-paragraph, CTA */}
        <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mt-16 sm:mt-24">
          {/* Eyebrow badge */}
          <motion.div
            custom={0}
            variants={lineVariants}
            initial={mounted ? "hidden" : false}
            animate="visible"
            className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md px-4 py-1.5 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 border border-white/20"
          >
            <span className="h-2 w-2 rounded-full bg-[#F26A1B]" />
            {siteContent.hero.motto}
          </motion.div>

          {/* Large Headline spanning across */}
          <motion.h1
            custom={1}
            variants={lineVariants}
            initial={mounted ? "hidden" : false}
            animate="visible"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05]"
          >
            {siteContent.hero.headline}
          </motion.h1>

          {/* Sub-paragraph */}
          <motion.p
            custom={2}
            variants={lineVariants}
            initial={mounted ? "hidden" : false}
            animate="visible"
            className="mt-6 text-lg sm:text-xl md:text-2xl text-neutral-200 leading-relaxed max-w-3xl font-normal"
          >
            {siteContent.hero.subparagraph}
          </motion.p>

          {/* Signature Orange CTA Pill */}
          <motion.div
            custom={3}
            variants={lineVariants}
            initial={mounted ? "hidden" : false}
            animate="visible"
            className="mt-8 flex flex-wrap items-center gap-5"
          >
            <Button
              variant="orange"
              size="lg"
              isRegistrationCTA={true}
              className="text-base sm:text-lg px-8 py-4"
            >
              {siteContent.hero.ctaText}
            </Button>
            <Link
              href="#about"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-white/80 hover:text-white px-4 py-2 transition-colors"
            >
              <span>Explore Track Record</span>
              <span className="text-white/50">↓</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
