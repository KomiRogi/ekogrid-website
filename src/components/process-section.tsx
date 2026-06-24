"use client";

import { useTranslations } from "next-intl";

export default function ProcessSection() {
    const t = useTranslations("Process");

    const steps = [
        {
            number: "01",
            title: t("step1Title"),
            text: t("step1Text")
        },
        {
            number: "02",
            title: t("step2Title"),
            text: t("step2Text")
        },
        {
            number: "03",
            title: t("step3Title"),
            text: t("step3Text")
        },
        {
            number: "04",
            title: t("step4Title"),
            text: t("step4Text")
        }
    ];

    return (
        <section className="bg-[#eef2eb] px-6 pt-6 pb-28 text-[#223330]">
            <div className="mx-auto max-w-7xl">
                <p className="eyebrow text-xs uppercase tracking-[0.2em] text-[#223330]/70">
                    {t("eyebrow")}
                </p>

                <h2 className="mt-8 max-w-4xl font-semibold leading-[1.05] tracking-tight text-4xl md:text-6xl">
                    {t("title")}
                </h2>

                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#223330]/75">
                    {t("subtitle")}
                </p>

                <div className="mt-12 grid border border-[#223330]/20 md:grid-cols-4">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="border-b border-[#223330]/20 p-8 md:border-b-0 md:border-r last:border-r-0"
                        >
                            <div className="font-semibold text-5xl text-[var(--ekogrid-lime)]">
                                {step.number}
                            </div>

                            <h3 className="mt-10 text-2xl font-semibold">
                                {step.title}
                            </h3>

                            <p className="mt-4 leading-relaxed text-[#223330]/70">
                                {step.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}