"use client";

import { useTranslations } from "next-intl";

export default function EngineeringSection() {
    const t = useTranslations("Engineering");

    return (
        <section className="bg-[#eef2eb] px-6 pt-22 pb-12 text-[#223330]">
            <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[0.8fr_1.2fr]">
                <div>
                    <p className="eyebrow text-xs uppercase tracking-[0.2em] text-[#223330]/70">
                        {t("eyebrow")}
                    </p>
                    <div className="mt-6 h-px bg-[#223330]/20" />
                </div>

                <div>
                    <h2 className="max-w-4xl font-semibold leading-[1.05] tracking-tight text-4xl md:text-6xl">
                        {t("title")}
                    </h2>

                    <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[#223330]/75">
                        {t("text")}
                    </p>
                </div>
            </div>
        </section>
    );
}