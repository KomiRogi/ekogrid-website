"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
export default function Footer() {
    const t = useTranslations("Footer");
    return (
        <footer
            id="footer"
            className="bg-[var(--ekogrid-bg)] px-6 py-20 text-[var(--ekogrid-text)]"
        >
            <div className="mx-auto grid max-w-7xl gap-12 border-b border-white/10 pb-16 md:grid-cols-[1.4fr_1fr_1fr]">
                <div>
                    <Image
                        src="/logo/ekogrid-logo3.svg"
                        alt="EkoGrid logo"
                        width={150}
                        height={50}
                        className="h-12 w-auto"
                    />

                    <p className="mt-6 max-w-sm text-white/70">
                        {t("description")}
                    </p>
                </div>
                <div className="md:justify-self-center">
                    <div>
                        <p className="eyebrow mb-6 text-sm uppercase tracking-[0.25em] text-[var(--ekogrid-lime)]">
                            {t("solutions")}
                        </p>

                        <div className="space-y-3 text-white/80">
                            <p>{t("residential")}</p>
                            <p>{t("business")}</p>
                            <p>{t("investors")}</p>
                        </div>
                    </div>
                </div>
                <div className="md:justify-self-end md:pr-4">
                    <div>
                        <p className="eyebrow mb-6 text-sm uppercase tracking-[0.25em] text-[var(--ekogrid-lime)]">
                            {t("contactTitle")}
                        </p>

                        <div className="space-y-3 text-white/80">
                            <p>info@ekogrid.ba</p>
                            <p>+387 00 000 000</p>
                            <p>{t("workingHours")}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-10 flex max-w-7xl justify-between text-xs uppercase tracking-[0.2em] text-white/50">
                <p>{t("copyright")}</p>
                <p>{t("tagline")}</p>
            </div>
        </footer>
    );
}