"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
    const t = useTranslations("Footer");
    const locale = useLocale();

    return (
        <footer
            id="footer"
            className="bg-[var(--ekogrid-bg)] px-6 py-20 text-[var(--ekogrid-text)]"
        >
            <div className="mx-auto grid max-w-7xl gap-12 border-b border-white/10 pb-16 md:grid-cols-[1.4fr_1fr_1fr]">
                <div>
                    <Link href={`/${locale}`} className="inline-flex">
                        <Image
                            src="/logo/ekogrid-logo3.svg"
                            alt="EkoGrid logo"
                            width={150}
                            height={50}
                            className="h-12 w-auto"
                        />
                    </Link>

                    <p className="mt-6 max-w-sm text-white/70">
                        {t("description")}
                    </p>
                </div>

                <div className="md:justify-self-center">
                    <p className="eyebrow mb-6 text-sm uppercase tracking-[0.25em] text-[var(--ekogrid-lime)]">
                        {t("solutions")}
                    </p>

                    <div className="space-y-3 text-white/80">
                        <Link href={`/${locale}/solutions/residential`} className="block hover:text-[var(--ekogrid-lime)]">
                            {t("residential")}
                        </Link>
                        <Link href={`/${locale}/solutions/business`} className="block hover:text-[var(--ekogrid-lime)]">
                            {t("business")}
                        </Link>
                        <Link href={`/${locale}/solutions/investors`} className="block hover:text-[var(--ekogrid-lime)]">
                            {t("investors")}
                        </Link>
                    </div>
                </div>

                <div className="md:justify-self-end md:pr-4">
                    <p className="eyebrow mb-6 text-sm uppercase tracking-[0.25em] text-[var(--ekogrid-lime)]">
                        {t("contactTitle")}
                    </p>

                    <div className="space-y-3 text-white/80">
                        <a
                            href="mailto:info@ekogrid.ba"
                            className="flex items-center gap-2 hover:text-[var(--ekogrid-lime)] transition"
                        >
                            📧 info@ekogrid.ba
                        </a>

                        <p className="flex items-center gap-2">
                            📍 Trebinje, Bosna i Hercegovina
                        </p>

                        <a
                            href="tel:+387XXXXXXXXX"
                            className="flex items-center gap-2 hover:text-[var(--ekogrid-lime)] transition"
                        >
                            📞 +387 XX XXX XXX
                        </a>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 text-xs uppercase tracking-[0.2em] text-white/50 md:flex-row md:justify-between">
                <p>{t("copyright")}</p>
                <p>{t("tagline")}</p>
            </div>
        </footer>
    );
}