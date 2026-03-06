import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vitality Family Chiropractic — Arlington TX",
    short_name: "Vitality Chiro",
    description:
      "Family chiropractor in Arlington TX. Prenatal, pediatric, sports chiropractic. 3 doctors. Se Habla Espanol. $149 new patient exam.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF6F1",
    theme_color: "#58BFBA",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
