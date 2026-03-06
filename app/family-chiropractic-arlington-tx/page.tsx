import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import ConversionCTA from "@/components/ConversionCTA";
import FAQAccordion from "@/components/FAQAccordion";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Family Chiropractic Care Arlington TX",
  description:
    "Family chiropractic care in Arlington TX. Three doctors serving newborns to grandparents. Prenatal, pediatric, sports, and wellness chiropractic. Bilingual. Call (817) 962-0182.",
};

const faqItems = [
  {
    question: "Can my whole family see a chiropractor at the same practice?",
    answer:
      "Absolutely. Vitality Family Chiropractic is designed to serve your entire family under one roof. We have three doctors with complementary specialties: Dr. Elise Hernandez and Dr. Mary Davis specialize in prenatal and pediatric care, while Dr. Chad London focuses on sports and performance chiropractic. We see patients from 2-day-old newborns to seniors in their 80s. Many Arlington families bring their entire household to the same appointments.",
  },
  {
    question: "How young can a child start seeing a chiropractor?",
    answer:
      "Children can be adjusted from birth. Dr. Elise has adjusted infants as young as 2 days old. Pediatric adjustments use extremely gentle, age-appropriate techniques — the pressure is similar to what you would use to check the ripeness of a tomato. Early chiropractic care can help with colic, ear infections, sleep difficulties, latching issues, and developmental milestones.",
  },
  {
    question: "What is the MaxLiving 5 Essentials approach to family wellness?",
    answer:
      "The MaxLiving 5 Essentials framework addresses five pillars of health: Core Chiropractic (spinal alignment and nervous system function), Nutrition (personalized plans with our Metabolix Specialist Katy Moore), Exercise (corrective and wellness movements), Mindset (stress management), and Minimizing Toxins (detox protocols). This whole-body approach means we treat the entire family — not just their spines.",
  },
  {
    question: "Do you offer bilingual care for Spanish-speaking families?",
    answer:
      "Yes. Vitality Family Chiropractic has bilingual staff who provide care and communication in both English and Spanish. We serve Arlington's diverse community and want every family member to feel comfortable and understood. Se habla espanol. Call (817) 962-0182 to schedule.",
  },
  {
    question: "How often should a family come in for chiropractic wellness care?",
    answer:
      "Wellness care frequency depends on each family member's individual needs. After completing corrective care, most patients transition to maintenance visits of 1-4 times per month. Children and adults who are proactive about their spinal health often choose regular check-ups similar to dental visits. Your doctor will recommend a personalized schedule for each family member.",
  },
];

export default function FamilyChiropracticPage() {
  return (
    <>
      <PageHero
        variant="teal-soft"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/#services" },
          { label: "Family Chiropractic" },
        ]}
        eyebrow="FAMILY CHIROPRACTIC IN ARLINGTON"
        eyebrowColor="teal"
        titleSmall="Family chiropractic care"
        titleLarge="in Arlington, TX."
        subtitle="Three doctors. Every age. Your whole family's health — under one roof."
      >
        <div className="mt-7 flex gap-3 flex-wrap">
          <Link href="/schedule" className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-[16px] font-bold text-[1.05rem] hover:bg-primary-dark transition-all">
            Book Your Family&apos;s $149 Exam &rarr;
          </Link>
          <a href="tel:8179620182" className="inline-flex items-center gap-2 px-10 py-4 border-2 border-primary/40 text-primary rounded-[16px] font-bold text-[1.05rem] hover:bg-primary/10 transition-all">
            Call (817) 962-0182
          </a>
        </div>
      </PageHero>

      {/* WHY FAMILY CHIRO */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
              <div>
                <span className="eyebrow text-primary">WHOLE-FAMILY WELLNESS</span>
                <h2 className="mb-5">
                  <span className="block text-[clamp(24px,2.5vw,36px)] font-normal">Why do families choose</span>
                  <span className="block text-[clamp(30px,3.5vw,48px)] font-black">Vitality Family Chiropractic?</span>
                </h2>
                <div className="space-y-4 text-text-muted leading-relaxed">
                  <p>
                    Because health is a family affair. When one family member starts chiropractic care and experiences the benefits &mdash; better sleep, less pain, more energy &mdash; the rest of the family naturally follows. At Vitality Family Chiropractic in Arlington, TX, we are built to serve every member of your household.
                  </p>
                  <p>
                    Founded in April 2017 by Dr. Elise Hernandez, a second-generation chiropractor, Vitality has grown into one of the largest family wellness practices in Texas. Our team of three doctors and dedicated support staff delivers personalized corrective chiropractic care guided by the MaxLiving 5 Essentials framework.
                  </p>
                  <p>
                    With bilingual staff (English and Spanish), Saturday hours on the 1st and 3rd Saturday of each month, and split-shift scheduling to accommodate busy families, we make it easy to prioritize your family&apos;s health.
                  </p>
                </div>
              </div>
              <div className="rounded-[18px] overflow-hidden shadow-[var(--shadow-card)] bg-gradient-to-br from-soft-teal to-linen min-h-[400px] flex items-center justify-center text-text-muted text-center p-6">
                Family — parents with children — in chiropractic wellness setting
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CARE FOR EVERY AGE */}
      <ScrollReveal>
        <section className="py-20 bg-linen">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <span className="eyebrow text-primary">CARE FOR EVERY AGE</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(28px,3vw,40px)]">Who do we </span>
              <span className="font-black text-[clamp(36px,4vw,52px)]">care for?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { title: "Newborns & Infants", desc: "Gentle adjustments for colic, reflux, latching issues, and healthy development.", color: "bg-primary", href: "/pediatric-chiropractor-arlington-tx" },
                { title: "Pregnant Moms", desc: "Webster-certified prenatal care for safer, more comfortable pregnancies.", color: "bg-sage", href: "/prenatal-chiropractic-arlington-tx" },
                { title: "Athletes", desc: "Sports chiropractic with CCSP and FAKTR-certified Dr. Chad London.", color: "bg-accent", href: "/sports-chiropractor-arlington-tx" },
                { title: "Adults & Seniors", desc: "Corrective and wellness care for pain relief, mobility, and long-term health.", color: "bg-neutral", href: "/chiropractic-adjustments-arlington-tx" },
              ].map((card) => (
                <Link key={card.title} href={card.href} className={`${card.color} p-9 rounded-[18px] text-white text-center transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[var(--shadow-card-lg)]`}>
                  <h3 className="text-[1.15rem] font-extrabold mb-2">{card.title}</h3>
                  <p className="text-[0.82rem] opacity-90 leading-snug">{card.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* YOUR DOCTORS */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <span className="eyebrow text-primary">THREE DOCTORS. THREE SPECIALTIES.</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(28px,3vw,40px)]">Your family&apos;s </span>
              <span className="font-black text-[clamp(36px,4vw,52px)]">care team.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Dr. Elise Hernandez, D.C.", role: "Founder, Prenatal & Pediatric Specialist", desc: "Second-generation chiropractor. Former WNBA Dallas Wings chiropractor. Webster certified.", color: "border-primary" },
                { name: "Dr. Mary Davis, D.C.", role: "Prenatal Specialist", desc: "Texas Chiropractic College graduate. Specializes in pregnancy chiropractic care and education.", color: "border-sage" },
                { name: "Dr. Chad London, D.C., CCSP", role: "Sports & Performance Specialist", desc: "Former pro rugby player. CCSP and FAKTR certified. Palmer College graduate.", color: "border-accent" },
              ].map((doc) => (
                <div key={doc.name} className={`bg-white rounded-[18px] p-8 shadow-[var(--shadow-card)] border-t-4 ${doc.color} hover:-translate-y-1 transition-transform`}>
                  <h3 className="text-[1rem] font-extrabold mb-1">{doc.name}</h3>
                  <p className="text-[0.78rem] font-bold uppercase tracking-[0.08em] text-primary mb-2">{doc.role}</p>
                  <p className="text-[0.85rem] text-text-muted leading-relaxed">{doc.desc}</p>
                  <Link href="/team" className="text-primary font-bold text-[0.85rem] mt-3 inline-block">Full Bio &rarr;</Link>
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
            <span className="eyebrow text-neutral">FAMILY CHIROPRACTIC FAQ</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(28px,3vw,40px)]">Your questions about </span>
              <span className="font-black text-[clamp(36px,4vw,52px)]">family care.</span>
            </h2>
            <div className="max-w-[800px]">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ConversionCTA headline="Your family's vitality starts here." subtext='Book your <span class="text-accent">$149</span> exam. Newborns to grandparents &mdash; everyone is welcome.' />
    </>
  );
}
