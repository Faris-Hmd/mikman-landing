"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    startTransition(() => {
      router.replace(newPath);
    });
  };

  return (
    <button
      onClick={() => switchLocale(locale === "en" ? "ar" : "en")}
      disabled={isPending}
      className="h-9 px-3 text-xs font-bold rounded-xl border border-border hover:border-border-hover bg-surface/80 hover:bg-surface backdrop-blur-md flex items-center gap-1.5 text-text-muted hover:text-text-primary transition-all duration-200 disabled:opacity-50 shrink-0"
      aria-label="Switch language"
    >
      <svg className="w-3.5 h-3.5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
      <span>{locale === "en" ? "العربية" : "English"}</span>
    </button>
  );
}