"use client";

import { useState } from "react";
import Image from "next/image";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslations, useLocale } from "next-intl";

export default function Navbar() {
    const t = useTranslations("Navbar");
    const locale = useLocale();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#223330]/90 backdrop-blur-2xl">
            <nav className="mx-auto max-w-7xl px-6 py-4 text-white">
                <div className="flex items-center justify-between">
                    <Image
                        src="/logo/ekogrid-logo3.svg"
                        alt="EkoGrid logo"
                        width={100}
                        height={40}
                        priority
                        className="h-10 w-auto"
                    />

                    <div className="flex items-center gap-5">
                        <LanguageSwitcher />

                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-2xl text-[var(--ekogrid-lime)] md:hidden"
                            aria-label="Open menu"
                        >
                            {isOpen ? "×" : "☰"}
                        </button>
                    </div>
                </div>

                <div className="mt-4 hidden items-center gap-8 text-sm text-[var(--ekogrid-muted)] md:flex">
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

                {isOpen && (
                    <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#172622] p-4 text-sm text-white/80 md:hidden">
                        <a
                            href={`/${locale}`}
                            onClick={() => setIsOpen(false)}
                            className="rounded-xl px-3 py-3 hover:bg-white/5 hover:text-[var(--ekogrid-lime)]"
                        >
                            {t("home")}
                        </a>

                        <a
                            href={`/${locale}/about`}
                            onClick={() => setIsOpen(false)}
                            className="rounded-xl px-3 py-3 hover:bg-white/5 hover:text-[var(--ekogrid-lime)]"
                        >
                            {t("about")}
                        </a>

                        <div className="rounded-xl px-3 py-3">
                            <p className="mb-2 text-[var(--ekogrid-lime)]">
                                {t("solar")}
                            </p>

                            <div className="flex flex-col gap-2 pl-3">
                                <a
                                    href={`/${locale}/solutions/residential`}
                                    onClick={() => setIsOpen(false)}
                                    className="py-2 hover:text-[var(--ekogrid-lime)]"
                                >
                                    {t("residential")}
                                </a>

                                <a
                                    href={`/${locale}/solutions/business`}
                                    onClick={() => setIsOpen(false)}
                                    className="py-2 hover:text-[var(--ekogrid-lime)]"
                                >
                                    {t("business")}
                                </a>

                                <a
                                    href={`/${locale}/solutions/investors`}
                                    onClick={() => setIsOpen(false)}
                                    className="py-2 hover:text-[var(--ekogrid-lime)]"
                                >
                                    {t("investors")}
                                </a>
                            </div>
                        </div>

                        <a
                            href={`/${locale}#footer`}
                            onClick={() => setIsOpen(false)}
                            className="rounded-xl px-3 py-3 hover:bg-white/5 hover:text-[var(--ekogrid-lime)]"
                        >
                            {t("contact")}
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
}