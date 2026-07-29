import Link from "next/link";

export default function LocaleNotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-7xl font-black text-blue-500 mb-2">404</h1>
      <h2 className="text-2xl font-bold text-slate-100 mb-3">الصفحة غير موجودة</h2>
      <p className="text-slate-400 text-sm max-w-sm mb-6">
        عذراً، الصفحة التي تحاول الوصول إليها غير متوفرة أو تم تغيير مسارها.
      </p>
      <Link
        href="/ar"
        className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-2.5 rounded-xl transition-all text-sm"
      >
        العودة إلى الصفحة الرئيسية
      </Link>
    </div>
  );
}
