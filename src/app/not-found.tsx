import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="bg-[#0b0f19] text-slate-100 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-4 max-w-md">
          <h1 className="text-6xl font-extrabold text-blue-500">404</h1>
          <h2 className="text-xl font-bold">Page Not Found</h2>
          <p className="text-slate-400 text-sm">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/ar"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-2.5 rounded-xl transition-all text-sm"
          >
            Return Home / العودة للرئيسية
          </Link>
        </div>
      </body>
    </html>
  );
}
