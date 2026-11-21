"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Bell } from "lucide-react";
import { siteConfig } from "@/config/config";

interface ButtonProps {
  children?: React.ReactNode;
  variant?: "orange" | "white" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isRegistrationCTA?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  icon?: "arrowUpRight" | "arrowRight" | "bell" | "none";
  showTooltip?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "orange",
  size = "md",
  isRegistrationCTA = false,
  href,
  onClick,
  className = "",
  disabled = false,
  icon = "arrowUpRight",
  showTooltip = true,
}) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  // If this is a registration CTA, consult global config
  const isRegCTA = isRegistrationCTA;
  const isRegistrationLocked = isRegCTA && !siteConfig.registrationOpen;

  // Determine label text
  let label = children;
  if (isRegCTA) {
    label = siteConfig.registrationOpen
      ? children || "Register Now"
      : "Coming Soon";
  }

  const effectiveDisabled = disabled || isRegistrationLocked;

  // Size classes
  const sizeClasses = {
    sm: "text-xs pl-4 pr-1.5 py-1.5 gap-2",
    md: "text-sm pl-5 pr-2 py-2.5 gap-3",
    lg: "text-base pl-7 pr-2.5 py-3.5 gap-4",
  }[size];

  const chipSize = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-9 h-9",
  }[size];

  const iconSize = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-4 h-4",
  }[size];

  // Base styling for MotionRun signature pill
  let variantClasses = "";
  let chipClasses = "";

  if (variant === "orange") {
    if (effectiveDisabled) {
      variantClasses =
        "bg-[#F26A1B]/80 text-white cursor-not-allowed shadow-xs opacity-90";
      chipClasses = "bg-white/90 text-[#F26A1B]";
    } else {
      variantClasses =
        "bg-[#F26A1B] text-white hover:bg-[#DC5A10] active:scale-[0.98] shadow-sm hover:shadow-[0_8px_20px_rgba(242,106,27,0.25)]";
      chipClasses =
        "bg-white text-[#F26A1B] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5";
    }
  } else if (variant === "white") {
    if (effectiveDisabled) {
      variantClasses =
        "bg-white/90 text-[#111111]/70 border border-black/[0.08] cursor-not-allowed shadow-xs";
      chipClasses = "bg-[#111111]/10 text-[#111111]";
    } else {
      variantClasses =
        "bg-white text-[#111111] hover:bg-neutral-50 border border-black/[0.08] active:scale-[0.98] shadow-xs hover:shadow-md";
      chipClasses =
        "bg-[#F26A1B] text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5";
    }
  } else if (variant === "outline") {
    variantClasses =
      "bg-transparent text-[#111111] border border-black/15 hover:border-black/30 hover:bg-black/[0.02]";
    chipClasses = "bg-black/[0.06] text-[#111111]";
  } else {
    variantClasses = "bg-transparent text-[#111111] hover:bg-neutral-100";
    chipClasses = "bg-black/[0.05] text-[#111111]";
  }

  const renderIcon = () => {
    if (icon === "none") return null;
    if (icon === "bell") return <Bell className={iconSize} />;
    if (icon === "arrowRight") return <ArrowRight className={iconSize} />;
    return <ArrowUpRight className={iconSize} />;
  };

  const buttonContent = (
    <>
      <span className="font-semibold tracking-tight">{label}</span>
      {icon !== "none" && (
        <span
          className={`flex items-center justify-center rounded-full shrink-0 ${chipSize} ${chipClasses}`}
        >
          {renderIcon()}
        </span>
      )}
    </>
  );

  return (
    <div
      className="relative inline-flex items-center"
      onMouseEnter={() => effectiveDisabled && showTooltip && setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
      onFocus={() => effectiveDisabled && showTooltip && setTooltipVisible(true)}
      onBlur={() => setTooltipVisible(false)}
    >
      {effectiveDisabled ? (
        <button
          type="button"
          disabled
          aria-disabled="true"
          className={`group inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 select-none ${sizeClasses} ${variantClasses} ${className}`}
        >
          {buttonContent}
        </button>
      ) : isRegCTA && siteConfig.registrationOpen ? (
        <Link
          href={siteConfig.registrationUrl || "#"}
          className={`group inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 ${sizeClasses} ${variantClasses} ${className}`}
        >
          {buttonContent}
        </Link>
      ) : href ? (
        <Link
          href={href}
          className={`group inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 ${sizeClasses} ${variantClasses} ${className}`}
        >
          {buttonContent}
        </Link>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className={`group inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 ${sizeClasses} ${variantClasses} ${className}`}
        >
          {buttonContent}
        </button>
      )}

      {/* Tooltip for Disabled / Coming Soon */}
      {effectiveDisabled && showTooltip && tooltipVisible && (
        <div
          role="tooltip"
          className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#111111] px-3 py-1.5 text-xs font-medium text-white shadow-xl animate-in fade-in zoom-in-95"
        >
          {siteConfig.registrationComingSoonTooltip}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#111111]" />
        </div>
      )}
    </div>
  );
};
