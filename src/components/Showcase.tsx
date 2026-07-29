"use client";

import { useState, useEffect, useCallback } from "react";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import LaptopMockup from "./mockups/LaptopMockup";
import PhoneMockup from "./mockups/PhoneMockup";

const screens = [
  "dashboard",
  "vouchers",
  "revenue",
  "profiles",
  "batch",
  "batch-detail",
  "routers",
  "hotspot",
] as const;

type ScreenType = (typeof screens)[number];

const screenTitles: Record<ScreenType, { en: string; ar: string }> = {
  dashboard: { en: "Dashboard", ar: "لوحة التحكم" },
  vouchers: { en: "Generate Vouchers", ar: "طباعة الكروت" },
  revenue: { en: "Revenue Analytics", ar: "تحليلات الإيرادات" },
  profiles: { en: "Speed Profiles", ar: "بروفايلات السرعة" },
  batch: { en: "Batch History", ar: "سجل الدفعات" },
  "batch-detail": { en: "Batch Detail", ar: "تفاصيل الدفعة" },
  routers: { en: "Router Selection", ar: "اختيار الراوتر" },
  hotspot: { en: "Hotspot Template", ar: "قالب الهوتسبوت" },
};

export default function Showcase() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeTab = screens[activeIndex];

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % screens.length);
  }, []);

  // Auto-rotation
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, [goToNext, isPaused]);

  return (
    <section
      id="showcase"
      className="py-8 sm:py-16 lg:py-24 relative overflow-hidden bg-bg transition-colors duration-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4 sm:mb-8"
        >
          <span className="text-primary font-bold text-[10px] sm:text-xs tracking-widest uppercase mb-1 block">
            {isAr ? "التطبيق" : "APPLICATION"}
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-text-primary mb-1.5 sm:mb-3 tracking-tight">
            {isAr ? "شاشات التطبيق الحقيقية" : "Inside the Mikman App"}
          </h2>
          <p className="text-text-muted text-xs sm:text-sm max-w-xl mx-auto font-normal leading-relaxed">
            {isAr
              ? "استعرض واجهة مكمان لإدارة الكروت والإيرادات بالجنيه والأجهزة على أجهزة اللابتوب والجوال."
              : "See how Mikman looks across desktop and mobile screens."}
          </p>
        </motion.div>

        {/* Current Screen Title */}
        <AnimatePresence mode="wait">
          <motion.h3
            key={activeTab}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
            className="text-center text-xs sm:text-sm font-black text-text-primary mb-3 sm:mb-4 tracking-wide"
          >
            {isAr ? screenTitles[activeTab].ar : screenTitles[activeTab].en}
          </motion.h3>
        </AnimatePresence>

        {/* Mockup Showcase Section */}
        <div className="relative max-w-5xl mx-auto pt-1 pb-4 sm:pb-8">
          {/* Left Arrow */}
          <button
            onClick={() => setActiveIndex((prev) => (prev - 1 + screens.length) % screens.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-surface-card border border-border hover:border-primary/40 text-text-muted hover:text-primary flex items-center justify-center transition-all duration-200 shadow-sm -translate-x-1 sm:-translate-x-4"
            aria-label="Previous screen"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-surface-card border border-border hover:border-primary/40 text-text-muted hover:text-primary flex items-center justify-center transition-all duration-200 shadow-sm translate-x-1 sm:translate-x-4"
            aria-label="Next screen"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Mobile Screen View: Phone Mockup as primary view (hidden on md+) */}
          <div className="block md:hidden relative z-10 max-w-[230px] xs:max-w-[260px] mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <PhoneMockup screenType={activeTab} isAr={isAr} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop Screen View: Laptop Mockup (hidden on small screens < md) */}
          <div className="hidden md:block relative z-10 scale-[0.95] lg:scale-100 origin-top">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <LaptopMockup screenType={activeTab} isAr={isAr} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Floating Phone Mockup beside Laptop (Desktop md+ only) */}
          <div className={`absolute -bottom-4 sm:-bottom-6 ${isAr ? "-left-2 sm:left-4" : "-right-2 sm:right-4"} z-20 hidden md:block`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <PhoneMockup screenType={activeTab} isAr={isAr} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
          {screens.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-5 h-1.5 bg-primary"
                  : "w-1.5 h-1.5 bg-border hover:bg-primary/40"
              }`}
              aria-label={`Screen ${index + 1}`}
            />
          ))}
        </div>

        {/* Web App CTA */}
        <div className="mt-4 sm:mt-6 flex justify-center">
          <a
            href="https://app.mikman.net"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-primary to-blue-600 hover:from-primary-dark hover:to-blue-700 text-white font-extrabold px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-xl transition-all duration-300 shadow-sm hover:scale-105 group text-xs sm:text-sm uppercase tracking-wider"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <span>{isAr ? "افتح تطبيق مكمان (ويب)" : "Open Mikman Web App"}</span>
            <svg className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1 ${isAr ? "rotate-180 group-hover:-translate-x-1" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}