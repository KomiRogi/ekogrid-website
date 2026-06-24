import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ["sr", "en"],
    defaultLocale: "sr"
});

export const config = {
    matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"]
};