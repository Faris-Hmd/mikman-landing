import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Mikman",
    default: "Mikman — Router Manager App",
  },
  description:
    "Mikman is the all-in-one router management application for MikroTik networks. Monitor, configure, and manage your routers from a single dashboard.",
  metadataBase: new URL("https://mikman.net"),
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SA",
    siteName: "Mikman",
    title: "Mikman — Router Manager App",
    description:
      "Mikman is the all-in-one router management application for MikroTik networks.",
    url: "https://mikman.net",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mikman — Router Manager App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mikman — Router Manager App",
    description:
      "Mikman is the all-in-one router management application for MikroTik networks.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}