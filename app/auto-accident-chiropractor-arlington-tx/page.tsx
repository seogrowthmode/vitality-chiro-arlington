import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import ConversionCTA from "@/components/ConversionCTA";
import FAQAccordion from "@/components/FAQAccordion";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Auto Accident Chiropractor Arlington TX",
  description:
    "Auto accident chiropractor in Arlington TX. Car crash injury treatment for whiplash, soft tissue damage, and spinal misalignment. Same-day appointments. Call (817) 962-0182.",
};

const faqItems = [
  {
    question: "Should I see a chiropractor after a car accident even if I don't feel pain?",
    answer:
      "Yes. Many auto accident injuries — especially whiplash — take hours, days, or even weeks to produce noticeable symptoms. Adrenaline and inflammation can mask pain initially. Spinal misalignments caused by the impact may not hurt right away but can lead to chronic pain, headaches, and reduced mobility if left untreated. Getting evaluated by a chiropractor within 72 hours of your accident is the best way to catch hidden injuries early.",
  },
  {
    question: "What types of injuries can a chiropractor treat after a car accident?",
    answer:
      "We treat whiplash, cervical and lumbar spinal misalignment, soft tissue injuries (muscle strains, ligament sprains), disc herniations and bulges, nerve compression, headaches and migraines from cervical trauma, shoulder and upper back injuries, and sciatica caused by impact. Our comprehensive approach includes chiropractic adjustments, corrective exercises, and the MaxLiving 5 Essentials for complete recovery.",
  },
  {
    question: "Does auto insurance or PIP cover chiropractic care after an accident?",
    answer:
      "In Texas, Personal Injury Protection (PIP) coverage is optional but, if you have it, typically covers chiropractic care after an auto accident. Many auto insurance policies include medical payment coverage that also applies. We recommend calling our office at (817) 962-0182 so our team can help you understand your coverage options. We work with many insurance providers to make your care as affordable as possible.",
  },
  {
    question: "How soon after a car accident should I see a chiropractor?",
    answer:
      "We recommend being evaluated within 72 hours of your accident. Early intervention significantly improves outcomes and reduces the risk of chronic complications. We offer same-day appointments when available. Delaying care can allow injuries to worsen and may complicate insurance claims. Call (817) 962-0182 to schedule your post-accident evaluation.",
  },
  {
    question: "How long does recovery take after a car accident?",
    answer:
      "Recovery time varies depending on the severity of your injuries, your overall health, and how quickly you begin treatment. Mild whiplash may resolve in 4-6 weeks. More significant spinal injuries or disc herniations may require 3-6 months of corrective care. Your doctor will create a personalized recovery plan based on your X-rays, nerve scans, and examination findings.",
  },
];

export default function AutoAccidentPage() {
  return (
    <>
      <PageHero
        variant="dark"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/#services" },
          { label: "Auto Accident Chiropractic" },
        ]}
        eyebrow="AUTO ACCIDENT CHIROPRACTOR"
        eyebrowColor="orange"
        titleSmall="Auto accident chiropractor"
        titleLarge="in Arlington, TX."
        titleLargeColor="orange"
        subtitle="Car accident injuries need immediate attention. Our doctors specialize in diagnosing and treating crash-related spinal injuries — before they become chronic."
      >
        <div className="mt-7 flex gap-3 flex-wrap">
          <Link href="/schedule" className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-white rounded-[16px] font-bold text-[1.05rem] hover:opacity-90 transition-all">
            Schedule Post-Accident Exam &rarr;
          </Link>
          <a href="tel:8179620182" className="inline-flex items-center gap-2 px-10 py-4 border-2 border-white/40 text-white rounded-[16px] font-bold text-[1.05rem] hover:bg-white/10 transition-all">
            Call (817) 962-0182
          </a>
        </div>
      </PageHero>

      {/* WHY CHIRO AFTER ACCIDENT */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
              <div>
                <span className="eyebrow text-accent">AFTER A CAR ACCIDENT</span>
                <h2 className="mb-5">
                  <span className="block text-[clamp(24px,2.5vw,36px)] font-normal">Why see a chiropractor</span>
                  <span className="block text-[clamp(30px,3.5vw,48px)] font-black">after an auto accident?</span>
                </h2>
                <div className="space-y-4 text-text-muted leading-relaxed">
                  <p>
                    Even a low-speed collision generates enormous force on your spine. The sudden deceleration can push vertebrae out of alignment, strain muscles and ligaments, herniate discs, and compress nerves &mdash; all without breaking a single bone. This is why emergency rooms often clear you with &ldquo;nothing broken&rdquo; while you still have significant spinal injuries that X-rays of the extremities don&apos;t show.
                  </p>
                  <p>
                    At Vitality Family Chiropractic in Arlington, TX, we specialize in identifying and treating the hidden injuries that car accidents cause. Our comprehensive evaluation includes spinal X-rays, sEMG nerve scans, posture analysis, and orthopedic testing to uncover misalignments and nerve interference that may not be obvious yet.
                  </p>
                  <p>
                    Early treatment means faster recovery, less chronic pain, and better long-term outcomes. We see auto accident patients from Arlington, Mansfield, Grand Prairie, Fort Worth, and Kennedale.
                  </p>
                </div>
              </div>
              <div className="rounded-[18px] overflow-hidden shadow-[var(--shadow-card)] bg-gradient-to-br from-[#FDF0E8] to-linen min-h-[400px] flex items-center justify-center text-text-muted text-center p-6">
                Auto accident injury — patient receiving chiropractic evaluation
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* COMMON INJURIES */}
      <ScrollReveal>
        <section className="py-20 bg-linen">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <span className="eyebrow text-accent">COMMON AUTO ACCIDENT INJURIES</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(28px,3vw,40px)]">What injuries do car accidents </span>
              <span className="font-black text-[clamp(36px,4vw,52px)]">commonly cause?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Whiplash", desc: "Rapid back-and-forth neck movement strains cervical muscles, ligaments, and misaligns vertebrae." },
                { title: "Herniated Discs", desc: "Impact force can push spinal discs out of position, compressing nerves and causing radiating pain." },
                { title: "Spinal Misalignment", desc: "Even minor collisions can shift vertebrae, creating subluxations that interfere with nerve function." },
                { title: "Soft Tissue Damage", desc: "Muscle strains, ligament sprains, and inflammation throughout the back, neck, and shoulders." },
                { title: "Sciatica", desc: "Lower back impact can compress the sciatic nerve, causing pain radiating down the legs." },
                { title: "Headaches & Migraines", desc: "Cervical trauma often triggers persistent headaches and migraines weeks after the accident." },
              ].map((injury) => (
                <div key={injury.title} className="bg-white rounded-[18px] p-7 shadow-[var(--shadow-card)] border-t-4 border-accent hover:-translate-y-1 transition-transform">
                  <h3 className="text-[0.95rem] font-extrabold mb-2">{injury.title}</h3>
                  <p className="text-[0.85rem] text-text-muted leading-relaxed">{injury.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* TREATMENT PROCESS */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <span className="eyebrow text-accent">OUR TREATMENT PROCESS</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(28px,3vw,40px)]">How do we treat </span>
              <span className="font-black text-[clamp(36px,4vw,52px)]">auto accident injuries?</span>
            </h2>
            <div className="max-w-[640px] space-y-8">
              {[
                { num: "01", title: "Immediate Evaluation", desc: "Digital X-rays, sEMG nerve scan, posture analysis, and orthopedic testing to identify all injuries — including hidden ones that may not be symptomatic yet." },
                { num: "02", title: "Acute Care Phase", desc: "Gentle chiropractic adjustments and soft tissue work to reduce inflammation, restore mobility, and begin the healing process." },
                { num: "03", title: "Corrective Recovery", desc: "Structured care plan with regular adjustments, corrective exercises, and milestone check-ins. Follow-up imaging to verify structural improvement." },
                { num: "04", title: "Maintenance & Prevention", desc: "Transition to wellness care to maintain spinal health and prevent future complications from accident-related injuries." },
              ].map((step) => (
                <div key={step.num} className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-black text-[1.1rem] flex-shrink-0">{step.num}</div>
                  <div>
                    <h3 className="text-base font-bold mb-1">{step.title}</h3>
                    <p className="text-[0.88rem] text-text-muted leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* URGENT CTA */}
      <ScrollReveal>
        <section className="py-20 bg-soft-teal">
          <div className="max-w-[640px] mx-auto px-5 text-center">
            <span className="eyebrow text-accent">ACT NOW</span>
            <h2 className="mb-5">
              <span className="font-normal text-[clamp(24px,2.5vw,36px)]">Were you in a </span>
              <span className="font-black text-[clamp(30px,3.5vw,44px)] text-accent">car accident?</span>
            </h2>
            <p className="text-text-muted mb-7">
              Don&apos;t wait for the pain to set in. Hidden injuries worsen over time. Our comprehensive post-accident exam includes X-rays, nerve scans, and your first adjustment for just $149.
            </p>
            <Link href="/schedule" className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-white rounded-[16px] font-bold text-[1.05rem] hover:bg-accent-dark transition-all">
              Book Same-Day Appointment &rarr;
            </Link>
            <p className="text-[0.82rem] text-text-muted mt-4">
              (817) 962-0182 &middot; 1106 W. Pioneer Parkway, Suite 300, Arlington, TX 76013
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <span className="eyebrow text-neutral">AUTO ACCIDENT FAQ</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(28px,3vw,40px)]">Your questions about </span>
              <span className="font-black text-[clamp(36px,4vw,52px)]">accident injuries.</span>
            </h2>
            <div className="max-w-[800px]">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ConversionCTA bgClass="bg-accent" headline="Don't wait. Get evaluated today." subtext="Same-day appointments available for auto accident injuries." />
    </>
  );
}
