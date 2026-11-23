"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import { siteContent, ImpactStat } from "@/data/content";
import { useMounted } from "@/hooks/useMounted";
import { ImagePlaceholder } from "./ImagePlaceholder";

// Stat counter hook that counts smoothly up to target value
const AnimatedCounter: React.FC<{
  target: number;
  isNumeric: boolean;
  prefix?: string;
  suffix?: string;
  displayOverride?: string;
}> = ({ target, isNumeric, prefix = "", suffix = "", displayOverride }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || !isNumeric) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target, isNumeric]);

  if (!isNumeric && displayOverride) {
    return (
      <span ref={ref} className="font-extrabold tracking-tight">
        {displayOverride}
        {suffix && <span className="ml-1 text-sm sm:text-base font-bold">{suffix}</span>}
      </span>
    );
  }

  return (
    <span ref={ref} className="font-extrabold tracking-tight tabular-nums">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const ImpactStats: React.FC = () => {
  const mounted = useMounted();

  return (
    <section
      id="impact"
      aria-label="Verified Impact"
      className="py-24 md:py-36 bg-[#F5F5F5] border-b border-black/[0.05] w-full"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#6B7280] shadow-2xs border border-black/[0.05]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F26A1B]" />
            {siteContent.impactStrip.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#111111]">
            {siteContent.impactStrip.title}
          </h2>
          <p className="mt-3 text-sm sm:text-lg text-[#6B7280] max-w-xl mx-auto">
            Empirical numbers verified across independent audit, government receipts, and international record seals.
          </p>
        </div>

        {/* 4 Stats Strip spanning full width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {siteContent.impactStrip.stats.map((stat: ImpactStat, index: number) => (
            <motion.div
              key={index}
              initial={mounted ? { opacity: 0, y: 25 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-[26px] bg-white p-8 xl:p-10 shadow-xs border border-black/[0.06] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#F26A1B] flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#F26A1B]" />
                  Verified Metric
                </span>
                <div className="mt-5 text-4xl sm:text-5xl xl:text-6xl font-extrabold text-[#111111] tracking-tight">
                  <AnimatedCounter
                    target={stat.value}
                    isNumeric={stat.isNumeric}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    displayOverride={stat.displayOverride}
                  />
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-black/[0.06]">
                <h3 className="text-base sm:text-lg font-bold text-[#111111]">
                  {stat.label}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B7280] mt-0.5 font-medium">
                  {stat.sublabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recognised By Row with Grayscale Logo Placeholders */}
        <div className="mt-20 pt-16 border-t border-black/[0.08]">
          <div className="text-center mb-10">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#6B7280] flex items-center justify-center gap-2">
              <Award className="w-4 h-4 text-[#F26A1B]" />
              {siteContent.impactStrip.recognisedByTitle}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
            {siteContent.impactStrip.recordBodies.map((body, index) => {
              const logo =
                body.name.includes("Guinness")
                  ? siteContent.images.recordGuinness
                  : body.name.includes("Asia Book")
                  ? siteContent.images.recordAsiaBook
                  : siteContent.images.recordWorldRecordsUnion;

              return (
                <motion.div
                  key={index}
                  initial={mounted ? { opacity: 0 } : false}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group flex flex-col items-center rounded-[24px] bg-white/90 p-6 xl:p-8 border border-black/[0.05] shadow-2xs hover:shadow-md transition-all text-center"
                >
                  {/* Grayscale Logo Seal */}
                  <div className="w-full max-w-[240px] h-20 mb-4 grayscale group-hover:grayscale-0 transition-all duration-300 flex items-center justify-center">
                    <ImagePlaceholder
                      label={body.placeholderLabel}
                      aspectRatio="aspect-[2/1]"
                      className="border-none shadow-none bg-transparent w-full h-full rounded-none"
                      src={logo.src}
                      alt={logo.alt}
                      objectPosition={logo.objectPosition}
                      objectFit="contain"
                      sizes="240px"
                    />
                  </div>
                  <h4 className="text-sm font-bold text-[#111111]">
                    {body.name}
                  </h4>
                  <p className="text-xs text-[#6B7280] mt-1 max-w-xs">
                    {body.recordTitle}
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
