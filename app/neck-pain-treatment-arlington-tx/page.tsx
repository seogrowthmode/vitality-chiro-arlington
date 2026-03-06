import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import ConversionCTA from "@/components/ConversionCTA";
import FAQAccordion from "@/components/FAQAccordion";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Neck Pain Treatment Arlington TX",
  description:
    "Neck pain treatment in Arlington TX. Chiropractor for neck pain, tech neck, whiplash, and cervical misalignment. Corrective care by 3 doctors. Call (817) 962-0182.",
};

const faqItems = [
  {
    question: "What does a chiropractor do for neck pain?",
    answer:
      "A chiropractor identifies and corrects cervical spinal misalignments (subluxations) that are causing your neck pain. At Vitality Family Chiropractic, we use digital X-rays and sEMG nerve scans to pinpoint the exact source of your pain, then apply precise adjustments to restore proper alignment and reduce nerve interference. We also prescribe corrective exercises to strengthen supporting muscles and prevent recurrence.",
  },
  {
    question: "Can a chiropractor help with tech neck?",
    answer:
      "Yes. Tech neck — the forward head posture caused by prolonged phone and computer use — is one of the most common conditions we treat. For every inch your head moves forward from its natural position, it adds approximately 10 pounds of pressure on your cervical spine. Our corrective care program includes adjustments to restore your cervical curve and exercises to retrain your postural muscles.",
  },
  {
    question: "Is it safe to get a neck adjustment?",
    answer:
      "Cervical adjustments are very safe when performed by a licensed, trained chiropractor. Our three doctors at Vitality Family Chiropractic have extensive training in cervical adjustment techniques and have performed thousands of neck adjustments on patients of all ages. We assess each patient individually and use the technique best suited to your condition and comfort level.",
  },
  {
    question: "How long does it take to fix neck pain with chiropractic care?",
    answer:
      "Many patients feel improvement after their first adjustment. However, lasting correction depends on the severity and duration of your condition. Acute neck pain may resolve in 2-4 weeks. Chronic cervical misalignment or degenerative changes may require 2-4 months of corrective care. Your doctor will outline a clear timeline after reviewing your $149 new patient exam results.",
  },
  {
    question: "What causes neck pain?",
    answer:
      "Common causes include cervical vertebral misalignment, muscle tension from stress or poor posture, tech neck from phone/computer use, whiplash from auto accidents, disc herniations, arthritis, and sleeping in awkward positions. Many patients experience neck pain that radiates into the shoulders, arms, or causes headaches. Proper diagnosis with X-rays helps us identify the root cause.",
  },
];

export default function NeckPainPage() {
  return (
    <>
      <PageHero
        variant="dark"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Conditions", href: "/#services" },
          { label: "Neck Pain" },
        ]}
        eyebrow="NECK PAIN TREATMENT"
        eyebrowColor="teal"
        titleSmall="Neck pain treatment"
        titleLarge="in Arlington, TX."
        subtitle="Corrective chiropractic care for neck pain, tech neck, whiplash, and cervical misalignment — fixing the cause, not masking the symptoms."
      />

      {/* UNDERSTANDING NECK PAIN */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
              <div>
                <span className="eyebrow text-primary">UNDERSTANDING YOUR NECK PAIN</span>
                <h2 className="mb-5">
                  <span className="block text-[clamp(24px,2.5vw,36px)] font-normal">Why does your</span>
                  <span className="block text-[clamp(30px,3.5vw,48px)] font-black">neck hurt?</span>
                </h2>
                <div className="space-y-4 text-text-muted leading-relaxed">
                  <p>
                    Your cervical spine (neck) contains seven vertebrae that support your head, protect your spinal cord, and allow full range of motion. When these vertebrae become misaligned &mdash; from poor posture, injury, stress, or repetitive strain &mdash; the result is pain, stiffness, headaches, and sometimes numbness or tingling that radiates into your shoulders and arms.
                  </p>
                  <p>
                    At Vitality Family Chiropractic in Arlington, TX, we don&apos;t just treat neck pain symptoms. Dr. Elise Hernandez, Dr. Mary Davis, and Dr. Chad London use digital X-rays and sEMG nerve scans to identify the specific structural cause of your neck pain and build a corrective care plan to fix it.
                  </p>
                </div>
              </div>
              <div className="rounded-[18px] overflow-hidden shadow-[var(--shadow-card)] bg-gradient-to-br from-soft-teal to-linen min-h-[380px] flex items-center justify-center text-text-muted text-center p-6">
                Patient receiving cervical spine adjustment for neck pain
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
                  <span className="font-normal text-[clamp(24px,2.5vw,36px)]">Common neck pain </span>
                  <span className="font-black text-[clamp(30px,3.5vw,48px)]">symptoms.</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Persistent neck stiffness or soreness",
                    "Pain that radiates into your shoulders or arms",
                    "Headaches originating from the base of the skull",
                    "Difficulty turning your head fully to one side",
                    "Numbness or tingling in your hands or fingers",
                    "Sharp pain when looking up or down",
                    "Grinding or popping sounds when moving your neck",
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
                    Our $149 exam includes cervical X-rays, sEMG nerve scan, and your first adjustment. Find out what&apos;s causing your neck pain.
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

      {/* TREATMENT APPROACH */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <span className="eyebrow text-primary">OUR APPROACH</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(28px,3vw,40px)]">How do we treat </span>
              <span className="font-black text-[clamp(36px,4vw,52px)]">neck pain?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Cervical Adjustments", desc: "Precise, gentle corrections to restore proper cervical alignment and reduce nerve interference.", color: "border-primary" },
                { title: "Corrective Exercises", desc: "Targeted exercises to strengthen neck and upper back muscles, improve posture, and support long-term correction.", color: "border-sage" },
                { title: "Advanced Spinal Correction", desc: "Structured care plans to restore your cervical curve, verified by follow-up X-rays showing measurable improvement.", color: "border-accent" },
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
            <span className="eyebrow text-neutral">NECK PAIN FAQ</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(28px,3vw,40px)]">Your questions about </span>
              <span className="font-black text-[clamp(36px,4vw,52px)]">neck pain.</span>
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
                { title: "Back Pain", desc: "Lumbar and thoracic spinal misalignment causing chronic pain.", href: "/back-pain-treatment-arlington-tx" },
                { title: "Headaches & Migraines", desc: "Often caused by cervical misalignment and nerve interference.", href: "/headache-migraine-relief-arlington-tx" },
                { title: "Herniated Discs", desc: "Cervical disc herniations causing neck pain and arm numbness.", href: "/herniated-disc-treatment-arlington-tx" },
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

      <ConversionCTA headline="Stop living with neck pain." subtext='Book your <span class="text-accent">$149</span> exam and find out what&apos;s causing it.' />
    </>
  );
}
