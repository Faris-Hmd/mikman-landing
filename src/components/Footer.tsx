"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-white/[0.04] py-10 relative">
      {/* Top divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-[#3b74d6]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + Tagline */}
          <div className="text-center md:text-left">
            <span className="text-[#ececec] font-extrabold text-lg tracking-tight">
              <span className="text-[#3b74d6]">MIK</span>MAN
            </span>
            <p className="text-[#8e9196] text-small-size mt-1 font-semibold">
              {t("tagline")}
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://app.mikman.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8e9196] hover:text-[#ececec] transition-colors duration-200 text-small-size font-semibold"
            >
              {t("links.app")}
            </a>
            <a
              href="mailto:contact@mikman.net"
              className="text-[#8e9196] hover:text-[#ececec] transition-colors duration-200 text-small-size font-semibold"
            >
              {t("links.contact")}
            </a>
          </div>

          {/* Copyright */}
          <p className="text-[#8e9196] text-small-size font-semibold">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}