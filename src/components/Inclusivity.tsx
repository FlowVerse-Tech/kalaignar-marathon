"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Users, Heart, Award } from "lucide-react";
import { siteContent } from "@/data/content";
import { useMounted } from "@/hooks/useMounted";
import { ImagePlaceholder } from "./ImagePlaceholder";

export const Inclusivity: React.FC = () => {
  const mounted = useMounted();

  return (
    <section
      id="inclusivity"
      aria-label="Inclusivity and Community"
      className="py-24 md:py-36 bg-white border-b border-black/[0.05] w-full"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-1 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#6B7280]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F26A1B]" />
            {siteContent.inclusivity.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#111111]">
            {siteContent.inclusivity.title}
          </h2>
        </div>

        {/* Clean Two-Column Layout across Full Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
          {/* Left Column: Narrative & Highlight */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <p className="text-base sm:text-lg xl:text-xl text-[#6B7280] leading-relaxed">
                {siteContent.inclusivity.description}
              </p>

              {/* Highlighted Line Box */}
              <div className="mt-8 rounded-[24px] bg-[#F5F5F5] border-l-4 border-[#F26A1B] p-6 shadow-2xs">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-[#F26A1B] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#111111]">
                      National Service & Civic Participation
                    </h3>
                    <p className="mt-1.5 text-sm sm:text-base font-medium text-[#111111] leading-relaxed">
                      &ldquo;{siteContent.inclusivity.highlight}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inclusivity Photo Placeholder */}
            <div className="mt-10">
              <ImagePlaceholder
                label={siteContent.inclusivity.photo.label}
                alt={siteContent.images.inclusivityParticipants.alt}
                aspectRatio="aspect-[16/10]"
                className="shadow-md"
                src={siteContent.images.inclusivityParticipants.src}
                objectPosition={siteContent.images.inclusivityParticipants.objectPosition}
                blurDataURL={siteContent.images.inclusivityParticipants.blurDataURL}
                sizes={siteContent.images.inclusivityParticipants.sizes}
              />
            </div>
          </div>

          {/* Right Column: Three Stat Cards from 2023 Edition */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {siteContent.inclusivity.stats.map((stat, index) => {
              const isTransgender = index === 2;

              return (
                <motion.div
                  key={index}
                  initial={mounted ? { opacity: 0, x: 25 } : false}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`rounded-[26px] p-6 sm:p-8 xl:p-10 border transition-all duration-300 hover:shadow-lg ${
                    isTransgender
                      ? "bg-gradient-to-r from-orange-50/50 via-white to-white border-[#F26A1B]/30"
                      : "bg-[#FAFAFA] border-black/[0.06]"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xs border border-black/5 text-[#F26A1B]">
                        {index === 0 && <Users className="w-7 h-7" />}
                        {index === 1 && <Heart className="w-7 h-7" />}
                        {index === 2 && <Award className="w-7 h-7" />}
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                          Category Breakdown
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                          {stat.category}
                        </h3>
                      </div>
                    </div>

                    <div className="sm:text-right">
                      <span className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#111111] tracking-tight">
                        {stat.number}
                      </span>
                      <span className="block text-xs font-semibold text-[#6B7280]">
                        Participants
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs sm:text-base text-[#4B5563] leading-relaxed pt-4 border-t border-black/[0.06]">
                    {stat.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
