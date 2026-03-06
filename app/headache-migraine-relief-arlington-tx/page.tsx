import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import ConversionCTA from "@/components/ConversionCTA";
import FAQAccordion from "@/components/FAQAccordion";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Headache & Migraine Relief Arlington TX",
  description:
    "Headache and migraine relief in Arlington TX. Chiropractic treatment for tension headaches, migraines, and cervicogenic headaches. Drug-free care. Call (817) 962-0182.",
};

const faqItems = [
  {
    question: "Does chiropractic really help with headaches and migraines?",
    answer:
      "Yes. Research consistently shows that chiropractic adjustments can significantly reduce the frequency, duration, and intensity of headaches and migraines. Many headaches originate from misalignments in the upper cervical spine (the top of your neck) that irritate nerves and restrict blood flow. By correcting these misalignments, chiropractic care addresses the root cause rather than just masking pain with medication.",
  },
  {
    question: "What types of headaches can a chiropractor treat?",
    answer:
      "Our doctors treat tension headaches (caused by muscle tightness and cervical misalignment), cervicogenic headaches (originating from the neck), migraine headaches (related to nervous system dysfunction and vascular changes), cluster headaches, and headaches caused by tech neck and poor posture. We perform a thorough examination to identify what type of headache you have and what is causing it.",
  },
  {
    question: "How many chiropractic visits does it take to reduce migraines?",
    answer:
      "Many patients notice a reduction in headache frequency and intensity within the first 2-3 weeks of care. For chronic migraine sufferers, a corrective care plan of 2-4 months is typically needed to achieve lasting results. Some patients report complete elimination of migraines through consistent chiropractic care and the MaxLiving 5 Essentials approach to overall wellness.",
  },
  {
    question: "Is chiropractic care a better option than pain medication for headaches?",
    answer:
      "Pain medication masks the symptom but does nothing to fix the cause. Many headache medications also carry side effects and risks of overuse headaches (rebound headaches). Chiropractic care is a drug-free approach that corrects the underlying spinal misalignment causing your headaches. We do not ask patients to stop their medications — instead, we work to reduce your need for them over time.",
  },
  {
    question: "Can stress cause headaches, and can chiropractic help?",
    answer:
      "Absolutely. Stress causes muscle tension — especially in the neck, shoulders, and upper back — which pulls cervical vertebrae out of alignment and triggers headaches. Our MaxLiving 5 Essentials approach addresses stress through both physical correction (chiropractic adjustments) and lifestyle strategies (mindset, nutrition, exercise) for comprehensive headache relief. Call (817) 962-0182 to begin.",
  },
];

export default function HeadacheMigrainePage() {
  return (
    <>
      <PageHero
        variant="dark"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Conditions", href: "/#services" },
          { label: "Headaches & Migraines" },
        ]}
        eyebrow="HEADACHE & MIGRAINE RELIEF"
        eyebrowColor="teal"
        titleSmall="Headache &amp; migraine relief"
        titleLarge="in Arlington, TX."
        subtitle="Drug-free chiropractic treatment for tension headaches, migraines, and cervicogenic headaches — correcting the cause at its source."
      />

      {/* UNDERSTANDING */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
              <div>
                <span className="eyebrow text-primary">UNDERSTANDING YOUR HEADACHES</span>
                <h2 className="mb-5">
                  <span className="block text-[clamp(24px,2.5vw,36px)] font-normal">Why do you keep</span>
                  <span className="block text-[clamp(30px,3.5vw,48px)] font-black">getting headaches?</span>
                </h2>
                <div className="space-y-4 text-text-muted leading-relaxed">
                  <p>
                    Most headaches are not random. They have a structural cause. The upper cervical spine (the top two vertebrae in your neck) is one of the most common sources of headache pain. When these vertebrae are misaligned, they irritate the nerves and blood vessels that supply your head, triggering tension headaches, cervicogenic headaches, and even migraines.
                  </p>
                  <p>
                    At Vitality Family Chiropractic in Arlington, TX, our doctors identify the specific spinal misalignments contributing to your headaches using digital X-rays and sEMG nerve scans. Rather than prescribing medication to mask the pain, we correct the structural cause so your headaches diminish — and often disappear entirely.
                  </p>
                  <p>
                    Many of our patients have suffered from headaches for years before discovering that a cervical misalignment was the root cause all along.
                  </p>
                </div>
              </div>
              <div className="rounded-[18px] overflow-hidden shadow-[var(--shadow-card)] bg-gradient-to-br from-soft-teal to-linen min-h-[380px] flex items-center justify-center text-text-muted text-center p-6">
                Patient receiving upper cervical adjustment for headache relief
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* TYPES */}
      <ScrollReveal>
        <section className="py-20 bg-linen">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <span className="eyebrow text-primary">HEADACHE TYPES WE TREAT</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(28px,3vw,40px)]">What type of headache </span>
              <span className="font-black text-[clamp(36px,4vw,52px)]">do you have?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Tension Headaches", desc: "The most common type. A dull, constant pressure around the forehead, temples, or back of the head. Often caused by cervical misalignment and muscle tension in the neck and upper back.", color: "border-primary" },
                { title: "Migraines", desc: "Intense, throbbing pain — usually on one side of the head. Often accompanied by nausea, light sensitivity, and visual disturbances. Cervical misalignment and nervous system dysfunction are common triggers.", color: "border-accent" },
                { title: "Cervicogenic Headaches", desc: "Headaches that originate from the neck. Pain typically starts at the base of the skull and radiates forward. Caused by cervical joint dysfunction and nerve irritation. Chiropractic care is particularly effective for this type.", color: "border-sage" },
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

      {/* SYMPTOMS */}
      <ScrollReveal>
        <section className="py-20 bg-soft-teal">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <span className="eyebrow text-primary">DO YOU EXPERIENCE</span>
                <h2 className="mb-6">
                  <span className="font-normal text-[clamp(24px,2.5vw,36px)]">Common headache </span>
                  <span className="font-black text-[clamp(30px,3.5vw,48px)]">symptoms.</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Recurring headaches several times per week or month",
                    "Pain that starts at the back of your neck or skull",
                    "Throbbing or pulsing pain on one or both sides",
                    "Sensitivity to light, sound, or strong smells",
                    "Nausea or visual disturbances with headaches",
                    "Headaches that worsen with stress or screen time",
                    "Over-reliance on pain medication for headache relief",
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
                    Our $149 exam includes cervical X-rays, sEMG nerve scan, and your first adjustment. Find out what&apos;s triggering your headaches.
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

      {/* FAQ */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <span className="eyebrow text-neutral">HEADACHE FAQ</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(28px,3vw,40px)]">Your questions about </span>
              <span className="font-black text-[clamp(36px,4vw,52px)]">headache relief.</span>
            </h2>
            <div className="max-w-[800px]">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* RELATED */}
      <ScrollReveal>
        <section className="py-20 bg-linen">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <span className="eyebrow text-primary">RELATED CONDITIONS</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(24px,2.5vw,36px)]">We also </span>
              <span className="font-black text-[clamp(30px,3.5vw,44px)]">treat.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Neck Pain", desc: "Cervical misalignment causing pain, stiffness, and headaches.", href: "/neck-pain-treatment-arlington-tx" },
                { title: "Back Pain", desc: "Thoracic and lumbar misalignment contributing to tension headaches.", href: "/back-pain-treatment-arlington-tx" },
                { title: "Auto Accident Injuries", desc: "Post-accident whiplash often triggers chronic headaches.", href: "/auto-accident-chiropractor-arlington-tx" },
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

      <ConversionCTA headline="Headaches don't have to be your normal." subtext='Book your <span class="text-accent">$149</span> exam and discover the cause.' />
    </>
  );
}
