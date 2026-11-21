import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Statement } from "@/components/Statement";
import { AboutPurpose } from "@/components/AboutPurpose";
import { Journey } from "@/components/Journey";
import { ImpactStats } from "@/components/ImpactStats";
import { MarathonCity } from "@/components/MarathonCity";
import { Inclusivity } from "@/components/Inclusivity";
import { PartnerWithUs } from "@/components/PartnerWithUs";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col font-sans selection:bg-[#F26A1B] selection:text-white">
      {/* 5.1 Navbar */}
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* 5.2 Hero (full-viewport, full-bleed) */}
        <Hero />

        {/* 5.3 Statement section */}
        <Statement />

        {/* 5.4 About / Purpose: "Built on Purpose" */}
        <AboutPurpose />

        {/* 5.5 Our Journey: "Four Editions. One Mission." */}
        <Journey />

        {/* 5.6 Impact stats strip with count-up animations & record seals */}
        <ImpactStats />

        {/* Marathon City & Coastal Heritage (Marina Beachfront spotlight from PDF) */}
        <MarathonCity />

        {/* 5.7 Inclusive by Design (participation breakdown) */}
        <Inclusivity />

        {/* 5.8 Partner With Us (contact form + notify me box + roadmap) */}
        <PartnerWithUs />
      </main>

      {/* 5.9 Footer */}
      <Footer />
    </div>
  );
}
