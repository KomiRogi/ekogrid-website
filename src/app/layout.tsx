import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ekogrid.ba"),

  title: "Ekogrid | Solarna rješenja",
  description:
    "Projektovanje i konsultacije za solarne elektrane za domaćinstva, kompanije i investitorske projekte.",

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
    title: "Ekogrid | Solarna rešenja",
    description:
      "Projektovanje i konsultacije za solarne elektrane za domaćinstva, kompanije i investitorske projekte.",
    url: "https://ekogrid.ba",
    siteName: "EkoGrid",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ekogrid solarna rešenja",
      },
    ],
    locale: "sr_BA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "EkoGrid | Solarna rješenja",
    description:
      "Projektovanje i konsultacije za solarne elektrane za domaćinstva, kompanije i investitorske projekte.",
    images: ["/images/og-image.png"],
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