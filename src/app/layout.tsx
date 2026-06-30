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
    "solarna rjesenja",
    "solarna resenja",
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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Ekogrid",
  alternateName: "Ekogrid Solar Solutions",
  url: "https://ekogrid.ba",
  logo: "https://ekogrid.ba/logo/ekogrid-logo3.svg",
  image: "https://ekogrid.ba/images/og-image.png",
  description:
    "Ekogrid projektuje solarne elektrane za domaćinstva, kompanije i investitorske projekte. Usluge uključuju tehničku analizu, ekonomsku procjenu, PVSyst simulacije i stručne konsultacije.",

  email: "info@ekogrid.ba",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Trebinje",
    addressRegion: "Republika Srpska",
    addressCountry: "BA",
  },

  areaServed: {
    "@type": "Country",
    name: "Bosna i Hercegovina",
  },

  serviceType: [
    "Projektovanje solarnih elektrana",
    "Solarne elektrane za domaćinstva",
    "Solarne elektrane za kompanije",
    "Solarne elektrane za investitore",
    "PVSyst simulacije",
    "Tehnička analiza",
    "Ekonomska analiza",
    "Konsultacije za solarne elektrane",
  ],

  sameAs: [
    "https://ekogrid.ba",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}