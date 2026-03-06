import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import ConversionCTA from "@/components/ConversionCTA";
import FAQAccordion from "@/components/FAQAccordion";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Sports Chiropractor Arlington TX",
  description:
    "Sports chiropractor in Arlington TX. Dr. Chad London — CCSP-certified, former pro rugby player. FAKTR soft tissue techniques. Athletic performance and injury recovery. Call (817) 962-0182.",
};

const faqItems = [
  {
    question: "What makes a sports chiropractor different from a regular chiropractor?",
    answer:
      "A sports chiropractor has advanced training in treating athletic injuries and optimizing physical performance. Dr. Chad London holds a Certified Chiropractic Sports Practitioner (CCSP) credential and uses specialized techniques like FAKTR for soft tissue injuries. His background as a former professional rugby player with the Dallas Jackals gives him firsthand understanding of athletic demands and recovery.",
  },
  {
    question: "Can chiropractic care actually improve athletic performance?",
    answer:
      "Yes. Research shows that chiropractic adjustments can improve range of motion, reaction time, and overall biomechanical efficiency. When your spine is properly aligned, your nervous system communicates more effectively with your muscles and joints. Many professional athletes — including teams in the NFL, NBA, and WNBA — use chiropractic care as part of their performance optimization. Dr. Elise Hernandez was the former Official Chiropractor for the Dallas Wings (WNBA).",
  },
  {
    question: "What sports injuries do you treat at Vitality Family Chiropractic?",
    answer:
      "We treat a wide range of sports injuries including muscle strains, ligament sprains, tendonitis, rotator cuff injuries, IT band syndrome, runner's knee, hamstring pulls, shin splints, plantar fasciitis, and spinal injuries. Dr. London uses FAKTR soft tissue techniques combined with chiropractic adjustments and corrective exercises for comprehensive recovery.",
  },
  {
    question: "How soon after an injury should I see a sports chiropractor?",
    answer:
      "The sooner the better. Early intervention can significantly reduce recovery time and prevent compensatory injuries. We offer same-day appointments when available. Call our Arlington office at (817) 962-0182 to get in quickly after an injury.",
  },
  {
    question: "Do you work with youth athletes and high school sports teams?",
    answer:
      "Absolutely. We work with athletes of all ages, from youth sports participants to high school varsity players to adult recreational athletes and professionals. Younger athletes benefit from chiropractic care for injury prevention, growth-related issues, and performance development. Our $149 new patient exam is a great starting point for any athlete.",
  },
];

export default function SportsChiropractorPage() {
  return (
    <>
      <PageHero
        variant="dark"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/#services" },
          { label: "Sports Chiropractic" },
        ]}
        eyebrow="SPORTS CHIROPRACTOR IN ARLINGTON"
        eyebrowColor="orange"
        titleSmall="Sports chiropractor"
        titleLarge="in Arlington, TX."
        titleLargeColor="orange"
        subtitle="CCSP-certified Dr. Chad London — former professional rugby player — delivers sports chiropractic care for athletes at every level."
      >
        <div className="mt-7 flex gap-3 flex-wrap">
          <Link href="/schedule" className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-white rounded-[16px] font-bold text-[1.05rem] hover:opacity-90 transition-all">
            Book a Sports Assessment &rarr;
          </Link>
          <a href="tel:8179620182" className="inline-flex items-center gap-2 px-10 py-4 border-2 border-white/40 text-white rounded-[16px] font-bold text-[1.05rem] hover:bg-white/10 transition-all">
            Call (817) 962-0182
          </a>
        </div>
      </PageHero>

      {/* DR. LONDON */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
              <div>
                <span className="eyebrow text-accent">YOUR SPORTS CHIROPRACTOR</span>
                <h2 className="mb-5">
                  <span className="block text-[clamp(24px,2.5vw,36px)] font-normal">Who is</span>
                  <span className="block text-[clamp(30px,3.5vw,48px)] font-black">Dr. Chad London?</span>
                </h2>
                <div className="space-y-4 text-text-muted leading-relaxed">
                  <p>
                    Dr. Chad London is originally from Johannesburg, South Africa. He played professional rugby for six years with the Dallas Jackals before earning his Doctor of Chiropractic from Palmer College of Chiropractic in Davenport, Iowa. He holds certifications as a Chiropractic Sports Practitioner (CCSP), Webster Technique, and FAKTR (Functional and Kinetic Treatment with Rehab).
                  </p>
                  <p>
                    After working in a Denver clinic for six years, Dr. London joined Vitality Family Chiropractic in September 2020. His unique combination of professional athletic experience and advanced sports chiropractic training makes him one of the most qualified sports chiropractors in the Arlington, TX area.
                  </p>
                  <p className="text-accent font-semibold">
                    Dr. Elise Hernandez also brings elite sports experience as the former Official Chiropractor for the Dallas Wings (WNBA).
                  </p>
                </div>
              </div>
              <div className="rounded-[18px] overflow-hidden shadow-[var(--shadow-card)] relative min-h-[400px]">
                <Image src="/images/services/chiropractic-adjustments-clinic-treatment-1.webp" alt="Sports chiropractic treatment at Vitality Family Chiropractic — Dr. Chad London, CCSP-certified sports chiropractor in Arlington, TX" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* WHAT WE TREAT */}
      <ScrollReveal>
        <section className="py-20 bg-linen">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <span className="eyebrow text-accent">SPORTS INJURIES WE TREAT</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(28px,3vw,40px)]">What sports injuries </span>
              <span className="font-black text-[clamp(36px,4vw,52px)]">do we treat?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Muscle strains and sprains",
                "Rotator cuff injuries",
                "IT band syndrome",
                "Hamstring and quad pulls",
                "Runner's knee / patellofemoral pain",
                "Tennis and golfer's elbow",
                "Shin splints",
                "Plantar fasciitis",
                "Spinal disc injuries",
              ].map((injury) => (
                <div key={injury} className="flex gap-2.5 items-center bg-white rounded-[14px] p-5 shadow-[var(--shadow-card)]">
                  <CheckIcon className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-[0.9rem] font-semibold">{injury}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* APPROACH */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <span className="eyebrow text-accent">OUR APPROACH</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(28px,3vw,40px)]">How does sports chiropractic </span>
              <span className="font-black text-[clamp(36px,4vw,52px)]">help athletes?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Injury Recovery",
                  desc: "Targeted spinal adjustments and FAKTR soft tissue work to speed healing, reduce inflammation, and restore full range of motion after injury.",
                  color: "border-accent",
                },
                {
                  title: "Performance Optimization",
                  desc: "When your spine is aligned and your nervous system is clear, your body moves more efficiently. Improved biomechanics mean faster reaction times and better coordination.",
                  color: "border-primary",
                },
                {
                  title: "Injury Prevention",
                  desc: "Regular chiropractic maintenance keeps your musculoskeletal system balanced and resilient. Corrective exercises strengthen weak areas before they become injuries.",
                  color: "border-sage",
                },
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

      {/* CREDENTIALS */}
      <ScrollReveal>
        <section className="py-20 bg-soft-teal">
          <div className="max-w-[640px] mx-auto px-5 text-center">
            <span className="eyebrow text-accent">CREDENTIALS</span>
            <h2 className="mb-7">
              <span className="font-normal text-[clamp(24px,2.5vw,36px)]">Why trust </span>
              <span className="font-black text-[clamp(30px,3.5vw,44px)]">our sports team?</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["CCSP Certified", "FAKTR Certified", "Webster Certified", "Palmer College Graduate", "Former Dallas Jackals", "Former WNBA Team Doctor"].map((b) => (
                <span key={b} className="px-4 py-2 rounded-full text-[0.78rem] font-bold text-accent border-[1.5px] border-accent bg-white">
                  {b}
                </span>
              ))}
            </div>
            <Link href="/schedule" className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-white rounded-[16px] font-bold text-[1.05rem] hover:bg-accent-dark transition-all">
              Book Your $149 Sports Exam &rarr;
            </Link>
            <p className="text-[0.82rem] text-text-muted mt-4">(817) 962-0182 &middot; Same-Day Appointments Available</p>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <span className="eyebrow text-neutral">SPORTS CHIROPRACTIC FAQ</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(28px,3vw,40px)]">Your questions about </span>
              <span className="font-black text-[clamp(36px,4vw,52px)]">sports chiropractic.</span>
            </h2>
            <div className="max-w-[800px]">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ConversionCTA bgClass="bg-accent" headline="Train harder. Recover faster." subtext="Book your $149 sports chiropractic assessment with Dr. London." />
    </>
  );
}
