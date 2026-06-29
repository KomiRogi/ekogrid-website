import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://ekogrid.ba";

    const routes = [
        "/sr",
        "/en",
        "/sr/about",
        "/en/about",
        "/sr/solutions",
        "/en/solutions",
        "/sr/consultation",
        "/en/consultation",
        "/sr/hvala",
        "/en/hvala",
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
    }));
}