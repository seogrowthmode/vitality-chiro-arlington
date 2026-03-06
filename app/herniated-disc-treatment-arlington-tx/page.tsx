import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import ConversionCTA from "@/components/ConversionCTA";
import FAQAccordion from "@/components/FAQAccordion";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Herniated Disc Treatment Arlington TX",
  description:
    "Herniated disc treatment in Arlington TX. Non-surgical chiropractic care for bulging and herniated discs. Corrective approach with X-ray verification. Call (817) 962-0182.",
};

const faqItems = [
  {
    question: "Can a chiropractor fix a herniated disc without surgery?",
    answer:
      "In many cases, yes. The majority of herniated discs respond well to conservative chiropractic care. Our corrective approach uses gentle spinal adjustments to restore proper alignment, reduce pressure on the affected disc, and create the conditions for natural healing. We use digital X-rays and sEMG nerve scans to monitor your progress. While some severe cases may eventually require surgical consultation, most patients find significant relief through non-surgical chiropractic care.",
  },
  {
    question: "What is the difference between a herniated disc and a bulging disc?",
    answer:
      "A bulging disc occurs when the outer wall of the disc extends beyond its normal boundary but remains intact — like a hamburger patty that is too wide for the bun. A herniated disc occurs when the outer wall of the disc tears, allowing the inner gel-like material to push through and press on nearby nerves. Both conditions can cause significant pain but herniated discs tend to produce more severe nerve-related symptoms. Both respond to chiropractic corrective care.",
  },
  {
    question: "What causes a disc to herniate?",
    answer:
      "Disc herniations are caused by degenerative changes over time, acute trauma (such as heavy lifting or auto accidents), repetitive stress, poor posture, and spinal misalignment that creates uneven pressure on the disc. Age is a factor — as discs lose hydration and flexibility, they become more susceptible to herniation. However, herniated discs can occur at any age, especially with traumatic injury.",
  },
  {
    question: "How long does it take to recover from a herniated disc with chiropractic care?",
    answer:
      "Recovery time depends on the severity and location of the herniation, your overall health, and how consistently you follow your care plan. Many patients experience noticeable pain reduction within 2-4 weeks. Full structural correction typically takes 3-6 months of consistent care. Your doctor at Vitality Family Chiropractic will provide a clear timeline based on your examination and imaging findings.",
  },
  {
    question: "Will I need to get an MRI for a herniated disc?",
    answer:
      "We start with digital spinal X-rays and sEMG nerve scans during your $149 new patient exam. X-rays show us the structural alignment of your spine and the spacing between vertebrae. If your symptoms and examination findings suggest a significant disc herniation, we may recommend an MRI for more detailed imaging of the soft tissue. We will always explain our reasoning and give you options. Call (817) 962-0182 to schedule.",
  },
];

export default function HerniatedDiscPage() {
  return (
    <>
      <PageHero
        variant="dark"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Conditions", href: "/#services" },
          { label: "Herniated Disc" },
        ]}
        eyebrow="HERNIATED DISC TREATMENT"
        eyebrowColor="teal"
        titleSmall="Herniated disc treatment"
        titleLarge="in Arlington, TX."
        subtitle="Non-surgical chiropractic care for herniated and bulging discs — correcting the structural cause for lasting relief."
      />

      {/* UNDERSTANDING */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
              <div>
                <span className="eyebrow text-primary">UNDERSTANDING DISC HERNIATIONS</span>
                <h2 className="mb-5">
                  <span className="block text-[clamp(24px,2.5vw,36px)] font-normal">What is a</span>
                  <span className="block text-[clamp(30px,3.5vw,48px)] font-black">herniated disc?</span>
                </h2>
                <div className="space-y-4 text-text-muted leading-relaxed">
                  <p>
                    Your spinal discs are soft, gel-filled cushions that sit between each vertebra, providing shock absorption and flexibility. A herniated disc occurs when the tough outer layer of the disc tears, allowing the inner material to push out and press on nearby spinal nerves. This can cause intense pain, numbness, tingling, and weakness in the back, neck, arms, or legs.
                  </p>
                  <p>
                    At Vitality Family Chiropractic in Arlington, TX, we take a corrective approach to herniated discs. Dr. Elise Hernandez, Dr. Mary Davis, and Dr. Chad London use digital X-rays and sEMG nerve scans to evaluate the location and severity of your disc problem, then create a targeted care plan to reduce nerve compression and restore proper spinal alignment.
                  </p>
                  <p>
                    Many patients who were told they need surgery have found lasting relief through our conservative, non-surgical approach.
                  </p>
                </div>
              </div>
              <div className="rounded-[18px] overflow-hidden shadow-[var(--shadow-card)] relative min-h-[400px]">
                <Image src="/images/services/advanced-spinal-correction-clinic-treatment-2.webp" alt="Non-surgical herniated disc treatment — corrective chiropractic care at Vitality Family Chiropractic in Arlington, TX" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
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
                  <span className="font-normal text-[clamp(24px,2.5vw,36px)]">Common herniated disc </span>
                  <span className="font-black text-[clamp(30px,3.5vw,48px)]">symptoms.</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Sharp or burning pain in your back or neck",
                    "Pain that radiates into your arms or legs",
                    "Numbness or tingling in extremities",
                    "Muscle weakness in the affected area",
                    "Pain that worsens with bending, lifting, or sitting",
                    "Difficulty walking or maintaining balance",
                    "Sciatica symptoms from a lumbar disc herniation",
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
                    Our $149 exam includes spinal X-rays, sEMG nerve scan, and your first adjustment. Let us find out if a disc herniation is the cause.
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
              <span className="font-black text-[clamp(36px,4vw,52px)]">herniated discs?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Gentle Spinal Adjustments", desc: "Precise corrections to restore alignment and reduce pressure on the affected disc and surrounding nerves.", color: "border-primary" },
                { title: "Corrective Exercises", desc: "Targeted exercises to strengthen core and spinal muscles, improve flexibility, and support disc healing.", color: "border-sage" },
                { title: "Structural Correction", desc: "Long-term care plans to restore proper spinal curvature and disc spacing, verified by follow-up imaging.", color: "border-accent" },
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
            <span className="eyebrow text-neutral">HERNIATED DISC FAQ</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(28px,3vw,40px)]">Your questions about </span>
              <span className="font-black text-[clamp(36px,4vw,52px)]">herniated discs.</span>
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
                { title: "Sciatica", desc: "Disc herniations are a leading cause of sciatic nerve pain.", href: "/sciatica-treatment-arlington-tx" },
                { title: "Back Pain", desc: "Chronic back pain often stems from disc and alignment issues.", href: "/back-pain-treatment-arlington-tx" },
                { title: "Spinal Correction", desc: "Advanced protocols to restore proper spinal structure.", href: "/advanced-spinal-correction-arlington-tx" },
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

      <ConversionCTA headline="A herniated disc doesn't mean surgery." subtext='Book your <span class="text-accent">$149</span> exam and explore non-surgical options.' />
    </>
  );
}
