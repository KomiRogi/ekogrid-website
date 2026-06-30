import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ekogrid.ba"),

  title: {
    default: "Ekogrid | Solarne elektrane i solarna rješenja u BiH",
    template: "%s | Ekogrid",
  },

  description:
    "Ekogrid projektuje solarne elektrane za domaćinstva, kompanije i investitorske projekte. Tehnička analiza, ekonomska procjena, PVSyst simulacije i stručne konsultacije.",

  keywords: [
    "Ekogrid",
    "solarne elektrane",
    "solarni paneli",
    "solarna energija",
    "solarna rješenja",
    "solarna rešenja",
    "fotonaponski sistemi",
    "obnovljivi izvori energije",
    "PVSyst",
    "PV",
    "Prozumjeri",
    "Prosumeri",
    "Kupac-proizvođač",
    "Trebinje",
    "Hercegovina",
    "Bosna i Hercegovina",
    "BiH",
  ],

  authors: [{ name: "Ekogrid" }],
  creator: "Ekogrid",
  publisher: "Ekogrid",

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
    title: "Ekogrid | Solarne elektrane i solarna rješenja u BiH",
    description:
      "Projektovanje i konsultacije za solarne elektrane za domaćinstva, kompanije i investitorske projekte.",
    url: "https://ekogrid.ba/sr",
    siteName: "Ekogrid",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ekogrid solarna rješenja",
      },
    ],
    locale: "sr_BA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ekogrid | Solarne elektrane i solarna rješenja u BiH",
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