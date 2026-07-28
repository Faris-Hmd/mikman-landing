"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: t("features") },
    { href: "#plans", label: t("plans") },
    { href: "#how-to-start", label: t("start") },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#141414]/85 backdrop-blur-xl border-b border-white/[0.04] shadow-[0_1px_0_rgba(59,116,214,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-[#3b74d6] flex items-center justify-center shadow-[0_0_15px_rgba(59,116,214,0.3)] group-hover:shadow-[0_0_25px_rgba(59,116,214,0.5)] transition-shadow duration-300">
              <svg className="w-5 h-5 text-white -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-[#ececec] font-extrabold text-xl tracking-tight">
              <span className="text-[#3b74d6]">MIK</span>MAN
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#8e9196] hover:text-[#ececec] transition-colors duration-200 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
            <div className="w-px h-5 bg-white/[0.08] mx-2" />
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href="https://app.mikman.net"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex items-center gap-2 bg-[#3b74d6] hover:bg-[#2d5cb8] text-white font-bold px-5 py-2 rounded-xl transition-all duration-200 text-sm shadow-[0_0_20px_rgba(59,116,214,0.25)] hover:shadow-[0_0_30px_rgba(59,116,214,0.4)] hover:scale-[1.02]"
            >
              {t("cta")}
              <svg
                className={`w-4 h-4 icon-arrow ${isRtl ? "rotate-180" : ""}`}
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
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-[#ececec] p-2 rounded-lg hover:bg-white/[0.04] transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1a1a1a]/95 backdrop-blur-xl rounded-2xl mt-2 p-4 shadow-2xl border border-white/[0.06]"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#8e9196] hover:text-[#ececec] hover:bg-white/[0.04] transition-all duration-200 py-3 px-4 rounded-xl text-sm font-semibold"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://app.mikman.net"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-[#3b74d6] hover:bg-[#2d5cb8] text-white font-bold px-5 py-3 rounded-xl transition-all duration-200 text-sm text-center mt-2 shadow-[0_0_20px_rgba(59,116,214,0.2)]"
              >
                {t("cta")}
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}