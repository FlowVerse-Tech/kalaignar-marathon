"use client";

import React from "react";
import { motion, useReducedMotion, TargetAndTransition } from "framer-motion";
import { Quote } from "lucide-react";
import { siteContent } from "@/data/content";
import { useMounted } from "@/hooks/useMounted";
import { ImagePlaceholder } from "./ImagePlaceholder";

export const Statement: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const mounted = useMounted();

  // Floating animation for tilted images
  const floatAnimationLeft: TargetAndTransition = prefersReducedMotion || !mounted
    ? {}
    : {
        y: [-8, 8, -8],
        rotate: [-8, -6, -8],
        transition: {
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        },
      };

  const floatAnimationRight: TargetAndTransition = prefersReducedMotion || !mounted
    ? {}
    : {
        y: [8, -8, 8],
        rotate: [8, 10, 8],
        transition: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        },
      };

  return (
    <section
      aria-label="Core Philosophy"
      className="relative bg-white py-24 md:py-36 xl:py-44 overflow-hidden border-b border-black/[0.05] w-full"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24 relative">
        {/* Subtle decorative quote mark in background */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-neutral-100 opacity-60 z-0"
          aria-hidden="true"
        >
          <Quote className="w-80 h-80 md:w-[480px] md:h-[480px]" strokeWidth={0.75} />
        </div>

        {/* Floating Tilted Photo Placeholder (Left edge) */}
        <div className="hidden xl:block absolute left-8 2xl:left-14 top-1/2 -translate-y-1/2 z-10 w-72 pointer-events-none">
          <motion.div animate={floatAnimationLeft} className="pointer-events-auto">
            <ImagePlaceholder
              label={siteContent.statement.leftPhoto.label}
              aspectRatio="aspect-[4/3]"
              tilt={-8}
              className="shadow-2xl border-white border-4"
            />
          </motion.div>
        </div>

        {/* Floating Tilted Photo Placeholder (Right edge) */}
        <div className="hidden xl:block absolute right-8 2xl:right-14 top-1/2 -translate-y-1/2 z-10 w-72 pointer-events-none">
          <motion.div animate={floatAnimationRight} className="pointer-events-auto">
            <ImagePlaceholder
              label={siteContent.statement.rightPhoto.label}
              aspectRatio="aspect-[4/3]"
              tilt={8}
              className="shadow-2xl border-white border-4"
            />
          </motion.div>
        </div>

        {/* Main Centered Statement - Expansive across full screen */}
        <div className="relative z-10 max-w-4xl lg:max-w-5xl 2xl:max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#6B7280] mb-8">
            <span className="h-2 w-2 rounded-full bg-[#F26A1B]" />
            The Marathon Creed
          </div>

          <motion.p
            initial={mounted ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#111111] leading-tight"
          >
            &ldquo;{siteContent.statement.quote}&rdquo;
          </motion.p>

          <motion.div
            initial={mounted ? { opacity: 0 } : false}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-10 flex flex-col items-center justify-center gap-2"
          >
            <div className="h-0.5 w-16 bg-[#F26A1B]" />
            <span className="text-sm font-bold tracking-widest uppercase text-[#111111]">
              Kalaignar Memorial International Marathon
            </span>
            <span className="text-xs sm:text-sm text-[#6B7280]">
              Preserving legacy through athletics, health & public service
            </span>
          </motion.div>
        </div>

        {/* Mobile / Tablet View: Tilted photos stacked neatly beneath quote */}
        <div className="xl:hidden mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <ImagePlaceholder
            label={siteContent.statement.leftPhoto.label}
            aspectRatio="aspect-[4/3]"
            tilt={-2}
            className="shadow-md"
          />
          <ImagePlaceholder
            label={siteContent.statement.rightPhoto.label}
            aspectRatio="aspect-[4/3]"
            tilt={2}
            className="shadow-md"
          />
        </div>
      </div>
    </section>
  );
};
