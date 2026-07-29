"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

const stepIcons = [
  // Step 1: Browser/Globe
  <svg key="0" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>,
  // Step 2: Router/Server
  <svg key="1" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>,
  // Step 3: Voucher/Print
  <svg key="2" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5z" />
  </svg>,
];

export default function HowToStart() {
  const t = useTranslations("howToStart");
  const locale = useLocale();
  const isAr = locale === "ar";
  const steps = t.raw("steps") as { step: string; title: string; description: string }[];

  return (
    <section id="how-to-start" className="py-20 sm:py-24 relative overflow-hidden bg-bg">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary font-extrabold text-xs tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {t("eyebrow")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary mb-4 tracking-tight">
            {t("heading")}
          </h2>
          <p className="text-text-muted text-sm sm:text-base max-w-xl mx-auto font-normal leading-relaxed">
            {t("subheading")}
          </p>
        </motion.div>

        {/* Steps — Vertical on mobile, horizontal on desktop */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            {steps.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step number circle */}
                <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white font-black text-lg sm:text-xl flex items-center justify-center shadow-md mb-5 border-4 border-bg">
                  {idx + 1}
                </div>

                {/* Icon */}
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary mb-4">
                  {stepIcons[idx]}
                </div>

                {/* Title */}
                <h3 className="text-text-primary font-extrabold text-lg sm:text-xl mb-2">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted text-sm leading-relaxed font-normal max-w-xs">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}