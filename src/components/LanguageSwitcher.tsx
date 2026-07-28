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
      className="text-[#8e9196] hover:text-[#ececec] transition-colors duration-200 text-sm font-semibold px-3 py-1.5 rounded-lg border border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.03] disabled:opacity-50"
      aria-label="Switch language"
    >
      {locale === "en" ? "العربية" : "English"}
    </button>
  );
}