import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import ConversionCTA from "@/components/ConversionCTA";
import ReviewCard from "@/components/ReviewCard";
import FAQAccordion from "@/components/FAQAccordion";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Back Pain Treatment in Arlington TX",
  description: "Back pain treatment in Arlington TX. Corrective chiropractic care that fixes the root cause. 3 doctors, $149 new patient exam. Se Habla Español.",
};

const faqItems = [
  { question: "How quickly will I feel relief?", answer: "Many patients feel some relief after their first adjustment. However, corrective care is about lasting structural change, not just symptom relief. Your personalized care plan typically spans several weeks to months depending on the severity of your condition." },
  { question: "Do I need X-rays for back pain?", answer: "We take X-rays as part of your $149 new patient exam to see the actual structure of your spine. This allows us to identify misalignments, degeneration, and other issues that are causing your pain — and to track measurable improvement over time." },
  { question: "Is chiropractic better than pain medication?", answer: "Pain medication masks symptoms. Chiropractic care addresses the cause. We don't tell patients to stop their medications — we work alongside your healthcare team to reduce your dependence on pain relief by fixing the underlying structural problem." },
];

export default function BackPainPage() {
  return (
    <>
      <PageHero variant="dark" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Conditions", href: "/#services" }, { label: "Back Pain" }]} eyebrow="BACK PAIN TREATMENT" eyebrowColor="teal" titleSmall="Back pain treatment" titleLarge="in Arlington, TX." subtitle="Corrective chiropractic care that fixes the root cause — not just the symptoms." />

      {/* UNDERSTANDING */}
      <ScrollReveal><section className="py-20 bg-white"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
          <div>
            <span className="eyebrow text-primary">UNDERSTANDING YOUR PAIN</span>
            <h2 className="mb-5"><span className="block text-[clamp(24px,2.5vw,36px)] font-normal">Back pain isn&apos;t</span><span className="block text-[clamp(30px,3.5vw,48px)] font-black">something you live with.</span></h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>Back pain is the #1 reason people visit a chiropractor, and for good reason. Whether it&apos;s acute from an injury or chronic from years of poor posture, spinal misalignment, or degeneration &mdash; chiropractic care addresses the actual cause of your pain.</p>
              <p>At Vitality, we don&apos;t just adjust and send you home. We take X-rays, run sEMG nerve scans, and build a corrective care plan that changes the structure of your spine over time. That&apos;s the difference between temporary relief and lasting correction.</p>
            </div>
          </div>
          <div className="rounded-[18px] overflow-hidden shadow-[var(--shadow-card)] relative min-h-[380px]">
            <Image src="/images/services/advanced-spinal-correction-clinic-treatment-2.webp" alt="Chiropractic care for back pain relief at Vitality Family Chiropractic in Arlington, TX" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
          </div>
        </div>
      </div></section></ScrollReveal>

      {/* OUR APPROACH */}
      <ScrollReveal><section className="py-20 bg-linen"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-14 items-center">
          <div className="rounded-[18px] overflow-hidden shadow-[var(--shadow-card)] relative min-h-[380px]">
            <Image src="/images/services/chiropractic-adjustments-clinic-treatment-1.webp" alt="Doctor performing corrective spinal adjustment on a patient at Vitality Family Chiropractic" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
          </div>
          <div>
            <span className="eyebrow text-primary">OUR APPROACH</span>
            <h2 className="mb-5"><span className="block text-[clamp(24px,2.5vw,36px)] font-normal">We correct.</span><span className="block text-[clamp(30px,3.5vw,48px)] font-black">Not just adjust.</span></h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>Most chiropractors adjust the area that hurts and call it a day. We take a different approach. Using digital X-rays and sEMG nerve scans, we identify the specific structural issues causing your pain &mdash; then build a corrective care plan to fix them.</p>
              <p>Our MaxLiving 5 Essentials approach means we also address nutrition, exercise, mindset, and toxin reduction alongside your chiropractic care. The result: lasting relief, not temporary fixes.</p>
            </div>
            <Link href="/schedule" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-[16px] font-bold mt-4 hover:bg-primary-dark transition-all">Book Your $149 Exam &rarr;</Link>
          </div>
        </div>
      </div></section></ScrollReveal>

      {/* TREATMENT OPTIONS */}
      <ScrollReveal><section className="py-20 bg-white"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <span className="eyebrow text-primary">TREATMENT OPTIONS</span>
        <h2 className="mb-9"><span className="font-normal text-[clamp(28px,3vw,40px)]">How we treat </span><span className="font-black text-[clamp(36px,4vw,52px)]">back pain.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Chiropractic Adjustments", desc: "Precise spinal corrections to restore proper alignment and reduce nerve interference causing your pain.", color: "border-primary", link: "/chiropractic-adjustments-arlington-tx" },
            { title: "Advanced Spinal Correction", desc: "Long-term corrective care plans that change spinal structure — verified with follow-up X-rays.", color: "border-primary", link: "/advanced-spinal-correction-arlington-tx" },
            { title: "Corrective Exercises", desc: "Targeted rehab and strengthening exercises to support your adjustments between visits.", color: "border-accent", link: "/schedule" },
          ].map((t) => (
            <div key={t.title} className={`bg-white rounded-[18px] p-8 shadow-[var(--shadow-card)] border-t-4 ${t.color} hover:-translate-y-1 transition-transform`}>
              <h4 className="text-[0.95rem] font-extrabold mb-2">{t.title}</h4>
              <p className="text-[0.85rem] text-text-muted leading-relaxed">{t.desc}</p>
              <Link href={t.link} className="text-primary font-bold text-[0.85rem] mt-3 inline-block">Learn More &rarr;</Link>
            </div>
          ))}
        </div>
      </div></section></ScrollReveal>

      {/* SYMPTOMS CHECKLIST */}
      <ScrollReveal><section className="py-20 bg-soft-teal"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="eyebrow text-primary">DO YOU EXPERIENCE</span>
            <h2 className="mb-6"><span className="font-normal text-[clamp(24px,2.5vw,36px)]">Common </span><span className="font-black text-[clamp(30px,3.5vw,48px)]">symptoms.</span></h2>
            <ul className="space-y-3">
              {[
                "Persistent low back pain or stiffness",
                "Pain that radiates into your legs (sciatica)",
                "Difficulty sitting or standing for long periods",
                "Sharp pain when bending or twisting",
                "Morning stiffness that takes time to loosen",
                "Numbness or tingling in extremities",
              ].map((s) => (
                <li key={s} className="flex gap-2.5 items-center"><CheckIcon className="w-5 h-5 text-primary flex-shrink-0" /><span className="text-[0.95rem]">{s}</span></li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-white rounded-[18px] p-9 shadow-[var(--shadow-card-lg)] text-center max-w-[340px]">
              <p className="text-[1.1rem] font-bold mb-3">Sound familiar?</p>
              <p className="text-[0.88rem] text-text-muted mb-5">Our $149 exam includes X-rays, nerve scan, and your first adjustment. Find out what&apos;s causing your pain.</p>
              <Link href="/schedule" className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-primary text-white rounded-[16px] font-bold hover:bg-primary-dark transition-all">Book Your $149 Exam &rarr;</Link>
              <p className="text-[0.75rem] text-text-muted mt-3">Se Habla Espa&ntilde;ol &middot; (817) 962-0182</p>
            </div>
          </div>
        </div>
      </div></section></ScrollReveal>

      {/* RESULTS / TESTIMONIALS */}
      <ScrollReveal><section className="py-20 bg-deep-teal"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <span className="eyebrow text-primary">REAL RESULTS</span>
        <h2 className="mb-9"><span className="font-normal text-[clamp(28px,3vw,40px)] text-linen">Back pain </span><span className="font-black text-[clamp(36px,4vw,52px)] text-primary">success stories.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ReviewCard quote="I couldn't bend over to tie my shoes. After 8 weeks with Dr. Elise, my X-rays showed real structural improvement. The pain is gone — not managed, gone." name="Carlos G." tag="Spinal Correction" tagColor="teal" />
          <ReviewCard quote="Had migraines and back pain for 12 years. After 6 weeks of corrective care, both are gone. Not reduced — gone." name="David K." tag="Chronic Back Pain" tagColor="teal" even />
        </div>
      </div></section></ScrollReveal>

      {/* FAQ */}
      <ScrollReveal><section className="py-20 bg-white"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <span className="eyebrow text-neutral">BACK PAIN FAQ</span>
        <h2 className="mb-9"><span className="font-normal text-[clamp(28px,3vw,40px)]">Common </span><span className="font-black text-[clamp(36px,4vw,52px)]">questions.</span></h2>
        <FAQAccordion items={faqItems} />
      </div></section></ScrollReveal>

      {/* RELATED CONDITIONS */}
      <ScrollReveal><section className="py-20 bg-linen"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <span className="eyebrow text-primary">RELATED CONDITIONS</span>
        <h2 className="mb-9"><span className="font-normal text-[clamp(24px,2.5vw,36px)]">We also </span><span className="font-black text-[clamp(30px,3.5vw,44px)]">treat.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Neck Pain", desc: "Cervical misalignment causing pain, stiffness, and headaches.", link: "/neck-pain-treatment-arlington-tx" },
            { title: "Sciatica", desc: "Nerve compression causing radiating pain from the low back through the legs.", link: "/sciatica-treatment-arlington-tx" },
            { title: "Headaches & Migraines", desc: "Often caused by upper cervical misalignment and nerve interference.", link: "/headache-migraine-relief-arlington-tx" },
          ].map((c) => (
            <div key={c.title} className="bg-white rounded-[18px] p-8 shadow-[var(--shadow-card)] border-t-4 border-primary hover:-translate-y-1 transition-transform">
              <h4 className="text-[0.95rem] font-extrabold mb-2">{c.title}</h4>
              <p className="text-[0.85rem] text-text-muted leading-relaxed">{c.desc}</p>
              <Link href={c.link} className="text-primary font-bold text-[0.85rem] mt-3 inline-block">Learn More &rarr;</Link>
            </div>
          ))}
        </div>
      </div></section></ScrollReveal>

      <ConversionCTA headline="Stop living with back pain." subtext='Book your <span class="text-accent">$149</span> exam and find out what&apos;s causing it.' />
    </>
  );
}
