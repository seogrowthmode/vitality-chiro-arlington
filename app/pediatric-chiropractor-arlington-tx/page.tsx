import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import ConversionCTA from "@/components/ConversionCTA";
import ReviewCard from "@/components/ReviewCard";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Pediatric Chiropractic in Arlington TX",
  description: "Gentle pediatric chiropractic for babies, toddlers, and kids in Arlington TX. Finger-pressure light adjustments. Colic, ear infections, development. $149 exam.",
};

const faqItems = [
  { question: "At what age can my baby be adjusted?", answer: "We can safely adjust babies from the very first days of life. Dr. Elise has adjusted infants as young as 2 days old. The sooner we check for birth-related misalignments, the better." },
  { question: "Will it hurt my child?", answer: "Not at all. Pediatric adjustments use fingertip pressure lighter than what you'd use to test a ripe tomato. Most babies sleep through it. Older kids often enjoy their visits and look forward to coming back." },
  { question: "How many visits will my child need?", answer: "This depends on the condition and severity. Some parents see results after a single visit. Others benefit from a short series of adjustments. We'll explain the recommended plan after your child's examination." },
  { question: "Is pediatric chiropractic evidence-based?", answer: "Yes. Research supports the safety and efficacy of gentle chiropractic care for children. The International Chiropractic Pediatric Association (ICPA) maintains an extensive research library. Dr. Elise stays current with the latest pediatric chiropractic research." },
];

export default function PediatricPage() {
  return (
    <>
      <PageHero variant="teal-soft" eyebrow="PEDIATRIC CHIROPRACTIC IN ARLINGTON" eyebrowColor="teal" titleSmall="Gentle care" titleLarge="from day one." subtitle="Finger-pressure light adjustments for newborns, babies, toddlers, and kids. Supporting healthy development naturally. Se Habla Español.">
        <div className="mt-7 flex gap-3 flex-wrap">
          <Link href="/schedule" className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-[16px] font-bold text-[1.05rem] hover:bg-primary-dark transition-all">Book Your Child&apos;s $149 Exam &rarr;</Link>
          <a href="tel:8179620182" className="inline-flex items-center gap-2 px-10 py-4 border-2 border-white/40 text-white rounded-[16px] font-bold text-[1.05rem] hover:bg-white/10 transition-all">Call (817) 962-0182</a>
        </div>
      </PageHero>

      {/* WHY PEDIATRIC CHIRO */}
      <ScrollReveal><section className="py-20 bg-white"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
          <div>
            <span className="eyebrow text-primary">WHY PEDIATRIC CHIROPRACTIC?</span>
            <h2 className="mb-5"><span className="block text-[clamp(24px,2.5vw,36px)] font-normal">Because their little bodies</span><span className="block text-[clamp(30px,3.5vw,48px)] font-black">deserve the best start.</span></h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>The birth process &mdash; whether natural or cesarean &mdash; places significant force on a baby&apos;s spine and nervous system. Misalignments from birth can affect everything from sleep and digestion to immune function and development.</p>
              <p>Pediatric chiropractic uses incredibly gentle techniques &mdash; lighter than the pressure you&apos;d use to check a ripe tomato &mdash; to restore proper alignment and support your child&apos;s developing nervous system.</p>
              <p>At Vitality, Dr. Elise has adjusted infants as young as 2 days old. Our youngest patients are often our happiest.</p>
            </div>
          </div>
          <div className="rounded-[18px] overflow-hidden shadow-[var(--shadow-card)] bg-gradient-to-br from-soft-teal to-[#F0FAF9] min-h-[400px] flex items-center justify-center text-text-muted text-center p-6">Doctor gently adjusting happy toddler. Parent watching with relaxed smile. Child comfortable, engaged.</div>
        </div>
      </div></section></ScrollReveal>

      {/* CONDITIONS WE TREAT */}
      <ScrollReveal><section className="py-20 bg-soft-teal"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <span className="eyebrow text-primary">CONDITIONS WE SEE IN CHILDREN</span>
        <h2 className="mb-2"><span className="font-normal text-[clamp(28px,3vw,40px)]">Common childhood </span><span className="font-black text-[clamp(36px,4vw,52px)]">conditions.</span></h2>
        <p className="text-text-muted max-w-[600px] mb-9">Parents bring their children to us for a wide range of concerns. Chiropractic care addresses the underlying nervous system interference &mdash; not just the symptoms.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { title: "Colic & Fussiness", desc: "Gentle adjustments often reduce colic symptoms dramatically, sometimes after a single visit. Many parents see calmer, happier babies within days." },
            { title: "Ear Infections", desc: "Upper cervical misalignment can affect drainage from the ears. Correcting alignment supports the body's natural ability to prevent recurring infections." },
            { title: "Sleep Difficulties", desc: "When the nervous system is balanced, children sleep better. Parents consistently report improved sleep patterns after chiropractic care begins." },
            { title: "Digestive Issues", desc: "Reflux, constipation, and feeding difficulties often improve with gentle spinal adjustments that support proper nerve function to the digestive system." },
            { title: "Developmental Delays", desc: "Crawling, walking, and coordination milestones depend on a healthy nervous system. We support optimal development from infancy through adolescence." },
            { title: "Growing Pains & Posture", desc: "As kids grow — especially with screen time and heavy backpacks — spinal issues develop. Early correction prevents problems from compounding." },
          ].map((c) => (
            <div key={c.title} className="bg-white rounded-[16px] p-6 shadow-[var(--shadow-card)] border-l-4 border-primary hover:-translate-y-1 transition-transform">
              <h4 className="text-[0.92rem] font-bold mb-1.5">{c.title}</h4>
              <p className="text-[0.82rem] text-text-muted leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div></section></ScrollReveal>

      {/* HOW GENTLE */}
      <ScrollReveal><section className="py-20 bg-white"><div className="max-w-[700px] mx-auto px-5 text-center">
        <span className="eyebrow text-primary">PARENTS ASK US</span>
        <h2 className="mb-5"><span className="font-normal text-[clamp(28px,3vw,40px)]">How gentle </span><span className="font-black text-[clamp(36px,4vw,52px)]">is it?</span></h2>
        <p className="text-[1.05rem] text-text-muted leading-relaxed mb-7">Pediatric adjustments use fingertip pressure &mdash; about the same amount you&apos;d use to test whether a tomato is ripe. There&apos;s no twisting, no cracking, no discomfort. Most babies sleep through their adjustment. Toddlers and kids often ask to come back.</p>
        <div className="grid grid-cols-3 gap-5">
          <div className="p-6 bg-soft-teal rounded-[18px]"><div className="text-[2.5rem] font-black text-primary leading-none mb-2">2 days</div><div className="text-[0.82rem] text-text-muted font-semibold">Youngest patient adjusted</div></div>
          <div className="p-6 bg-linen rounded-[18px]"><div className="text-[2.5rem] font-black text-primary leading-none mb-2">100s</div><div className="text-[0.82rem] text-text-muted font-semibold">Of kids adjusted every month</div></div>
          <div className="p-6 bg-soft-teal rounded-[18px]"><div className="text-[2.5rem] font-black text-primary leading-none mb-2">4.9&#9733;</div><div className="text-[0.82rem] text-text-muted font-semibold">Parent satisfaction</div></div>
        </div>
      </div></section></ScrollReveal>

      {/* YOUR DOCTOR */}
      <ScrollReveal><section className="py-20 bg-linen"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-14 items-center">
          <div className="rounded-[18px] overflow-hidden shadow-[var(--shadow-card)]"><Image src="https://vitalitychiroarlington.com/wp-content/uploads/2025/08/Elise-Hernandez-Female-Chiropractor.jpg" alt="Dr. Elise Hernandez — Pediatric Specialist" width={600} height={480} className="w-full min-h-[400px] object-cover" /></div>
          <div className="border-l-4 border-primary pl-7">
            <span className="eyebrow text-primary">YOUR CHILD&apos;S DOCTOR</span>
            <h2 className="text-[1.6rem] font-black mb-4">Dr. Elise Hernandez, D.C.</h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>As a second-generation chiropractor, Dr. Elise grew up around chiropractic care. She&apos;s adjusted hundreds of infants and children and is passionate about giving kids the healthiest possible start.</p>
              <p>Her gentle, confident approach puts parents at ease. She takes the time to explain exactly what she&apos;s doing and why &mdash; so you feel comfortable and informed every step of the way.</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Webster Certified", "Pediatric Specialist", "WNBA Team Doctor"].map((b) => <span key={b} className="px-4 py-1.5 rounded-full text-[0.75rem] font-bold border-[1.5px] border-primary text-primary">{b}</span>)}
            </div>
          </div>
        </div>
      </div></section></ScrollReveal>

      {/* PARENT TESTIMONIALS */}
      <ScrollReveal><section className="py-20 bg-deep-teal"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <span className="eyebrow text-primary">PARENTS TRUST US</span>
        <h2 className="mb-9"><span className="font-normal text-[clamp(28px,3vw,40px)] text-linen">Parent </span><span className="font-black text-[clamp(36px,4vw,52px)] text-primary">reviews.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ReviewCard quote="My 3-week-old was colicky and not sleeping. Dr. Mary adjusted him so gently — he slept 6 hours that night. We've been coming ever since." name="Amanda R." tag="Colic - 3 weeks old" tagColor="teal" />
          <ReviewCard quote="I was terrified to bring my newborn. Dr. Elise was so gentle — lighter than checking a tomato. My daughter loved it and has been sleeping better." name="Rachel P." tag="Newborn - Sleep" tagColor="teal" even />
          <ReviewCard quote="My son had chronic ear infections. After starting chiropractic care he hasn't had a single one in 8 months. No more antibiotics. I wish we'd started sooner." name="Nicole H." tag="Ear Infections - 2 years old" tagColor="teal" />
        </div>
      </div></section></ScrollReveal>

      {/* FAQ */}
      <ScrollReveal><section className="py-20 bg-white"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <span className="eyebrow text-neutral">PARENTS ASK</span>
        <h2 className="mb-9"><span className="font-normal text-[clamp(28px,3vw,40px)]">Common </span><span className="font-black text-[clamp(36px,4vw,52px)]">questions.</span></h2>
        <FAQAccordion items={faqItems} />
      </div></section></ScrollReveal>

      {/* $149 CTA */}
      <ScrollReveal><section className="py-20 bg-soft-teal"><div className="max-w-[640px] mx-auto px-5 text-center">
        <span className="eyebrow text-accent">PEDIATRIC SPECIAL</span>
        <div className="mb-3"><span className="text-[clamp(56px,6vw,72px)] font-black text-accent leading-none">$149</span></div>
        <p className="text-[1.1rem] text-neutral line-through mb-2">Normally $320</p>
        <p className="text-[1.2rem] font-bold text-primary mb-5">Save $171 on your child&apos;s first exam.</p>
        <p className="text-text-muted mb-7">Includes age-appropriate consultation, gentle examination, and first adjustment. X-rays only when clinically necessary for children.</p>
        <Link href="/schedule" className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-[16px] font-bold text-[1.05rem] hover:bg-primary-dark transition-all">Book Your Child&apos;s Exam &rarr;</Link>
        <p className="text-[0.82rem] text-text-muted mt-4">Se Habla Espa&ntilde;ol &middot; (817) 962-0182 &middot; All Ages Welcome</p>
      </div></section></ScrollReveal>

      <ConversionCTA headline="Give your child the best start." subtext='Book your child&apos;s <span class="text-accent">$149</span> exam today.' />
    </>
  );
}
