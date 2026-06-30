"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

export default function HomeSolutions() {
    const t = useTranslations("Solutions");
    const locale = useLocale();

    const solutions = [
        {
            title: t("residentialTitle"),
            description: t("residentialText"),
            image: "/images/residential5.jpg",
            slug: "residential"
        },
        {
            title: t("businessTitle"),
            description: t("businessText"),
            image: "/images/business.jpg",
            slug: "business"
        },
        {
            title: t("investorsTitle"),
            description: t("investorsText"),
            image: "/images/investors.jpg",
            slug: "investors"
        }
    ];

    return (
        <section
            id="solutions"
            className="bg-[#eef2eb] px-6 py-28 text-[#223330]"
        >
            <div className="mx-auto max-w-7xl">

                <p className="eyebrow text-xs uppercase tracking-[0.2em] text-[#223330]/70">
                    {t("eyebrow")}
                </p>

                <h2 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                    {t("title")}
                </h2>

                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#223330]/75">
                    {t("subtitle")}
                </p>

                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {solutions.map((item) => (
                        <div
                            key={item.slug}
                            className="group flex flex-col rounded-3xl border border-[#223330]/15 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[var(--ekogrid-lime)]"
                        >
                            <div className="relative mb-5 h-48 overflow-hidden rounded-2xl">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>

                            <h3 className="text-2xl font-bold tracking-tight">
                                {item.title}
                            </h3>

                            <p className="mt-4 flex-1 leading-relaxed text-[#223330]/70">
                                {item.description}
                            </p>

                            <a
                                href={`/${locale}/solutions/${item.slug}`}
                                className="mt-8 inline-flex rounded-xl border border-[#223330]/20 px-5 py-3 text-sm font-semibold transition hover:border-[var(--ekogrid-lime)] hover:bg-[var(--ekogrid-lime)] hover:text-[var(--ekogrid-bg-dark)]"
                            >
                                {t("learnMore")}
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}