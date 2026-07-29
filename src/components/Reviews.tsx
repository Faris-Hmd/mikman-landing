"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Reviews() {
  const t = useTranslations("reviews");
  const items = t.raw("items") as {
    quote: string;
    author: string;
    role: string;
    stars: number;
  }[];

  return (
    <section id="reviews" className="py-24 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-extrabold text-xs tracking-widest uppercase mb-2 block">
            {t("eyebrow")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary mb-4 tracking-tight">
            {t("heading")}
          </h2>
          <p className="text-text-muted text-base max-w-xl mx-auto font-normal leading-relaxed">
            {t("subheading")}
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-surface/80 backdrop-blur-xl border border-border rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 shadow-sm flex flex-col justify-between group"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-6 text-amber-400">
                  {[...Array(item.stars || 5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-text-primary text-base font-medium leading-relaxed italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-4 pt-6 border-t border-border/60">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary font-extrabold flex items-center justify-center text-base shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-text-primary font-extrabold text-base leading-tight">
                    {item.author}
                  </h4>
                  <p className="text-text-muted text-xs font-semibold mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
