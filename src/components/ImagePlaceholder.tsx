"use client";

import React from "react";
import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: string; // e.g. "aspect-[16/9]", "aspect-[4/3]", "aspect-[3/4]"
  tilt?: number; // tilt angle in degrees, e.g. -8, 6, 10
  className?: string;
  src?: string;
  alt?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  objectPosition?: string;
  blurDataURL?: string;
  placeholder?: "blur" | "empty";
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label,
  aspectRatio = "aspect-[16/10]",
  tilt = 0,
  className = "",
  src,
  alt = "Kalaignar Marathon showcase media",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  fill = true,
  objectPosition = "center",
  blurDataURL,
  placeholder,
}) => {
  const tiltStyle = tilt ? { transform: `rotate(${tilt}deg)` } : undefined;

  // If a real image src is provided, render Next.js Image
  if (src) {
    const defaultRounded = className.includes("rounded-") ? "" : "rounded-[20px]";
    return (
      <div
        style={tiltStyle}
        className={`relative overflow-hidden transition-transform duration-500 ease-out ${defaultRounded} ${aspectRatio} ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          fill={fill}
          priority={priority}
          sizes={sizes}
          placeholder={blurDataURL ? "blur" : (placeholder || "empty")}
          blurDataURL={blurDataURL}
          style={{ objectPosition }}
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
    );
  }

  // Placeholder box with soft gray gradient, subtle pattern, and clear dimensions label
  return (
    <div
      style={tiltStyle}
      className={`group relative overflow-hidden rounded-[20px] border border-black/[0.08] bg-gradient-to-br from-[#F8F8FA] via-[#EEEEF2] to-[#E3E3E7] shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] ${aspectRatio} ${className}`}
      aria-label={`Photo placeholder: ${label}`}
      role="img"
    >
      {/* Subtle architectural dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.12) 1px, transparent 0)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Soft gradient shimmer on hover */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      {/* Center icon & descriptive label */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center p-4 text-center">
        <div className="mb-2.5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/80 text-[#6B7280] shadow-xs backdrop-blur-xs transition-transform duration-300 group-hover:scale-110 group-hover:text-[#F26A1B]">
          <ImageIcon className="h-5 w-5" strokeWidth={1.75} />
        </div>
        <p className="max-w-[85%] text-xs font-medium tracking-tight text-[#4B5563] sm:text-sm">
          {label}
        </p>
        <span className="mt-1 text-[10px] font-semibold tracking-wider text-[#9CA3AF] uppercase">
          PHOTO PLACEHOLDER
        </span>
      </div>
    </div>
  );
};
