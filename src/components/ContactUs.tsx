"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

export default function ContactUs() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const isAr = locale === "ar";
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-bg transition-colors duration-200">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold text-xs tracking-widest uppercase mb-2 block">
            {t("eyebrow")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary mb-4 tracking-tight">
            {t("heading")}
          </h2>
          <p className="text-text-muted text-base max-w-xl mx-auto font-normal leading-relaxed">
            {t("subheading")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Vector Illustration & Info */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-surface-card backdrop-blur-xl border border-border rounded-2xl p-8 shadow-xl space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-blue-600 border border-white/20 text-white flex items-center justify-center shadow-lg shadow-primary/30">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <div>
                <h3 className="text-text-primary font-black text-2xl mb-2">
                  {isAr ? "نحن هنا لمساعدتك" : "We are here to help"}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {isAr
                    ? "إذا كان لديك أي سؤال حول الربط أو خطط الأسعار أو إدارة أجهزة ميكروتك، أرسل لنا رسالة وسنرد عليك."
                    : "Have questions about integration, pricing plans, or MikroTik management? Drop us a message."}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-border text-sm">
                <div className="flex items-center gap-3 text-text-primary">
                  <div className="w-9 h-9 rounded-xl bg-surface border border-border flex items-center justify-center text-primary font-bold shrink-0">
                    📧
                  </div>
                  <span>support@mikman.net</span>
                </div>
                <div className="flex items-center gap-3 text-text-primary">
                  <div className="w-9 h-9 rounded-xl bg-surface border border-border flex items-center justify-center text-primary font-bold shrink-0">
                    💬
                  </div>
                  <span>Telegram / WhatsApp Support</span>
                </div>
                <div className="flex items-center gap-3 text-text-primary">
                  <div className="w-9 h-9 rounded-xl bg-surface border border-border flex items-center justify-center text-primary font-bold shrink-0">
                    ⚡
                  </div>
                  <span>Instant WireGuard Provisioning</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-surface-card backdrop-blur-xl border border-border rounded-2xl p-8 sm:p-10 shadow-2xl space-y-6"
            >
              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-text-muted mb-2">
                  {t("nameLabel")}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t("namePlaceholder")}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-surface border border-border focus:border-primary focus:bg-surface-card focus:outline-none transition-all text-text-primary text-sm font-medium placeholder-text-muted/60"
                />
              </div>

              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-text-muted mb-2">
                  {t("emailLabel")}
                </label>
                <input
                  type="email"
                  required
                  placeholder={t("emailPlaceholder")}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-surface border border-border focus:border-primary focus:bg-surface-card focus:outline-none transition-all text-text-primary text-sm font-medium placeholder-text-muted/60"
                />
              </div>

              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-text-muted mb-2">
                  {t("messageLabel")}
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder={t("messagePlaceholder")}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-surface border border-border focus:border-primary focus:bg-surface-card focus:outline-none transition-all text-text-primary text-sm font-medium placeholder-text-muted/60 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary-dark hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-xs uppercase tracking-wider shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.01]"
              >
                {t("sendBtn")}
              </button>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold text-center">
                  {t("successMsg")}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

