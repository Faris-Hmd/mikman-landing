"use client";

import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <footer className="bg-bg border-t border-border py-12 text-text-muted text-sm relative z-10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <a href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white rotate-3 border border-white/20 shrink-0">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span className="text-text-primary font-black text-lg tracking-tight">
                <span className="text-primary">MIK</span>MAN
              </span>
            </a>
            <p className="text-xs text-text-muted max-w-sm">
              {t("tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 font-bold text-xs text-text-muted">
            <a
              href="https://app.mikman.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              {t("links.app")}
            </a>
            <a href="#features" className="hover:text-primary transition-colors">
              {isAr ? "المميزات" : "Features"}
            </a>
            <a href="#showcase" className="hover:text-primary transition-colors">
              {isAr ? "واجهة التحكم" : "Showcase"}
            </a>
            <a href="#plans" className="hover:text-primary transition-colors">
              {isAr ? "الخطط" : "Plans"}
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-text-muted/70 font-medium">
          {t("copyright")}
        </div>
      </div>
    </footer>
  );
}