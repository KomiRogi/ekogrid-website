"use client";

import { use, useState } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { useTranslations } from "next-intl";
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

export default function SolutionDetailPage({
    params
}: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    const { locale, slug } = use(params);
    const t = useTranslations("SolutionDetails");

    const [sent, setSent] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(false);

    const validSlugs = ["residential", "business", "investors"];

    if (!validSlugs.includes(slug)) {
        return null;
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setSubmitting(true);
        setError(false);

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xkoeydrz", {
                method: "POST",
                body: data,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setSent(true);
                form.reset();

                setTimeout(() => {
                    document
                        .getElementById("success-message")
                        ?.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                        });
                }, 100);
            } else {
                setError(true);
            }
        } catch {
            setError(true);
        } finally {
            setSubmitting(false);
        }
    }

    let benefits: Benefit[] = [];

    if (slug === "residential") {
        benefits = [
            { icon: <Wallet size={24} />, title: t(`${slug}.benefit1Title`), text: t(`${slug}.benefit1`) },
            { icon: <ShieldCheck size={24} />, title: t(`${slug}.benefit2Title`), text: t(`${slug}.benefit2`) },
            { icon: <Home size={24} />, title: t(`${slug}.benefit3Title`), text: t(`${slug}.benefit3`) }
        ];
    }

    if (slug === "business") {
        benefits = [
            { icon: <TrendingDown size={24} />, title: t(`${slug}.benefit1Title`), text: t(`${slug}.benefit1`) },
            { icon: <Factory size={24} />, title: t(`${slug}.benefit2Title`), text: t(`${slug}.benefit2`) },
            { icon: <BadgeCheck size={24} />, title: t(`${slug}.benefit3Title`), text: t(`${slug}.benefit3`) }
        ];
    }

    if (slug === "investors") {
        benefits = [
            { icon: <MapPinned size={24} />, title: t(`${slug}.benefit1Title`), text: t(`${slug}.benefit1`) },
            { icon: <Calculator size={24} />, title: t(`${slug}.benefit2Title`), text: t(`${slug}.benefit2`) },
            { icon: <FolderGit2 size={24} />, title: t(`${slug}.benefit3Title`), text: t(`${slug}.benefit3`) }
        ];
    }

    const successTitle = locale === "en" ? "Thank you for your inquiry." : "Hvala na upitu.";
    const successText =
        locale === "en"
            ? "We have received your message and will get back to you within 24 hours."
            : "Primili smo vašu poruku. Javićemo vam se u roku od 24h.";

    const inputClass =
        "rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-white/50 focus:border-[var(--ekogrid-lime)]";

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
                            href="#solution-contact"
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
                            className="rounded-3xl border border-[#223330]/15 bg-[#f7f9f5] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--ekogrid-lime)]"
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
                            <div className="rounded-3xl border border-[#223330]/15 bg-[#f7f9f5] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--ekogrid-lime)]">
                                <h3 className="text-2xl font-semibold">
                                    {t(`${slug}.batteryTitle`)}
                                </h3>

                                <p className="mt-4 leading-relaxed text-[#223330]/75">
                                    {t(`${slug}.batteryText`)}
                                </p>
                            </div>

                            <div className="rounded-3xl border border-[#223330]/15 bg-[#f7f9f5] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--ekogrid-lime)]">
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
                            <div className="rounded-3xl border border-[#223330]/15 bg-[#f7f9f5] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--ekogrid-lime)]">
                                <h3 className="text-2xl font-semibold">
                                    {t(`${slug}.networkTitle`)}
                                </h3>

                                <p className="mt-4 leading-relaxed text-[#223330]/75">
                                    {t(`${slug}.networkText`)}
                                </p>
                            </div>

                            <div className="rounded-3xl border border-[#223330]/15 bg-[#f7f9f5] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--ekogrid-lime)]">
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
                    {sent ? (
                        <div
                            id="success-message"
                            className="mx-auto max-w-3xl rounded-3xl border border-[var(--ekogrid-lime)]/30 bg-[#233531] p-8 text-white shadow-xl"
                        >
                            <h2 className="text-2xl font-semibold text-[var(--ekogrid-lime)]">
                                {successTitle}
                            </h2>

                            <p className="mt-4 text-white/80">
                                {successText}
                            </p>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="mx-auto max-w-3xl rounded-3xl border border-[var(--ekogrid-border)] bg-[#233531] p-8 text-white shadow-xl"
                        >
                            <input type="hidden" name="solution_type" value={slug} />

                            <h2 className="mb-8 text-center text-2xl font-semibold text-white">
                                {locale === "en" ? "Tell us about your project" : "Recite nam nešto o svom objektu"}
                            </h2>

                            <div className="grid gap-5">
                                <input name="name" required className={inputClass} placeholder={locale === "en" ? "Full name" : "Ime i prezime"} />
                                <input name="email" type="email" required className={inputClass} placeholder={locale === "en" ? "Email address" : "Email adresa"} />
                                <input name="phone" className={inputClass} placeholder={locale === "en" ? "Phone" : "Telefon"} />
                                <input name="location" className={inputClass} placeholder={locale === "en" ? "City and municipality" : "Grad i opština"} />

                                {slug === "residential" && (
                                    <>
                                        <select name="roof_orientation" className={inputClass} defaultValue="">
                                            <option value="" disabled>{locale === "en" ? "Roof orientation" : "Orijentacija krova"}</option>
                                            <option>{locale === "en" ? "South" : "Jug"}</option>
                                            <option>{locale === "en" ? "East" : "Istok"}</option>
                                            <option>{locale === "en" ? "West" : "Zapad"}</option>
                                            <option>{locale === "en" ? "North" : "Sjever"}</option>
                                            <option>{locale === "en" ? "Combined" : "Kombinovano"}</option>
                                            <option>{locale === "en" ? "Not sure" : "Nisam siguran"}</option>
                                        </select>

                                        <select name="connection_type" className={inputClass} defaultValue="">
                                            <option value="" disabled>{locale === "en" ? "Connection type" : "Vrsta priključka"}</option>
                                            <option>{locale === "en" ? "Single-phase" : "Monofazni"}</option>
                                            <option>{locale === "en" ? "Three-phase" : "Trofazni"}</option>
                                            <option>{locale === "en" ? "Not sure" : "Nisam siguran"}</option>
                                        </select>

                                        <input name="annual_consumption" className={inputClass} placeholder={locale === "en" ? "Annual consumption (kWh)" : "Godišnja potrošnja (kWh)"} />
                                        <input name="connection_power" className={inputClass} placeholder={locale === "en" ? "Connection power (kW)" : "Priključna snaga (kW)"} />
                                    </>
                                )}

                                {slug === "business" && (
                                    <>
                                        <input name="company_name" className={inputClass} placeholder={locale === "en" ? "Company name" : "Naziv kompanije"} />
                                        <input name="annual_consumption" className={inputClass} placeholder={locale === "en" ? "Annual electricity consumption (kWh)" : "Godišnja potrošnja električne energije (kWh)"} />
                                        <input name="connection_power" className={inputClass} placeholder={locale === "en" ? "Connection power (kW), if known" : "Priključna snaga (kW), ako znate"} />

                                        <select name="object_type" className={inputClass} defaultValue="">
                                            <option value="" disabled>{locale === "en" ? "Facility type" : "Tip objekta"}</option>
                                            <option>{locale === "en" ? "Business facility" : "Poslovni objekat"}</option>
                                            <option>{locale === "en" ? "Production facility" : "Proizvodni pogon"}</option>
                                            <option>{locale === "en" ? "Hotel / apartments" : "Hotel / apartmani"}</option>
                                            <option>{locale === "en" ? "Shop / market" : "Trgovina / market"}</option>
                                            <option>{locale === "en" ? "Other" : "Ostalo"}</option>
                                        </select>
                                    </>
                                )}

                                {slug === "investors" && (
                                    <>
                                        <input name="planned_power" className={inputClass} placeholder={locale === "en" ? "Planned plant capacity (kW or MW)" : "Planirana snaga elektrane (kW ili MW)"} />

                                        <select name="project_location_type" className={inputClass} defaultValue="">
                                            <option value="" disabled>{locale === "en" ? "Project type" : "Tip projekta"}</option>
                                            <option>{locale === "en" ? "Rooftop plant" : "Krovna elektrana"}</option>
                                            <option>{locale === "en" ? "Ground-mounted plant" : "Elektrana na zemljištu"}</option>
                                            <option>{locale === "en" ? "Not sure" : "Nisam siguran"}</option>
                                        </select>

                                        <select name="project_status" className={inputClass} defaultValue="">
                                            <option value="" disabled>{locale === "en" ? "Project status" : "Status projekta"}</option>
                                            <option>{locale === "en" ? "Idea" : "Ideja"}</option>
                                            <option>{locale === "en" ? "In preparation" : "U pripremi"}</option>
                                            <option>{locale === "en" ? "Study needed" : "Potrebna studija"}</option>
                                            <option>{locale === "en" ? "Looking for a partner" : "Tražimo partnera"}</option>
                                        </select>
                                    </>
                                )}

                                <textarea
                                    name="message"
                                    className="min-h-32 rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-white/50 focus:border-[var(--ekogrid-lime)]"
                                    placeholder={locale === "en" ? "Additional information (optional)" : "Dodatne informacije (opciono)"}
                                />

                                {error && (
                                    <p className="rounded-xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-200">
                                        {locale === "en"
                                            ? "The message was not sent. Please try again."
                                            : "Poruka nije poslata. Pokušajte ponovo."}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="rounded-2xl bg-[var(--ekogrid-lime)] px-8 py-4 font-semibold text-[var(--ekogrid-bg-dark)] transition hover:bg-[var(--ekogrid-lime-soft)] disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {submitting
                                        ? locale === "en" ? "Sending..." : "Slanje..."
                                        : locale === "en" ? "Send inquiry" : "Pošalji upit"}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}