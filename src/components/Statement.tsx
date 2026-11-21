"use client";

import React from "react";
import { motion, useReducedMotion, TargetAndTransition } from "framer-motion";
import { Quote } from "lucide-react";
import { siteContent } from "@/data/content";
import { ImagePlaceholder } from "./ImagePlaceholder";

export const Statement: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  // Floating animation for tilted images
  const floatAnimationLeft: TargetAndTransition = prefersReducedMotion
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

  const floatAnimationRight: TargetAndTransition = prefersReducedMotion
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
      className="relative bg-white py-24 md:py-36 overflow-hidden border-b border-black/[0.05]"
    >
      <div className="max-w-[1200px] mx-auto px-6 relative">
        {/* Subtle decorative quote mark in background */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-neutral-100 opacity-60 z-0"
          aria-hidden="true"
        >
          <Quote className="w-64 h-64 md:w-96 md:h-96" strokeWidth={1} />
        </div>

        {/* Floating Tilted Photo Placeholder (Left edge) */}
        <div className="hidden lg:block absolute -left-12 top-1/2 -translate-y-1/2 z-10 w-64 pointer-events-none">
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
        <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 z-10 w-64 pointer-events-none">
          <motion.div animate={floatAnimationRight} className="pointer-events-auto">
            <ImagePlaceholder
              label={siteContent.statement.rightPhoto.label}
              aspectRatio="aspect-[4/3]"
              tilt={8}
              className="shadow-2xl border-white border-4"
            />
          </motion.div>
        </div>

        {/* Main Centered Statement */}
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-[#6B7280] mb-8">
            <span className="h-2 w-2 rounded-full bg-[#F26A1B]" />
            The Marathon Creed
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium tracking-tight text-[#111111] leading-snug md:leading-tight"
          >
            &ldquo;{siteContent.statement.quote}&rdquo;
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 flex flex-col items-center justify-center gap-2"
          >
            <div className="h-0.5 w-12 bg-[#F26A1B]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#111111]">
              Kalaignar Memorial International Marathon
            </span>
            <span className="text-xs text-[#6B7280]">
              Preserving legacy through athletics, health & public service
            </span>
          </motion.div>
        </div>

        {/* Mobile View: Tilted photos stacked neatly beneath quote without cluttering */}
        <div className="lg:hidden mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
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
