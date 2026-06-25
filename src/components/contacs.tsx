"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Contact() {
    const t = useTranslations("Contact");
    const [sent, setSent] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        alert("Radi novi kod");
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
        <section
            id="contact"
            className="relative overflow-hidden bg-[var(--ekogrid-bg-dark)] px-6 py-28 text-[var(--ekogrid-text)]"
        >
            <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[var(--ekogrid-lime)]/10 blur-3xl" />

            <div className="relative z-10 mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
                <div>
                    <p className="mb-4 uppercase tracking-[0.35em] text-[var(--ekogrid-lime)]">
                        {t("eyebrow")}
                    </p>

                    <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                        {t("title")}
                    </h2>

                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                        {t("subtitle")}
                    </p>
                </div>

                {sent ? (
                    <div
                        id="success-message"
                        className="rounded-3xl border border-[var(--ekogrid-lime)]/30 bg-[var(--ekogrid-lime)]/10 p-8 backdrop-blur-xl"
                    >
                        <p className="text-2xl font-semibold text-[var(--ekogrid-lime)]">
                            {t("successTitle")}
                        </p>

                        <p className="mt-4 text-white/80">
                            {t("successText")}
                        </p>
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="rounded-3xl border border-[var(--ekogrid-border)] bg-white/5 p-8 backdrop-blur-xl"
                    >
                        <input type="hidden" name="form_source" value="homepage_contact" />

                        <div className="grid gap-5">
                            <input
                                name="name"
                                required
                                className="rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/40 focus:border-[var(--ekogrid-lime)]"
                                placeholder={t("name")}
                            />

                            <input
                                name="email"
                                type="email"
                                required
                                className="rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/40 focus:border-[var(--ekogrid-lime)]"
                                placeholder={t("email")}
                            />

                            <input
                                name="phone"
                                className="rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/40 focus:border-[var(--ekogrid-lime)]"
                                placeholder={t("phone")}
                            />

                            <input
                                name="location"
                                className="rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/40 focus:border-[var(--ekogrid-lime)]"
                                placeholder={t("location")}
                            />

                            <textarea
                                name="message"
                                className="min-h-32 rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/40 focus:border-[var(--ekogrid-lime)]"
                                placeholder={t("message")}
                            />

                            {error && (
                                <p className="rounded-xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-200">
                                    Poruka nije poslata. Pokušajte ponovo ili nas kontaktirajte direktno.
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
        </section>
    );
}