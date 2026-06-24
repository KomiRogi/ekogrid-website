"use client";

import { useTranslations, useLocale } from "next-intl";

export default function ConsultationSection() {

    const t = useTranslations("Consultation");
    const locale = useLocale();

    return (
        <section className="bg-[#eef2eb] px-6 pt-6 pb-12 text-[#223330]">

            {/* Grid */}

            <div className="relative z-10 mx-auto grid max-w-7xl gap-12 md:grid-cols-[2fr_1fr] md:items-center">

                <div>

                    <p className="eyebrow text-xs uppercase tracking-[0.2em] text-[#223330]/70">
                        {t("eyebrow")}
                    </p>

                    <h2 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                        {t("title1")}
                        <br />
                        {t("title2")}
                    </h2>

                    <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[#223330]/75">
                        {t("subtitle")}
                    </p>

                    <div className="mt-10 grid gap-3 md:grid-cols-2">

                        <div className="text-[#223330]/80">
                            ✓ {t("item1")}
                        </div>

                        <div className="text-[#223330]/80">
                            ✓ {t("item2")}
                        </div>

                        <div className="text-[#223330]/80">
                            ✓ {t("item3")}
                        </div>

                        <div className="text-[#223330]/80">
                            ✓ {t("item4")}
                        </div>

                    </div>

                </div>

                <div className="flex flex-col gap-4 md:items-end">

                    <a
                        href={`/${locale}/consultation`}
                        className="rounded-xl border border-[#1c332d] bg-[var(--ekogrid-lime)] px-6 py-3 font-semibold text-[#162420] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:brightness-105"
                    >
                        {t("primaryCta")}
                    </a>

                    <a
                        href="#footer"
                        className="inline-flex rounded-2xl border border-[#223330]/30 px-8 py-4 font-medium text-[#223330] transition hover:bg-[#223330] hover:text-white"
                    >
                        {t("secondaryCta")}
                    </a>

                </div>

            </div>
        </section>
    );
}