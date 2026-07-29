"use client";

import { useRef } from "react";
import { useLocale } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CtaBanner() {
  const locale = useLocale();
  const isAr = locale === "ar";

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const contentY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section ref={containerRef} className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          style={{ y: contentY }}
          className="relative rounded-2xl p-8 sm:p-12 bg-surface border border-border text-center space-y-5 overflow-hidden shadow-sm"
        >
          {/* Parallax Background image overlay */}
          <motion.div
            style={{ y: bgY }}
            className="absolute inset-0 -z-10 opacity-25 pointer-events-none select-none"
          >
            <img
              src="/images/network_mesh_bg.jpg"
              alt="Network Mesh Background"
              className="w-full h-[140%] object-cover"
            />
            <div className="absolute inset-0 bg-bg/85" />
          </motion.div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
            {isAr
              ? "ابدأ بإدارة راوترات ميكروتك وطباعة الكروت اليوم"
              : "Start Managing MikroTik Routers & Printing Vouchers Today"}
          </h2>

          <p className="text-text-muted text-base max-w-xl mx-auto font-normal">
            {isAr
              ? "افتح تطبيق مكمان مباشرة من المتصفح وتابع شبكتك وإيراداتك بسهولة."
              : "Open Mikman directly in your web browser on desktop or mobile."}
          </p>

          <div className="pt-2">
            <a
              href="https://app.mikman.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-extrabold px-8 py-3.5 rounded-xl transition-all hover:scale-105 shadow-sm text-base"
            >
              {isAr ? "افتح تطبيق مكمان" : "Launch Mikman App"}
              <svg className={`w-4 h-4 icon-arrow ${isAr ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
