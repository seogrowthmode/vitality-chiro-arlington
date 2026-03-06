import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import ConversionCTA from "@/components/ConversionCTA";
import FAQAccordion from "@/components/FAQAccordion";
import { SpineIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "MaxLiving 5 Essentials Arlington TX",
  description:
    "MaxLiving 5 Essentials chiropractor in Arlington TX. A whole-body approach to health: chiropractic, nutrition, exercise, mindset, and toxin reduction. Call (817) 962-0182.",
};

const faqItems = [
  {
    question: "What is the MaxLiving 5 Essentials approach?",
    answer:
      "The MaxLiving 5 Essentials is a comprehensive wellness framework used by over 400 health centers worldwide. It addresses five pillars of health: (1) Core Chiropractic — maintaining a healthy spine and nervous system, (2) Nutrition — fueling your body with whole, nutrient-dense foods, (3) Oxygen and Exercise — purposeful movement and breathing, (4) Mindset — stress management and positive mental health, and (5) Minimizing Toxins — reducing exposure to harmful chemicals. Vitality Family Chiropractic has been a MaxLiving affiliate since its founding in 2017.",
  },
  {
    question: "How is a MaxLiving chiropractor different from other chiropractors?",
    answer:
      "Most chiropractors focus exclusively on spinal adjustments. A MaxLiving chiropractor addresses your entire health picture. At Vitality Family Chiropractic, your care plan may include chiropractic adjustments, personalized nutrition coaching with our Metabolix Specialist Katy Moore, corrective exercises, stress management strategies, and guided detox protocols. This whole-body approach produces better results because it treats the cause, not just the symptoms.",
  },
  {
    question: "Do I need to follow all 5 Essentials to benefit?",
    answer:
      "No. You can start with chiropractic care and add other essentials as you're ready. Many patients begin with adjustments and gradually incorporate nutrition coaching, exercise programs, and toxin reduction as they see results. Your doctor will guide you through each essential at your own pace. Even small improvements in one area often create positive momentum in the others.",
  },
  {
    question: "What does the nutrition component include?",
    answer:
      "Our Metabolix Specialist, Katy Moore, provides one-on-one nutritional coaching and group nutrition classes. She uses Genova labs for advanced metabolic testing to identify food sensitivities, nutritional deficiencies, and metabolic imbalances. Your personalized nutrition plan follows MaxLiving protocols and includes dietary guidance, supplementation recommendations, and ongoing support.",
  },
  {
    question: "Is MaxLiving care covered by insurance?",
    answer:
      "Chiropractic adjustments within your MaxLiving care plan are typically covered by insurance. Nutritional coaching, metabolic testing, and other wellness services may have separate coverage. Call our office at (817) 962-0182 so our team can verify your specific benefits. We also offer affordable self-pay options for services not covered by insurance.",
  },
];

export default function MaxLiving5EssentialsPage() {
  return (
    <>
      <PageHero
        variant="dark"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/#services" },
          { label: "MaxLiving 5 Essentials" },
        ]}
        eyebrow="THE MAXLIVING DIFFERENCE"
        eyebrowColor="sage"
        titleSmall="The MaxLiving 5 Essentials"
        titleLarge="in Arlington, TX."
        titleLargeColor="sage"
        subtitle="More than adjustments. A complete framework for your family's health — chiropractic, nutrition, exercise, mindset, and toxin reduction."
      />

      {/* OVERVIEW */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
              <div>
                <span className="eyebrow text-sage">A WHOLE-BODY APPROACH</span>
                <h2 className="mb-5">
                  <span className="block text-[clamp(24px,2.5vw,36px)] font-normal">What makes MaxLiving</span>
                  <span className="block text-[clamp(30px,3.5vw,48px)] font-black">different?</span>
                </h2>
                <div className="space-y-4 text-text-muted leading-relaxed">
                  <p>
                    Most chiropractic offices adjust your spine and send you home. At Vitality Family Chiropractic, we follow the MaxLiving 5 Essentials framework &mdash; a comprehensive approach to health that goes far beyond spinal adjustments. Founded in April 2017 by Dr. Elise Hernandez, our practice was built on the principle that true health requires addressing the whole person.
                  </p>
                  <p>
                    The 5 Essentials framework is used by over 400 MaxLiving health centers worldwide. It is the same approach that has made Vitality one of the largest family wellness practices in Texas, with three doctors, a dedicated Metabolix Specialist, and bilingual support staff serving families across the Arlington area.
                  </p>
                </div>
              </div>
              <div className="rounded-[18px] overflow-hidden shadow-[var(--shadow-card)] relative min-h-[380px]">
                <Image src="/images/cta/wellness-lifestyle-clinic.webp" alt="MaxLiving 5 Essentials — whole-health wellness approach at Vitality Family Chiropractic in Arlington, TX" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* THE 5 ESSENTIALS */}
      <ScrollReveal>
        <section className="py-20 bg-linen">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <span className="eyebrow text-sage">THE FIVE ESSENTIALS</span>
            <h2 className="mb-12 text-center">
              <span className="font-normal text-[clamp(28px,3vw,40px)]">Five essentials. </span>
              <span className="font-black text-[clamp(36px,4vw,52px)]">One vital life.</span>
            </h2>

            <div className="space-y-10 max-w-[900px] mx-auto">
              {[
                {
                  num: "1",
                  title: "Core Chiropractic",
                  color: "bg-primary",
                  borderColor: "border-primary",
                  desc: "Your spine protects your nervous system — the master control system of your entire body. When vertebrae are misaligned (subluxated), nerve signals are disrupted, affecting everything from organ function to immune response. Our doctors use advanced spinal correction protocols, digital X-rays, and sEMG nerve scans to restore and maintain proper spinal alignment.",
                  link: "/chiropractic-adjustments-arlington-tx",
                  linkText: "Chiropractic Adjustments",
                },
                {
                  num: "2",
                  title: "Nutrition",
                  color: "bg-sage",
                  borderColor: "border-sage",
                  desc: "Food is either fuel or poison. Our Metabolix Specialist, Katy Moore, provides personalized nutritional coaching using Genova labs metabolic testing, MaxLiving nutrition plans, and one-on-one guidance. She helps patients identify food sensitivities, correct nutritional deficiencies, and build sustainable eating habits that support healing and long-term wellness.",
                  link: "/#services",
                  linkText: "Nutritional Coaching",
                },
                {
                  num: "3",
                  title: "Oxygen & Exercise",
                  color: "bg-accent",
                  borderColor: "border-accent",
                  desc: "Your body was designed to move. We prescribe customized corrective exercise programs that complement your chiropractic adjustments — strengthening supporting muscles, improving flexibility, and maintaining spinal correction between visits. From simple at-home routines to advanced rehabilitation protocols, movement is medicine.",
                  link: "/#services",
                  linkText: "Corrective Exercises",
                },
                {
                  num: "4",
                  title: "Mindset",
                  color: "bg-neutral",
                  borderColor: "border-neutral",
                  desc: "Chronic stress directly impacts your spine, nervous system, and overall health. Tension-related muscle tightness, elevated cortisol, and poor sleep all undermine your body's ability to heal. We address the mind-body connection through stress management strategies, mindset coaching, and a supportive community that reinforces positive health choices.",
                  link: "/#services",
                  linkText: "Stress Management",
                },
                {
                  num: "5",
                  title: "Minimize Toxins",
                  color: "bg-warm",
                  borderColor: "border-warm",
                  desc: "Environmental toxins, processed foods, medications, and household chemicals accumulate in your body and interfere with its ability to function. Our guided detox protocols help reduce your toxin burden through dietary changes, supplementation, and lifestyle modifications that support your body's natural detoxification pathways.",
                  link: "/#services",
                  linkText: "Detox Programs",
                },
              ].map((ess) => (
                <div key={ess.num} className={`bg-white rounded-[18px] p-8 shadow-[var(--shadow-card)] border-l-4 ${ess.borderColor}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-full ${ess.color} text-white flex items-center justify-center font-black text-[1.1rem] flex-shrink-0`}>
                      <SpineIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-text-muted">Essential {ess.num}</p>
                      <h3 className="text-[1.1rem] font-extrabold">{ess.title}</h3>
                    </div>
                  </div>
                  <p className="text-[0.88rem] text-text-muted leading-relaxed mb-3">{ess.desc}</p>
                  <Link href={ess.link} className="text-primary font-bold text-[0.85rem]">{ess.linkText} &rarr;</Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* WHY IT WORKS */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20 text-center">
            <span className="eyebrow text-sage">WHY IT WORKS</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(28px,3vw,40px)]">Why do the 5 Essentials </span>
              <span className="font-black text-[clamp(36px,4vw,52px)]">produce better results?</span>
            </h2>
            <div className="max-w-[700px] mx-auto text-text-muted leading-relaxed space-y-4 text-left">
              <p>
                Because health is not one-dimensional. A spine that is perfectly aligned will still struggle to heal if the body is malnourished, sedentary, chronically stressed, or overloaded with toxins. The 5 Essentials create the conditions for your body to function at its best &mdash; not just feel better temporarily.
              </p>
              <p>
                This is what sets Vitality Family Chiropractic apart from the 288 other chiropractors in the Arlington area. Our patients don&apos;t just get adjustments. They get a complete health transformation guided by three doctors and a dedicated wellness team.
              </p>
              <p>
                With 4.9 stars and 370+ Google reviews, the results speak for themselves.
              </p>
            </div>
            <Link href="/schedule" className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-[16px] font-bold text-[1.05rem] mt-8 hover:bg-primary-dark transition-all">
              Start Your 5 Essentials Journey &rarr;
            </Link>
            <p className="text-[0.82rem] text-text-muted mt-4">$149 New Patient Exam &middot; (817) 962-0182 &middot; Se Habla Espa&ntilde;ol</p>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal>
        <section className="py-20 bg-linen">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <span className="eyebrow text-neutral">MAXLIVING FAQ</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(28px,3vw,40px)]">Your questions about </span>
              <span className="font-black text-[clamp(36px,4vw,52px)]">the 5 Essentials.</span>
            </h2>
            <div className="max-w-[800px]">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ConversionCTA bgClass="bg-sage" headline="More than adjustments. A complete health transformation." subtext="Book your $149 exam and discover the MaxLiving difference." />
    </>
  );
}
