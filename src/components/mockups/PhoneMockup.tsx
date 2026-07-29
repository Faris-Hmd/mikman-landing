"use client";

import React from "react";

interface PhoneMockupProps {
  screenType?: "dashboard" | "vouchers" | "revenue" | "profiles" | "batch" | "batch-detail" | "routers" | "hotspot";
  isAr?: boolean;
}

export default function PhoneMockup({ screenType = "dashboard", isAr = false }: PhoneMockupProps) {
  const [isLight, setIsLight] = React.useState(false);

  React.useEffect(() => {
    const checkTheme = () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      setIsLight(currentTheme === "light");
    };
    checkTheme();
    const observer = new MutationObserver(() => checkTheme());
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

  return (
    <div className="w-[195px] xs:w-[215px] sm:w-[245px] md:w-[235px] lg:w-[255px] mx-auto select-none transition-all duration-300">
      <div
        className={`relative rounded-[28px] sm:rounded-[32px] p-1.5 sm:p-2 transition-colors duration-300 ${
          isLight ? "bg-slate-200 border border-slate-300/90 ring-1 ring-slate-300/80 shadow-xl" : "bg-[#0c1322] border border-slate-800/90 ring-1 ring-slate-700/50 shadow-2xl"
        }`}
      >
        <div className={`absolute top-2 sm:top-2.5 left-1/2 -translate-x-1/2 w-10 sm:w-14 h-2 sm:h-2.5 rounded-full z-30 flex items-center justify-end px-1.5 border transition-colors duration-300 ${
          isLight ? "bg-slate-400/90 border-slate-300" : "bg-slate-950 border-slate-800/80"
        }`}>
          <div className="w-1 h-1 rounded-full bg-blue-500/80" />
        </div>

        <div
          className={`relative rounded-[20px] sm:rounded-[24px] overflow-hidden font-sans h-[390px] xs:h-[425px] sm:h-[465px] md:h-[455px] lg:h-[485px] flex flex-col transition-colors duration-300 ${
            isLight ? "text-[#111827]" : "text-[#ececec]"
          }`}
          style={{ background: t.bg, direction: dir }}
        >
          {/* ─── Status Bar ─── */}
          <div className="pt-1.5 pb-0.5 px-2.5 flex items-center justify-between text-[8px] shrink-0 z-20 font-semibold border-b" style={{ background: t.headerBg, borderColor: t.glassBorder, color: t.fg }}>
            <span style={{ fontWeight: 800 }}>09:41</span>
            <div className="flex items-center gap-1">
              <span className="text-[7px] font-black px-1 py-[1px] rounded border" style={{ color: isLight ? "#059669" : "#22c55e", background: isLight ? "#ecfdf5" : "rgba(34,197,94,0.1)", borderColor: isLight ? "#a7f3d0" : "rgba(34,197,94,0.2)" }}>5G</span>
              <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.2 19.54 10.56 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" /></svg>
              <span style={{ fontWeight: 800, fontSize: "7.5px" }}>100%</span>
            </div>
          </div>

          {/* ─── App Header ─── */}
          <div className="px-2.5 py-1 border-b flex items-center justify-between gap-1 z-20 shrink-0" style={{ background: t.headerBg, borderColor: t.glassBorder }}>
            <div className="flex items-center gap-1 min-w-0">
              <div className="w-3.5 h-3.5 rounded flex items-center justify-center shrink-0" style={{ background: `linear-gradient(135deg, ${t.primary}, #1d4ed8)` }}>
                <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <span className="font-black text-[8.5px] tracking-wider uppercase truncate" style={{ color: t.fg }}>MIKMAN</span>
            </div>
            <div className="flex items-center gap-1 px-1 py-0.5 rounded text-[7px] border" style={{ background: t.secondary, borderColor: t.glassBorder, color: t.fg }}>
              <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
              <span className="font-extrabold truncate max-w-[55px]">RB3011</span>
              <span className="text-[6px] font-mono" style={{ color: t.textMuted }}>10.8.0.45</span>
            </div>
          </div>

          {/* ─── Content ─── */}
          <div className="flex-1 overflow-hidden relative min-h-0" style={{ background: t.bg }}>
            <div className="h-full overflow-y-auto p-1 flex flex-col gap-[2px]" style={{ scrollbarWidth: "none" }}>

              {/* Dashboard */}
              {screenType === "dashboard" && (
                <>
                  <div className="rounded-[6px] border px-1 py-[3px] flex items-center justify-between gap-1 shrink-0" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                    <div className="flex items-center gap-1 min-w-0">
                      <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: t.accent, flexShrink: 0, boxShadow: `0 0 3px ${t.accent}` }} />
                      <div className="min-w-0">
                        <div className="font-extrabold text-[6.5px] leading-tight truncate" style={{ color: t.fg }}>RB3011UiAS-RM</div>
                        <div className="flex items-center gap-0.5"><span className="text-[5.5px] uppercase" style={{ color: t.textMuted }}>{isAr ? "متصل" : "Online"}</span><span className="text-[5.5px]" style={{ color: t.textMuted }}>· v7.14</span></div>
                      </div>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}><div className="font-black text-[9px]" style={{ color: t.fg, fontVariantNumeric: "tabular-nums" }}>14:32</div><div className="text-[5.5px]" style={{ color: t.textMuted }}>{isAr ? "الأربعاء" : "Wed, Jul 29"}</div></div>
                  </div>
                  <div className="shrink-0">
                    <div className="flex items-center gap-0.5 mb-[2px]"><svg className="w-2 h-2" style={{ color: t.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg><span className="text-[5.5px] font-black uppercase tracking-wide" style={{ color: t.primary }}>{isAr ? "حالة النظام" : "System Health"}</span></div>
                    <div className="grid grid-cols-2 gap-[3px]">
                      {[{ label: "CPU", val: "14%" },{ label: "RAM", val: "64/256 MB", bar: 25 },{ label: isAr ? "الحرارة" : "Temp", val: "42°C" },{ label: isAr ? "التشغيل" : "Uptime", val: "12d 4h" },{ label: isAr ? "المستخدمين" : "Users", val: "184" },{ label: "SSID", val: "MIKMAN-WiFi" }].map((s, i) => (
                        <div key={i} className="flex items-center gap-[3px] rounded-[4px] border py-[2px] px-[3px]" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                          <div className="w-3 h-3 rounded-[3px] flex items-center justify-center shrink-0" style={{ background: `rgba(${isLight ? "37,99,235" : "59,116,214"},0.1)` }}><svg className="w-1.5 h-1.5" style={{ color: t.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                          <div className="min-w-0 flex-1"><div className="text-[5px] font-bold uppercase" style={{ color: t.textMuted }}>{s.label}</div><div className="font-black text-[7px]" style={{ color: t.fg }}>{s.val}</div>{s.bar != null && <div className="h-[2px] rounded-full mt-[2px] overflow-hidden" style={{ background: t.secondary }}><div className="h-full rounded-full" style={{ width: `${s.bar}%`, background: t.primary }} /></div>}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="flex items-center gap-0.5 mb-[2px]"><svg className="w-2 h-2" style={{ color: t.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5z" /></svg><span className="text-[5.5px] font-black uppercase tracking-wide" style={{ color: t.primary }}>{isAr ? "إجراءات سريعة" : "Quick Actions"}</span></div>
                    <div className="grid grid-cols-5 gap-[3px]">
                      {[isAr ? "كروت" : "Vouchers", isAr ? "بروفايل" : "Profiles", isAr ? "طباعة" : "Print", isAr ? "إيرادات" : "Revenue", isAr ? "إعدادات" : "Settings"].map((l, i) => (
                        <div key={i} className="flex flex-col items-center gap-[1px] rounded-[4px] border py-[3px] px-[1px] text-center" style={{ background: t.cardBg, borderColor: t.glassBorder }}><svg className="w-[9px] h-[9px]" style={{ color: t.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5z" /></svg><span className="text-[5px] font-bold leading-tight" style={{ color: t.fg }}>{l}</span></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col min-h-0">
                    <div className="flex items-center gap-0.5 mb-[2px] shrink-0"><svg className="w-2 h-2" style={{ color: t.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg><span className="text-[5.5px] font-black uppercase tracking-wide" style={{ color: t.primary }}>{isAr ? "ملخص الإيرادات" : "Revenue Summary"}</span></div>
                    <div className="grid grid-cols-2 gap-[3px] mb-[3px] shrink-0">
                      <div className="rounded-[4px] border p-[3px]" style={{ background: t.cardBg, borderColor: t.glassBorder }}><div className="text-[5px] font-bold uppercase" style={{ color: t.textMuted }}>{isAr ? "الإيرادات" : "Revenue"}</div><div className="font-black text-[9px]" style={{ color: t.fg }}>$4,850</div></div>
                      <div className="rounded-[4px] border p-[3px]" style={{ background: t.cardBg, borderColor: t.glassBorder }}><div className="text-[5px] font-bold uppercase" style={{ color: t.textMuted }}>{isAr ? "الكروت" : "Vouchers"}</div><div className="font-black text-[9px]" style={{ color: t.fg }}>3,410</div></div>
                    </div>
                    <div className="rounded-[4px] border p-[3px] shrink-0" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                      <div className="flex items-end gap-[1px]" style={{ height: 34, borderBottom: `1px solid ${t.glassBorder}` }}>{barData.map((v, i) => (<div key={i} style={{ flex: 1, height: `${v}%`, background: v > 0 ? `linear-gradient(180deg, ${t.primary}, #1d4ed8)` : t.glassBorder, borderRadius: "1px 1px 0 0" }} />))}</div>
                      <div className="flex justify-between mt-[2px] text-[5px] font-semibold" style={{ color: t.textMuted }}><span>1</span><span>15</span><span>30</span></div>
                    </div>
                  </div>
                </>
              )}

              {/* Vouchers */}
              {screenType === "vouchers" && (
                <>
                  <div className="rounded-[6px] border px-1 py-[3px] flex items-center justify-between shrink-0" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                    <div className="flex items-center gap-1 min-w-0"><div className="w-3 h-3 rounded-[3px] flex items-center justify-center shrink-0 border" style={{ background: `linear-gradient(135deg, rgba(${isLight ? "37,99,235" : "59,116,214"},0.2), rgba(${isLight ? "37,99,235" : "59,116,214"},0.4))`, borderColor: `rgba(${isLight ? "37,99,235" : "59,116,214"},0.3)`, color: t.primary }}><svg className="w-1.5 h-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5z" /></svg></div><span className="font-black text-[7px] truncate" style={{ color: t.fg }}>{isAr ? "إنشاء كروت" : "Generate Vouchers"}</span></div>
                    <div className="flex items-center gap-0.5 rounded-[3px] px-1 py-[2px] text-[5.5px] font-bold border" style={{ background: t.cardBg, borderColor: t.glassBorder, color: t.primary, flexShrink: 0 }}><svg className="w-1.5 h-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>{isAr ? "الدفعات" : "Batches"}</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <div className="flex justify-between items-center"><span className="text-[6px] font-bold" style={{ color: t.fg }}>{isAr ? "البروفايل" : "Profile"}</span><span className="text-[5.5px] font-semibold" style={{ color: t.primary }}>{isAr ? "إدارة" : "Manage"} →</span></div>
                    <div className="flex items-center justify-between rounded-[3px] border px-[4px] py-[2px] text-[6.5px]" style={{ background: t.secondary, borderColor: t.glassBorder, color: t.fg }}><div className="flex items-center gap-1"><svg className="w-1.5 h-1.5" style={{ color: t.textMuted }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg><span className="font-bold">1GB 24h</span></div><svg className="w-1.5 h-1.5" style={{ color: t.textMuted }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></div>
                    <div className="flex gap-1"><span className="text-[5px] px-1 py-[2px] rounded-[3px] font-semibold" style={{ background: "rgba(99,102,241,0.12)", color: "#818cf8" }}>24h</span><span className="text-[5px] px-1 py-[2px] rounded-[3px] font-semibold" style={{ background: "rgba(14,165,233,0.12)", color: "#0ea5e9" }}>1 GB</span></div>
                  </div>
                  <div className="grid grid-cols-2 gap-[3px] shrink-0">
                    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}><span className="text-[6px] font-bold" style={{ color: t.fg }}>{isAr ? "الكمية" : "Quantity"}</span><div className="flex items-center rounded-[3px] border px-[4px] py-[2px] text-[6.5px]" style={{ background: t.secondary, borderColor: t.glassBorder, color: t.fg }}><span className="font-bold">100</span></div></div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}><span className="text-[6px] font-bold" style={{ color: t.fg }}>{isAr ? "طول الكود" : "Code Length"}</span><div className="flex items-center rounded-[3px] border px-[4px] py-[2px] text-[6.5px]" style={{ background: t.secondary, borderColor: t.glassBorder, color: t.fg }}><span className="font-bold">6</span></div></div>
                  </div>
                  <div className="flex gap-1 shrink-0">{[100,500,1000,2000].map(q=><span key={q} className="text-[5px] px-1 py-[2px] rounded-[3px] font-semibold border" style={{background:q===100?t.primary:"transparent",color:q===100?"#fff":t.textMuted,borderColor:t.glassBorder}}>{q}</span>)}{[4,5,6,7,8].map(l=><span key={l} className="text-[5px] px-1 py-[2px] rounded-[3px] font-semibold border" style={{background:l===6?t.primary:"transparent",color:l===6?"#fff":t.textMuted,borderColor:t.glassBorder}}>{l}</span>)}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}><span className="text-[6px] font-bold" style={{ color: t.fg }}>{isAr ? "اسم الدفعة" : "Batch Label"}</span><div className="flex items-center rounded-[3px] border px-[4px] py-[2px] text-[6px]" style={{ background: t.secondary, borderColor: t.glassBorder, color: t.textMuted }}><span>{isAr ? "اختياري..." : "Optional..."}</span></div></div>
                  <div className="rounded-[5px] py-1.5 flex items-center justify-center gap-1 font-bold text-[7.5px] text-white shrink-0" style={{ background: `linear-gradient(135deg, ${t.primary}, #2563eb)` }}><svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg><span>{isAr ? "إنشاء" : "Generate"}</span></div>
                  <div className="rounded-[6px] border p-[4px] flex-1 flex flex-col min-h-0" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                    <div className="flex items-center justify-between mb-1.5 shrink-0"><span className="text-[6px] font-bold flex items-center gap-1" style={{ color: t.textMuted }}><svg className="w-2 h-2" style={{ color: t.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>{isAr ? "معاينة الكارت" : "Ticket Preview"}</span><span className="text-[5px] font-bold px-1 py-[1px] rounded" style={{ background: "rgba(34,197,94,0.12)", color: "#22c55e" }}>{isAr ? "نموذج" : "Live Mock"}</span></div>
                    <div className="rounded-[4px] border flex flex-col items-center justify-center gap-[3px] mx-auto shrink-0" style={{ width: 100, height: 44, background: "#ffffff", color: "#000000", borderColor: "#444444", padding: "4px 6px" }}><div className="flex items-center gap-0.5 text-[5.5px] font-bold"><svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" /></svg><span>MIKMAN-Hotspot</span></div><div className="font-black text-[10px] font-mono tracking-wider" style={{ letterSpacing: "1px" }}>999444</div><div className="text-[6px] font-semibold" style={{ color: "#333333" }}>1GB 24h</div></div>
                    <div className="flex flex-col gap-[2px] mt-auto text-[6px] shrink-0"><div className="flex justify-between"><span style={{ color: t.textMuted }}>{isAr ? "المجموع" : "Total"}</span><span className="font-bold" style={{ color: t.fg }}>100 {isAr ? "كارت" : "vouchers"}</span></div><div className="flex justify-between"><span style={{ color: t.textMuted }}>{isAr ? "البروفايل" : "Profile"}</span><span className="font-bold" style={{ color: t.primary }}>1GB 24h</span></div><div className="flex justify-between"><span style={{ color: t.textMuted }}>{isAr ? "طول الكود" : "Code Format"}</span><span className="font-bold" style={{ color: t.fg }}>6 {isAr ? "أرقام" : "digits"}</span></div></div>
                  </div>
                </>
              )}

              {/* Revenue */}
              {screenType === "revenue" && (
                <>
                  <div className="rounded-[6px] border px-1 py-[3px] flex items-center justify-between shrink-0" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                    <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-[3px] flex items-center justify-center shrink-0 border" style={{ background: `linear-gradient(135deg, rgba(${isLight ? "37,99,235" : "59,116,214"},0.2), rgba(${isLight ? "37,99,235" : "59,116,214"},0.4))`, borderColor: `rgba(${isLight ? "37,99,235" : "59,116,214"},0.3)`, color: t.primary }}><svg className="w-1.5 h-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg></div><span className="font-black text-[7.5px]" style={{ color: t.fg }}>{isAr ? "الإيرادات" : "Revenue"}</span></div>
                    <div className="flex items-center gap-0.5 rounded-[3px] px-1 py-[2px] text-[5.5px] font-bold border" style={{ background: t.secondary, borderColor: t.glassBorder, color: t.fg }}><svg className="w-1.5 h-1.5" style={{ color: t.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg><span>{isAr ? "آخر 30 يوم" : "Last 30 Days"}</span></div>
                  </div>
                  <div className="grid grid-cols-2 gap-[3px] shrink-0">
                    <div className="rounded-[4px] border p-[3px] flex items-center gap-[3px]" style={{ background: t.cardBg, borderColor: t.glassBorder }}><div className="w-3 h-3 rounded-[3px] flex items-center justify-center shrink-0" style={{ background: "rgba(59,130,246,0.12)", color: "#3b82f6" }}><svg className="w-1.5 h-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><div className="min-w-0 flex-1"><div className="text-[5px] font-bold uppercase" style={{ color: t.textMuted }}>{isAr ? "الإيرادات" : "Revenue"}</div><div className="font-black text-[8px]" style={{ color: t.fg }}>$4,850</div></div></div>
                    <div className="rounded-[4px] border p-[3px] flex items-center gap-[3px]" style={{ background: t.cardBg, borderColor: t.glassBorder }}><div className="w-3 h-3 rounded-[3px] flex items-center justify-center shrink-0" style={{ background: "rgba(16,185,129,0.12)", color: "#10b981" }}><svg className="w-1.5 h-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5z" /></svg></div><div className="min-w-0 flex-1"><div className="text-[5px] font-bold uppercase" style={{ color: t.textMuted }}>{isAr ? "الكروت" : "Vouchers"}</div><div className="font-black text-[8px]" style={{ color: t.fg }}>3,410</div></div></div>
                  </div>
                  <div className="rounded-[6px] border p-[4px] shrink-0" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                    <div className="flex items-center justify-between mb-[2px]"><div className="flex items-center gap-0.5"><svg className="w-2 h-2" style={{ color: t.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg><span className="text-[6.5px] font-black" style={{ color: t.fg }}>{isAr ? "المخطط اليومي" : "Daily Chart"}</span></div><span className="text-[5px] font-bold px-1 py-[1px] rounded-full border" style={{ background: t.secondary, borderColor: t.glassBorder, color: t.textMuted }}>30d</span></div>
                    <div className="flex gap-1"><div className="flex flex-col justify-between text-[5px] font-bold shrink-0 pb-[14px]" style={{ color: t.textMuted, width: 14, textAlign: "right" }}><span>$5k</span><span>$0</span></div><div className="flex-1 flex flex-col"><div className="flex items-end gap-[1.5px]" style={{ height: 48, borderBottom: `1px solid ${t.glassBorder}` }}>{barData.map((v, i) => (<div key={i} style={{ flex: 1, height: `${v}%`, background: v > 0 ? `linear-gradient(180deg, ${t.primary}, #1d4ed8)` : t.glassBorder, borderRadius: "1px 1px 0 0" }} />))}</div><div className="flex justify-between mt-[2px] text-[5px] font-semibold" style={{ color: t.textMuted }}><span>1</span><span>15</span><span>30</span></div></div></div>
                  </div>
                  <div className="rounded-[6px] border p-[4px] shrink-0" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                    <div className="flex items-center justify-between mb-[2px]"><div className="flex items-center gap-0.5"><svg className="w-2 h-2" style={{ color: t.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg><span className="text-[6.5px] font-black" style={{ color: t.fg }}>{isAr ? "حسب البروفايل" : "By Profile"}</span></div><span className="text-[5.5px] font-semibold" style={{ color: t.textMuted }}>4 {isAr ? "بروفايل" : "profiles"}</span></div>
                    {[{ name: "1GB 24h", pct: 65, color: "#3b82f6", revenue: "$3,152" },{ name: "3GB 7d", pct: 22, color: "#10b981", revenue: "$1,067" },{ name: "10GB 30d", pct: 13, color: "#a855f7", revenue: "$630" }].map((p, i) => (
                      <div key={i} className="rounded-[3px] border py-[2px] px-[3px] mb-[2px] last:mb-0" style={{ background: t.secondary, borderColor: t.glassBorder }}>
                        <div className="flex justify-between items-center"><div className="flex items-center gap-1"><span className="text-[5.5px] font-black px-1 py-[1px] rounded-[2px]" style={{ background: `${p.color}18`, color: p.color, border: `1px solid ${p.color}30` }}>#{i + 1}</span><div className="text-[6px] font-bold" style={{ color: t.fg }}>{p.name}</div></div><div className="text-right flex items-center gap-1.5"><div className="font-black text-[7px]" style={{ color: t.fg }}>{p.revenue}</div><div className="text-[6px] font-bold" style={{ color: p.color }}>{p.pct}%</div></div></div>
                        <div className="h-[3px] rounded-full overflow-hidden mt-[2px]" style={{ background: "rgba(255,255,255,0.06)" }}><div className="h-full rounded-full" style={{ width: `${p.pct}%`, background: `linear-gradient(90deg, ${p.color}, ${p.color}dd)` }} /></div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Profiles */}
              {screenType === "profiles" && (
                <>
                  <div className="rounded-[6px] border px-1 py-[3px] flex items-center justify-between shrink-0" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                    <div className="flex items-center gap-1 min-w-0"><div className="w-3 h-3 rounded-[3px] flex items-center justify-center shrink-0 border" style={{ background: `linear-gradient(135deg, rgba(${isLight ? "37,99,235" : "59,116,214"},0.2), rgba(${isLight ? "37,99,235" : "59,116,214"},0.4))`, borderColor: `rgba(${isLight ? "37,99,235" : "59,116,214"},0.3)`, color: t.primary }}><svg className="w-1.5 h-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg></div><span className="font-black text-[7.5px]" style={{ color: t.fg }}>{isAr ? "بروفايلات السرعة" : "Speed Profiles"}</span></div>
                    <div className="rounded-[4px] py-[2px] px-1.5 text-[6px] font-bold text-white" style={{ background: `linear-gradient(135deg, ${t.primary}, #2563eb)` }}>+ {isAr ? "جديد" : "New"}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-[3px] shrink-0">
                    <div className="rounded-[4px] border p-[2px] flex items-center gap-[3px]" style={{ background: t.cardBg, borderColor: t.glassBorder }}><div className="w-3 h-3 rounded-[3px] flex items-center justify-center shrink-0" style={{ background: "rgba(59,130,246,0.12)", color: "#3b82f6" }}><svg className="w-1.5 h-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg></div><div className="min-w-0"><div className="text-[5px] font-bold" style={{ color: t.textMuted }}>{isAr ? "الكل" : "Total"}</div><div className="font-black text-[8px]" style={{ color: t.fg }}>5</div></div></div>
                    <div className="rounded-[4px] border p-[2px] flex items-center gap-[3px]" style={{ background: t.cardBg, borderColor: t.glassBorder }}><div className="w-3 h-3 rounded-[3px] flex items-center justify-center shrink-0" style={{ background: "rgba(34,197,94,0.12)", color: "#22c55e" }}><svg className="w-1.5 h-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg></div><div className="min-w-0"><div className="text-[5px] font-bold" style={{ color: t.textMuted }}>{isAr ? "مفتوح" : "Unlimited"}</div><div className="font-black text-[8px]" style={{ color: "#22c55e" }}>2</div></div></div>
                    <div className="rounded-[4px] border p-[2px] flex items-center gap-[3px]" style={{ background: t.cardBg, borderColor: t.glassBorder }}><div className="w-3 h-3 rounded-[3px] flex items-center justify-center shrink-0" style={{ background: "rgba(168,85,247,0.12)", color: "#a855f7" }}><svg className="w-1.5 h-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg></div><div className="min-w-0"><div className="text-[5px] font-bold" style={{ color: t.textMuted }}>{isAr ? "محدود" : "Limited"}</div><div className="font-black text-[8px]" style={{ color: "#a855f7" }}>3</div></div></div>
                  </div>
                  <div className="flex flex-col gap-[3px] flex-1 overflow-y-auto">
                    {[{ name: "1GB 24h", validity: "24h", limit: "1 GB", price: 5.00, color: "#3b82f6" },{ name: "3GB 7d", validity: "7d", limit: "3 GB", price: 15.00, color: "#10b981" },{ name: "10GB 30d", validity: "30d", limit: "10 GB", price: 45.00, color: "#a855f7" },{ name: "Unlimited VIP", validity: isAr ? "غير محدود" : "Unlimited", limit: isAr ? "غير محدود" : "Unlimited", price: 100.00, color: "#f59e0b" }].map((p, i) => (
                      <div key={i} className="rounded-[6px] border p-[4px]" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                        <div className="flex justify-between items-center"><div className="flex items-center gap-1.5"><div className="w-4 h-4 rounded-[3px] flex items-center justify-center shrink-0 border" style={{ background: `${p.color}18`, color: p.color, borderColor: `${p.color}30` }}><svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg></div><div><div className="text-[7px] font-bold" style={{ color: t.fg }}>{p.name}</div><div className="flex items-center gap-1"><span className="text-[5.5px] font-semibold px-1 py-[1px] rounded bg-sky-500/10 text-sky-400">{p.validity}</span><span className="text-[5.5px] font-semibold px-1 py-[1px] rounded bg-purple-500/10 text-purple-400">{p.limit}</span></div></div></div><div className="text-right"><div className="font-black text-[9px]" style={{ color: t.fg }}>${p.price.toFixed(2)}</div><div className="flex gap-1 mt-0.5"><div className="w-3.5 h-3.5 rounded-[2px] flex items-center justify-center border" style={{ borderColor: t.glassBorder }}><svg className="w-1.5 h-1.5" style={{ color: t.textMuted }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg></div><div className="w-3.5 h-3.5 rounded-[2px] flex items-center justify-center border" style={{ borderColor: "rgba(239,68,68,0.2)" }}><svg className="w-1.5 h-1.5" style={{ color: "#ef4444" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></div></div></div></div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Batch */}
              {screenType === "batch" && (
                <>
                  <div className="rounded-[6px] border px-1 py-[3px] flex items-center justify-between shrink-0" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                    <div className="flex items-center gap-1 min-w-0"><div className="w-3 h-3 rounded-[3px] flex items-center justify-center shrink-0 border" style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(79,70,229,0.4))", borderColor: "rgba(99,102,241,0.3)", color: "#6366f1" }}><svg className="w-1.5 h-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg></div><span className="font-black text-[7.5px]" style={{ color: t.fg }}>{isAr ? "الدفعات" : "Print Batches"}</span></div>
                    <div className="rounded-[4px] py-[2px] px-1.5 text-[6px] font-bold text-white" style={{ background: `linear-gradient(135deg, ${t.primary}, #2563eb)` }}>+ {isAr ? "إنشاء" : "Create"}</div>
                  </div>
                  <div className="grid grid-cols-4 gap-[3px] shrink-0">
                    {[{ l: isAr ? "الدفعات" : "Batches", v: "12", c: "#6366f1" },{ l: isAr ? "الكروت" : "Vouchers", v: "3,410", c: "#0ea5e9" },{ l: isAr ? "غير مستخدم" : "Unused", v: "1,892", c: "#22c55e" },{ l: isAr ? "نشط" : "Active", v: "1,518", c: "#3b82f6" }].map((s, i) => (
                      <div key={i} className="rounded-[4px] border p-[2px]" style={{ background: t.cardBg, borderColor: t.glassBorder }}><div className="text-[5px] font-bold" style={{ color: t.textMuted }}>{s.l}</div><div className="font-black text-[9px]" style={{ color: s.c }}>{s.v}</div></div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-[3px] flex-1 overflow-y-auto">
                    {[{ name: "Batch #104", profile: "1GB 24h", count: 500, unused: 312, date: "2026-07-28" },{ name: "Batch #103", profile: "3GB 7d", count: 200, unused: 89, date: "2026-07-25" },{ name: "Batch #102", profile: "1GB 24h", count: 1000, unused: 643, date: "2026-07-20" },{ name: "Batch #101", profile: "10GB 30d", count: 100, unused: 28, date: "2026-07-15" }].map((b, i) => (
                      <div key={i} className="rounded-[6px] border p-[4px] flex items-center justify-between" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                        <div className="min-w-0"><div className="text-[7px] font-bold" style={{ color: t.fg }}>{b.name}</div><div className="text-[5.5px]" style={{ color: t.textMuted }}>{b.profile} · {b.date}</div></div>
                        <div className="text-right"><div className="font-black text-[8px]" style={{ color: t.accent }}>{b.unused}</div><div className="text-[5px]" style={{ color: t.textMuted }}>{isAr ? "غير مستخدم" : "unused"}</div></div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Batch Detail */}
              {screenType === "batch-detail" && (
                <>
                  <div className="flex items-center gap-1 shrink-0 mb-1">
                    <svg className="w-2.5 h-2.5" style={{ color: t.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    <span className="text-[6.5px] font-bold" style={{ color: t.textMuted }}>{isAr ? "الدفعات" : "Batches"}</span>
                  </div>
                  <div className="rounded-[6px] border p-[4px] shrink-0" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                    <div className="flex items-center justify-between"><div><div className="text-[7px] font-black" style={{ color: t.fg }}>Batch #104</div><div className="text-[5.5px]" style={{ color: t.textMuted }}>1GB 24h · 2026-07-28</div></div><div className="flex items-center gap-1"><div className="rounded-[3px] py-[2px] px-2 text-[6px] font-bold text-white" style={{ background: "#6366f1" }}><svg className="w-2 h-2 inline mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>{isAr ? "طباعة" : "Print"}</div></div></div>
                  </div>
                  <div className="grid grid-cols-3 gap-[3px] shrink-0">
                    {[{ l: isAr ? "المجموع" : "Total", v: "500", c: t.fg },{ l: isAr ? "غير مستخدم" : "Unused", v: "312", c: t.accent },{ l: isAr ? "نشط" : "Active", v: "188", c: t.primary }].map((s, i) => (
                      <div key={i} className="rounded-[4px] border p-[2px] text-center" style={{ background: t.cardBg, borderColor: t.glassBorder }}><div className="text-[5px] font-bold" style={{ color: t.textMuted }}>{s.l}</div><div className="font-black text-[9px]" style={{ color: s.c }}>{s.v}</div></div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-[3px] flex-1 overflow-y-auto">
                    {[{ code: "MK-9821", status: "Unused" },{ code: "MK-7412", status: "Active" },{ code: "MK-3301", status: "Unused" },{ code: "MK-5502", status: "Active" },{ code: "MK-8820", status: "Unused" },{ code: "MK-1234", status: "Unused" },{ code: "MK-5678", status: "Expired" }].map((v, i) => (
                      <div key={i} className="rounded-[4px] border py-[2px] px-[3px] flex items-center justify-between" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                        <span className="font-mono font-bold text-[7.5px]" style={{ color: t.primary }}>{v.code}-{String(i+1).padStart(2,'0')}A</span>
                        <span className="text-[6px] font-bold px-1.5 py-[1px] rounded" style={{ background: v.status === "Unused" ? (isLight ? "#ecfdf5" : "rgba(34,197,94,0.12)") : v.status === "Active" ? (isLight ? "#eff6ff" : "rgba(59,130,246,0.12)") : "rgba(239,68,68,0.12)", color: v.status === "Unused" ? t.accent : v.status === "Active" ? t.primary : "#ef4444" }}>{v.status}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Hotspot Template */}
              {screenType === "hotspot" && (
                <div className="flex-1 flex flex-col items-center justify-center gap-3 rounded-[10px] mx-1 my-2" style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)" }}>
                  {/* WiFi Icon */}
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(59,130,246,0.15)", border: "2px solid rgba(59,130,246,0.25)" }}>
                    <svg className="w-6 h-6" style={{ color: "#3b82f6" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
                    </svg>
                  </div>
                  {/* SSID */}
                  <div className="text-center">
                    <div className="text-[9px] font-black text-white mb-0.5">MIKMAN-WiFi</div>
                    <div className="text-[6px] text-slate-400">{isAr ? "مرحباً بك! أدخل كود الكارت للاتصال" : "Welcome! Enter your voucher code to connect"}</div>
                  </div>
                  {/* Voucher Code Input */}
                  <div className="w-4/5 rounded-md border px-3 py-2 text-center text-[7px]" style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)" }}>
                    {isAr ? "كود الكارت" : "Voucher Code"}
                  </div>
                  {/* Connect Button */}
                  <div className="w-4/5 rounded-md py-2.5 text-center text-[8px] font-black text-white" style={{ background: `linear-gradient(135deg, ${t.primary}, #1d4ed8)`, boxShadow: `0 4px 16px rgba(${isLight ? "37,99,235" : "59,116,214"},0.4)` }}>
                    {isAr ? "اتصل" : "Connect"}
                  </div>
                  {/* Footer */}
                  <div className="text-[5.5px] text-slate-500 mt-1">{isAr ? "مشغل بواسطة مكمان" : "Powered by Mikman"}</div>
                </div>
              )}

              {/* Routers Selection */}
              {screenType === "routers" && (
                <>
                  <div className="flex items-center justify-between shrink-0">
                    <span className="text-[6.5px] font-black" style={{ color: t.fg }}>{isAr ? "لوحة التحكم" : "Dashboard"}</span>
                    <div className="flex items-center gap-1">
                      <div className="w-3.5 h-3.5 rounded-[3px] flex items-center justify-center border" style={{ background: t.cardBg, borderColor: t.glassBorder, color: t.primary }}><svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg></div>
                      <div className="rounded-[3px] py-[2px] px-1.5 text-[6px] font-bold text-white" style={{ background: `linear-gradient(135deg, ${t.primary}, #2563eb)` }}>+</div>
                    </div>
                  </div>
                  <div className="rounded-[6px] border p-[3px] flex items-center justify-between text-[6px]" style={{ background: t.cardBg, borderColor: t.glassBorder }}>
                    <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full flex items-center justify-center shrink-0" style={{ background: `rgba(${isLight ? "37,99,235" : "59,116,214"},0.12)`, color: t.primary }}><svg className="w-1.5 h-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></div><span className="font-bold truncate" style={{ color: t.fg }}>faris@mikman.net</span></div>
                    <div className="flex items-center gap-1.5"><span className="font-bold px-1 py-[1px] rounded" style={{ background: `rgba(${isLight ? "37,99,235" : "59,116,214"},0.1)`, color: t.primary }}>{isAr ? "برو" : "Pro"}</span><span className="font-bold" style={{ color: t.textMuted }}>30d</span></div>
                  </div>
                  <div className="flex items-center justify-between text-[6px] font-bold shrink-0"><span style={{ color: t.textMuted }}>{isAr ? "الأجهزة المسجلة" : "Registered Routers"}</span><span className="px-1 py-[1px] rounded" style={{ background: `rgba(${isLight ? "37,99,235" : "59,116,214"},0.1)`, color: t.primary }}>3</span></div>
                  <div className="flex flex-col gap-[3px] flex-1 overflow-y-auto">
                    {[{ name: "RB3011-Hotspot", model: "RB3011UiAS", users: 184, cpu: "14%", ram: "64M", temp: "42°C", up: "12d", online: true },{ name: "Branch Office", model: "hEX S", users: 62, cpu: "8%", ram: "32M", temp: "38°C", up: "5d", online: true },{ name: "Cafe Router", model: "hAP AX³", users: 28, cpu: "22%", ram: "48M", temp: "—", up: "—", online: false }].map((r, i) => (
                      <div key={i} className="rounded-[6px] border p-[4px]" style={{ background: t.cardBg, borderColor: t.glassBorder, opacity: r.online ? 1 : 0.55 }}>
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-1.5"><div className="relative"><div className="w-4 h-4 rounded-[3px] flex items-center justify-center border" style={{ background: "rgba(var(--primary-rgb),0.08)", borderColor: t.glassBorder, color: t.primary }}><svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div><div style={{ position: "absolute", top: -1, right: -1, width: 5, height: 5, borderRadius: "50%", backgroundColor: r.online ? t.accent : "#94a3b8", border: `1.5px solid ${t.cardBg}` }} /></div><div className="font-extrabold text-[7px] truncate" style={{ color: t.fg }}>{r.name}</div></div>
                          <svg className="w-3 h-3" style={{ color: t.textMuted }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </div>
                        <div className="flex items-center justify-between text-[5.5px] font-bold" style={{ color: t.textMuted, borderTop: `1px solid ${t.glassBorder}`, paddingTop: 3 }}>
                          <span>{isAr ? "متصلين" : "Users"}: <b style={{ color: t.fg }}>{r.users}</b></span>
                          <span>CPU: <b style={{ color: t.accent }}>{r.cpu}</b></span>
                          <span>RAM: <b style={{ color: t.primary }}>{r.ram}</b></span>
                          <span>{isAr ? "حرارة" : "Temp"}: <b>{r.temp}</b></span>
                          <span>{isAr ? "تشغيل" : "Up"}: <b>{r.up}</b></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

            </div>
          </div>

          {/* ─── Bottom Navigation ─── */}
          <div className="px-1 py-1 border-t flex items-center justify-around text-[7px] font-bold shrink-0 z-20" style={{ background: t.headerBg, borderColor: t.glassBorder, color: t.textMuted }}>
            {[
              { type: "dashboard", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", label: isAr ? "الرئيسية" : "Home" },
              { type: "vouchers", icon: "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5z", label: isAr ? "الكروت" : "Cards" },
              { type: "revenue", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", label: isAr ? "المبيعات" : "Sales" },
              { type: "profiles", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", label: isAr ? "بروفايلات" : "Profiles" },
            ].map((nav, i) => (
              <div key={i} className={`flex flex-col items-center gap-[1px] ${screenType === nav.type ? "font-black" : ""}`} style={screenType === nav.type ? { color: t.primary } : {}}>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={nav.icon} /></svg>
                <span>{nav.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}