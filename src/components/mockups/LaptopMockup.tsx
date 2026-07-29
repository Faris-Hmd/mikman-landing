"use client";

import React, { useState, useEffect } from "react";

interface LaptopMockupProps {
  screenType?: "dashboard" | "vouchers" | "revenue" | "profiles" | "batch" | "batch-detail" | "routers" | "hotspot";
  isAr?: boolean;
}

export default function LaptopMockup({ screenType = "dashboard", isAr = false }: LaptopMockupProps) {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setIsLight(theme === "light");
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  const t = {
    bg: isLight ? "#f9fafb" : "#141414",
    fg: isLight ? "#111827" : "#ececec",
    primary: isLight ? "#2563eb" : "#3b74d6",
    accent: isLight ? "#10b981" : "#22c55e",
    secondary: isLight ? "#f3f4f6" : "#242424",
    cardBg: isLight ? "#ffffff" : "#1e1e1e",
    glassBorder: isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.08)",
    textMuted: isLight ? "#6b7280" : "#8e9196",
    headerBg: isLight ? "rgba(249,250,251,0.96)" : "rgba(20,20,20,0.96)",
  };

  const dir = isAr ? "rtl" : "ltr";
  const barData = [35, 55, 45, 85, 65, 100, 80, 95, 70, 90, 60, 75, 88, 50, 92, 68, 82, 44, 77, 55, 95, 70, 85, 48, 66, 98, 72, 56, 80, 90];

  const pageTitle =
    screenType === "dashboard" ? (isAr ? "لوحة التحكم" : "Dashboard") :
    screenType === "vouchers" ? (isAr ? "الكروت" : "Vouchers") :
    screenType === "revenue" ? (isAr ? "الإيرادات" : "Revenue") :
    screenType === "profiles" ? (isAr ? "البروفايلات" : "Profiles") :
    screenType === "batch" ? (isAr ? "الدفعات" : "Batches") :
    screenType === "batch-detail" ? (isAr ? "تفاصيل الدفعة" : "Batch Detail") :
    (isAr ? "اختيار الراوتر" : "Router Selection");

  const sidebarLinks = [
    { label: isAr ? "لوحة التحكم" : "Dashboard", active: screenType === "dashboard", icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" },
    { label: isAr ? "الإيرادات" : "Revenue", active: screenType === "revenue", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
    { label: isAr ? "الكروت" : "Vouchers", active: screenType === "vouchers", icon: "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5z" },
    { label: isAr ? "البروفايلات" : "Profiles", active: screenType === "profiles", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
    { label: isAr ? "الدفعات" : "Batches", active: screenType === "batch" || screenType === "batch-detail", icon: "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" },
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto select-none">
      <div className={`relative rounded-2xl p-2 sm:p-2.5 shadow-xl border transition-colors duration-300 ${
        isLight ? "bg-slate-200 border-slate-300 shadow-slate-300/40" : "bg-[#0f172a] border-slate-800/90 shadow-slate-950/60"
      }`}>
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-900 border border-slate-700/80" />
        <div className={`relative rounded-lg overflow-hidden border font-sans min-h-[380px] sm:min-h-[420px] flex flex-col transition-colors duration-300 ${
          isLight ? "bg-slate-50 border-slate-300 text-slate-800" : "bg-[#090e17] border-slate-800/90 text-slate-100"
        } ${isAr ? "text-right" : "text-left"}`} dir={dir} style={{ background: t.bg }}>
          {/* Header */}
          <div className="flex items-center justify-between px-3 py-1.5 shrink-0 border-b z-20" style={{ background: t.headerBg, borderColor: t.glassBorder }}>
            <div className="flex items-center gap-2 min-w-0">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-[5px] flex items-center justify-center shrink-0" style={{ background: t.primary, boxShadow: `0 2px 8px rgba(${isLight ? "37,99,235" : "59,116,214"},0.4)` }}>
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div className="flex flex-col"><span className="text-[10px] font-extrabold tracking-tight leading-tight" style={{ color: t.fg }}>MIKMAN</span><span className="text-[7px] font-semibold uppercase tracking-wide" style={{ color: t.textMuted }}>{pageTitle}</span></div>
              </div>
              <span className="hidden sm:inline text-[11px] font-extrabold" style={{ color: t.fg }}>{pageTitle}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-extrabold px-2 py-1 rounded-[5px] border cursor-pointer" style={{ background: t.cardBg, borderColor: t.glassBorder, color: t.primary }}>{isAr ? "EN" : "AR"}</span>
              <span className="w-5 h-5 rounded-[5px] flex items-center justify-center border cursor-pointer" style={{ background: t.cardBg, borderColor: t.glassBorder, color: t.primary }}><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg></span>
              <span className="w-5 h-5 rounded-[5px] flex items-center justify-center border shrink-0 font-extrabold text-[9px]" style={{ borderColor: t.primary, color: t.primary }}>FA</span>
            </div>
          </div>
          {/* Router Status Header */}
          <div className="flex items-center gap-3 px-3 py-[3px] border-b shrink-0 text-[8px] font-bold flex-wrap" style={{ background: t.headerBg, borderColor: t.glassBorder, color: t.fg }}>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: t.accent, boxShadow: `0 0 4px ${t.accent}` }} /><span style={{ color: t.accent }}>{isAr ? "متصل" : "Online"}</span></span>
            <span>CPU: <b style={{ color: t.accent }}>14%</b></span>
            <span>RAM: <b style={{ color: t.primary }}>64/256 MB</b></span>
            <span>{isAr ? "درجة:" : "Temp:"} <b>42°C</b></span>
            <span>{isAr ? "التشغيل:" : "Uptime:"} <b>12d 4h</b></span>
            <span>{isAr ? "المستخدمين:" : "Users:"} <b style={{ color: t.accent }}>184</b></span>
          </div>
          {/* Sidebar + Main */}
          <div className="flex-1 flex min-h-0 overflow-hidden">
            <div className="w-[85px] sm:w-[110px] shrink-0 hidden md:flex flex-col justify-between border-r p-1.5" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
              <nav className="flex flex-col gap-[2px]">
                {sidebarLinks.map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 px-1.5 py-1 rounded-[4px] font-semibold text-[8px] cursor-pointer truncate" style={{ background: item.active ? t.primary : "transparent", color: item.active ? "#fff" : t.textMuted }}>
                    <svg className="w-2.5 h-2.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                    <span className="truncate">{item.label}</span>
                  </div>
                ))}
              </nav>
              <div className="flex items-center gap-1 pt-1.5 border-t" style={{ borderColor: t.glassBorder }}>
                <div className="w-4 h-4 rounded-[3px] flex items-center justify-center border font-extrabold text-[6px] shrink-0" style={{ background: `rgba(${isLight ? "37,99,235" : "59,116,214"},0.2)`, color: t.primary, borderColor: `rgba(${isLight ? "37,99,235" : "59,116,214"},0.3)` }}>FA</div>
                <div className="overflow-hidden leading-tight"><div className="text-[7px] font-bold truncate" style={{ color: t.fg }}>Faris Admin</div><div className="text-[6px]" style={{ color: t.accent }}>{isAr ? "أدمن" : "Admin"}</div></div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden p-2" style={{ background: t.bg }}>
              <div className="h-full overflow-y-auto flex flex-col gap-2" style={{ scrollbarWidth: "none" }}>

                {/* ─ DASHBOARD ─ */}
                {screenType === "dashboard" && (<>
                  <div className="rounded-md border p-2 flex items-center justify-between gap-2 shrink-0" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                    <div className="flex items-center gap-2 min-w-0"><div style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: t.accent, flexShrink: 0, boxShadow: `0 0 4px ${t.accent}` }} /><div className="min-w-0"><div className="font-extrabold text-[10px] leading-tight truncate" style={{ color: t.fg }}>RB3011UiAS-RM</div><div className="flex items-center gap-1.5 mt-0.5"><span className="text-[7px] font-bold px-1.5 py-[1px] rounded-full border" style={{ background: isLight ? "#ecfdf5" : "rgba(34,197,94,0.1)", color: t.accent, borderColor: isLight ? "#a7f3d0" : "rgba(34,197,94,0.2)" }}>{isAr ? "متصل" : "Online"}</span><span className="text-[7px]" style={{ color: t.textMuted }}>v7.14</span></div></div></div>
                    <div className="text-right shrink-0"><div className="font-black text-sm" style={{ color: t.fg, fontVariantNumeric: "tabular-nums" }}>14:32:18</div><div className="text-[7px]" style={{ color: t.textMuted }}>{isAr ? "الأربعاء، 29 يوليو" : "Wed, Jul 29, 2026"}</div></div>
                  </div>
                  <div><div className="flex items-center gap-1 mb-1.5"><svg className="w-3 h-3" style={{ color: t.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg><span className="text-[8px] font-black uppercase tracking-wide" style={{ color: t.primary }}>{isAr ? "حالة النظام" : "System Health"}</span></div>
                    <div className="grid grid-cols-3 gap-1.5">{[{ l: "CPU", v: "14%" },{ l: "RAM", v: "64 / 256 MB", bar: 25 },{ l: isAr ? "الحرارة" : "Temp", v: "42°C" },{ l: isAr ? "التشغيل" : "Uptime", v: "12d 4h 12m" },{ l: isAr ? "المستخدمين" : "Active Users", v: "184" },{ l: "SSID", v: "MIKMAN-WiFi" }].map((s, i) => (
                      <div key={i} className="flex items-center gap-1.5 rounded-md border p-1.5" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                        <div className="w-4 h-4 rounded-[4px] flex items-center justify-center shrink-0" style={{ background: `rgba(${isLight ? "37,99,235" : "59,116,214"},0.1)` }}><svg className="w-2 h-2" style={{ color: t.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                        <div className="min-w-0 flex-1"><div className="text-[6px] font-bold uppercase" style={{ color: t.textMuted }}>{s.l}</div><div className="font-black text-[9px]" style={{ color: t.fg }}>{s.v}</div>{s.bar != null && <div className="h-[3px] rounded-full mt-0.5 overflow-hidden" style={{ background: t.secondary }}><div className="h-full rounded-full" style={{ width: `${s.bar}%`, background: t.primary }} /></div>}</div>
                      </div>
                    ))}</div>
                  </div>
                  <div><div className="flex items-center gap-1 mb-1.5"><svg className="w-3 h-3" style={{ color: t.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5z" /></svg><span className="text-[8px] font-black uppercase tracking-wide" style={{ color: t.primary }}>{isAr ? "إجراءات سريعة" : "Quick Actions"}</span></div>
                    <div className="grid grid-cols-5 gap-1.5">{[isAr ? "كروت" : "Vouchers", isAr ? "بروفايل" : "Profiles", isAr ? "طباعة" : "Print", isAr ? "إيرادات" : "Revenue", isAr ? "إعدادات" : "Settings"].map((l, i) => (
                      <div key={i} className="flex flex-col items-center gap-1 rounded-md border p-1.5 text-center" style={{ background: t.cardBg, borderColor: t.glassBorder }}><svg className="w-3 h-3" style={{ color: t.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5z" /></svg><span className="text-[7px] font-bold leading-tight" style={{ color: t.fg }}>{l}</span></div>
                    ))}</div>
                  </div>
                  <div><div className="flex items-center gap-1 mb-1.5"><svg className="w-3 h-3" style={{ color: t.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg><span className="text-[8px] font-black uppercase tracking-wide" style={{ color: t.primary }}>{isAr ? "ملخص الإيرادات" : "Revenue Summary"}</span></div>
                    <div className="grid grid-cols-2 gap-1.5 mb-1.5">
                      <div className="rounded-md border p-2" style={{ background: t.cardBg, borderColor: t.glassBorder }}><div className="text-[7px] font-bold uppercase" style={{ color: t.textMuted }}>{isAr ? "الإيرادات" : "Revenue"}</div><div className="font-black text-sm mt-0.5" style={{ color: t.fg }}>$4,850.00</div></div>
                      <div className="rounded-md border p-2" style={{ background: t.cardBg, borderColor: t.glassBorder }}><div className="text-[7px] font-bold uppercase" style={{ color: t.textMuted }}>{isAr ? "الكروت" : "Vouchers"}</div><div className="font-black text-sm mt-0.5" style={{ color: t.fg }}>3,410</div></div>
                    </div>
                    <div className="rounded-md border p-2" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                      <div className="flex items-end gap-[2px]" style={{ height: 48, borderBottom: `1px solid ${t.glassBorder}` }}>{barData.map((v, i) => (<div key={i} style={{ flex: 1, height: `${v}%`, background: `linear-gradient(180deg, ${t.primary}, #1d4ed8)`, borderRadius: "2px 2px 0 0" }} />))}</div>
                      <div className="flex justify-between mt-1 text-[7px] font-semibold" style={{ color: t.textMuted }}><span>1</span><span>15</span><span>{barData.length}</span></div>
                    </div>
                  </div>
                </>)}

                {/* ─ VOUCHERS ─ */}
                {screenType === "vouchers" && (<>
                  <div className="rounded-md border p-2 flex items-center justify-between shrink-0" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                    <div className="flex items-center gap-1.5 min-w-0"><div className="w-5 h-5 rounded-[5px] flex items-center justify-center shrink-0 border" style={{ background: `linear-gradient(135deg, rgba(${isLight ? "37,99,235" : "59,116,214"},0.2), rgba(${isLight ? "37,99,235" : "59,116,214"},0.4))`, borderColor: `rgba(${isLight ? "37,99,235" : "59,116,214"},0.3)`, color: t.primary }}><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5z" /></svg></div><span className="font-black text-[11px] truncate" style={{ color: t.fg }}>{isAr ? "إنشاء كروت" : "Generate Vouchers"}</span></div>
                    <div className="flex items-center gap-1 rounded px-2 py-[3px] text-[8px] font-bold border shrink-0" style={{ background: t.cardBg, borderColor: t.glassBorder, color: t.primary }}><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>{isAr ? "الدفعات" : "View Batches"}</div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1 min-h-0">
                    <div className="rounded-md border p-2 flex flex-col gap-2" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                      <div className="flex flex-col gap-1"><div className="flex justify-between items-center"><span className="text-[8px] font-bold" style={{ color: t.fg }}>{isAr ? "البروفايل" : "Profile"}</span><span className="text-[7px] font-semibold" style={{ color: t.primary }}>{isAr ? "إدارة" : "Manage"} →</span></div><div className="flex items-center rounded border px-2 py-1 text-[8.5px]" style={{ background: t.secondary, borderColor: t.glassBorder, color: t.fg }}><span className="font-bold">1GB 24h</span></div><div className="flex gap-1"><span className="text-[7px] px-1.5 py-[2px] rounded font-semibold" style={{ background: "rgba(99,102,241,0.12)", color: "#818cf8" }}>24h</span><span className="text-[7px] px-1.5 py-[2px] rounded font-semibold" style={{ background: "rgba(14,165,233,0.12)", color: "#0ea5e9" }}>1 GB</span></div></div>
                      <div className="flex flex-col gap-1"><span className="text-[8px] font-bold" style={{ color: t.fg }}>{isAr ? "الكمية" : "Quantity"}</span><div className="flex items-center rounded border px-2 py-1 text-[8.5px]" style={{ background: t.secondary, borderColor: t.glassBorder, color: t.fg }}><span className="font-bold">100</span></div><div className="flex gap-1">{[100,500,1000,2000].map(q=><span key={q} className="text-[7px] px-1.5 py-[2px] rounded font-semibold border" style={{background:q===100?t.primary:"transparent",color:q===100?"#fff":t.textMuted,borderColor:t.glassBorder}}>{q}</span>)}</div></div>
                      <div className="flex flex-col gap-1"><span className="text-[8px] font-bold" style={{ color: t.fg }}>{isAr ? "طول الكود" : "Code Length"}</span><div className="flex items-center rounded border px-2 py-1 text-[8.5px]" style={{ background: t.secondary, borderColor: t.glassBorder, color: t.fg }}><span className="font-bold">6</span></div><div className="flex gap-1">{[4,5,6,7,8].map(l=><span key={l} className="text-[7px] px-1.5 py-[2px] rounded font-semibold border" style={{background:l===6?t.primary:"transparent",color:l===6?"#fff":t.textMuted,borderColor:t.glassBorder}}>{l}</span>)}</div></div>
                      <div className="flex flex-col gap-1"><span className="text-[8px] font-bold" style={{ color: t.fg }}>{isAr ? "اسم الدفعة" : "Batch Label"}</span><div className="flex items-center rounded border px-2 py-1 text-[8px]" style={{ background: t.secondary, borderColor: t.glassBorder, color: t.textMuted }}><span>{isAr ? "اختياري..." : "Optional..."}</span></div></div>
                      <div className="rounded-md py-2 flex items-center justify-center gap-1.5 font-bold text-[9px] text-white mt-auto" style={{ background: `linear-gradient(135deg, ${t.primary}, #2563eb)`, boxShadow: `0 4px 12px rgba(${isLight ? "37,99,235" : "59,116,214"},0.3)` }}><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg><span>{isAr ? "إنشاء" : "Generate"}</span></div>
                    </div>
                    <div className="rounded-md border p-2 flex flex-col" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                      <div className="flex items-center justify-between mb-2"><span className="text-[8px] font-bold flex items-center gap-1" style={{ color: t.textMuted }}><svg className="w-3 h-3" style={{ color: t.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>{isAr ? "معاينة الكارت" : "Ticket Preview"}</span><span className="text-[7px] font-bold px-1.5 py-[2px] rounded" style={{ background: "rgba(34,197,94,0.12)", color: "#22c55e" }}>{isAr ? "نموذج" : "Live Mock"}</span></div>
                      <div className="rounded-md border flex flex-col items-center justify-center gap-2 mx-auto shrink-0" style={{ width: 160, height: 72, background: "#ffffff", color: "#000000", borderColor: "#444444", padding: "8px 12px", fontFamily: "'Cairo', system-ui, -apple-system, sans-serif" }}><div className="flex items-center gap-1 text-[8px] font-bold"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" /></svg><span>MIKMAN-Hotspot</span></div><div className="font-black text-base font-mono tracking-wider" style={{ letterSpacing: "2px" }}>999444</div><div className="text-[8px] font-semibold" style={{ color: "#333333" }}>1GB 24h</div></div>
                      <div className="flex flex-col gap-1.5 mt-auto text-[8px] pt-2"><div className="flex justify-between"><span style={{ color: t.textMuted }}>{isAr ? "المجموع" : "Total"}</span><span className="font-bold" style={{ color: t.fg }}>100 {isAr ? "كارت" : "vouchers"}</span></div><div className="flex justify-between"><span style={{ color: t.textMuted }}>{isAr ? "البروفايل" : "Profile"}</span><span className="font-bold" style={{ color: t.primary }}>1GB 24h</span></div><div className="flex justify-between"><span style={{ color: t.textMuted }}>{isAr ? "طول الكود" : "Code Format"}</span><span className="font-bold" style={{ color: t.fg }}>6 {isAr ? "أرقام" : "digits"}</span></div></div>
                    </div>
                  </div>
                </>)}

                {/* ─ REVENUE ─ */}
                {screenType === "revenue" && (<>
                  <div className="rounded-md border p-2 flex items-center justify-between shrink-0" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                    <div className="flex items-center gap-1.5"><div className="w-5 h-5 rounded-[5px] flex items-center justify-center shrink-0 border" style={{ background: `linear-gradient(135deg, rgba(${isLight ? "37,99,235" : "59,116,214"},0.2), rgba(${isLight ? "37,99,235" : "59,116,214"},0.4))`, borderColor: `rgba(${isLight ? "37,99,235" : "59,116,214"},0.3)`, color: t.primary }}><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg></div><span className="font-black text-[11px]" style={{ color: t.fg }}>{isAr ? "الإيرادات" : "Revenue"}</span></div>
                    <div className="flex items-center gap-1 rounded px-2 py-[3px] text-[8px] font-bold border" style={{ background: t.secondary, borderColor: t.glassBorder, color: t.fg }}><svg className="w-3 h-3" style={{ color: t.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg><span>{isAr ? "آخر 30 يوم" : "Last 30 Days"}</span></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 shrink-0">
                    <div className="rounded-md border p-2 flex items-center gap-2" style={{ background: t.cardBg, borderColor: t.glassBorder }}><div className="w-5 h-5 rounded-[5px] flex items-center justify-center shrink-0" style={{ background: "rgba(59,130,246,0.12)", color: "#3b82f6" }}><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><div className="min-w-0 flex-1"><div className="text-[7px] font-bold uppercase" style={{ color: t.textMuted }}>{isAr ? "الإيرادات" : "Revenue"}</div><div className="font-black text-sm mt-0.5" style={{ color: t.fg }}>$4,850.00</div><div className="text-[7px] flex items-center gap-1" style={{ color: t.textMuted }}><svg className="w-2 h-2" style={{ color: t.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg><span>$161.67 / {isAr ? "يوم" : "day"}</span></div></div></div>
                    <div className="rounded-md border p-2 flex items-center gap-2" style={{ background: t.cardBg, borderColor: t.glassBorder }}><div className="w-5 h-5 rounded-[5px] flex items-center justify-center shrink-0" style={{ background: "rgba(16,185,129,0.12)", color: "#10b981" }}><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5z" /></svg></div><div className="min-w-0 flex-1"><div className="text-[7px] font-bold uppercase" style={{ color: t.textMuted }}>{isAr ? "الكروت" : "Vouchers"}</div><div className="font-black text-sm mt-0.5" style={{ color: t.fg }}>3,410</div><div className="text-[7px]" style={{ color: t.textMuted }}>113.7 / {isAr ? "يوم" : "day"}</div></div></div>
                  </div>
                  <div className="rounded-md border p-2" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                    <div className="flex items-center justify-between mb-1.5"><div className="flex items-center gap-1"><svg className="w-3.5 h-3.5" style={{ color: t.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg><span className="text-[9px] font-black" style={{ color: t.fg }}>{isAr ? "مخطط الإيرادات اليومية" : "Daily Revenue Chart"}</span></div><span className="text-[7px] font-bold px-2 py-[2px] rounded-full border" style={{ background: t.secondary, borderColor: t.glassBorder, color: t.textMuted }}>30 {isAr ? "يوم" : "days"}</span></div>
                    <div className="flex gap-1.5"><div className="flex flex-col justify-between text-[7px] font-bold shrink-0 pb-[14px]" style={{ color: t.textMuted, width: 20, textAlign: "right" }}><span>$5k</span><span>$2.5k</span><span>$0</span></div><div className="flex-1 flex flex-col"><div className="flex items-end gap-[2px]" style={{ height: 65, borderBottom: `1px solid ${t.glassBorder}` }}>{barData.map((v, i) => (<div key={i} style={{ flex: 1, height: `${v}%`, background: v > 0 ? `linear-gradient(180deg, ${t.primary}, #1d4ed8)` : t.glassBorder, borderRadius: "2px 2px 0 0" }} />))}</div><div className="flex justify-between mt-1 text-[7px] font-semibold" style={{ color: t.textMuted }}><span>1</span><span>15</span><span>30</span></div></div></div>
                  </div>
                  <div className="rounded-md border p-2" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                    <div className="flex items-center justify-between mb-1.5"><div className="flex items-center gap-1"><svg className="w-3.5 h-3.5" style={{ color: t.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg><span className="text-[9px] font-black" style={{ color: t.fg }}>{isAr ? "الإيرادات حسب البروفايل" : "Revenue by Profile"}</span></div><span className="text-[7px] font-semibold" style={{ color: t.textMuted }}>4 {isAr ? "بروفايلات" : "profiles"}</span></div>
                    {[{ name: "1GB 24h", pct: 65, color: "#3b82f6", revenue: "$3,152.50", count: "2,216" },{ name: "3GB 7d", pct: 22, color: "#10b981", revenue: "$1,067.00", count: "711" },{ name: "10GB 30d", pct: 13, color: "#a855f7", revenue: "$630.50", count: "140" }].map((p, i) => (
                      <div key={i} className="rounded border p-2 mb-1.5 last:mb-0" style={{ background: t.secondary, borderColor: t.glassBorder }}>
                        <div className="flex justify-between items-center"><div className="flex items-center gap-2"><span className="text-[8px] font-black px-2 py-[3px] rounded" style={{ background: `${p.color}18`, color: p.color, border: `1px solid ${p.color}30` }}>#{i + 1}</span><div><div className="text-[9px] font-bold" style={{ color: t.fg }}>{p.name}</div><div className="text-[7px]" style={{ color: t.textMuted }}>{p.count} {isAr ? "كارت" : "vouchers sold"}</div></div></div><div className="text-right"><div className="font-black text-[11px]" style={{ color: t.fg }}>{p.revenue}</div><div className="text-[8px] font-bold" style={{ color: p.color }}>{p.pct}%</div></div></div>
                        <div className="h-2 rounded-full overflow-hidden mt-1.5" style={{ background: "rgba(255,255,255,0.06)" }}><div className="h-full rounded-full" style={{ width: `${p.pct}%`, background: `linear-gradient(90deg, ${p.color}, ${p.color}dd)` }} /></div>
                      </div>
                    ))}
                  </div>
                </>)}

                {/* ─ PROFILES ─ */}
                {screenType === "profiles" && (<>
                  <div className="rounded-md border p-2 flex items-center justify-between shrink-0" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                    <div className="flex items-center gap-1.5"><div className="w-5 h-5 rounded-[5px] flex items-center justify-center shrink-0 border" style={{ background: `linear-gradient(135deg, rgba(${isLight ? "37,99,235" : "59,116,214"},0.2), rgba(${isLight ? "37,99,235" : "59,116,214"},0.4))`, borderColor: `rgba(${isLight ? "37,99,235" : "59,116,214"},0.3)`, color: t.primary }}><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg></div><span className="font-black text-[11px]" style={{ color: t.fg }}>{isAr ? "بروفايلات السرعة" : "Speed Profiles"}</span></div>
                    <div className="rounded-md py-1 px-2 text-[8px] font-bold text-white" style={{ background: `linear-gradient(135deg, ${t.primary}, #2563eb)` }}>+ {isAr ? "إضافة" : "Add Profile"}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 shrink-0">
                    {[{ l: isAr ? "الكل" : "Total Profiles", v: "5", c: t.primary, bg: "rgba(59,130,246,0.12)", ic: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },{ l: isAr ? "غير محدود" : "Unlimited", v: "2", c: "#22c55e", bg: "rgba(34,197,94,0.12)", ic: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },{ l: isAr ? "محدود" : "With Limit", v: "3", c: "#a855f7", bg: "rgba(168,85,247,0.12)", ic: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" }].map((s, i) => (
                      <div key={i} className="rounded-md border p-2 flex items-center gap-2" style={{ background: t.cardBg, borderColor: t.glassBorder }}><div className="w-5 h-5 rounded-[4px] flex items-center justify-center shrink-0" style={{ background: s.bg, color: s.c }}><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.ic} /></svg></div><div className="min-w-0"><div className="text-[7px] font-bold" style={{ color: t.textMuted }}>{s.l}</div><div className="font-black text-sm" style={{ color: s.c }}>{s.v}</div></div></div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2">
                    {[{ name: "1GB 24h", validity: "24h", limit: "1 GB", price: 5.00, color: "#3b82f6" },{ name: "3GB 7d", validity: "7d", limit: "3 GB", price: 15.00, color: "#10b981" },{ name: "10GB 30d", validity: "30d", limit: "10 GB", price: 45.00, color: "#a855f7" },{ name: "Unlimited VIP", validity: isAr ? "غير محدود" : "Unlimited", limit: isAr ? "غير محدود" : "Unlimited", price: 100.00, color: "#f59e0b" }].map((p, i) => (
                      <div key={i} className="rounded-md border p-3 flex items-center justify-between" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-[6px] flex items-center justify-center shrink-0 border" style={{ background: `${p.color}18`, color: p.color, borderColor: `${p.color}30` }}><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg></div>
                          <div><div className="text-[10px] font-bold" style={{ color: t.fg }}>{p.name}</div><div className="flex items-center gap-1.5 mt-0.5"><span className="text-[7px] font-semibold px-1.5 py-[2px] rounded" style={{ background: "rgba(56,189,248,0.10)", color: "#38bdf8", border: "1px solid rgba(56,189,248,0.15)" }}>{p.validity}</span><span className="text-[7px] font-semibold px-1.5 py-[2px] rounded" style={{ background: "rgba(168,85,247,0.10)", color: "#a855f7", border: "1px solid rgba(168,85,247,0.15)" }}>{p.limit}</span></div></div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-black px-2 py-1 rounded border" style={{ background: "rgba(34,197,94,0.10)", color: t.accent, borderColor: "rgba(34,197,94,0.2)" }}>${p.price.toFixed(2)}</span>
                          <div className="flex gap-1.5">
                            <div className="w-6 h-6 rounded-[4px] flex items-center justify-center border cursor-pointer" style={{ borderColor: t.glassBorder, color: t.textMuted }}><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg></div>
                            <div className="w-6 h-6 rounded-[4px] flex items-center justify-center border cursor-pointer" style={{ background: "rgba(239,68,68,0.08)", borderColor: "rgba(239,68,68,0.2)", color: "#ef4444" }}><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>)}

                {/* ─ BATCH ─ */}
                {screenType === "batch" && (<>
                  <div className="rounded-md border p-2 flex items-center justify-between shrink-0" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                    <div className="flex items-center gap-1.5"><div className="w-5 h-5 rounded-[5px] flex items-center justify-center shrink-0 border" style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(79,70,229,0.4))", borderColor: "rgba(99,102,241,0.3)", color: "#6366f1" }}><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg></div><span className="font-black text-[11px]" style={{ color: t.fg }}>{isAr ? "الدفعات" : "Print Batches"}</span></div>
                    <div className="rounded-md py-1 px-2 text-[8px] font-bold text-white" style={{ background: `linear-gradient(135deg, ${t.primary}, #2563eb)` }}>+ {isAr ? "إنشاء" : "Create"}</div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 shrink-0">
                    {[{ l: isAr ? "الدفعات" : "Batches", v: "12", c: "#6366f1", bg: "rgba(99,102,241,0.12)" },{ l: isAr ? "الكروت" : "Vouchers", v: "3,410", c: "#0ea5e9", bg: "rgba(14,165,233,0.12)" },{ l: isAr ? "غير مستخدم" : "Unused", v: "1,892", c: "#22c55e", bg: "rgba(34,197,94,0.12)" },{ l: isAr ? "نشط" : "Active", v: "1,518", c: "#3b82f6", bg: "rgba(59,130,246,0.12)" }].map((s, i) => (
                      <div key={i} className="rounded-md border p-2 flex items-center gap-2" style={{ background: t.cardBg, borderColor: t.glassBorder }}><div className="w-5 h-5 rounded-[4px] flex items-center justify-center shrink-0" style={{ background: s.bg, color: s.c }}><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5z" /></svg></div><div className="min-w-0"><div className="text-[7px] font-bold" style={{ color: t.textMuted }}>{s.l}</div><div className="font-black text-sm" style={{ color: s.c }}>{s.v}</div></div></div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2">
                    {[{ name: "Batch #104", profile: "1GB 24h", count: 500, unused: 312, date: "2026-07-28 14:30" },{ name: "Batch #103", profile: "3GB 7d", count: 200, unused: 89, date: "2026-07-25 09:15" },{ name: "Batch #102", profile: "1GB 24h", count: 1000, unused: 643, date: "2026-07-20 11:00" },{ name: "Batch #101", profile: "10GB 30d", count: 100, unused: 28, date: "2026-07-15 16:45" }].map((b, i) => (
                      <div key={i} className="rounded-md border p-3 flex items-center justify-between cursor-pointer" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                        <div className="min-w-0"><div className="text-[10px] font-bold" style={{ color: t.fg }}>{b.name}</div><div className="text-[7px] mt-0.5" style={{ color: t.textMuted }}>{b.profile} · {b.date}</div></div>
                        <div className="flex items-center gap-3">
                          <div className="text-right"><div className="font-black text-[11px]" style={{ color: t.accent }}>{b.unused}</div><div className="text-[7px]" style={{ color: t.textMuted }}>{isAr ? "غير مستخدم" : "unused"}</div></div>
                          <svg className="w-4 h-4" style={{ color: t.textMuted }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </>)}

                {/* ─ BATCH DETAIL ─ */}
                {screenType === "batch-detail" && (<>
                  <div className="flex items-center gap-1 shrink-0 mb-1"><svg className="w-3.5 h-3.5" style={{ color: t.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg><span className="text-[9px] font-bold" style={{ color: t.textMuted }}>{isAr ? "العودة للدفعات" : "Back to Batches"}</span></div>
                  <div className="rounded-md border p-3 flex items-center justify-between shrink-0" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                    <div><div className="text-[11px] font-black" style={{ color: t.fg }}>Batch #104</div><div className="text-[8px] mt-0.5" style={{ color: t.textMuted }}>1GB 24h · 2026-07-28 14:30 · {isAr ? "تعليق: MIKMAN-Hotspot" : "Comment: MIKMAN-Hotspot"}</div></div>
                    <div className="flex items-center gap-2">
                      <div className="rounded-md py-1.5 px-3 text-[9px] font-bold text-white flex items-center gap-1.5" style={{ background: "#6366f1" }}><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>{isAr ? "طباعة" : "Print PDF"}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 shrink-0">
                    {[{ l: isAr ? "المجموع" : "Total", v: "500", c: t.fg },{ l: isAr ? "غير مستخدم" : "Unused", v: "312", c: t.accent },{ l: isAr ? "نشط" : "Active", v: "188", c: t.primary }].map((s, i) => (
                      <div key={i} className="rounded-md border p-2 text-center" style={{ background: t.cardBg, borderColor: t.glassBorder }}><div className="text-[7px] font-bold" style={{ color: t.textMuted }}>{s.l}</div><div className="font-black text-sm" style={{ color: s.c }}>{s.v}</div></div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {[{ code: "MK-9821", status: "Unused" },{ code: "MK-7412", status: "Active" },{ code: "MK-3301", status: "Unused" },{ code: "MK-5502", status: "Active" },{ code: "MK-8820", status: "Unused" },{ code: "MK-1234", status: "Unused" },{ code: "MK-5678", status: "Expired" }].map((v, i) => (
                      <div key={i} className="rounded-md border p-2 flex items-center justify-between" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                        <span className="font-mono font-bold text-[9px]" style={{ color: t.primary }}>{v.code}-{String(i+1).padStart(2,'0')}A</span>
                        <span className="text-[7px] font-bold px-2 py-[2px] rounded" style={{ background: v.status === "Unused" ? (isLight ? "#ecfdf5" : "rgba(34,197,94,0.12)") : v.status === "Active" ? (isLight ? "#eff6ff" : "rgba(59,130,246,0.12)") : "rgba(239,68,68,0.12)", color: v.status === "Unused" ? t.accent : v.status === "Active" ? t.primary : "#ef4444" }}>{v.status}</span>
                      </div>
                    ))}
                  </div>
                </>)}

                {/* ─ HOTSPOT TEMPLATE ─ */}
                {screenType === "hotspot" && (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-5 rounded-xl p-8 max-w-sm w-full" style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)" }}>
                      {/* WiFi Icon */}
                      <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(59,130,246,0.15)", border: "2px solid rgba(59,130,246,0.25)" }}>
                        <svg className="w-8 h-8" style={{ color: "#3b82f6" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
                        </svg>
                      </div>
                      {/* SSID */}
                      <div className="text-center">
                        <div className="text-sm font-black text-white mb-1">MIKMAN-WiFi</div>
                        <div className="text-[11px] text-slate-400">{isAr ? "مرحباً بك! أدخل كود الكارت للاتصال" : "Welcome! Enter your voucher code to connect"}</div>
                      </div>
                      {/* Voucher Code Input */}
                      <div className="w-full rounded-lg border px-4 py-3 text-center text-xs" style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)" }}>
                        {isAr ? "كود الكارت" : "Voucher Code"}
                      </div>
                      {/* Connect Button */}
                      <div className="w-full rounded-lg py-3 text-center text-sm font-black text-white" style={{ background: `linear-gradient(135deg, ${t.primary}, #1d4ed8)`, boxShadow: `0 4px 16px rgba(${isLight ? "37,99,235" : "59,116,214"},0.4)` }}>
                        {isAr ? "اتصل" : "Connect"}
                      </div>
                      {/* Footer */}
                      <div className="text-[10px] text-slate-500">{isAr ? "مشغل بواسطة مكمان" : "Powered by Mikman"}</div>
                    </div>
                  </div>
                )}

                {/* ─ ROUTERS SELECTION ─ */}
                {screenType === "routers" && (<>
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-black" style={{ color: t.fg }}>{isAr ? "لوحة التحكم" : "Dashboard"}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-[4px] flex items-center justify-center border cursor-pointer" style={{ background: t.cardBg, borderColor: t.glassBorder, color: t.primary }}><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg></div>
                      <div className="rounded-md py-1.5 px-3 text-[9px] font-bold text-white flex items-center gap-1.5" style={{ background: `linear-gradient(135deg, ${t.primary}, #2563eb)` }}><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>{isAr ? "إضافة راوتر" : "Add Router"}</div>
                    </div>
                  </div>
                  <div className="rounded-md border p-3 flex items-center justify-between text-[9px]" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                    <div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: `rgba(${isLight ? "37,99,235" : "59,116,214"},0.12)`, color: t.primary }}><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></div><div><span className="font-bold" style={{ color: t.fg }}>faris@mikman.net</span><span className="text-[7px] ml-2" style={{ color: t.textMuted }}>3/10 Routers</span></div></div>
                    <div className="flex items-center gap-2"><span className="text-[8px] font-bold px-2 py-[3px] rounded" style={{ background: `rgba(${isLight ? "37,99,235" : "59,116,214"},0.1)`, color: t.primary }}>{isAr ? "برو" : "Pro Plan"}</span><span className="text-[7px] font-bold" style={{ color: t.accent }}>30d left</span></div>
                  </div>
                  <div className="flex items-center justify-between"><span className="text-[9px] font-black" style={{ color: t.fg }}>{isAr ? "الأجهزة المسجلة" : "Registered Routers"}</span><span className="text-[8px] font-bold px-2 py-[2px] rounded-full" style={{ background: `rgba(${isLight ? "37,99,235" : "59,116,214"},0.1)`, color: t.primary }}>3</span></div>
                  <div className="flex flex-col gap-2">
                    {[{ name: "RB3011-Hotspot", model: "RB3011UiAS-RM", users: 184, cpu: "14%", ram: "64M", temp: "42°C", up: "12d 4h", online: true },{ name: "Branch Office", model: "hEX S (RB760iGS)", users: 62, cpu: "8%", ram: "32M", temp: "38°C", up: "5d 2h", online: true },{ name: "Cafe Router", model: "hAP AX³", users: 0, cpu: "—", ram: "—", temp: "—", up: "—", online: false }].map((r, i) => (
                      <div key={i} className="rounded-md border p-3 cursor-pointer" style={{ background: t.cardBg, borderColor: t.glassBorder, opacity: r.online ? 1 : 0.55, filter: r.online ? "none" : "grayscale(0.2)" }}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2.5">
                            <div className="relative">
                              <div className="w-8 h-8 rounded-[6px] flex items-center justify-center border" style={{ background: "rgba(var(--primary-rgb),0.08)", borderColor: t.glassBorder, color: t.primary }}><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                              <div style={{ position: "absolute", top: -2, right: -2, width: 9, height: 9, borderRadius: "50%", backgroundColor: r.online ? t.accent : "#94a3b8", border: `2px solid ${t.cardBg}` }} />
                            </div>
                            <div><div className="text-[10px] font-extrabold" style={{ color: t.fg }}>{r.name}</div><div className="text-[7px] font-mono" style={{ color: t.textMuted }}>{r.model} · 10.8.0.4{i+5}</div></div>
                          </div>
                          <svg className="w-4 h-4" style={{ color: t.textMuted }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </div>
                        <div className="flex items-center gap-3 text-[8px] font-semibold" style={{ color: t.textMuted, borderTop: `1px solid ${t.glassBorder}`, paddingTop: 8 }}>
                          <span><svg className="w-3 h-3 inline mr-1" style={{ color: t.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>{isAr ? "متصلين" : "Users"}: <b style={{ color: t.fg }}>{r.users}</b></span>
                          <span><svg className="w-3 h-3 inline mr-1" style={{ color: t.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>CPU: <b style={{ color: r.online ? t.accent : t.textMuted }}>{r.cpu}</b></span>
                          <span><svg className="w-3 h-3 inline mr-1" style={{ color: t.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>RAM: <b style={{ color: t.primary }}>{r.ram}</b></span>
                          <span>{isAr ? "حرارة" : "Temp"}: <b>{r.temp}</b></span>
                          <span>{isAr ? "تشغيل" : "Up"}: <b>{r.up}</b></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>)}

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`relative mx-auto w-[92%] h-2.5 rounded-b-xl border-t shadow-sm flex items-center justify-center transition-colors duration-300 ${
        isLight ? "bg-slate-300 border-slate-300" : "bg-slate-800 border-slate-700"
      }`}>
        <div className={`w-16 h-1 rounded-full ${isLight ? "bg-slate-400" : "bg-slate-900"}`} />
      </div>
    </div>
  );
}