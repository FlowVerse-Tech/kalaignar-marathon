"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HeartHandshake, Award, Users, CheckCircle2 } from "lucide-react";
import { siteContent, PillarCard } from "@/data/content";
import { useMounted } from "@/hooks/useMounted";
import { ImagePlaceholder } from "./ImagePlaceholder";

export const AboutPurpose: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const mounted = useMounted();
  const [activePillar, setActivePillar] = useState<string | null>(null);

  const cardVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  const getPillarIcon = (id: string) => {
    switch (id) {
      case "commemoration":
        return <Award className="w-5 h-5" />;
      case "charity":
        return <HeartHandshake className="w-5 h-5" />;
      case "inclusivity":
        return <Users className="w-5 h-5" />;
      default:
        return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  const getPillarImage = (id: string) => {
    switch (id) {
      case "commemoration":
        return siteContent.images.purposeCommemoration;
      case "charity":
        return siteContent.images.purposeCharity;
      case "inclusivity":
        return siteContent.images.purposeInclusivity;
      default:
        return undefined;
    }
  };

  return (
    <section
      id="about"
      aria-label="Built on Purpose"
      className="py-24 md:py-36 bg-white border-b border-black/[0.05] w-full"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24">
        {/* Centered Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-1 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#6B7280]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F26A1B]" />
            {siteContent.about.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#111111]">
            {siteContent.about.title}
          </h2>
          <p className="mt-4 text-base sm:text-xl text-[#6B7280] leading-relaxed max-w-2xl mx-auto">
            {siteContent.about.subtitle}
          </p>
        </div>

        {/* 3 Staggered-Height Rounded Image Cards spanning Full Screen Width */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-10 items-end">
          {siteContent.about.pillars.map((pillar: PillarCard, index: number) => {
            const isHovered = activePillar === pillar.id;
            const pillarImage = getPillarImage(pillar.id);

            return (
              <motion.div
                key={pillar.id}
                custom={index}
                variants={cardVariants}
                initial={mounted ? "hidden" : false}
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                onMouseEnter={() => setActivePillar(pillar.id)}
                onMouseLeave={() => setActivePillar(null)}
                className={`group relative flex flex-col justify-end overflow-hidden rounded-[24px] border border-black/[0.08] bg-neutral-100 shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl ${pillar.heightClass}`}
              >
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 z-0 h-full w-full">
                  <ImagePlaceholder
                    label={pillar.imageLabel}
                    aspectRatio="h-full w-full"
                    className="h-full w-full rounded-none border-none shadow-none"
                    src={pillarImage?.src}
                    alt={pillarImage?.alt}
                    objectPosition={pillarImage?.objectPosition}
                    blurDataURL={pillarImage?.blurDataURL}
                    sizes={pillarImage?.sizes}
                  />
                  {/* Subtle darkening overlay so text is crisp */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 w-full p-6 sm:p-8 text-white flex flex-col justify-end">
                  {/* Top pill / badge */}
                  <div className="mb-auto pt-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md px-3.5 py-1 text-xs sm:text-sm font-semibold text-white border border-white/20">
                      {getPillarIcon(pillar.id)}
                      {pillar.tagline}
                    </span>
                  </div>

                  {/* Text details */}
                  <div className="mt-6">
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm text-neutral-200 leading-relaxed transition-all duration-300 ${
                        isHovered
                          ? "opacity-100 max-h-40"
                          : "md:opacity-90 md:max-h-24 opacity-100 max-h-none"
                      }`}
                    >
                      {pillar.description}
                    </p>
                  </div>
                </div>

                {/* Colored Label Bar at the Bottom */}
                <div
                  className={`relative z-20 w-full px-6 py-4 flex items-center justify-between font-bold text-xs sm:text-sm uppercase tracking-wider ${pillar.barColorClass}`}
                >
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-white" />
                    {pillar.title}
                  </span>
                  <span className="text-[11px] font-mono opacity-80">
                    Pillar 0{index + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Strategic Healthcare Beneficiaries Row spanning full width */}
        <div className="mt-16 rounded-[24px] bg-[#F5F5F5] p-6 sm:p-10 border border-black/[0.05]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F26A1B]">
                Direct Public Health Impact
              </span>
              <h4 className="mt-1 text-xl sm:text-2xl font-bold text-[#111111]">
                Every Rupee Directed to Verified Institutions
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                All editions maintain zero administrative diversion. 100% of registration collections are transferred directly to state healthcare infrastructure and disaster relief.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto shrink-0">
              <div className="rounded-2xl bg-white p-4 border border-black/5 shadow-2xs">
                <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider">2020–2021</p>
                <p className="text-sm font-bold text-[#111111] mt-0.5">TN CM Relief Fund</p>
                <p className="text-xs text-[#6B7280]">COVID-19 Public Care</p>
              </div>
              <div className="rounded-2xl bg-white p-4 border border-black/5 shadow-2xs">
                <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider">2022</p>
                <p className="text-sm font-bold text-[#111111] mt-0.5">ICH Egmore</p>
                <p className="text-xs text-[#6B7280]">Inpatient Parents Shelter</p>
              </div>
              <div className="rounded-2xl bg-white p-4 border border-black/5 shadow-2xs">
                <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider">2023</p>
                <p className="text-sm font-bold text-[#111111] mt-0.5">Royapettah Hospital</p>
                <p className="text-xs text-[#6B7280]">Cancer Treatment Centre</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
