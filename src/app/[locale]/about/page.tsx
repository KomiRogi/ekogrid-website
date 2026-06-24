import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { getTranslations } from "next-intl/server";

export default async function AboutPage({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "About" });

    const highlights = [
        {
            value: t("highlight1Value"),
            label: t("highlight1")
        },
        {
            value: t("highlight2Value"),
            label: t("highlight2")
        },
        {
            value: t("highlight3Value"),
            label: t("highlight3")
        },
        {
            value: t("highlight4Value"),
            label: t("highlight4")
        }
    ];

    return (
        <main className="min-h-screen bg-[#eef2eb] text-[#223330]">
            <Navbar />

            <section className="px-6 pt-36 pb-24">
                <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[0.8fr_1.2fr]">

                    <div>
                        <p className="eyebrow text-xs uppercase tracking-[0.2em] text-[#223330]/70">
                            {t("eyebrow")}
                        </p>

                        <div className="mt-6 h-px bg-[#223330]/20" />

                        <div className="mt-44 border border-[#223330]/20">

                            {highlights.map((item) => (
                                <div
                                    key={item.value}
                                    className="border-b border-r border-[#223330]/20 p-6 last:border-r-0"
                                >
                                    <div className="text-5xl font-semibold text-[#9FCB3B]">
                                        {item.value}
                                    </div>

                                    <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#223330]/70">
                                        {item.label}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>

                    <div>
                        <h1 className="max-w-5xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                            {t("title")}
                        </h1>

                        <div className="mt-10 space-y-6 text-lg leading-relaxed text-[#223330]/75">
                            <p>{t("paragraph1")}</p>
                            <p>{t("paragraph2")}</p>
                            <p>{t("paragraph3")}</p>
                            <p>{t("paragraph4")}</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}