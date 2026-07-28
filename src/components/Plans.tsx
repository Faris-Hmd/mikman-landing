"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Plans() {
  const t = useTranslations("plans");
  const tiers = t.raw("tiers") as {
    name: string;
    price: string;
    period: string;
    features: string[];
    cta: string;
    highlight: boolean;
  }[];

  return (
    <section id="plans" className="py-24 sm:py-32 relative">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#3b74d6]/[0.03] rounded-full blur-[150px]" />
      </div>

      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-[#5b9cf5] text-xs font-extrabold uppercase tracking-[0.2em] mb-4">
            {t("heading")}
          </span>
          <h2 className="text-h2-size font-extrabold text-[#ececec] mb-4 tracking-tight">
            {t("heading")}
          </h2>
          <p className="text-[#8e9196] text-body-size max-w-xl mx-auto">
            {t("subheading")}
          </p>
        </AnimatedSection>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className={`relative rounded-2xl p-7 border transition-all duration-300 ${
                tier.highlight
                  ? "bg-[#3b74d6]/[0.07] border-[#3b74d6]/30 shadow-[0_0_40px_rgba(59,116,214,0.1)]"
                  : "bg-[#1a1a1a] border-white/[0.05] hover:border-[#3b74d6]/15 hover:bg-[#1e1e1e]"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[#3b74d6] text-white text-[11px] font-extrabold px-4 py-1 rounded-full shadow-[0_0_20px_rgba(59,116,214,0.4)] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" />
                  {t("upcoming")}
                </div>
              )}

              <div className="text-center mb-7">
                <h3 className="text-[#ececec] font-extrabold text-xl mb-3 tracking-tight">
                  {tier.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-black text-[#ececec] tracking-tight">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-[#8e9196] text-sm font-semibold">
                      {tier.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, fi) => (
                  <li
                    key={fi}
                    className="flex items-start gap-3 text-[#8e9196] text-small-size"
                  >
                    <svg
                      className={`w-5 h-5 mt-0.5 shrink-0 ${
                        tier.highlight
                          ? "text-[#5b9cf5]"
                          : "text-[#3b74d6]/60"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="font-semibold">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={
                  tier.cta === t("upcoming") || tier.name === "Enterprise"
                    ? "#"
                    : "https://app.mikman.net"
                }
                target={
                  tier.cta === t("upcoming") || tier.name === "Enterprise"
                    ? undefined
                    : "_blank"
                }
                rel={
                  tier.cta === t("upcoming") || tier.name === "Enterprise"
                    ? undefined
                    : "noopener noreferrer"
                }
                className={`block text-center py-3 rounded-xl font-bold transition-all duration-300 text-sm ${
                  tier.highlight
                    ? "bg-[#3b74d6] hover:bg-[#477de0] text-white shadow-[0_0_25px_rgba(59,116,214,0.25)] hover:shadow-[0_0_40px_rgba(59,116,214,0.4)] hover:scale-[1.02]"
                    : "border border-white/[0.08] text-[#8e9196] hover:text-[#ececec] hover:border-white/[0.15] hover:bg-white/[0.03]"
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