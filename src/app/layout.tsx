import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ekogrid.ba"),

  title: {
    default: "EkoGrid | Solarne elektrane i solarna rješenja u BiH",
    template: "%s | EkoGrid",
  },

  description:
    "EkoGrid projektuje solarne elektrane za domaćinstva, kompanije i investitorske projekte. Tehnička analiza, ekonomska procjena, PVSyst simulacije i stručne konsultacije.",

  keywords: [
    "EkoGrid",
    "solarne elektrane",
    "solarni paneli",
    "solarna energija",
    "solarna rješenja",
    "fotonaponski sistemi",
    "obnovljivi izvori energije",
    "PVSyst",
    "Trebinje",
    "Bosna i Hercegovina",
    "BiH",
  ],

  authors: [{ name: "EkoGrid" }],
  creator: "EkoGrid",
  publisher: "EkoGrid",

  alternates: {
    canonical: "https://ekogrid.ba/sr",
    languages: {
      sr: "https://ekogrid.ba/sr",
      en: "https://ekogrid.ba/en",
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "EkoGrid | Solarne elektrane i solarna rješenja u BiH",
    description:
      "Projektovanje i konsultacije za solarne elektrane za domaćinstva, kompanije i investitorske projekte.",
    url: "https://ekogrid.ba/sr",
    siteName: "EkoGrid",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "EkoGrid solarna rješenja",
      },
    ],
    locale: "sr_BA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "EkoGrid | Solarne elektrane i solarna rješenja u BiH",
    description:
      "Projektovanje i konsultacije za solarne elektrane za domaćinstva, kompanije i investitorske projekte.",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  );
}