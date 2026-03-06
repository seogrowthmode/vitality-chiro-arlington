import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import ConversionCTA from "@/components/ConversionCTA";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Chiropractic FAQ",
  description:
    "Frequently asked questions about chiropractic care at Vitality Family Chiropractic in Arlington TX. Costs, insurance, prenatal, pediatric, and more. Call (817) 962-0182.",
};

const generalFaq = [
  {
    question: "What should I expect at my first visit to Vitality Family Chiropractic?",
    answer:
      "Your first visit includes a one-on-one consultation with one of our doctors, a comprehensive chiropractic examination, digital spinal X-rays, an sEMG nerve scan to measure nervous system function, and a posture and range of motion analysis. After reviewing your results, your doctor will perform your first adjustment and discuss a personalized care plan tailored to your health goals. The entire visit typically takes about 45-60 minutes. We offer a new patient special of $149 for the complete exam package (normally $320). Call (817) 962-0182 to schedule.",
  },
  {
    question: "Who are the doctors at Vitality Family Chiropractic?",
    answer:
      "Our team includes three experienced doctors of chiropractic. Dr. Elise Hernandez is the founder and owner, a second-generation chiropractor and former Official Chiropractor for the Dallas Wings (WNBA), specializing in family, prenatal, and pediatric chiropractic. Dr. Mary Davis is a graduate of Texas Chiropractic College who specializes in prenatal chiropractic care. Dr. Chad London is a Certified Chiropractic Sports Practitioner (CCSP) and former professional rugby player who specializes in sports chiropractic, FAKTR soft tissue techniques, and athletic performance.",
  },
  {
    question: "What conditions can a chiropractor treat?",
    answer:
      "Our chiropractors in Arlington, TX treat a wide range of conditions including back pain, neck pain, headaches and migraines, sciatica, herniated discs, scoliosis, whiplash and auto accident injuries, sports injuries, carpal tunnel syndrome, shoulder pain, hip pain, and joint stiffness. We also provide care for pregnancy-related discomfort, pediatric concerns such as colic and ear infections, and general wellness optimization. Our approach focuses on finding and correcting the root cause rather than just masking symptoms.",
  },
  {
    question: "What is the difference between a chiropractor and a physical therapist?",
    answer:
      "Chiropractors and physical therapists both help with musculoskeletal conditions, but they take different approaches. Chiropractors focus on spinal alignment and nervous system function, using spinal adjustments to correct misalignments (subluxations) that interfere with nerve communication. Physical therapists focus primarily on restoring movement and function through exercises and manual therapy. At Vitality Family Chiropractic, our doctors combine chiropractic adjustments with corrective exercises, nutritional coaching, and the MaxLiving 5 Essentials for a whole-body approach to health.",
  },
];

const costInsuranceFaq = [
  {
    question: "How much does a chiropractor cost in Arlington, TX?",
    answer:
      "At Vitality Family Chiropractic, our new patient special is $149 for a comprehensive exam, consultation, digital X-rays, sEMG nerve scan, posture analysis, and your first adjustment (normally $320, saving you $171). Ongoing visit costs vary depending on your care plan, insurance coverage, and specific needs. We work with many insurance plans and offer affordable self-pay rates. Call (817) 962-0182 to discuss pricing and payment options.",
  },
  {
    question: "Do you accept insurance at your Arlington chiropractic office?",
    answer:
      "Vitality Family Chiropractic works with many major insurance plans. We recommend calling our office at (817) 962-0182 before your visit so our team can verify your specific coverage and explain any out-of-pocket costs. We also offer affordable self-pay options and our $149 new patient special for those without chiropractic coverage. Our goal is to make quality chiropractic care accessible to every family in Arlington, TX.",
  },
  {
    question: "Do I need a referral to see a chiropractor?",
    answer:
      "No. In the state of Texas, you do not need a referral from a medical doctor to see a chiropractor. You can call Vitality Family Chiropractic directly at (817) 962-0182 to schedule your first appointment. However, if your insurance plan requires a referral for coverage purposes, we recommend checking with your insurance provider before your visit.",
  },
];

const prenatalPediatricFaq = [
  {
    question: "Is chiropractic care safe during pregnancy?",
    answer:
      "Absolutely. Prenatal chiropractic care is safe and beneficial throughout all stages of pregnancy. Our doctors, Dr. Elise Hernandez and Dr. Mary Davis, are Webster technique certified and specialize in caring for expectant mothers. Chiropractic adjustments during pregnancy can help relieve back pain, pelvic discomfort, sciatica, and round ligament pain while supporting optimal fetal positioning. Many OB-GYNs and midwives in the Arlington, TX area recommend chiropractic care during pregnancy.",
  },
  {
    question: "Is chiropractic care safe for babies and children?",
    answer:
      "Yes. Pediatric chiropractic care uses extremely gentle, age-appropriate techniques that are safe for infants, toddlers, children, and teens. The amount of pressure used on a newborn is similar to what you would use to test the ripeness of a tomato. Our doctors at Vitality Family Chiropractic in Arlington, TX have years of experience caring for children from birth onward. Pediatric adjustments can help with colic, ear infections, growing pains, sleep difficulties, and sports injuries.",
  },
];

const servicesWellnessFaq = [
  {
    question: "What is the MaxLiving 5 Essentials approach?",
    answer:
      "The MaxLiving 5 Essentials is a comprehensive wellness framework that addresses five key pillars of health: (1) Core Chiropractic — maintaining a healthy spine and nervous system through regular adjustments, (2) Nutrition — fueling your body with whole, nutrient-dense foods, (3) Oxygen and Exercise — staying active with purposeful movement, (4) Mindset — managing stress and maintaining a positive mental outlook, and (5) Minimizing Toxins — reducing exposure to harmful chemicals and environmental toxins. At Vitality Family Chiropractic, we guide patients through all five essentials for lasting, whole-body health.",
  },
  {
    question: "What is an sEMG nerve scan?",
    answer:
      "An sEMG (surface electromyography) nerve scan is a painless, non-invasive diagnostic tool that measures the electrical activity of the muscles along your spine. This technology objectively shows how well your nervous system is communicating with your body and identifies areas of nerve interference caused by spinal misalignments. The scan takes just a few minutes and provides a color-coded report that makes it easy to understand your results. We include sEMG nerve scans in every new patient exam at our Arlington, TX office.",
  },
  {
    question: "How often should I see a chiropractor?",
    answer:
      "The frequency of chiropractic visits depends on your individual condition, health goals, and stage of care. During the initial corrective phase, patients may be seen 2-3 times per week to address acute issues and begin spinal correction. As your spine stabilizes and symptoms improve, visit frequency decreases. Many patients transition to wellness care visits of 1-4 times per month to maintain spinal health and prevent future problems.",
  },
];

const logisticsFaq = [
  {
    question: "What are your office hours?",
    answer:
      "Our office hours are: Monday 7:30 AM - 10:30 AM and 3:00 PM - 6:00 PM, Tuesday 11:00 AM - 2:00 PM, Wednesday 7:30 AM - 10:30 AM and 3:00 PM - 6:00 PM, Thursday 3:00 PM - 6:00 PM, Friday 7:00 AM - 10:00 AM, and Saturday 8:00 AM - 9:30 AM (1st and 3rd Saturday of each month only). We are closed on Sundays. We offer morning and afternoon appointments to accommodate busy family schedules. Call (817) 962-0182 to find a time that works for you.",
  },
  {
    question: "What areas do you serve besides Arlington, TX?",
    answer:
      "Vitality Family Chiropractic is located at 1106 W. Pioneer Parkway, Suite 300, in Arlington, TX 76013. In addition to Arlington, we serve patients from Mansfield, Grand Prairie, Fort Worth, Kennedale, Pantego, Dalworthington Gardens, and surrounding communities throughout the DFW metroplex. Our central location makes it easy to reach us from anywhere in the mid-cities area.",
  },
  {
    question: "Do you offer care in Spanish?",
    answer:
      "Yes. Vitality Family Chiropractic has bilingual staff who provide care and communication in both English and Spanish. We are proud to serve Arlington's diverse community and want every patient to feel comfortable and understood during their visits. Call (817) 962-0182 to schedule — se habla espanol.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    ...generalFaq,
    ...costInsuranceFaq,
    ...prenatalPediatricFaq,
    ...servicesWellnessFaq,
    ...logisticsFaq,
  ].map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        variant="dark"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        eyebrowColor="teal"
        titleSmall="Your questions,"
        titleLarge="answered."
        subtitle="Everything you need to know about chiropractic care at Vitality Family Chiropractic in Arlington, TX."
      />

      {/* GENERAL */}
      <ScrollReveal>
        <section className="py-16 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <span className="eyebrow text-primary">GENERAL QUESTIONS</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(24px,2.5vw,36px)]">About </span>
              <span className="font-black text-[clamp(30px,3.5vw,44px)]">our practice.</span>
            </h2>
            <div className="max-w-[800px]">
              <FAQAccordion items={generalFaq} />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* COST & INSURANCE */}
      <ScrollReveal>
        <section className="py-16 bg-linen">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <span className="eyebrow text-accent">COSTS & INSURANCE</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(24px,2.5vw,36px)]">Pricing and </span>
              <span className="font-black text-[clamp(30px,3.5vw,44px)]">insurance questions.</span>
            </h2>
            <div className="max-w-[800px]">
              <FAQAccordion items={costInsuranceFaq} />
            </div>

            <div className="mt-10 bg-white rounded-[18px] p-8 shadow-[var(--shadow-card)] border-t-4 border-accent max-w-[800px]">
              <div className="text-center">
                <div className="text-[clamp(36px,4vw,52px)] font-black text-accent leading-none mb-1">$149</div>
                <p className="text-neutral line-through text-[0.95rem] mb-2">Normally $320</p>
                <p className="text-primary font-bold mb-3">You save $171.</p>
                <p className="text-[0.88rem] text-text-muted mb-5">
                  Includes: Consultation &middot; Exam &middot; X-Rays &middot; sEMG Nerve Scan &middot; First Adjustment
                </p>
                <Link href="/schedule" className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-[16px] font-bold hover:bg-primary-dark transition-all">
                  Book Your $149 Exam &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* PRENATAL & PEDIATRIC */}
      <ScrollReveal>
        <section className="py-16 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <span className="eyebrow text-sage">PRENATAL & PEDIATRIC</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(24px,2.5vw,36px)]">Pregnancy and </span>
              <span className="font-black text-[clamp(30px,3.5vw,44px)]">children&apos;s care.</span>
            </h2>
            <div className="max-w-[800px]">
              <FAQAccordion items={prenatalPediatricFaq} />
            </div>
            <div className="mt-8 flex gap-4 flex-wrap">
              <Link href="/prenatal-chiropractic-arlington-tx" className="text-sage font-bold text-[0.88rem] hover:underline">
                Prenatal Chiropractic &rarr;
              </Link>
              <Link href="/pediatric-chiropractor-arlington-tx" className="text-sage font-bold text-[0.88rem] hover:underline">
                Pediatric Chiropractic &rarr;
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SERVICES & WELLNESS */}
      <ScrollReveal>
        <section className="py-16 bg-linen">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <span className="eyebrow text-primary">SERVICES & WELLNESS</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(24px,2.5vw,36px)]">Our approach </span>
              <span className="font-black text-[clamp(30px,3.5vw,44px)]">and services.</span>
            </h2>
            <div className="max-w-[800px]">
              <FAQAccordion items={servicesWellnessFaq} />
            </div>
            <div className="mt-8 flex gap-4 flex-wrap">
              <Link href="/maxliving-5-essentials-arlington-tx" className="text-primary font-bold text-[0.88rem] hover:underline">
                MaxLiving 5 Essentials &rarr;
              </Link>
              <Link href="/chiropractic-adjustments-arlington-tx" className="text-primary font-bold text-[0.88rem] hover:underline">
                Chiropractic Adjustments &rarr;
              </Link>
              <Link href="/sports-chiropractor-arlington-tx" className="text-primary font-bold text-[0.88rem] hover:underline">
                Sports Chiropractic &rarr;
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* LOGISTICS */}
      <ScrollReveal>
        <section className="py-16 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <span className="eyebrow text-neutral">HOURS, LOCATION & LANGUAGE</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(24px,2.5vw,36px)]">Visiting </span>
              <span className="font-black text-[clamp(30px,3.5vw,44px)]">our office.</span>
            </h2>
            <div className="max-w-[800px]">
              <FAQAccordion items={logisticsFaq} />
            </div>
            <div className="mt-8">
              <Link href="/contact" className="text-primary font-bold text-[0.88rem] hover:underline">
                Contact & Directions &rarr;
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* STILL HAVE QUESTIONS */}
      <ScrollReveal>
        <section className="py-16 bg-soft-teal">
          <div className="max-w-[640px] mx-auto px-5 text-center">
            <h2 className="mb-5">
              <span className="font-normal text-[clamp(24px,2.5vw,36px)]">Still have </span>
              <span className="font-black text-[clamp(30px,3.5vw,44px)]">questions?</span>
            </h2>
            <p className="text-text-muted mb-7">
              Our friendly team is happy to answer any questions you have. Give us a call or schedule online and we&apos;ll take care of the rest.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="tel:8179620182" className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-[16px] font-bold text-[1.05rem] hover:bg-primary-dark transition-all">
                Call (817) 962-0182
              </a>
              <Link href="/schedule" className="inline-flex items-center gap-2 px-10 py-4 border-2 border-primary text-primary rounded-[16px] font-bold text-[1.05rem] hover:bg-primary hover:text-white transition-all">
                Schedule Online &rarr;
              </Link>
            </div>
            <p className="text-[0.82rem] text-text-muted mt-4">
              Se Habla Espa&ntilde;ol &middot; 1106 W. Pioneer Parkway, Suite 300, Arlington, TX 76013
            </p>
          </div>
        </section>
      </ScrollReveal>

      <ConversionCTA headline="Ready to experience the difference?" subtext='Book your <span class="text-accent">$149</span> new patient exam today.' />
    </>
  );
}
