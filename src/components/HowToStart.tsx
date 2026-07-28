"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function HowToStart() {
  const t = useTranslations("howToStart");
  const steps = t.raw("steps") as {
    step: string;
    title: string;
    description: string;
  }[];

  return (
    <section id="how-to-start" className="py-24 sm:py-32 relative">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-[#5b9cf5] text-xs font-extrabold uppercase tracking-[0.2em] mb-4">
            {t("heading")}
          </span>
          <h2 className="text-h2-size font-extrabold text-[#ececec] mb-4 tracking-tight">
            {t("heading")}
          </h2>
          <p className="text-[#8e9196] text-body-size">
            {t("subheading")}
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#3b74d6]/30 via-[#3b74d6]/15 to-transparent" />

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative flex items-start gap-6 sm:gap-10"
              >
                {/* Step Circle */}
                <div className="relative z-10 w-16 h-16 shrink-0 bg-[#1a1a1a] border-2 border-[#3b74d6]/30 rounded-2xl flex items-center justify-center text-[#5b9cf5] font-extrabold text-2xl shadow-[0_0_20px_rgba(59,116,214,0.1)]">
                  {step.step}
                </div>

                {/* Content */}
                <div className="pt-1">
                  <h3 className="text-[#ececec] font-extrabold text-xl mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-[#8e9196] text-body-size leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="https://app.mikman.net"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-[#3b74d6] hover:bg-[#477de0] text-white font-bold px-10 py-4 rounded-2xl transition-all duration-300 text-lg shadow-[0_0_30px_rgba(59,116,214,0.25)] hover:shadow-[0_0_50px_rgba(59,116,214,0.4)] hover:scale-[1.03]"
          >
            {t("steps.0.title")}
            <svg
              className="w-5 h-5 icon-arrow group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}