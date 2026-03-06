import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Reviews & Testimonials Arlington TX",
  description:
    "370+ five-star reviews. Read what Arlington families say about Vitality Family Chiropractic. Prenatal, pediatric, sports, and family chiropractic care. (817) 962-0182.",
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
