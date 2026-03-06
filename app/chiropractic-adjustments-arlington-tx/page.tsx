import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import ConversionCTA from "@/components/ConversionCTA";
import FAQAccordion from "@/components/FAQAccordion";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Chiropractic Adjustments Arlington TX",
  description:
    "Chiropractic adjustments in Arlington TX at Vitality Family Chiropractic. Manual and instrument-assisted spinal adjustments by 3 experienced doctors. $149 new patient exam. Call (817) 962-0182.",
};

const faqItems = [
  {
    question: "What happens during a chiropractic adjustment?",
    answer:
      "During a chiropractic adjustment, your doctor applies a controlled, specific force to a spinal joint that is misaligned or not moving properly. You may hear a popping sound — this is simply gas releasing from the joint, similar to cracking your knuckles. The adjustment restores proper motion, reduces nerve interference, and allows your body to function better. At Vitality Family Chiropractic, we use both manual and instrument-assisted techniques depending on your comfort level and condition.",
  },
  {
    question: "Are chiropractic adjustments safe?",
    answer:
      "Yes. Chiropractic adjustments are one of the safest non-invasive treatments available for spinal conditions. Our doctors at Vitality Family Chiropractic have performed tens of thousands of adjustments on patients of all ages — from 2-day-old newborns to patients in their 80s. We tailor the technique and force to each individual patient. Serious complications from chiropractic adjustments are extremely rare.",
  },
  {
    question: "How many adjustments will I need?",
    answer:
      "The number of adjustments depends on your specific condition, severity, and health goals. Some patients feel significant improvement in 2-3 visits. Corrective care plans typically span several weeks to months to achieve lasting structural change. Your doctor will review your X-rays and sEMG nerve scan results to recommend a personalized care plan during your $149 new patient exam.",
  },
  {
    question: "Do chiropractic adjustments hurt?",
    answer:
      "Most patients find adjustments comfortable and even relaxing. You may feel mild pressure during the adjustment and some soreness afterward — similar to what you might feel after a workout. This is normal and typically resolves within 24 hours. Our doctors adjust their technique based on your comfort level, and we offer gentle instrument-assisted options for patients who prefer a lighter touch.",
  },
  {
    question: "What is the difference between a chiropractic adjustment and cracking your own back?",
    answer:
      "When you crack your own back, you are creating movement in joints that are already mobile — which can actually make your problem worse over time. A chiropractic adjustment is a precise, targeted correction applied to a specific joint that is restricted or misaligned. Our doctors use X-rays and hands-on analysis to identify exactly which segments need correction. Self-manipulation does not address the root cause.",
  },
];

export default function ChiropracticAdjustmentsPage() {
  return (
    <>
      <PageHero
        variant="dark"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/#services" },
          { label: "Chiropractic Adjustments" },
        ]}
        eyebrow="CHIROPRACTIC ADJUSTMENTS IN ARLINGTON"
        eyebrowColor="teal"
        titleSmall="Chiropractic adjustments"
        titleLarge="in Arlington, TX."
        subtitle="Manual and instrument-assisted spinal adjustments by three experienced doctors — correcting the cause, not masking symptoms."
      />

      {/* WHAT ARE ADJUSTMENTS */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
              <div>
                <span className="eyebrow text-primary">CORE CHIROPRACTIC CARE</span>
                <h2 className="mb-5">
                  <span className="block text-[clamp(24px,2.5vw,36px)] font-normal">What is a</span>
                  <span className="block text-[clamp(30px,3.5vw,48px)] font-black">chiropractic adjustment?</span>
                </h2>
                <div className="space-y-4 text-text-muted leading-relaxed">
                  <p>
                    A chiropractic adjustment is a precise, controlled force applied to a spinal joint that has become misaligned or restricted in its movement. These misalignments &mdash; called subluxations &mdash; interfere with your nervous system&apos;s ability to communicate with the rest of your body.
                  </p>
                  <p>
                    At Vitality Family Chiropractic in Arlington, TX, Dr. Elise Hernandez, Dr. Mary Davis, and Dr. Chad London use a combination of manual (hands-on) and instrument-assisted techniques to restore proper spinal alignment. Each adjustment is tailored to the patient&apos;s age, condition, and comfort level &mdash; from gentle fingertip adjustments on newborns to precise sports-focused corrections for athletes.
                  </p>
                  <p>
                    Our goal is not just symptom relief. We use advanced spinal correction protocols to create lasting structural change, verified by follow-up X-rays and sEMG nerve scans.
                  </p>
                </div>
              </div>
              <div className="rounded-[18px] overflow-hidden shadow-[var(--shadow-card)] relative min-h-[380px]">
                <Image src="/images/services/chiropractic-adjustments-clinic-treatment-1.webp" alt="Doctor performing a precise chiropractic adjustment on a patient at Vitality Family Chiropractic" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* TECHNIQUES */}
      <ScrollReveal>
        <section className="py-20 bg-linen">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <span className="eyebrow text-primary">ADJUSTMENT TECHNIQUES</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(28px,3vw,40px)]">What types of adjustments </span>
              <span className="font-black text-[clamp(36px,4vw,52px)]">do we offer?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Diversified Manual Adjustments",
                  desc: "The most common chiropractic technique. Hands-on, specific corrections to restore joint mobility and spinal alignment. Our doctors are highly trained in precise manual adjustments for patients of all ages.",
                  color: "border-primary",
                },
                {
                  title: "Instrument-Assisted Adjustments",
                  desc: "Using specialized tools to deliver gentle, low-force corrections. Ideal for patients who prefer a lighter approach, including infants, elderly patients, and those with acute pain or sensitivity.",
                  color: "border-sage",
                },
                {
                  title: "FAKTR Soft Tissue Technique",
                  desc: "Dr. Chad London uses FAKTR (Functional and Kinetic Treatment with Rehab) to address soft tissue injuries alongside spinal adjustments. Especially effective for sports injuries, muscle strains, and chronic tension.",
                  color: "border-accent",
                },
              ].map((t) => (
                <div
                  key={t.title}
                  className={`bg-white rounded-[18px] p-8 shadow-[var(--shadow-card)] border-t-4 ${t.color} hover:-translate-y-1 transition-transform`}
                >
                  <h3 className="text-[0.95rem] font-extrabold mb-2">{t.title}</h3>
                  <p className="text-[0.85rem] text-text-muted leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* WHO BENEFITS */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <span className="eyebrow text-primary">FOR EVERY AGE</span>
                <h2 className="mb-6">
                  <span className="font-normal text-[clamp(24px,2.5vw,36px)]">Who can benefit from </span>
                  <span className="font-black text-[clamp(30px,3.5vw,48px)]">chiropractic adjustments?</span>
                </h2>
                <ul className="space-y-3">
                  {[
                    "Newborns and infants with colic, reflux, or latching difficulties",
                    "Children and teens with growing pains or sports injuries",
                    "Pregnant women seeking relief from back pain and pelvic discomfort",
                    "Adults with chronic back pain, neck pain, or headaches",
                    "Athletes looking to optimize performance and speed recovery",
                    "Seniors wanting to maintain mobility and reduce stiffness",
                  ].map((s) => (
                    <li key={s} className="flex gap-2.5 items-start">
                      <CheckIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-[0.95rem]">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-soft-teal rounded-[18px] p-9 shadow-[var(--shadow-card-lg)] text-center max-w-[380px]">
                  <p className="text-[1.1rem] font-bold mb-3">Your whole family. One practice.</p>
                  <p className="text-[0.88rem] text-text-muted mb-5">
                    From 2-day-old newborns to 80-year-old grandparents &mdash; our three doctors have the experience and techniques to care for every member of your family.
                  </p>
                  <Link
                    href="/schedule"
                    className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-primary text-white rounded-[16px] font-bold hover:bg-primary-dark transition-all"
                  >
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
        <section className="py-20 bg-linen">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <span className="eyebrow text-neutral">ADJUSTMENT FAQ</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(28px,3vw,40px)]">Your questions about </span>
              <span className="font-black text-[clamp(36px,4vw,52px)]">adjustments.</span>
            </h2>
            <div className="max-w-[800px]">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* RELATED SERVICES */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <span className="eyebrow text-primary">RELATED SERVICES</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(24px,2.5vw,36px)]">Explore more </span>
              <span className="font-black text-[clamp(30px,3.5vw,44px)]">services.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Advanced Spinal Correction", desc: "Long-term corrective care protocols that restore spinal curvature and posture.", href: "/advanced-spinal-correction-arlington-tx" },
                { title: "Sports Chiropractic", desc: "CCSP-certified care for athletes by Dr. Chad London.", href: "/sports-chiropractor-arlington-tx" },
                { title: "Family Wellness Care", desc: "Ongoing chiropractic care for every member of your family.", href: "/family-chiropractic-arlington-tx" },
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

      <ConversionCTA headline="Feel the difference a real adjustment makes." subtext='Book your <span class="text-accent">$149</span> exam with one of our three doctors.' />
    </>
  );
}
