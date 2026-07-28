import type { MetadataRoute } from "next";
  const routes = ["", "/high-school", "/university", "/process", "/cases", "/about", "/contact", "/appointment", "/privacy", "/legal"];
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ["", "/de", "/en"].flatMap((locale) =>
    routes.map((route) => ({
      url: `https://glc-shengtu-education.vercel.app${locale}${route}`,
      lastModified: now,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : route === "/appointment" ? 0.9 : 0.8,
      alternates: {
        languages: {
          "zh-CN": `https://glc-shengtu-education.vercel.app${route}`,
          "de-DE": `https://glc-shengtu-education.vercel.app/de${route}`,
          en: `https://glc-shengtu-education.vercel.app/en${route}`,
        },
      },
    }))
  );
}
