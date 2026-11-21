"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Bell, CheckCircle2, Building2, User, Mail, MessageSquare, Sparkles } from "lucide-react";
import { siteContent } from "@/data/content";
import { ImagePlaceholder } from "./ImagePlaceholder";

export const PartnerWithUs: React.FC = () => {
  // Form state
  const [formState, setFormState] = useState({
    name: "",
    org: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Notify Me state
  const [notifyEmail, setNotifyEmail] = useState("");
  const [notifySubmitted, setNotifySubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;

    // TODO: connect to backend/email service (e.g. Resend, SendGrid, or API route)
    // console.log("Partner inquiry submitted:", formState);

    setFormSubmitted(true);
  };

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!notifyEmail) return;

    // TODO: connect to announcement list subscription API
    // console.log("Notification subscription requested:", notifyEmail);

    setNotifySubmitted(true);
  };

  return (
    <section
      id="partner"
      aria-label="Partner With Us"
      className="py-24 md:py-36 bg-[#F5F5F5] border-b border-black/[0.05] relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 relative">
        {/* Four Tilted Rounded Image Placeholders Around the Center Text (Desktop) */}
        <div className="hidden xl:block">
          {/* Top-Left tilted photo */}
          <div className="absolute -top-10 -left-10 w-52 pointer-events-none z-0">
            <ImagePlaceholder
              label={siteContent.partnerWithUs.photoPlaceholders[0].label}
              aspectRatio="aspect-[4/3]"
              tilt={-8}
              className="border-white border-4 shadow-xl"
            />
          </div>

          {/* Top-Right tilted photo */}
          <div className="absolute -top-10 -right-10 w-52 pointer-events-none z-0">
            <ImagePlaceholder
              label={siteContent.partnerWithUs.photoPlaceholders[1].label}
              aspectRatio="aspect-[4/3]"
              tilt={7}
              className="border-white border-4 shadow-xl"
            />
          </div>

          {/* Bottom-Left tilted photo */}
          <div className="absolute top-[380px] -left-12 w-52 pointer-events-none z-0">
            <ImagePlaceholder
              label={siteContent.partnerWithUs.photoPlaceholders[2].label}
              aspectRatio="aspect-[4/3]"
              tilt={6}
              className="border-white border-4 shadow-xl"
            />
          </div>

          {/* Bottom-Right tilted photo */}
          <div className="absolute top-[380px] -right-12 w-52 pointer-events-none z-0">
            <ImagePlaceholder
              label={siteContent.partnerWithUs.photoPlaceholders[3].label}
              aspectRatio="aspect-[4/3]"
              tilt={-7}
              className="border-white border-4 shadow-xl"
            />
          </div>
        </div>

        {/* Center Title and Subtext with Two Hand-Drawn Curved SVG Arrows */}
        <div className="relative z-10 max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-xs font-semibold tracking-wider uppercase text-[#6B7280] shadow-2xs border border-black/[0.05]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F26A1B]" />
            {siteContent.partnerWithUs.eyebrow}
          </span>

          <div className="relative mt-4">
            {/* Left curved hand-drawn SVG arrow */}
            <div className="hidden sm:block absolute -left-16 -top-2 w-16 h-16 text-[#F26A1B] opacity-75">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full transform -rotate-12"
              >
                <path
                  d="M10 20 C 40 10, 70 40, 85 75"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray="4 2"
                />
                <path
                  d="M72 75 L 85 75 L 85 62"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Right curved hand-drawn SVG arrow */}
            <div className="hidden sm:block absolute -right-16 -top-2 w-16 h-16 text-[#F26A1B] opacity-75">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full transform scale-x-[-1] -rotate-12"
              >
                <path
                  d="M10 20 C 40 10, 70 40, 85 75"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray="4 2"
                />
                <path
                  d="M72 75 L 85 75 L 85 62"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#111111] leading-tight">
              {siteContent.partnerWithUs.title}
            </h2>
          </div>

          <p className="mt-4 text-base sm:text-lg text-[#6B7280] leading-relaxed">
            {siteContent.partnerWithUs.subtitle}
          </p>
        </div>

        {/* Strategic Digital Roadmap Card (From PDF Strategy: Phase 1, Phase 2, Phase 3) */}
        <div className="relative z-10 max-w-4xl mx-auto mb-16 rounded-[24px] bg-white p-6 sm:p-8 border border-black/[0.06] shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-[#F26A1B]" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111]">
              Institutional Platform Roadmap
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl bg-[#FAFAFA] p-4 border border-black/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#F26A1B]">Phase 01</span>
                <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">Active</span>
              </div>
              <h4 className="text-sm font-bold text-[#111111]">Digital Legacy & Archive</h4>
              <p className="mt-1 text-xs text-[#6B7280]">
                Verified records, Guinness documentation, charitable allocations & stakeholder credibility showcase.
              </p>
            </div>

            <div className="rounded-xl bg-[#FAFAFA] p-4 border border-black/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#6B7280]">Phase 02</span>
                <span className="text-[10px] font-semibold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">In Preparation</span>
              </div>
              <h4 className="text-sm font-bold text-[#111111]">Marathon Management</h4>
              <p className="mt-1 text-xs text-[#6B7280]">
                High-capacity registrations, automated bib assignment, RFID chip timing results & verified e-certificates.
              </p>
            </div>

            <div className="rounded-xl bg-[#FAFAFA] p-4 border border-black/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#6B7280]">Phase 03</span>
                <span className="text-[10px] font-semibold bg-neutral-200 text-neutral-700 px-2 py-0.5 rounded-full">Upcoming</span>
              </div>
              <h4 className="text-sm font-bold text-[#111111]">International Expansion</h4>
              <p className="mt-1 text-xs text-[#6B7280]">
                Global delegation registrations, sports tourism integrations & world-class multi-city media syndication.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form + Registrations Coming Soon Box */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Main Contact Form */}
          <div className="lg:col-span-7 rounded-[28px] bg-white p-8 sm:p-10 shadow-sm border border-black/[0.06]">
            <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight mb-2">
              {siteContent.partnerWithUs.form.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#6B7280] mb-6">
              Connect directly with our administration and sponsorship directorate.
            </p>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl bg-emerald-50 p-6 text-emerald-900 border border-emerald-200"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold">Message Received</h4>
                    <p className="mt-1 text-xs leading-relaxed text-emerald-800">
                      {siteContent.partnerWithUs.form.successMessage}
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="partner-name"
                    className="block text-xs font-semibold text-[#111111] mb-1.5"
                  >
                    Your Name <span className="text-[#F26A1B]">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                    <input
                      id="partner-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder={siteContent.partnerWithUs.form.namePlaceholder}
                      className="w-full rounded-full border border-black/10 bg-[#FAFAFA] pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#111111] placeholder:text-[#9CA3AF] focus:border-[#F26A1B] focus:bg-white focus:outline-hidden transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="partner-org"
                    className="block text-xs font-semibold text-[#111111] mb-1.5"
                  >
                    Organisation / Sponsor Entity
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                    <input
                      id="partner-org"
                      type="text"
                      value={formState.org}
                      onChange={(e) =>
                        setFormState({ ...formState, org: e.target.value })
                      }
                      placeholder={siteContent.partnerWithUs.form.orgPlaceholder}
                      className="w-full rounded-full border border-black/10 bg-[#FAFAFA] pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#111111] placeholder:text-[#9CA3AF] focus:border-[#F26A1B] focus:bg-white focus:outline-hidden transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="partner-email"
                    className="block text-xs font-semibold text-[#111111] mb-1.5"
                  >
                    Official Email <span className="text-[#F26A1B]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                    <input
                      id="partner-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder={siteContent.partnerWithUs.form.emailPlaceholder}
                      className="w-full rounded-full border border-black/10 bg-[#FAFAFA] pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#111111] placeholder:text-[#9CA3AF] focus:border-[#F26A1B] focus:bg-white focus:outline-hidden transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="partner-message"
                    className="block text-xs font-semibold text-[#111111] mb-1.5"
                  >
                    Message / Proposal Scope
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3 w-4 h-4 text-[#9CA3AF]" />
                    <textarea
                      id="partner-message"
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder={siteContent.partnerWithUs.form.messagePlaceholder}
                      className="w-full rounded-2xl border border-black/10 bg-[#FAFAFA] pl-10 pr-4 py-3 text-xs sm:text-sm text-[#111111] placeholder:text-[#9CA3AF] focus:border-[#F26A1B] focus:bg-white focus:outline-hidden transition-all resize-none"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#F26A1B] px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#DC5A10] active:scale-[0.98] transition-all"
                  >
                    <span>{siteContent.partnerWithUs.form.submitBtnText}</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#F26A1B] transition-transform group-hover:translate-x-0.5">
                      <Send className="w-3.5 h-3.5" />
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Box: Registrations Coming Soon & Notify Me */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-[28px] bg-white p-8 sm:p-10 shadow-sm border border-black/[0.06]">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 text-[#F26A1B] px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-4">
                <Bell className="w-3.5 h-3.5" />
                {siteContent.partnerWithUs.notifyBox.badge}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight mb-2">
                {siteContent.partnerWithUs.notifyBox.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed mb-6">
                {siteContent.partnerWithUs.notifyBox.description}
              </p>

              {/* Notification input */}
              {notifySubmitted ? (
                <div className="rounded-xl bg-orange-50 p-4 border border-[#F26A1B]/20 text-[#111111]">
                  <p className="text-xs font-bold text-[#F26A1B]">Subscribed Successfully</p>
                  <p className="text-[11px] text-[#6B7280] mt-0.5">
                    {siteContent.partnerWithUs.notifyBox.successMessage}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleNotifySubmit} className="space-y-3">
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                    <input
                      type="email"
                      required
                      value={notifyEmail}
                      onChange={(e) => setNotifyEmail(e.target.value)}
                      placeholder={siteContent.partnerWithUs.notifyBox.emailPlaceholder}
                      className="w-full rounded-full border border-black/10 bg-[#FAFAFA] pl-10 pr-4 py-2.5 text-xs text-[#111111] placeholder:text-[#9CA3AF] focus:border-[#F26A1B] focus:bg-white focus:outline-hidden"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#111111] hover:bg-neutral-800 text-white font-semibold py-2.5 text-xs transition-colors shadow-xs"
                  >
                    {siteContent.partnerWithUs.notifyBox.btnText}
                  </button>
                </form>
              )}
            </div>

            {/* Credibility Note */}
            <div className="mt-8 pt-6 border-t border-black/[0.06] text-[11px] text-[#6B7280] leading-normal">
              <strong className="text-[#111111]">Compliance Note:</strong> All forthcoming marathon announcements and partner agreements are subject to official regulatory authorizations and public safety protocols.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
