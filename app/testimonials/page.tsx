"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import ConversionCTA from "@/components/ConversionCTA";
import ReviewCard from "@/components/ReviewCard";

const reviews = [
  { quote: "Dr. Elise changed my pregnancy. I had terrible back pain and after just 3 visits I felt like a new person. She's incredible with prenatal care.", name: "Sarah M.", tag: "Prenatal Care", tagColor: "sage" as const, category: "prenatal" },
  { quote: "My 3-week-old was colicky and not sleeping. Dr. Mary adjusted him so gently — he slept 6 hours that night. We've been bringing him ever since.", name: "Amanda R.", tag: "Pediatric", tagColor: "sage" as const, category: "pediatric" },
  { quote: "I've been to 5 chiropractors. Vitality is the only one that actually corrected my spine instead of just cracking it. The X-rays don't lie — my curve is improving.", name: "Carlos G.", tag: "Spinal Correction", tagColor: "teal" as const, category: "back-pain" },
  { quote: "Katy's nutrition program helped me lose 22 lbs in 3 months. The Metabolix testing showed exactly what my body needed. Life-changing.", name: "Jennifer T.", tag: "Nutrition", tagColor: "teal" as const, category: "general" },
  { quote: "Dr. Chad got me back on the field in 2 weeks after my hamstring tear. As a former rugby player, he gets athletes and what we need.", name: "Marcus D.", tag: "Sports", tagColor: "orange" as const, category: "sports" },
  { quote: "The bilingual staff made my abuela feel so comfortable. Everyone speaks Spanish and the care is amazing. The whole family comes here now.", name: "Maria L.", tag: "Family Care", tagColor: "teal" as const, category: "general" },
  { quote: "We bring our entire family — me, my husband, our 3 kids, and my mom. They know all of us by name. We've been coming since 2019.", name: "Stephanie W.", tag: "Family Wellness", tagColor: "teal" as const, category: "general" },
  { quote: "Had migraines and back pain for 12 years. After 6 weeks of corrective care, they're gone. Not reduced — gone. I wish I'd come here sooner.", name: "David K.", tag: "Headaches & Back Pain", tagColor: "teal" as const, category: "back-pain" },
  { quote: "I was terrified to bring my newborn. Dr. Elise was so gentle — lighter than checking a tomato. My daughter loved it and has been sleeping better.", name: "Rachel P.", tag: "Pediatric", tagColor: "sage" as const, category: "pediatric" },
  { quote: "Best chiropractic office in Arlington, hands down. Three doctors means you never wait long and always get quality care.", name: "Brian H.", tag: "General", tagColor: "teal" as const, category: "general" },
  { quote: "Both my pregnancies were managed by Dr. Mary. The second was SO much easier because I started chiropractic care in my first trimester. No back pain at all.", name: "Lauren A.", tag: "Prenatal", tagColor: "sage" as const, category: "prenatal" },
  { quote: "I'm a high school football coach and Dr. Chad is our go-to. He treats our athletes with the same intensity he brought to pro rugby. Results speak for themselves.", name: "Coach James R.", tag: "Sports", tagColor: "orange" as const, category: "sports" },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Prenatal", value: "prenatal" },
  { label: "Pediatric", value: "pediatric" },
  { label: "Back Pain", value: "back-pain" },
  { label: "Sports", value: "sports" },
  { label: "General", value: "general" },
];

export default function TestimonialsPage() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? reviews : reviews.filter((r) => r.category === active);

  return (
    <>
      <PageHero variant="dark" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Reviews" }]} eyebrow="PATIENT REVIEWS" eyebrowColor="teal" titleSmall="370+ reviews. 4.9 stars." titleLarge="Arlington trusts us." />

      {/* SOCIAL PROOF WALL */}
      <ScrollReveal><section className="py-20 bg-white"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        {/* FILTER TABS */}
        <div className="flex flex-wrap gap-2 mb-9">
          {filters.map((f) => (
            <button key={f.value} onClick={() => setActive(f.value)} className={`px-5 py-2 rounded-full text-[0.82rem] font-bold transition-colors cursor-pointer ${active === f.value ? "bg-primary text-white" : "bg-linen text-text-muted hover:bg-soft-teal hover:text-primary"}`}>{f.label}</button>
          ))}
        </div>

        {/* REVIEWS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filtered.map((r, i) => (
            <ReviewCard key={r.name} quote={r.quote} name={r.name} tag={r.tag} tagColor={r.tagColor} even={i % 2 === 1} />
          ))}
        </div>

        {/* BOTTOM STATS */}
        <div className="mt-12 flex items-center justify-center gap-2 text-[0.88rem] text-text-muted font-semibold flex-wrap p-6 bg-linen rounded-[16px]">
          <span className="text-accent">&#9733;&#9733;&#9733;&#9733;&#9733;</span> 4.9 Google <span>&middot;</span> 370+ Reviews <span>&middot;</span> One of the Largest Family Practices in Texas
        </div>
      </div></section></ScrollReveal>

      {/* SHARE YOUR EXPERIENCE */}
      <ScrollReveal><section className="py-20 bg-linen"><div className="max-w-[600px] mx-auto px-5 text-center">
        <span className="eyebrow text-primary">SHARE YOUR EXPERIENCE</span>
        <h2 className="mb-5"><span className="font-normal text-[clamp(28px,3vw,40px)]">Love your </span><span className="font-black text-[clamp(36px,4vw,52px)]">experience?</span></h2>
        <p className="text-text-muted mb-7">Your review helps other Arlington families find better health. Leave us a review on your preferred platform.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="https://maps.google.com/maps?cid=12164390195920911877" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-[16px] font-bold text-[0.85rem] hover:bg-primary-dark transition-all">Leave a Google Review &rarr;</a>
        </div>
      </div></section></ScrollReveal>

      <ConversionCTA headline="Ready to join them?" subtext='Book your <span class="text-accent">$149</span> new patient exam.' />
    </>
  );
}
