import type { MetadataRoute } from "next";

const BASE_URL = "https://vitalitychiroarlington.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-03-06");

  const servicePages = [
    "/chiropractic-adjustments-arlington-tx",
    "/prenatal-chiropractic-arlington-tx",
    "/pediatric-chiropractor-arlington-tx",
    "/sports-chiropractor-arlington-tx",
    "/advanced-spinal-correction-arlington-tx",
    "/family-chiropractic-arlington-tx",
    "/maxliving-5-essentials-arlington-tx",
  ];

  const conditionPages = [
    "/back-pain-treatment-arlington-tx",
    "/neck-pain-treatment-arlington-tx",
    "/sciatica-treatment-arlington-tx",
    "/headache-migraine-relief-arlington-tx",
    "/herniated-disc-treatment-arlington-tx",
    "/auto-accident-chiropractor-arlington-tx",
  ];

  const supportPages = [
    "/about",
    "/team",
    "/new-patient",
    "/contact",
    "/schedule",
    "/faq",
    "/testimonials",
  ];

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...servicePages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...conditionPages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...supportPages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
