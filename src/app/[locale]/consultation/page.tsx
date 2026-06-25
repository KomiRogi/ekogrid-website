"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Contact() {
    const t = useTranslations("ConsultationPage");
    const [projectType, setProjectType] = useState("home");
    const [sent, setSent] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(false);

    const inputClass =
        "rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/40 focus:border-[var(--ekogrid-lime)]";

    const projectTypes = [
        { id: "home", label: t("residential") },
        { id: "business", label: t("business") },
        { id: "investment", label: t("investment") },
    ];

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

    return (
        <>
            <Navbar />

            <section
                id="contact"
                className="relative overflow-hidden bg-[#eef2eb] px-6 pt-28 pb-28 text-[#223330]"
            >
                <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[var(--ekogrid-lime)]/10 blur-3xl" />

                <div className="relative z-10 mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
                    <div>
                        <p className="mb-8 eyebrow text-xs uppercase tracking-[0.2em] text-[#223330]/70">
                            {t("eyebrow")}
                        </p>

                        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                            {t("title1")}
                            <br />
                            {t("title2")}
                        </h2>

                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#223330]/75">
                            {t("subtitle")}
                        </p>
                    </div>

                    {sent ? (
                        <div
                            id="success-message"
                            className="rounded-3xl border border-[var(--ekogrid-lime)]/30 bg-[#233531] p-8 text-white shadow-xl">
                            <h3 className="text-2xl font-semibold text-[var(--ekogrid-lime)]">
                                Hvala na upitu.
                            </h3>

                            <p className="mt-4 text-white/80">
                                Primili smo vašu poruku. Javićemo vam se u roku od 24h.
                            </p>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="rounded-3xl border border-[var(--ekogrid-border)] bg-[#233531] p-8 text-white shadow-xl"
                        >
                            <input type="hidden" name="form_source" value="consultation_page" />
                            <input type="hidden" name="project_type" value={projectType} />

                            <div className="mb-5 text-center">
                                <h3 className="text-xl font-semibold text-white/80">
                                    {t("projectType")}
                                </h3>
                            </div>

                            <div className="mx-auto mb-6 mt-4 h-px w-24 bg-white/20" />

                            <div className="mb-6 grid gap-3 sm:grid-cols-3">
                                {projectTypes.map((item) => (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => setProjectType(item.id)}
                                        className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${projectType === item.id
                                            ? "border-[var(--ekogrid-lime)] bg-[var(--ekogrid-lime)] text-[#162420]"
                                            : "border-white/10 bg-black/20 text-white/70 hover:border-white/30"
                                            }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>

                            <p className="mb-8 mt-6 mx-auto max-w-xl text-center text-base leading-relaxed text-white/60">
                                {t("formIntro")}
                            </p>

                            <div className="grid gap-5">
                                <input name="name" required className={inputClass} placeholder={t("name")} />
                                <input name="email" type="email" required className={inputClass} placeholder={t("email")} />
                                <input name="phone" className={inputClass} placeholder={t("phone")} />
                                <input name="location" className={inputClass} placeholder={t("location")} />

                                {projectType === "home" && (
                                    <>
                                        <select name="roof_orientation" className={inputClass} defaultValue="">
                                            <option value="" disabled>{t("roofOrientation")}</option>
                                            <option value="Jug">{t("south")}</option>
                                            <option value="Istok">{t("east")}</option>
                                            <option value="Zapad">{t("west")}</option>
                                            <option value="Sjever">{t("north")}</option>
                                            <option value="Nisam siguran">{t("notSure")}</option>
                                        </select>

                                        <select name="connection_type" className={inputClass} defaultValue="">
                                            <option value="" disabled>{t("connectionType")}</option>
                                            <option value="Monofazni">{t("singlePhase")}</option>
                                            <option value="Trofazni">{t("threePhase")}</option>
                                            <option value="Nisam siguran">{t("notSure")}</option>
                                        </select>

                                        <input name="annual_consumption" className={inputClass} placeholder={t("annualConsumptionShort")} />
                                        <input name="connection_power" className={inputClass} placeholder={t("connectionPowerShort")} />
                                    </>
                                )}

                                {projectType === "business" && (
                                    <>
                                        <input name="company_name" className={inputClass} placeholder={t("companyName")} />
                                        <input name="annual_consumption" className={inputClass} placeholder={t("annualConsumption")} />
                                        <input name="connection_power" className={inputClass} placeholder={t("connectionPower")} />

                                        <select name="object_type" className={inputClass} defaultValue="">
                                            <option value="" disabled>{t("objectType")}</option>
                                            <option value="Poslovni objekat">{t("businessFacility")}</option>
                                            <option value="Proizvodni pogon">{t("productionFacility")}</option>
                                            <option value="Hotel / apartmani">{t("hotelApartments")}</option>
                                            <option value="Trgovina / market">{t("shopMarket")}</option>
                                            <option value="Ostalo">{t("other")}</option>
                                        </select>
                                    </>
                                )}

                                {projectType === "investment" && (
                                    <>
                                        <input name="planned_power" className={inputClass} placeholder={t("plannedPower")} />

                                        <select name="project_location_type" className={inputClass} defaultValue="">
                                            <option value="" disabled>{t("projectTypeField")}</option>
                                            <option value="Krovna elektrana">{t("rooftopPlant")}</option>
                                            <option value="Zemljište">{t("groundMounted")}</option>
                                            <option value="Nisam siguran">{t("notSure")}</option>
                                        </select>

                                        <select name="project_status" className={inputClass} defaultValue="">
                                            <option value="" disabled>{t("projectStatus")}</option>
                                            <option value="Ideja">{t("idea")}</option>
                                            <option value="U pripremi">{t("inPreparation")}</option>
                                            <option value="Potrebna studija">{t("studyNeeded")}</option>
                                            <option value="Tražimo partnera">{t("lookingForPartner")}</option>
                                        </select>
                                    </>
                                )}

                                <textarea
                                    name="message"
                                    className="min-h-32 rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/40 focus:border-[var(--ekogrid-lime)]"
                                    placeholder={t("message")}
                                />

                                {error && (
                                    <p className="rounded-xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-200">
                                        Poruka nije poslata. Pokušajte ponovo.
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="rounded-2xl bg-[var(--ekogrid-lime)] px-8 py-4 font-semibold text-[var(--ekogrid-bg-dark)] transition hover:bg-[var(--ekogrid-lime-soft)] disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {submitting ? "Slanje..." : t("button")}
                                </button>
                            </div>
                        </form>
                    )}
                </div>

                <div className="h-20 bg-[#eef2eb]" />
                <Footer />
            </section>
        </>
    );
}