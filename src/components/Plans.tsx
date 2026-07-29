"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

export default function Plans() {
  const t = useTranslations("plans");
  const locale = useLocale();
  const isAr = locale === "ar";
  const tiers = t.raw("tiers") as {
    name: string;
    price: string;
    period: string;
    features: string[];
    cta: string;
    highlight: boolean;
  }[];

  return (
    <section id="plans" className="py-20 sm:py-24 relative overflow-hidden bg-bg/90 transition-colors duration-200">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-extrabold text-xs tracking-widest uppercase mb-3">
            {t("eyebrow")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary mb-4 tracking-tight">
            {t("heading")}
          </h2>
          <p className="text-text-muted text-sm sm:text-base max-w-xl mx-auto font-normal leading-relaxed">
            {t("subheading")}
          </p>
        </motion.div>

        {/* Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`relative rounded-2xl p-7 border backdrop-blur-2xl flex flex-col justify-between transition-all duration-300 group overflow-hidden shadow-sm ${
                tier.highlight
                  ? "bg-surface-card border-blue-500/60 ring-1 ring-blue-500/40 hover:border-blue-400"
                  : "bg-surface-card border-border hover:border-primary/40 hover:bg-surface"
              }`}
            >
              {/* Top Accent Line */}
              <div
                className={`absolute top-0 inset-x-0 h-1 transition-opacity ${
                  tier.highlight
                    ? "bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 opacity-100"
                    : "bg-gradient-to-r from-slate-500 to-slate-700 opacity-0 group-hover:opacity-100"
                }`}
              />

              {/* Popular Badge */}
              {tier.highlight && (
                <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  {isAr ? "الأكثر اختيارًا" : "Most Popular"}
                </div>
              )}

              <div>
                <div className="mb-6 pt-2">
                  <h3 className="text-text-primary font-extrabold text-xl mb-2">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mt-4">
                    <span className="text-3xl sm:text-4xl font-black tracking-tight text-text-primary">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-text-muted text-xs font-bold uppercase tracking-wider">
                        {tier.period}
                      </span>
                    )}
                  </div>
                </div>

                <div className="h-px bg-border w-full mb-6" />

                <ul className="space-y-3.5 mb-8 text-xs sm:text-sm text-text-primary">
                  {tier.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-md bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5 text-blue-400">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-medium leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://app.mikman.net"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm ${
                  tier.highlight
                    ? "bg-blue-600 hover:bg-blue-500 text-white"
                    : "border border-border bg-surface text-text-primary hover:bg-surface-card hover:border-primary/40"
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}