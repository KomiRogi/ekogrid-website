import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
    title: "EkoGrid",
    description: "Solarna rješenja za domaćinstva, kompanije i investitorske projekte."
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="sr">
            <body>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-RYL60F10PV"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-RYL60F10PV');
                    `}
                </Script>

                {children}
            </body>
        </html>
    );
}