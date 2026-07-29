"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

export default function Faq() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqItems = [
    {
      q: isAr ? "هل يدعم مكمان إصدارات RouterOS v6 و v7؟" : "Does Mikman support RouterOS v6 and v7?",
      a: isAr
        ? "نعم، يدعم مكمان جميع أجهزة ميكروتك التي تعمل بنظام RouterOS v6 و v7 عبر REST API وقنوات الاتصال المشفرة."
        : "Yes, Mikman fully supports both RouterOS v6 and v7 via native REST API and encrypted connection channels.",
    },
    {
      q: isAr ? "كيف يتم عرض الإيرادات بالجنيه السوداني (SDG)؟" : "How is revenue tracked in Sudanese Pounds (SDG)?",
      a: isAr
        ? "يتم تحديد أسعار الباقات بالجنيه السوداني، وحساب المبيعات والإيرادات اليومية والشهرية وتوليد التقارير بالـ SDG تلقائيًا."
        : "Voucher prices are configured in SDG, with automatic daily and monthly revenue analytics and reports.",
    },
    {
      q: isAr ? "كيف يتم الاتصال بأجهزة الراوتر الخاصة بي؟" : "How does Mikman connect to my routers securely?",
      a: isAr
        ? "يتم الاتصال من خلال نفق WireGuard VPN آمن ومشفر بشكل فردي لكل راوتر بدون فتح منافذ عامة على الإنترنت."
        : "Routers connect via an isolated WireGuard VPN tunnel without exposing public ports on the internet.",
    },
    {
      q: isAr ? "هل أستطيع طباعة الكروت بصيغة PDF؟" : "Can I print vouchers in PDF format?",
      a: isAr
        ? "نعم، يوفر مكمان إمكانية إنشاء دفعات الكروت وطباعتها مباشرة في ملفات PDF منسقة وجاهزة للقص والتوزيع."
        : "Yes, you can generate voucher batches and export ready-to-print formatted PDF files directly.",
    },
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-bg transition-colors duration-200">
      {/* Ambient background light */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold text-xs tracking-widest uppercase mb-2 block">
            {isAr ? "الأسئلة الشائعة" : "FAQS"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary mb-4 tracking-tight">
            {isAr ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
          </h2>
          <p className="text-text-muted text-base max-w-xl mx-auto font-normal leading-relaxed">
            {isAr
              ? "إجابات شائعة حول التوافق، الإيرادات بالـ SDG، وطباعة الكروت."
              : "Common questions regarding compatibility, SDG currency, and PDF voucher printing."}
          </p>
        </motion.div>

        {/* List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          {faqItems.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`bg-surface-card backdrop-blur-xl border rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ${
                  isOpen
                    ? "border-primary/60 bg-surface"
                    : "border-border hover:border-primary/40"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 font-bold text-text-primary text-base sm:text-lg hover:text-primary transition-colors"
                >
                  <span className={isAr ? "text-right" : "text-left"}>{item.q}</span>
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen ? "bg-primary text-white rotate-180 shadow-lg shadow-primary/30" : "bg-primary/10 text-text-muted"
                  }`}>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-text-muted text-sm border-t border-border pt-4 leading-relaxed font-normal">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

