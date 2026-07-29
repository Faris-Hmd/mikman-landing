"use client";

import { useTranslations, useLocale } from "next-intl";
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
    { href: "#hero", label: t("home") },
    { href: "#features", label: t("features") },
    { href: "#showcase", label: t("application") },
    { href: "#plans", label: t("plans") },
    { href: "#how-to-start", label: t("start") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow,padding,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-xl border-b border-border shadow-sm py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white border border-white/20 shrink-0">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="text-text-primary font-black text-lg tracking-tight">
              <span className="text-primary">MIK</span>MAN
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-0.5 bg-surface-card/60 border border-border rounded-full px-2.5 py-1 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-muted hover:text-text-primary hover:bg-surface transition-all text-[11px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href="https://app.mikman.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-primary to-blue-600 hover:from-primary-dark hover:to-blue-700 text-white font-bold px-3.5 py-1.5 rounded-lg transition-all duration-300 text-[11px] tracking-wider uppercase hover:scale-105"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {t("cta")}
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-1.5">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-text-primary p-2 rounded-lg border border-border bg-surface hover:bg-surface-card transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-surface-card/95 backdrop-blur-2xl rounded-xl mt-2 p-3 border border-border shadow-md space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-text-muted hover:text-text-primary hover:bg-surface py-2 px-3 rounded-lg text-xs font-semibold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://app.mikman.net"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="block bg-gradient-to-r from-primary to-blue-600 text-white font-bold py-2 px-3 rounded-lg text-xs text-center mt-2"
            >
              {t("cta")}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}