"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-[#3b74d6]/[0.06] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-[#3b74d6]/[0.04] rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3b74d6]/[0.03] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 bg-[#3b74d6]/10 border border-[#3b74d6]/20 text-[#5b9cf5] text-sm font-semibold px-5 py-2 rounded-full">
            <span className="w-1.5 h-1.5 bg-[#3b74d6] rounded-full animate-pulse" />
            {t("badge")}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-hero font-black tracking-tight mb-6 leading-[1.1]"
        >
          <span className="text-gradient">
            MIKMAN
          </span>
          <br />
          <span className="text-[#ececec]">{t("title")}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-[#8e9196] text-body-size max-w-xl mx-auto mb-12 leading-relaxed"
        >
          {t("subtitle")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://app.mikman.net"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-[#3b74d6] hover:bg-[#477de0] text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 text-lg shadow-[0_0_30px_rgba(59,116,214,0.3)] hover:shadow-[0_0_50px_rgba(59,116,214,0.45)] hover:scale-[1.03]"
          >
            {t("cta")}
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
          <a
            href="#features"
            className="inline-flex items-center gap-2 border border-white/[0.08] text-[#8e9196] hover:text-[#ececec] hover:border-white/[0.15] hover:bg-white/[0.03] px-8 py-4 rounded-2xl transition-all duration-300 text-lg font-semibold"
          >
            {t("secondary")}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>

        {/* Stats / Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 sm:gap-12"
        >
          {[
            { value: "MikroTik", label: "RouterOS Support" },
            { value: "REST API", label: "Secure Connection" },
            { value: "24/7", label: "Real-time Monitoring" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-[#ececec] font-extrabold text-sm tracking-wide uppercase">
                {stat.value}
              </div>
              <div className="text-[#8e9196] text-xs mt-1 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#141414] to-transparent pointer-events-none" />
    </section>
  );
}