import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import ConversionCTA from "@/components/ConversionCTA";
import FAQAccordion from "@/components/FAQAccordion";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Advanced Spinal Correction Arlington TX",
  description:
    "Advanced spinal correction in Arlington TX. Corrective chiropractic care to restore posture and spinal curvature. MaxLiving protocols. X-ray verified results. Call (817) 962-0182.",
};

const faqItems = [
  {
    question: "What is advanced spinal correction and how is it different from regular chiropractic?",
    answer:
      "Advanced spinal correction goes beyond symptom relief. While a typical chiropractic visit may focus on reducing pain in a specific area, corrective care uses a structured protocol to restore the natural curves of your spine over time. We use digital X-rays to measure your spinal alignment before care begins and take follow-up X-rays to document measurable structural improvement. This is the MaxLiving approach to lasting spinal health.",
  },
  {
    question: "Can a chiropractor fix bad posture?",
    answer:
      "Yes. Poor posture is often the result of spinal misalignment — not just a bad habit. Through advanced spinal correction, we address the underlying structural causes of poor posture. Our corrective care plans combine chiropractic adjustments, specific spinal exercises, and postural retraining to create lasting improvement you can see and measure on follow-up X-rays.",
  },
  {
    question: "How long does spinal correction take?",
    answer:
      "Corrective care plans typically span 3 to 12 months depending on the severity of your spinal misalignment, your age, and how long the problem has been present. Most patients begin seeing measurable improvement on X-rays within the first 90 days. Your doctor will outline a clear timeline during your $149 new patient exam after reviewing your X-rays and sEMG nerve scan.",
  },
  {
    question: "Can chiropractic help with scoliosis?",
    answer:
      "Chiropractic care can be very effective for managing scoliosis. While severe scoliosis may require co-management with an orthopedist, mild to moderate scoliosis often responds well to corrective chiropractic protocols. We use X-rays to monitor your curvature and track improvement over time. Our doctors have experience with both pediatric and adult scoliosis management.",
  },
  {
    question: "Is spinal correction covered by insurance?",
    answer:
      "Many insurance plans cover chiropractic adjustments as part of a corrective care program. Coverage varies by plan and provider. We recommend calling our office at (817) 962-0182 so our team can verify your specific benefits before your first visit. We also offer affordable self-pay options.",
  },
];

export default function SpinalCorrectionPage() {
  return (
    <>
      <PageHero
        variant="dark"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/#services" },
          { label: "Spinal Correction" },
        ]}
        eyebrow="ADVANCED SPINAL CORRECTION"
        eyebrowColor="teal"
        titleSmall="Advanced spinal correction"
        titleLarge="in Arlington, TX."
        subtitle="MaxLiving corrective care protocols that restore your spine's natural alignment — verified by X-rays, not guesswork."
      />

      {/* WHAT IS SPINAL CORRECTION */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
              <div>
                <span className="eyebrow text-primary">CORRECTIVE CHIROPRACTIC CARE</span>
                <h2 className="mb-5">
                  <span className="block text-[clamp(24px,2.5vw,36px)] font-normal">What is advanced</span>
                  <span className="block text-[clamp(30px,3.5vw,48px)] font-black">spinal correction?</span>
                </h2>
                <div className="space-y-4 text-text-muted leading-relaxed">
                  <p>
                    Advanced spinal correction is a comprehensive approach to chiropractic care that focuses on restoring the natural curves and alignment of your spine. Unlike pain-relief-only chiropractic, corrective care uses digital X-rays to identify specific structural problems and creates a targeted plan to fix them over time.
                  </p>
                  <p>
                    At Vitality Family Chiropractic, Dr. Elise Hernandez, Dr. Mary Davis, and Dr. Chad London follow MaxLiving corrective care protocols. This means your care plan includes regular chiropractic adjustments, spinal traction, corrective exercises, and follow-up X-rays to measure your progress objectively.
                  </p>
                  <p>
                    Patients who commit to corrective care often see measurable changes in spinal curvature, improved posture, reduced pain, and better overall nervous system function.
                  </p>
                </div>
              </div>
              <div className="rounded-[18px] overflow-hidden shadow-[var(--shadow-card)] bg-gradient-to-br from-soft-teal to-linen min-h-[400px] flex items-center justify-center text-text-muted text-center p-6">
                Before and after spinal X-rays showing corrective improvement
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* THE PROCESS */}
      <ScrollReveal>
        <section className="py-20 bg-linen">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <span className="eyebrow text-primary">THE CORRECTION PROCESS</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(28px,3vw,40px)]">How does spinal correction </span>
              <span className="font-black text-[clamp(36px,4vw,52px)]">actually work?</span>
            </h2>
            <div className="max-w-[640px] space-y-8">
              {[
                { num: "01", title: "Comprehensive Assessment", desc: "Digital X-rays, sEMG nerve scan, posture analysis, and orthopedic testing identify the specific structural issues in your spine. This is all included in your $149 new patient exam." },
                { num: "02", title: "Personalized Correction Plan", desc: "Your doctor designs a care plan based on your X-ray findings — not a cookie-cutter protocol. The plan includes adjustment frequency, specific corrective exercises, and milestone checkpoints." },
                { num: "03", title: "Active Correction Phase", desc: "Regular adjustments combined with at-home corrective exercises and lifestyle modifications. Your spine begins to adapt and reshape toward its natural alignment." },
                { num: "04", title: "Progress Verification", desc: "Follow-up X-rays at key intervals verify measurable structural change. You can see the improvement with your own eyes — this is evidence-based correction." },
              ].map((step) => (
                <div key={step.num} className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-black text-[1.1rem] flex-shrink-0">
                    {step.num}
                  </div>
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

      {/* CONDITIONS */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
            <span className="eyebrow text-primary">CONDITIONS WE CORRECT</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(28px,3vw,40px)]">What conditions benefit from </span>
              <span className="font-black text-[clamp(36px,4vw,52px)]">spinal correction?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Poor Posture", desc: "Forward head posture, rounded shoulders, and loss of cervical lordosis." },
                { title: "Scoliosis", desc: "Mild to moderate scoliosis management through corrective protocols." },
                { title: "Chronic Back Pain", desc: "Structural causes of recurring back pain addressed at the root." },
                { title: "Disc Degeneration", desc: "Slowing and managing degenerative disc disease through spinal alignment." },
                { title: "Herniated Discs", desc: "Non-surgical correction of disc bulges and herniations." },
                { title: "Nerve Compression", desc: "Restoring proper spacing and alignment to reduce pinched nerves." },
              ].map((c) => (
                <div key={c.title} className="bg-white rounded-[18px] p-6 shadow-[var(--shadow-card)] border-t-3 border-primary hover:-translate-y-1 transition-transform">
                  <h3 className="text-[0.9rem] font-extrabold mb-1">{c.title}</h3>
                  <p className="text-[0.82rem] text-text-muted leading-relaxed">{c.desc}</p>
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
            <span className="eyebrow text-neutral">SPINAL CORRECTION FAQ</span>
            <h2 className="mb-9">
              <span className="font-normal text-[clamp(28px,3vw,40px)]">Your questions about </span>
              <span className="font-black text-[clamp(36px,4vw,52px)]">spinal correction.</span>
            </h2>
            <div className="max-w-[800px]">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ConversionCTA headline="Correct the cause. Change your spine." subtext='Start with a <span class="text-accent">$149</span> exam including digital X-rays and sEMG nerve scan.' />
    </>
  );
}
