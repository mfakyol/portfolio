import type { MetadataRoute } from "next";

// Single page; the TR/EN versions share one URL (the locale lives in a cookie).
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://fatihakyol.com/", changeFrequency: "monthly", priority: 1 }];
}
