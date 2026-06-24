"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function Hero() {
    const t = useTranslations("Hero");
    const locale = useLocale();
    return (
        <section className="relative min-h-screen overflow-hidden bg-[var(--ekogrid-bg-dark)] text-[var(--ekogrid-text)]">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover opacity-70"
            >
                <source src="/videos/solar.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-[var(--ekogrid-bg-dark)]/30" />
            {/* Glow */}
            <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-[var(--ekogrid-lime)]/10 blur-3xl" />

            <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-3xl" />

            {/* Grid effect */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:80px_80px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex min-h-screen items-center px-10 pt-24">

                <div className="mx-auto max-w-7xl w-full">

                    <div className="max-w-4xl">

                        <p className="eyebrow mb-1 text-xs uppercase tracking-[0.15em] text-[var(--ekogrid-lime)] relative -top-8">
                            {t("eyebrow")}
                        </p>

                        <h1 className="font-semibold leading-[1.05] tracking-tight">
                            <span className="block text-4xl md:text-6xl">
                                {t("title1")}{" "}
                                <span className="text-[var(--ekogrid-lime)]">
                                    {t("titleHighlight")}
                                </span>
                                .
                            </span>

                            <span className="mt-1 block text-4xl md:text-6xl text-white/90">
                                {t("title2")}
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
                            {t("subtitle")}
                        </p>

                        {/* CTA */}
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                            <a
                                href={`/${locale}/consultation`}
                                className="rounded-xl border border-[#1c332d] bg-[var(--ekogrid-lime)] px-6 py-3 font-semibold text-[#162420] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:brightness-105"
                            >
                                {t("primaryCta")}
                            </a>

                            <a
                                href="#solutions"
                                className="rounded-xl border border-[var(--ekogrid-lime)] bg-transparent px-6 py-3 font-semibold text-[var(--ekogrid-lime)] transition-all duration-300 hover:bg-[var(--ekogrid-lime)] hover:text-[#162420] hover:-translate-y-1"
                            >
                                {t("secondaryCta")}
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}