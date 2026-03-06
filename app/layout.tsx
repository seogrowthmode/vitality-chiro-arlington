import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import GrainOverlay from "@/components/GrainOverlay";
import { localBusinessSchema, organizationSchema } from "@/lib/schema";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vitalitychiroarlington.com"),
  title: {
    default: "Vitality Family Chiropractic — Arlington TX Family Chiropractor",
    template: "%s | Vitality Family Chiropractic",
  },
  description:
    "Dr. Elise Hernandez and 3 doctors deliver corrective chiropractic care for your whole family. Prenatal, pediatric, sports. $149 new patient exam. Se Habla Español.",
  keywords: [
    "chiropractor arlington tx",
    "family chiropractor arlington",
    "prenatal chiropractic arlington",
    "pediatric chiropractor arlington tx",
    "sports chiropractor arlington",
  ],
  openGraph: {
    siteName: "Vitality Family Chiropractic",
    title: "Vitality Family Chiropractic — Arlington TX",
    description:
      "Three doctors. Bilingual staff. All ages welcome. $149 new patient exam includes consultation, X-rays, nerve scan, and first adjustment.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vitality Family Chiropractic — Arlington TX",
    description:
      "Three doctors. Bilingual staff. All ages welcome. $149 new patient exam includes consultation, X-rays, nerve scan, and first adjustment.",
  },
  verification: {
    google: "GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
      </head>
      <body className={`${nunito.variable} font-[var(--font-nunito)] antialiased`}>
        <GrainOverlay />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
