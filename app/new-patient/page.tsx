import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import ConversionCTA from "@/components/ConversionCTA";
import FAQAccordion from "@/components/FAQAccordion";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "New Patients — $149 Exam",
  description: "New patient special: $149 comprehensive exam includes consultation, X-rays, nerve scan, and first adjustment. Save $171. Se Habla Español.",
};

const faqItems = [
  { question: "How long is the first visit?", answer: "Plan for about 45-60 minutes. This includes your consultation, examination, X-rays, nerve scan, and first adjustment." },
  { question: "What should I wear?", answer: "Comfortable clothing that allows easy movement. Avoid heavy jewelry. We have gowns available if needed for X-rays." },
  { question: "Can I bring my kids to my appointment?", answer: "Of course! We're a family practice — kids are always welcome. We have a kid-friendly waiting area." },
  { question: "Do you offer same-day appointments?", answer: "Yes! With three doctors on staff, we can often accommodate same-day appointments. Call us at (817) 962-0182 or book online." },
];

export default function NewPatientPage() {
  return (
    <>
      <PageHero variant="warm" breadcrumbs={[{ label: "Home", href: "/" }, { label: "New Patients" }]} eyebrow="NEW PATIENT SPECIAL" eyebrowColor="orange" titleSmall="Your $149 exam" titleLarge="includes everything." subtitle="Consultation, comprehensive exam, digital X-rays, sEMG nerve scan, and your first adjustment. Normally $320 — you save $171." />

      {/* WHAT TO EXPECT */}
      <ScrollReveal><section className="py-20 bg-white"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <span className="eyebrow text-primary">YOUR FIRST VISIT</span>
        <h2 className="mb-10"><span className="font-normal text-[clamp(28px,3vw,40px)]">What to </span><span className="font-black text-[clamp(36px,4vw,52px)]">expect.</span></h2>
        <div className="max-w-[700px] space-y-8">
          {[
            { num: "01", color: "bg-primary", title: "Book Your Appointment", desc: "Schedule online or call (817) 962-0182. Same-day appointments available. Se Habla Español." },
            { num: "02", color: "bg-sage", title: "Meet Your Doctor", desc: "Your consultation covers your health history, current concerns, and goals. We match you with the right doctor." },
            { num: "03", color: "bg-accent", title: "Comprehensive Assessment", desc: "Digital X-rays, sEMG nerve scan, orthopedic testing, and posture analysis. You see exactly what we see." },
            { num: "04", color: "bg-neutral", title: "Your Personalized Plan", desc: "Based on your results, we create a corrective care plan using the MaxLiving 5 Essentials. First adjustment included." },
          ].map((step) => (
            <div key={step.num} className="flex gap-5 items-start">
              <div className={`w-12 h-12 rounded-full ${step.color} text-white flex items-center justify-center font-black text-[1.1rem] flex-shrink-0`}>{step.num}</div>
              <div><h4 className="text-base font-bold mb-1">{step.title}</h4><p className="text-[0.88rem] text-text-muted leading-relaxed">{step.desc}</p></div>
            </div>
          ))}
        </div>
      </div></section></ScrollReveal>

      {/* $149 OFFER */}
      <ScrollReveal><section className="py-20 bg-deep-teal"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
          <div>
            <span className="eyebrow text-primary">SAVE $171</span>
            <div className="mb-4"><span className="text-[clamp(56px,6vw,80px)] font-black text-accent leading-none">$149</span><span className="block text-[clamp(24px,2vw,32px)] font-normal text-neutral line-through mt-1">Normally $320</span></div>
            <p className="text-[1.1rem] font-bold text-primary mb-5">You save $171 on your first visit.</p>
            <ul className="space-y-3 mb-7">
              {["Comprehensive consultation", "Full spinal examination", "Digital spinal X-rays", "sEMG nerve scan", "Posture analysis", "Your first chiropractic adjustment"].map((item) => (
                <li key={item} className="flex gap-2.5 items-center"><CheckIcon className="w-5 h-5 text-primary flex-shrink-0" /><span className="text-linen">{item}</span></li>
              ))}
            </ul>
            <Link href="/schedule" className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-white rounded-[16px] font-bold text-[1.05rem] hover:bg-accent-dark transition-all">Book Your $149 Exam &rarr;</Link>
          </div>
          <div className="bg-white rounded-[18px] shadow-[var(--shadow-card-lg)] border-t-4 border-accent overflow-hidden p-7">
            <div className="text-[1.2rem] font-black mb-5 text-center"><span className="text-accent">$149</span> New Patient Exam</div>
            <form className="space-y-3.5">
              <input type="text" placeholder="First Name" className="w-full px-3.5 py-3 border-[1.5px] border-border rounded-[10px] text-[0.9rem] bg-linen focus:border-primary focus:bg-white outline-none transition-colors" />
              <input type="text" placeholder="Last Name" className="w-full px-3.5 py-3 border-[1.5px] border-border rounded-[10px] text-[0.9rem] bg-linen focus:border-primary focus:bg-white outline-none transition-colors" />
              <input type="tel" placeholder="Phone" className="w-full px-3.5 py-3 border-[1.5px] border-border rounded-[10px] text-[0.9rem] bg-linen focus:border-primary focus:bg-white outline-none transition-colors" />
              <input type="email" placeholder="Email" className="w-full px-3.5 py-3 border-[1.5px] border-border rounded-[10px] text-[0.9rem] bg-linen focus:border-primary focus:bg-white outline-none transition-colors" />
              <button type="submit" className="w-full py-3.5 bg-primary text-white rounded-[16px] font-bold hover:bg-primary-dark transition-colors cursor-pointer">Book Now &rarr;</button>
            </form>
            <p className="text-center text-[0.75rem] text-text-muted mt-3">Se Habla Espa&ntilde;ol &middot; (817) 962-0182</p>
          </div>
        </div>
      </div></section></ScrollReveal>

      {/* INSURANCE */}
      <ScrollReveal><section className="py-20 bg-linen"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <span className="eyebrow text-neutral">INSURANCE &amp; PAYMENT</span>
            <h2 className="mb-5"><span className="font-normal text-[clamp(24px,2.5vw,36px)]">Making care </span><span className="font-black text-[clamp(30px,3.5vw,48px)]">accessible.</span></h2>
            <div className="space-y-4 text-text-muted"><p>We accept most major insurance plans. Our team will verify your coverage before your visit.</p><p>For patients without insurance, we offer affordable self-pay options and flexible payment plans.</p><p>Questions? Call us at <a href="tel:8179620182" className="text-primary font-bold">(817) 962-0182</a> &mdash; Tiffany handles all insurance and billing.</p></div>
          </div>
          <div>
            <span className="eyebrow text-neutral">PATIENT FORMS</span>
            <h2 className="mb-5"><span className="font-normal text-[clamp(24px,2.5vw,36px)]">Save time </span><span className="font-black text-[clamp(30px,3.5vw,48px)]">at check-in.</span></h2>
            <p className="text-text-muted mb-5">Download and complete your new patient intake forms before your visit. Saves approximately 15 minutes.</p>
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-[16px] font-bold text-[0.85rem] hover:bg-primary-dark transition-all">Download Intake Forms &rarr;</a>
          </div>
        </div>
      </div></section></ScrollReveal>

      {/* SE HABLA ESPAÑOL */}
      <ScrollReveal><section className="py-20 bg-gradient-to-br from-warm-light to-[#FAF7F2]"><div className="max-w-[700px] mx-auto px-5 text-center">
        <span className="eyebrow text-warm">BIENVENIDOS</span>
        <h2 className="font-black text-[clamp(36px,4vw,52px)] mb-5">Se Habla Espa&ntilde;ol.</h2>
        <p className="text-text-muted text-[1.05rem] leading-relaxed mb-2">Nuestro equipo biling&uuml;e est&aacute; listo para atenderle en espa&ntilde;ol.</p>
        <p className="text-text-muted mb-6">Our bilingual staff is ready to serve you in Spanish.</p>
        <a href="tel:8179620182" className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-[16px] font-bold text-[1.05rem] hover:bg-primary-dark transition-all">Ll&aacute;menos: (817) 962-0182</a>
      </div></section></ScrollReveal>

      {/* FAQ */}
      <ScrollReveal><section className="py-20 bg-white"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <span className="eyebrow text-neutral">FIRST VISIT FAQ</span>
        <h2 className="mb-9"><span className="font-normal text-[clamp(28px,3vw,40px)]">Before you </span><span className="font-black text-[clamp(36px,4vw,52px)]">come in.</span></h2>
        <FAQAccordion items={faqItems} />
      </div></section></ScrollReveal>

      <ConversionCTA headline="Ready to start?" subtext='Book your <span class="text-accent">$149</span> new patient exam today. Save $171.' />
    </>
  );
}
