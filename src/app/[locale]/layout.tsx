import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;

    return {
        metadataBase: new URL("https://ekogrid.ba"),
        alternates: {
            canonical: `/${locale}`,
            languages: {
                sr: "/sr",
                en: "/en",
                "x-default": "/sr"
            }
        }
    };
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    const messages = (await import(`../../messages/${locale}.json`)).default;

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    );
}