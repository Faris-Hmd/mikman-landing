"use client";

import { useLocale } from "next-intl";

export default function BrandCloud() {
  const locale = useLocale();
  const isAr = locale === "ar";

  const techStack = [
    {
      name: "MikroTik RouterOS",
      version: "v6 & v7",
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      name: "WireGuard VPN",
      version: "Encrypted",
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      name: "Cloud Zero-Touch",
      version: "Auto Sync",
      icon: (
        <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 00-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      name: "Hotspot & RADIUS",
      version: "Instant Vouchers",
      icon: (
        <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5z" />
        </svg>
      ),
    },
    {
      name: "Realtime Analytics",
      version: "Live Traffic",
      icon: (
        <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      name: "REST API Proxy",
      version: "High Speed",
      icon: (
        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-8 sm:py-10 bg-bg/80 border-y border-border backdrop-blur-2xl relative z-10 overflow-hidden transition-colors duration-200">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-indigo-600/5 to-cyan-600/5 opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <p className="text-[11px] font-black tracking-widest text-text-muted uppercase">
              {isAr
                ? "البنية التحتية المدعومة ومحرك السحابة"
                : "SUPPORTED INFRASTRUCTURE & CLOUD ENGINE"}
            </p>
          </div>
          <span className="text-[10px] font-semibold text-text-muted bg-surface-card px-2.5 py-1 rounded-full border border-border">
            {isAr ? "متوافق مع جميع راوترات MikroTik" : "Compatible with all MikroTik Routers"}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="relative group bg-surface-card border border-border hover:border-blue-500/40 rounded-xl p-3.5 flex flex-col items-center justify-between text-center transition-all duration-300 hover:bg-surface hover:shadow-sm"
            >
              <div className="p-2 rounded-lg bg-surface border border-border group-hover:border-blue-500/30 group-hover:scale-110 transition-all duration-300 mb-2">
                {tech.icon}
              </div>
              <div>
                <h4 className="text-xs font-bold text-text-primary group-hover:text-primary transition-colors">
                  {tech.name}
                </h4>
                <p className="text-[10px] font-semibold text-text-muted mt-0.5">
                  {tech.version}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


