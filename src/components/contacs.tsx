"use client";

import { useTranslations } from "next-intl";

export default function Contact() {
    const t = useTranslations("Contact");

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

                <form
                    action="https://formspree.io/f/xkoeydrz"
                    method="POST"
                    className="rounded-3xl border border-[var(--ekogrid-border)] bg-white/5 p-8 backdrop-blur-xl">
                    <input type="hidden" name="form_source" value="homepage_contact" />
                    <div className="grid gap-5">
                        <input name="name" className="rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/40 focus:border-[var(--ekogrid-lime)]" placeholder={t("name")} />

                        <input name="email" type="email" className="rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/40 focus:border-[var(--ekogrid-lime)]" placeholder={t("email")} />

                        <input name="phone" className="rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/40 focus:border-[var(--ekogrid-lime)]" placeholder={t("phone")} />

                        <input name="location" className="rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/40 focus:border-[var(--ekogrid-lime)]" placeholder={t("location")} />

                        <textarea name="message" className="min-h-32 rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/40 focus:border-[var(--ekogrid-lime)]" placeholder={t("message")} />

                        <button
                            type="submit"
                            className="rounded-2xl bg-[var(--ekogrid-lime)] px-8 py-4 font-semibold text-[var(--ekogrid-bg-dark)] transition hover:bg-[var(--ekogrid-lime-soft)]">
                            {t("button")}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}