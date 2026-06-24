"use client";

import Image from "next/image";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function Navbar() {
    const t = useTranslations("Navbar");
    const locale = useLocale();
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#223330]/90 backdrop-blur-2xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
                <Image
                    src="/logo/ekogrid-logo3.svg"
                    alt="EkoGrid logo"
                    width={100}
                    height={40}
                    priority
                    className="h-10 w-auto"
                />

                <div className="hidden items-center gap-8 text-sm text-[var(--ekogrid-muted)] md:flex">
                    <a href={`/${locale}`} className="hover:text-[var(--ekogrid-lime)]">
                        {t("home")}
                    </a>
                    <a href={`/${locale}/about`} className="hover:text-[var(--ekogrid-lime)]">
                        {t("about")}
                    </a>
                    <div className="group relative">
                        <button className="hover:text-[var(--ekogrid-lime)]">
                            {t("solar")}
                        </button>

                        <div className="invisible absolute left-1/2 top-full z-50 mt-4 w-72 -translate-x-1/2 rounded-2xl border border-[var(--ekogrid-border)] bg-[var(--ekogrid-bg)]/95 p-3 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                            <a href={`/${locale}/solutions/residential`} className="block rounded-xl px-4 py-3 text-white/80 hover:bg-white/5 hover:text-[var(--ekogrid-lime)]">
                                {t("residential")}
                            </a>
                            <a href={`/${locale}/solutions/business`} className="block rounded-xl px-4 py-3 text-white/80 hover:bg-white/5 hover:text-[var(--ekogrid-lime)]">
                                {t("business")}
                            </a>
                            <a href={`/${locale}/solutions/investors`} className="block rounded-xl px-4 py-3 text-white/80 hover:bg-white/5 hover:text-[var(--ekogrid-lime)]">
                                {t("investors")}
                            </a>
                        </div>
                    </div>
                    <a href={`/${locale}#footer`} className="hover:text-[var(--ekogrid-lime)]">
                        {t("contact")}
                    </a>
                </div>

                <div className="flex items-center gap-5">
                    <LanguageSwitcher />

                    {/*<a
                        href={`/${locale}/consultation`}
                        className="rounded-xl bg-[var(--ekogrid-lime)] px-4 py-2 text-sm font-semibold text-[var(--ekogrid-bg-dark)] transition hover:bg-[var(--ekogrid-lime-soft)]"
                    >
                        {t("cta")}
                    </a>*/}
                </div>
            </nav>
        </header>
    );
}