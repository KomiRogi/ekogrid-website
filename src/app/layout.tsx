import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ekogrid.ba"),
  title: "EkoGrid | Solarna rješenja",
  description:
    "Projektovanje i konsultacije za solarne elektrane za domaćinstva, kompanije i investitorske projekte.",

  openGraph: {
    title: "EkoGrid | Solarna rješenja",
    description:
      "Projektovanje i konsultacije za solarne elektrane za domaćinstva, kompanije i investitorske projekte.",
    //images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}