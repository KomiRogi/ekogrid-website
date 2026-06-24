import Navbar from "@/components/navbar";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function SolutionsPage({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Solutions" });

    const solutions = [
        {
            title: t("residentialTitle"),
            description: t("residentialText"),
            image: "/images/residential2.jpg",
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
        },
        /*{
            title: t("batteryTitle"),
            description: t("batteryText"),
            image: "/images/battery.jpg",
            slug: "battery"
        },
        {
            title: t("evTitle"),
            description: t("evText"),
            image: "/images/ev.jpg",
            slug: "ev"
        }*/
    ];

    return (
        <main className="min-h-screen bg-[#eef2eb] text-[#223330]">
            <Navbar />

            <section className="relative px-6 pb-16 pt-28">
                <div className="absolute left-[-100px] top-[-100px] h-[500px] w-[500px] rounded-full bg-[var(--ekogrid-lime)]/10 blur-3xl" />
                <div className="absolute bottom-[-200px] right-[-100px] h-[600px] w-[600px] rounded-full bg-green-500/10 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-7xl">
                    <p className="eyebrow mb-6 uppercase tracking-[0.35em] text-[var(--ekogrid-lime)]">
                        {t("eyebrow")}
                    </p>

                    {/*<h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
                    //    {t("title")}
                    </h1>*/}

                    <p className="mt-2 max-w-3xl text-xl leading-relaxed text-white/80">
                        {t("subtitle")}
                    </p>
                </div>
            </section>

            <section id="solutions" className="px-6 pb-20 -mt-12">
                <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {solutions.map((item) => (
                        <div
                            key={item.title}
                            className="group rounded-3xl border border-[var(--ekogrid-border)] bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[var(--ekogrid-lime)] hover:bg-white/10"
                        >
                            <div className="relative mb-5 h-40 overflow-hidden rounded-2xl">

                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-black/40" />

                            </div>
                            <h2 className="text-2xl font-semibold tracking-tight">
                                {item.title}
                            </h2>

                            <p className="mt-4 leading-relaxed text-white/75">
                                {item.description}
                            </p>

                            <a
                                href={`/${locale}/solutions/${item.slug}`}
                                className="mt-8 inline-flex rounded-xl bg-[var(--ekogrid-lime)] px-5 py-3 text-sm font-semibold text-[var(--ekogrid-bg-dark)] transition hover:bg-[var(--ekogrid-lime-soft)]"
                            >
                                {t("learnMore")}
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}