import type { MetadataRoute } from "next";
  const routes = ["", "/high-school", "/university", "/process", "/cases", "/about", "/contact", "/appointment", "/privacy", "/legal"];
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({ url: `https://germany-study-agency-wxiv.vercel.app${route}`, lastModified: now, changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : route === "/appointment" ? 0.9 : 0.8 }));
}
