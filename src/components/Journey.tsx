"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Trophy,
  Users,
  Heart,
  Calendar,
  MapPin,
  Globe,
  Sparkles,
} from "lucide-react";
import { siteContent, EditionInfo } from "@/data/content";
import { useMounted } from "@/hooks/useMounted";
import { ImagePlaceholder } from "./ImagePlaceholder";

export const Journey: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const mounted = useMounted();
  const [hoveredYear, setHoveredYear] = useState<string | null>(null);

  const cardVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 35 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section
      id="journey"
      aria-label="Historical Journey"
      className="py-24 md:py-36 bg-white border-b border-black/[0.05] w-full"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-1 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#6B7280]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F26A1B]" />
            {siteContent.journey.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#111111]">
            {siteContent.journey.title}
          </h2>
          <p className="mt-4 text-base sm:text-xl text-[#6B7280] leading-relaxed max-w-2xl mx-auto">
            {siteContent.journey.subtitle}
          </p>
        </div>

        {/* Bento-style Grid (2 Large + 2 Small) across Full Screen */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {siteContent.journey.editions.map((edition: EditionInfo, index: number) => {
            const isCentenary = edition.year === "2023";
            const is2022 = edition.year === "2022";
            const isHovered = hoveredYear === edition.year;

            // Bento spans
            let colSpan = "md:col-span-6 lg:col-span-6";
            if (isCentenary) colSpan = "md:col-span-12 lg:col-span-7";
            if (is2022) colSpan = "md:col-span-12 lg:col-span-5";

            return (
              <motion.article
                key={edition.year}
                custom={index}
                variants={cardVariants}
                initial={mounted ? "hidden" : false}
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                onMouseEnter={() => setHoveredYear(edition.year)}
                onMouseLeave={() => setHoveredYear(null)}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[26px] border border-black/[0.08] bg-[#FAFAFA] p-6 sm:p-8 xl:p-10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:border-black/20 ${colSpan} min-h-[460px]`}
              >
                {/* Background visual image placeholder */}
                <div className="absolute inset-0 z-0 h-full w-full opacity-35 group-hover:opacity-45 transition-opacity duration-500">
                  <ImagePlaceholder
                    label={edition.imageLabel}
                    aspectRatio="h-full w-full"
                    className="h-full w-full rounded-none border-none shadow-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/40" />
                </div>

                {/* Top Bar with Glass-Effect Chip */}
                <div className="relative z-10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
                      {edition.year}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#6B7280]">
                      / {edition.tag}
                    </span>
                  </div>

                  {/* Glass-effect label chip */}
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm font-bold text-[#111111] border border-black/[0.08] shadow-2xs">
                    {isCentenary ? (
                      <Sparkles className="w-4 h-4 text-[#F26A1B]" />
                    ) : (
                      <Globe className="w-4 h-4 text-[#F26A1B]" />
                    )}
                    <span>{edition.badge}</span>
                  </div>
                </div>

                {/* Middle details */}
                <div className="relative z-10 my-6">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#111111] tracking-tight mb-3">
                    {edition.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs sm:text-sm text-[#6B7280] mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-[#F26A1B]" />
                      {edition.periodOrDate}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#6B7280]" />
                      {edition.routeLocation}
                    </span>
                  </div>

                  <p className="text-xs sm:text-base text-[#4B5563] leading-relaxed">
                    {edition.impactDetails}
                  </p>
                </div>

                {/* Key Facts Pill Grid */}
                <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-black/[0.08]">
                  <div className="rounded-2xl bg-white/90 p-3 border border-black/[0.05] shadow-2xs">
                    <span className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-[#6B7280] uppercase">
                      <Users className="w-3.5 h-3.5 text-[#F26A1B]" />
                      Participation
                    </span>
                    <p className="mt-1 text-xs sm:text-sm font-bold text-[#111111]">
                      {edition.runners}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/90 p-3 border border-black/[0.05] shadow-2xs">
                    <span className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-[#6B7280] uppercase">
                      <Heart className="w-3.5 h-3.5 text-[#F26A1B]" />
                      Healthcare Funds
                    </span>
                    <p className="mt-1 text-xs sm:text-sm font-bold text-[#F26A1B]">
                      {edition.fundsRaised}
                    </p>
                  </div>

                  <div className="col-span-2 sm:col-span-1 rounded-2xl bg-white/90 p-3 border border-black/[0.05] shadow-2xs">
                    <span className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-[#6B7280] uppercase">
                      <Trophy className="w-3.5 h-3.5 text-[#F26A1B]" />
                      Record Seal
                    </span>
                    <p className="mt-1 text-[11px] sm:text-xs font-bold text-[#111111] line-clamp-1">
                      {edition.record.split(":")[0]}
                    </p>
                  </div>
                </div>

                {/* Expanded Disclosure */}
                <div
                  className={`relative z-10 mt-3 pt-2 text-xs font-medium text-[#6B7280] flex items-center justify-between transition-opacity duration-300 ${
                    isHovered ? "opacity-100" : "opacity-85"
                  }`}
                >
                  <span className="truncate">
                    Official Record: <strong className="text-[#111111]">{edition.record}</strong>
                  </span>
                  {edition.prizeMoney && (
                    <span className="shrink-0 text-[#F26A1B] font-bold ml-2">
                      {edition.prizeMoney}
                    </span>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
