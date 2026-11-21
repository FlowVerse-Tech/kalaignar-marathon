"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Compass, Waves, Landmark } from "lucide-react";
import { ImagePlaceholder } from "./ImagePlaceholder";

export const MarathonCity: React.FC = () => {
  return (
    <section
      id="marathon-city"
      aria-label="Marathon City and Coastal Heritage"
      className="py-20 md:py-28 bg-white border-b border-black/[0.05]"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="rounded-[28px] bg-gradient-to-br from-neutral-900 to-neutral-950 text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle background ambient glow */}
          <div
            className="pointer-events-none absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#F26A1B] opacity-15 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Narrative */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-neutral-300 border border-white/10 mb-6">
                <Compass className="w-3.5 h-3.5 text-[#F26A1B]" />
                The Stage: Marina Beachfront, Chennai
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                Where Historic Coastlines Meet World-Record Athleticism
              </h3>

              <p className="mt-4 text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed font-normal">
                Connecting the timeless spirit of marathon running with the cultural capital of Tamil Nadu. Running alongside the Bay of Bengal along Kamarajar Salai, runners trace an iconic coastal corridor flanked by heritage monuments, memorial statues, and sunrise vistas along the world’s second-longest urban beach.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#F26A1B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Marina Coast</h4>
                    <p className="text-[11px] text-neutral-400">Iconic coastal sunrise route</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Waves className="w-4 h-4 text-[#F26A1B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Flat Fast Course</h4>
                    <p className="text-[11px] text-neutral-400">Optimal sea-level running</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Landmark className="w-4 h-4 text-[#F26A1B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Historic Heritage</h4>
                    <p className="text-[11px] text-neutral-400">Cultural epicenter of Chennai</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Coastal Course Photo Placeholder */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <ImagePlaceholder
                  label="Marina Beachfront sunrise race route, 1000×700"
                  aspectRatio="aspect-[4/3]"
                  tilt={3}
                  className="shadow-2xl border-2 border-white/20"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
