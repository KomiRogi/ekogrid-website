export default async function ThankYouPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    const content = {
        sr: {
            title: "Hvala na upitu.",
            text: "Primili smo vašu poruku. Javićemo vam se u roku od 24h.",
            button: "Nazad na početnu",
        },
        en: {
            title: "Thank you for your inquiry.",
            text: "We have received your message and will get back to you within 24 hours.",
            button: "Back to Home",
        },
    };

    const t = locale === "en" ? content.en : content.sr;

    return (
        <main className="min-h-screen bg-[#eef2eb] px-6 py-40 text-[#223330]">
            <section className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#00a85a]">
                    EkoGrid
                </p>

                <h1 className="text-4xl font-semibold tracking-tight">
                    {t.title}
                </h1>

                <p className="mt-6 text-lg leading-relaxed text-[#223330]/75">
                    {t.text}
                </p>

                <a
                    href={`/${locale}`}
                    className="mt-8 inline-flex rounded-xl bg-[#d9ff32] px-6 py-3 font-semibold text-[#162420]"
                >
                    {t.button}
                </a>
            </section>
        </main>
    );
}