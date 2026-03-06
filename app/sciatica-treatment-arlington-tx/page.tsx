import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import ConversionCTA from "@/components/ConversionCTA";
import FAQAccordion from "@/components/FAQAccordion";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Sciatica Treatment Arlington TX",
  description:
    "Sciatica treatment in Arlington TX. Non-surgical chiropractic care for sciatic nerve pain, leg numbness, and radiating pain. 3 doctors. Call (817) 962-0182.",
};

const faqItems = [
  {
    question: "Can a chiropractor help with sciatica?",
    answer:
      "Yes. Chiropractic care is one of the most effective non-surgical treatments for sciatica. Sciatica is typically caused by spinal misalignment, disc herniation, or muscle tightness that compresses the sciatic nerve. Chiropractic adjustments restore proper spinal alignment, reduce pressure on the nerve, and allow your body to heal naturally. Many patients at Vitality Family Chiropractic experience significant sciatica relief within the first few weeks of corrective care.",
  },
  {
    question: "What causes sciatica?",
    answer:
      "Sciatica occurs when the sciatic nerve — the longest nerve in your body, running from your lower back through your hips and down each leg — becomes compressed or irritated. Common causes include lumbar disc herniation, spinal stenosis, vertebral misalignment, piriformis syndrome, and degenerative disc disease. Pregnancy can also cause sciatica due to the shifting weight and pelvic changes. Our doctors use X-rays and nerve scans to identify the specific cause in your case.",
  },
  {
    question: "How long does sciatica take to heal with chiropractic care?",
    answer:
      "Most sciatica patients begin to feel improvement within 2-4 weeks of starting chiropractic care. Full resolution depends on the underlying cause and severity. Acute sciatica from a minor misalignment may resolve in 4-6 weeks. Sciatica caused by a significant disc herniation may require 3-6 months of corrective care. Your doctor will provide a clear timeline after your $149 new patient exam.",
  },
  {
    question: "Is surgery the only option for severe sciatica?",
    answer:
      "No. Many patients with severe sciatica find significant relief through conservative chiropractic care without surgery. Our corrective approach addresses the structural cause of your sciatic nerve compression rather than just managing symptoms. While some cases may eventually require surgical intervention, most patients should exhaust conservative treatment options first. We will always give you an honest assessment of your condition.",
  },
  {
    question: "What should I avoid doing with sciatica?",
    answer:
      "Avoid prolonged sitting, heavy lifting, and movements that aggravate your symptoms. Do not try to stretch or force movement through pain. Bed rest for more than a day or two can actually make sciatica worse. The best thing you can do is get properly evaluated to determine the root cause. Our doctors will provide specific activity modifications based on your condition. Call (817) 962-0182 to schedule your evaluation.",
  },
];

export default function SciaticaPage() {
  return (
    <>
      <PageHero
        variant="dark"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Conditions", href: "/#services" },
          { label: "Sciatica" },
        ]}
        eyebrow="SCIATICA TREATMENT"
        eyebrowColor="teal"
        titleSmall="Sciatica treatment"
        titleLarge="in Arlington, TX."
        subtitle="Non-surgical chiropractic care for sciatic nerve pain — addressing the root cause, not just numbing the symptoms."
      />

      {/* UNDERSTANDING SCIATICA */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
              <div>
                <span className="eyebrow text-primary">UNDERSTANDING SCIATICA</span>
                <h2 className="mb-5">
                  <span className="block text-[clamp(24px,2.5vw,36px)] font-normal">What is</span>
                  <span className="block text-[clamp(30px,3.5vw,48px)] font-black">sciatica?</span>
                </h2>
                <div className="space-y-4 text-text-muted leading-relaxed">
                  <p>
                    Sciatica is pain that radiates along the sciatic nerve &mdash; the longest and thickest nerve in your body. It runs from your lower back, through your hips and buttocks, and down each leg. When this nerve is compressed or irritated, you experience shooting pain, numbness, tingling, or weakness that can make sitting, standing, and walking extremely uncomfortable.
                  </p>
                  <p>
                    At Vitality Family Chiropractic in Arlington, TX, we see sciatica patients every week. The most common causes are lumbar disc herniations, vertebral misalignments, and piriformis syndrome. Our approach is to identify the exact source of compression using digital X-rays and sEMG nerve scans, then apply a targeted corrective care plan to relieve the pressure and restore proper spinal alignment.
                  </p>
                </div>
              </div>
              <div className="rounded-[18px] overflow-hidden shadow-[var(--shadow-card)] relative min-h-[380px]">
                <Image src="/images/services/advanced-spinal-correction-clinic-treatment-2.webp" alt="Sciatica treatment — corrective chiropractic care for sciatic nerve relief at Vitality Family Chiropractic in Arlington, TX" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SYMPTOMS */}
      <ScrollReveal>
        <section className="py-20 bg-soft-teal">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <span className="eyebrow text-primary">DO YOU EXPERIENCE</span>
                <h2 className="mb-6">
                  <span className="font-normal text-[clamp(24px,2.5vw,36px)]">Common sciatica </span>
                  <span className="font-black text-[clamp(30px,3.5vw,48px)]">symptoms.</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Shooting or burning pain from your low back through your leg",
                    "Numbness or tingling in your leg, foot, or toes",
                    "Weakness in the affected leg",
                    "Pain that worsens when sitting for long periods",
                    "Difficulty standing up from a seated position",
                    "Sharp pain when coughing or sneezing",
                    "One-sided hip or buttock pain",
                  ].map((s) => (
                    <li key={s} className="flex gap-2.5 items-center">
                      <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-[0.95rem]">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-white rounded-[18px] p-9 shadow-[var(--shadow-card-lg)] text-center max-w-[340px]">
                  <p className="text-[1.1rem] font-bold mb-3">Sound familiar?</p>
                  <p className="text-[0.88rem] text-text-muted mb-5">
                    Our $149 exam includes lumbar X-rays, sEMG nerve scan, and your first adjustment. Find out what&apos;s causing your sciatica.
                  </p>
                  <Link href="/schedule" className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-primary text-white rounded-[16px] font-bold hover:bg-primary-dark transition-all">
                    Book Your $149 Exam &rarr;
                  </Link>
                  <p className="text-[0.75rem] text-text-muted mt-3">Se Habla Espa&ntilde;ol &middot; (817) 962-0182</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* TREATMENT */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <span className="eyebrow text-primary">OUR APPROACH</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(28px,3vw,40px)]">How do we treat </span>
              <span className="font-black text-[clamp(36px,4vw,52px)]">sciatica?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Spinal Adjustments", desc: "Precise lumbar corrections to realign vertebrae and reduce pressure on the sciatic nerve.", color: "border-primary" },
                { title: "Corrective Exercises", desc: "Targeted stretches and strengthening exercises for the piriformis, glutes, and core to support your correction.", color: "border-sage" },
                { title: "Long-Term Correction", desc: "Structured care plans to address the structural cause, with follow-up X-rays to verify improvement.", color: "border-accent" },
              ].map((t) => (
                <div key={t.title} className={`bg-white rounded-[18px] p-8 shadow-[var(--shadow-card)] border-t-4 ${t.color} hover:-translate-y-1 transition-transform`}>
                  <h3 className="text-[0.95rem] font-extrabold mb-2">{t.title}</h3>
                  <p className="text-[0.85rem] text-text-muted leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal>
        <section className="py-20 bg-linen">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <span className="eyebrow text-neutral">SCIATICA FAQ</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(28px,3vw,40px)]">Your questions about </span>
              <span className="font-black text-[clamp(36px,4vw,52px)]">sciatica.</span>
            </h2>
            <div className="max-w-[800px]">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* RELATED */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <span className="eyebrow text-primary">RELATED CONDITIONS</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(24px,2.5vw,36px)]">We also </span>
              <span className="font-black text-[clamp(30px,3.5vw,44px)]">treat.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Back Pain", desc: "Lumbar misalignment and chronic pain corrected at the source.", href: "/back-pain-treatment-arlington-tx" },
                { title: "Herniated Discs", desc: "Non-surgical treatment for disc bulges and herniations.", href: "/herniated-disc-treatment-arlington-tx" },
                { title: "Neck Pain", desc: "Cervical misalignment causing pain, stiffness, and headaches.", href: "/neck-pain-treatment-arlington-tx" },
              ].map((c) => (
                <Link key={c.title} href={c.href} className="bg-white rounded-[18px] p-8 shadow-[var(--shadow-card)] border-t-4 border-primary hover:-translate-y-1 transition-transform block">
                  <h3 className="text-[0.95rem] font-extrabold mb-2">{c.title}</h3>
                  <p className="text-[0.85rem] text-text-muted leading-relaxed">{c.desc}</p>
                  <span className="text-primary font-bold text-[0.85rem] mt-3 inline-block">Learn More &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ConversionCTA headline="Stop the shooting pain. Start healing." subtext='Book your <span class="text-accent">$149</span> sciatica evaluation today.' />
    </>
  );
}
