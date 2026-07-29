"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import PhoneMockup from "./mockups/PhoneMockup";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isAr = locale === "ar";

  const { scrollY } = useScroll();

  const shapeY = useTransform(scrollY, [0, 800], [0, 40]);

  return (
    <section id="hero" className="relative pt-20 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-24 min-h-[auto] sm:min-h-[calc(100dvh-64px)] flex items-center overflow-hidden">
      {/* ==================== BACKGROUND DECORATIVE SHAPES ==================== */}
      
      {/* Large blurred gradient orbs */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[200px] h-[200px] bg-blue-600/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle, var(--tw-color-primary) 1px, transparent 1px)`,
        backgroundSize: '32px 32px'
      }} />

      {/* Floating geometric shapes */}
      {/* Large hollow circle top-left */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -left-20 w-[250px] h-[250px] rounded-full border border-primary/10 pointer-events-none hidden sm:block"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute -top-10 -left-10 w-[200px] h-[200px] rounded-full border border-dashed border-primary/8 pointer-events-none hidden sm:block"
      />

      {/* Dotted arc top-right */}
      <div className="absolute top-10 right-0 w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] pointer-events-none hidden sm:block">
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-20 text-primary stroke-current" fill="none">
          <path d="M 180 100 A 80 80 0 0 0 20 100" strokeWidth="1.5" strokeDasharray="4 6" />
          <path d="M 160 100 A 60 60 0 0 0 40 100" strokeWidth="1" strokeDasharray="3 5" />
          <path d="M 140 100 A 40 40 0 0 0 60 100" strokeWidth="1" strokeDasharray="2 4" />
        </svg>
      </div>

      {/* Diagonal lines bottom-right */}
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] pointer-events-none opacity-[0.06] hidden lg:block">
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary stroke-current" fill="none">
          <line x1="200" y1="0" x2="0" y2="200" strokeWidth="1" />
          <line x1="200" y1="40" x2="40" y2="200" strokeWidth="1" />
          <line x1="200" y1="80" x2="80" y2="200" strokeWidth="0.5" />
          <line x1="160" y1="0" x2="0" y2="160" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Small floating dots */}
      <motion.div
        animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] right-[10%] w-2 h-2 rounded-full bg-primary/30 pointer-events-none hidden sm:block"
      />
      <motion.div
        animate={{ y: [0, 12, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[60%] left-[5%] w-1.5 h-1.5 rounded-full bg-accent/30 pointer-events-none hidden sm:block"
      />
      <motion.div
        animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-[35%] left-[15%] w-2.5 h-2.5 rounded-full bg-blue-500/20 pointer-events-none"
      />

      {/* Small rotated squares */}
      <div className="absolute top-[25%] right-[8%] w-4 h-4 rounded-sm border border-primary/15 rotate-45 pointer-events-none hidden lg:block" />
      <div className="absolute bottom-[30%] left-[12%] w-3 h-3 rounded-sm border border-accent/15 -rotate-12 pointer-events-none hidden lg:block" />

      {/* Zigzag line left edge */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-[1px] pointer-events-none opacity-20 hidden lg:block" style={{
        background: `repeating-linear-gradient(to bottom, var(--tw-color-primary) 0px, var(--tw-color-primary) 8px, transparent 8px, transparent 16px)`
      }} />

      {/* Hexagon shape */}
      <div className="absolute top-[40%] right-[20%] pointer-events-none opacity-[0.06] hidden lg:block">
        <svg width="60" height="70" viewBox="0 0 60 70" className="text-primary stroke-current" fill="none" strokeWidth="1">
          <polygon points="30,0 60,17 60,52 30,70 0,52 0,17" />
        </svg>
      </div>

      {/* ==================== MAIN CONTENT ==================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 text-center lg:text-start">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-3 sm:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] sm:text-xs font-black text-primary tracking-widest uppercase">
                  {isAr ? "إدارة راوترات ميكروتك" : "MIKROTIK ROUTER MANAGER"}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-2 sm:mb-4 leading-[1.15] text-text-primary">
                <span className="text-primary">MIKMAN</span> — {t("title")}
              </h1>

              {/* Subtitle */}
              <p className="text-[11px] sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 mb-3 sm:mb-6 font-normal leading-relaxed text-text-muted">
                {t("subtitle")}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-2 sm:mb-4">
                <a
                  href="https://app.mikman.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-extrabold px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-all duration-300 text-[10px] sm:text-sm uppercase tracking-wider shadow-sm hover:shadow hover:scale-105 whitespace-nowrap"
                >
                  <span>{t("cta")}</span>
                  <svg
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ${isAr ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>

                <a
                  href="#showcase"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 border border-border text-text-primary hover:bg-surface/80 bg-surface/40 backdrop-blur-md px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-all text-[10px] sm:text-sm font-bold uppercase tracking-wider hover:border-primary/40 whitespace-nowrap"
                >
                  {t("secondary")}
                </a>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-5 mt-3 sm:mt-4">
                {[
                  { value: "99.9%", label: isAr ? "وقت التشغيل" : "Uptime" },
                  { value: "3,410+", label: isAr ? "كارت نشط" : "Vouchers" },
                  { value: "184", label: isAr ? "مستخدم نشط" : "Users" },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <span className="text-sm sm:text-lg font-black text-text-primary">{stat.value}</span>
                    <span className="text-[9px] sm:text-[11px] font-semibold text-text-muted uppercase tracking-wide">{stat.label}</span>
                    {i < 2 && <span className="w-1 h-1 rounded-full bg-border hidden sm:block" />}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Desktop Visual */}
           <div className="lg:col-span-5 flex justify-center items-center relative my-1 sm:my-0">
            <motion.div
              style={{ y: shapeY }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative flex items-center justify-center"
            >
              {/* Outer Pulse Ring */}
              <div className="hidden lg:block absolute w-[300px] h-[300px] rounded-full border border-primary/20 animate-ping opacity-25 pointer-events-none" />

              {/* Middle Glow Ring */}
              <div className="absolute w-[120px] h-[120px] sm:w-[280px] sm:h-[280px] rounded-full bg-primary/10 blur-xl pointer-events-none" />

              {/* Main Primary Gradient Circle */}
              <div className="hidden lg:flex w-[310px] h-[310px] rounded-full bg-gradient-to-tr from-primary-dark via-primary to-accent shadow-md relative items-center justify-center border border-primary-light/30 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-light via-accent to-transparent" />
                
                <svg className="absolute inset-0 w-full h-full opacity-25 text-white stroke-current" fill="none" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" r="130" strokeWidth="1.5" strokeDasharray="4 8" />
                  <circle cx="200" cy="200" r="170" strokeWidth="1" />
                  <path d="M-50,200 Q100,100 200,200 T450,200" strokeWidth="2" />
                  <path d="M-50,250 Q100,150 200,250 T450,250" strokeWidth="1.5" strokeDasharray="6 6" />
                </svg>

                <div className={`absolute inset-0 flex items-center justify-center ${isAr ? "rotate-[5deg]" : "-rotate-[5deg]"} hover:rotate-0 transition-transform duration-500`}>
                  <PhoneMockup screenType="dashboard" isAr={isAr} />
                </div>
              </div>

              {/* Floating Accent Shape 1 */}
              <div className="hidden lg:flex w-9 h-9 bg-primary border border-primary-light/40 rounded-xl rotate-12 absolute -top-3 right-4 shadow-sm z-20 items-center justify-center text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              {/* Floating Accent Shape 2 */}
              <div className="hidden lg:flex w-8 h-8 bg-primary-dark border border-primary-light/30 rounded-lg -rotate-12 absolute bottom-3 left-2 shadow-sm z-20 items-center justify-center text-white">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Floating Feature Mini-Card Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -left-10 top-[20%] z-30 hidden lg:flex items-center gap-2.5 bg-surface-card backdrop-blur-xl border border-border px-3 py-2 rounded-xl shadow-sm"
              >
                <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[9px] font-bold text-text-muted uppercase tracking-wider">Telemetry</div>
                  <div className="text-[11px] font-black text-text-primary flex items-center gap-1">
                    <span>99.9% Uptime</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </div>
              </motion.div>

              {/* Floating Feature Mini-Card Right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -right-10 bottom-[15%] z-30 hidden lg:flex items-center gap-2.5 bg-surface-card backdrop-blur-xl border border-border px-3 py-2 rounded-xl shadow-sm"
              >
                <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[9px] font-bold text-text-muted uppercase tracking-wider">Vouchers</div>
                  <div className="text-[11px] font-black text-text-primary">Instant Printing</div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}