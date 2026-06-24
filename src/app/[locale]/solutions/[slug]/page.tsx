import Navbar from "@/components/navbar";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Footer from "@/components/footer";
import {
    Wallet,
    ShieldCheck,
    Home,
    TrendingDown,
    Factory,
    BadgeCheck,
    MapPinned,
    Calculator,
    FolderGit2
} from "lucide-react";
import type { ReactNode } from "react";

type Benefit = {
    icon: ReactNode;
    title: string;
    text: string;
};

export default async function SolutionDetailPage({
    params
}: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    const { locale, slug } = await params;
    const t = await getTranslations({ locale, namespace: "SolutionDetails" });

    const validSlugs = ["residential", "business", "investors"];

    if (!validSlugs.includes(slug)) {
        notFound();
    }

    let benefits: Benefit[] = [];

    if (slug === "residential") {
        benefits = [
            {
                icon: <Wallet size={24} />,
                title: t(`${slug}.benefit1Title`),
                text: t(`${slug}.benefit1`)
            },
            {
                icon: <ShieldCheck size={24} />,
                title: t(`${slug}.benefit2Title`),
                text: t(`${slug}.benefit2`)
            },
            {
                icon: <Home size={24} />,
                title: t(`${slug}.benefit3Title`),
                text: t(`${slug}.benefit3`)
            }
        ];
    }

    if (slug === "business") {
        benefits = [
            {
                icon: <TrendingDown size={24} />,
                title: t(`${slug}.benefit1Title`),
                text: t(`${slug}.benefit1`)
            },
            {
                icon: <Factory size={24} />,
                title: t(`${slug}.benefit2Title`),
                text: t(`${slug}.benefit2`)
            },
            {
                icon: <BadgeCheck size={24} />,
                title: t(`${slug}.benefit3Title`),
                text: t(`${slug}.benefit3`)
            }
        ];
    }

    if (slug === "investors") {
        benefits = [
            {
                icon: <MapPinned size={24} />,
                title: t(`${slug}.benefit1Title`),
                text: t(`${slug}.benefit1`)
            },
            {
                icon: <Calculator size={24} />,
                title: t(`${slug}.benefit2Title`),
                text: t(`${slug}.benefit2`)
            },
            {
                icon: <FolderGit2 size={24} />,
                title: t(`${slug}.benefit3Title`),
                text: t(`${slug}.benefit3`)
            }
        ];
    }

    return (
        <main className="min-h-screen bg-[#eef2eb] text-[#223330]">
            <Navbar />

            <section className="relative px-6 pb-12 pt-32">
                <div className="absolute left-[-120px] top-[-120px] h-[520px] w-[520px] rounded-full bg-[var(--ekogrid-lime)]/10 blur-3xl" />

                <div className="relative z-10 mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
                    <div>
                        <p className="eyebrow mb-6 text-xs uppercase tracking-[0.2em] text-[#223330]/75">
                            {t(`${slug}.eyebrow`)}
                        </p>

                        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                            {t(`${slug}.title`)}
                        </h1>

                        <p className="mt-6 text-xl leading-relaxed text-[#223330]/75">
                            {t(`${slug}.subtitle`)}
                        </p>

                        <a
                            href={`/${locale}/consultation`}
                            className="mt-8 inline-flex rounded-xl border border-[#1c332d] bg-[var(--ekogrid-lime)] px-6 py-3 font-semibold text-[#162420] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:brightness-105"
                        >
                            {t("cta")}
                        </a>
                    </div>

                    <div className="relative h-[320px] overflow-hidden rounded-3xl border border-[var(--ekogrid-border)]">
                        <Image
                            src={t(`${slug}.image`)}
                            alt={t(`${slug}.title`)}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30" />
                    </div>
                </div>
            </section>

            <section className="px-6 pb-20">
                <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.title}
                            className="rounded-3xl border border-[#223330]/15 bg-[#f7f9f5] p-8 transition-all duration-300 hover:border-[var(--ekogrid-lime)] hover:-translate-y-1"
                        >
                            <div className="mb-5 flex items-center gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--ekogrid-lime)]/10 text-[#2f6f4f]">
                                    {benefit.icon}
                                </div>

                                <h2 className="text-lg font-semibold leading-tight tracking-[0.06em]">
                                    {benefit.title}
                                </h2>
                            </div>

                            <p className="mt-4 text-[#223330]/75">
                                {benefit.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {slug !== "investors" && (
                <section className="px-6 pb-20">
                    <div className="mx-auto max-w-7xl rounded-[36px] border border-white/50 bg-white/60 p-10 backdrop-blur-sm">

                        <p className="eyebrow mb-4 uppercase tracking-[0.18em] text-[#223330]/70">
                            {t(`${slug}.additionalEyebrow`)}
                        </p>

                        <h2 className="mb-8 text-3xl font-semibold tracking-tight md:text-4xl">
                            {t(`${slug}.additionalTitle`)}
                        </h2>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="rounded-3xl border border-[#223330]/15 bg-[#f7f9f5] p-8 transition-all duration-300 hover:border-[var(--ekogrid-lime)] hover:-translate-y-1">
                                <h3 className="text-2xl font-semibold">
                                    {t(`${slug}.batteryTitle`)}
                                </h3>

                                <p className="mt-4 leading-relaxed text-[#223330]/75">
                                    {t(`${slug}.batteryText`)}
                                </p>
                            </div>

                            <div className="rounded-3xl border border-[#223330]/15 bg-[#f7f9f5] p-8 transition-all duration-300 hover:border-[var(--ekogrid-lime)] hover:-translate-y-1">
                                <h3 className="text-2xl font-semibold">
                                    {t(`${slug}.evTitle`)}
                                </h3>

                                <p className="mt-4 leading-relaxed text-[#223330]/75">
                                    {t(`${slug}.evText`)}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {slug === "investors" && (
                <section className="px-6 pb-20">
                    <div className="mx-auto max-w-7xl rounded-[36px] border border-white/50 bg-white/60 p-10 backdrop-blur-sm">

                        <p className="eyebrow mb-4 uppercase tracking-[0.18em] text-[#223330]/70">
                            {t(`${slug}.additionalEyebrow`)}
                        </p>

                        <h2 className="mb-8 text-3xl font-semibold tracking-tight md:text-4xl">
                            {t(`${slug}.additionalTitle`)}
                        </h2>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="rounded-3xl border border-[#223330]/15 bg-[#f7f9f5] p-8 transition-all duration-300 hover:border-[var(--ekogrid-lime)] hover:-translate-y-1">
                                <h3 className="text-2xl font-semibold">
                                    {t(`${slug}.networkTitle`)}
                                </h3>

                                <p className="mt-4 leading-relaxed text-[#223330]/75">
                                    {t(`${slug}.networkText`)}
                                </p>
                            </div>

                            <div className="rounded-3xl border border-[#223330]/15 bg-[#f7f9f5] p-8 transition-all duration-300 hover:border-[var(--ekogrid-lime)] hover:-translate-y-1">
                                <h3 className="text-2xl font-semibold">
                                    {t(`${slug}.marketTitle`)}
                                </h3>

                                <p className="mt-4 leading-relaxed text-[#223330]/75">
                                    {t(`${slug}.marketText`)}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <section id="solution-contact" className="scroll-mt-32 px-6 pb-28">
                <div className="mx-auto max-w-4xl">
                    <form
                        action="https://formspree.io/f/xkoeydrz"
                        method="POST"
                        className="mx-auto max-w-3xl rounded-3xl border border-[var(--ekogrid-border)] bg-[#233531] p-8 text-white shadow-xl"
                    >
                        <input type="hidden" name="solution_type" value={slug} />

                        <h2 className="mb-8 text-center text-2xl font-semibold text-white">
                            Recite nam nešto o svom objektu
                        </h2>

                        <div className="grid gap-5">
                            <input name="name" className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-white/50 focus:border-[var(--ekogrid-lime)]" placeholder="Ime i prezime" />

                            <input name="email" type="email" className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-white/50 focus:border-[var(--ekogrid-lime)]" placeholder="Email adresa" />

                            <input name="phone" className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-white/50 focus:border-[var(--ekogrid-lime)]" placeholder="Telefon" />

                            <input name="location" className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-white/50 focus:border-[var(--ekogrid-lime)]" placeholder="Grad i opština" />

                            {slug === "residential" && (
                                <>
                                    <select name="roof_orientation" className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none focus:border-[var(--ekogrid-lime)]">
                                        <option>Orijentacija krova</option>
                                        <option>Jug</option>
                                        <option>Istok</option>
                                        <option>Zapad</option>
                                        <option>Sjever</option>
                                        <option>Kombinovano</option>
                                        <option>Nisam siguran</option>
                                    </select>

                                    <select name="connection_type" className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none focus:border-[var(--ekogrid-lime)]">
                                        <option>Vrsta priključka</option>
                                        <option>Monofazni</option>
                                        <option>Trofazni</option>
                                        <option>Nisam siguran</option>
                                    </select>

                                    <input name="annual_consumption" className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-white/50 focus:border-[var(--ekogrid-lime)]" placeholder="Godišnja potrošnja (kWh)" />

                                    <input name="connection_power" className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-white/50 focus:border-[var(--ekogrid-lime)]" placeholder="Priključna snaga (kW)" />
                                </>
                            )}

                            {slug === "business" && (
                                <>
                                    <input name="company_name" className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-white/50 focus:border-[var(--ekogrid-lime)]" placeholder="Naziv kompanije" />

                                    <input name="annual_consumption" className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-white/50 focus:border-[var(--ekogrid-lime)]" placeholder="Godišnja potrošnja električne energije (kWh)" />

                                    <input name="connection_power" className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-white/50 focus:border-[var(--ekogrid-lime)]" placeholder="Priključna snaga (kW), ako znate" />

                                    <select name="object_type" className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none focus:border-[var(--ekogrid-lime)]">
                                        <option>Tip objekta</option>
                                        <option>Poslovni objekat</option>
                                        <option>Proizvodni pogon</option>
                                        <option>Hotel / apartmani</option>
                                        <option>Trgovina / market</option>
                                        <option>Ostalo</option>
                                    </select>
                                </>
                            )}

                            {slug === "investors" && (
                                <>
                                    <input name="planned_power" className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-white/50 focus:border-[var(--ekogrid-lime)]" placeholder="Planirana snaga elektrane (kW ili MW)" />

                                    <select name="project_location_type" className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none focus:border-[var(--ekogrid-lime)]">
                                        <option>Tip projekta</option>
                                        <option>Krovna elektrana</option>
                                        <option>Elektrana na zemljištu</option>
                                        <option>Nisam siguran</option>
                                    </select>

                                    <select name="project_status" className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none focus:border-[var(--ekogrid-lime)]">
                                        <option>Status projekta</option>
                                        <option>Ideja</option>
                                        <option>U pripremi</option>
                                        <option>Potrebna studija</option>
                                        <option>Tražimo partnera</option>
                                    </select>
                                </>
                            )}

                            <textarea
                                name="message"
                                className="min-h-32 rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-white/50 focus:border-[var(--ekogrid-lime)]"
                                placeholder="Kratko opišite objekat ili dodatne informacije"
                            />

                            <button
                                type="submit"
                                className="rounded-2xl bg-[var(--ekogrid-lime)] px-8 py-4 font-semibold text-[var(--ekogrid-bg-dark)] transition hover:bg-[var(--ekogrid-lime-soft)]"
                            >
                                Pošalji upit
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <Footer />
        </main>
    );
}