"use client";

import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
    const locale = useLocale();

    return (
        <div className="flex items-center gap-2 text-sm font-semibold">
            <a
                href="/sr"
                className={
                    locale === "sr"
                        ? "text-[var(--ekogrid-lime)]"
                        : "text-white/70 hover:text-[var(--ekogrid-lime)]"
                }
            >
                SR
            </a>

            <span className="text-white/40">|</span>

            <a
                href="/en"
                className={
                    locale === "en"
                        ? "text-[var(--ekogrid-lime)]"
                        : "text-white/70 hover:text-[var(--ekogrid-lime)]"
                }
            >
                EN
            </a>
        </div>
    );
}