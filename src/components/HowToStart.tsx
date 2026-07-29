"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

export default function HowToStart() {
  const t = useTranslations("howToStart");
  const locale = useLocale();
  const isAr = locale === "ar";
  const steps = t.raw("steps") as { step: string; title: string; description: string }[];

  return (
    <section id="how-to-start" className="py-24 relative overflow-hidden bg-bg transition-colors duration-200">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold text-xs tracking-widest uppercase mb-2 block">
            {t("eyebrow")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary mb-4 tracking-tight">
            {t("heading")}
          </h2>
          <p className="text-text-muted text-base max-w-xl mx-auto font-normal leading-relaxed">
            {t("subheading")}
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((s, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative bg-surface-card backdrop-blur-xl border border-border rounded-2xl p-8 text-center hover:border-primary/50 hover:bg-surface transition-all duration-300 shadow-sm flex flex-col items-center justify-between"
              >
                {/* Step Connector Line on Desktop */}
                {idx < steps.length - 1 && (
                  <div
                    className={`hidden md:block absolute top-14 ${
                      isAr ? "-left-4 bg-gradient-to-l" : "-right-4 bg-gradient-to-r"
                    } w-8 h-[2px] from-primary/50 to-transparent z-10 pointer-events-none`}
                  />
                )}

                <div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-blue-600 text-white font-black text-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300 border border-white/20">
                    0{idx + 1}
                  </div>

                  <h3 className="text-text-primary font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed font-normal">
                    {s.description}
                  </p>
                </div>

                <div className="mt-8 inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-lg border border-primary/20">
                  <span>{s.step || `Step 0${idx + 1}`}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}