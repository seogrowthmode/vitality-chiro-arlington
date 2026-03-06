import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import FAQAccordion from "@/components/FAQAccordion";
import ReviewCard from "@/components/ReviewCard";
import { CheckIcon, SpineIcon } from "@/components/Icons";

const faqItems = [
  { question: "What's included in the $149 new patient exam?", answer: "Your $149 exam (normally $320) includes a comprehensive consultation, full spinal examination, digital X-rays, sEMG nerve scan, posture analysis, and your first chiropractic adjustment. You save $171 and leave with a clear picture of your spinal health." },
  { question: "Do you specialize in prenatal chiropractic?", answer: "Yes! Dr. Elise and Dr. Mary are both Webster Technique certified. We specialize in prenatal chiropractic care, helping moms-to-be stay comfortable, reduce back pain, and prepare for healthier deliveries." },
  { question: "Is chiropractic safe for my baby or child?", answer: "Absolutely. Pediatric adjustments use finger-tip pressure lighter than what you'd use to check a ripe tomato. Dr. Elise has adjusted infants as young as 2 days old." },
  { question: "What's the MaxLiving 5 Essentials approach?", answer: "MaxLiving's 5 Essentials are: Core Chiropractic, Nutrition, Exercise, Mindset, and Toxin Reduction. We address your whole health — not just your spine." },
  { question: "Do you treat athletes and sports injuries?", answer: "Dr. Chad London is a CCSP-certified sports chiropractor and former professional rugby player with the Dallas Jackals. He uses FAKTR soft tissue techniques." },
  { question: "Do you accept insurance?", answer: "We accept most major insurance plans. Contact our office at (817) 962-0182 and our team will verify your coverage before your visit." },
  { question: "Do you speak Spanish?", answer: "Si! We have bilingual staff members who provide care and communication in both English and Spanish." },
  { question: "What makes Vitality different from other Arlington chiropractors?", answer: "Three doctors with three distinct specialties. A former WNBA team chiropractor. A former pro rugby player. A dedicated nutritionist. Bilingual staff. All-ages care from newborns to seniors." },
];

const reviews = [
  { quote: "Dr. Elise changed my pregnancy. I had terrible back pain and after just 3 visits I felt like a new person.", name: "Sarah M.", tag: "Prenatal Care" },
  { quote: "My 3-week-old was colicky and not sleeping. Dr. Mary adjusted him so gently — he slept 6 hours that night.", name: "Amanda R.", tag: "Pediatric" },
  { quote: "I've been to 5 chiropractors. Vitality is the only one that actually corrected my spine instead of just cracking it.", name: "Carlos G.", tag: "Spinal Correction" },
  { quote: "Katy's nutrition program helped me lose 22 lbs in 3 months. Life-changing.", name: "Jennifer T.", tag: "Nutrition" },
  { quote: "Dr. Chad got me back on the field in 2 weeks after my hamstring tear.", name: "Marcus D.", tag: "Sports" },
  { quote: "The bilingual staff made my abuela feel so comfortable. Everyone speaks Spanish.", name: "Maria L.", tag: "Family Care" },
  { quote: "We bring our entire family. They know all of us by name. We've been coming since 2019.", name: "Stephanie W.", tag: "Family Wellness" },
  { quote: "Had migraines for 12 years. After 6 weeks of corrective care, they're gone.", name: "David K.", tag: "Headaches" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-[90vh] lg:min-h-[90vh] bg-linen flex items-center relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-20 lg:py-16">
          <div className="relative z-[2] text-center lg:text-left">
            <span className="eyebrow text-accent">ARLINGTON&apos;S FAMILY CHIROPRACTOR</span>
            <h1 className="leading-[1.1] mb-6">
              <span className="block text-[clamp(32px,3.5vw,44px)] font-normal text-text">Your family.</span>
              <span className="block text-[clamp(32px,3.5vw,44px)] font-normal text-text">Your health.</span>
              <span className="block text-[clamp(48px,5.5vw,72px)] font-black text-primary">Your vitality.</span>
            </h1>
            <p className="text-[1.05rem] text-text-muted max-w-[520px] mb-7 leading-relaxed mx-auto lg:mx-0">
              Dr. Elise Hernandez and two associate doctors deliver corrective chiropractic care for your whole family &mdash; from newborns to grandparents, pregnant moms to pro athletes.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-6 justify-center lg:justify-start">
              <div className="px-4 py-2 rounded-full text-[0.78rem] font-bold text-white bg-primary flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                Former WNBA Dallas Wings Chiropractor
              </div>
              <div className="px-4 py-2 rounded-full text-[0.78rem] font-bold text-white bg-sage flex items-center gap-1.5">
                <CheckIcon className="w-3.5 h-3.5" />
                MaxLiving Health Center
              </div>
            </div>
            <div className="text-[0.85rem] text-text-muted flex items-center gap-2 flex-wrap justify-center lg:justify-start">
              <span className="text-accent font-bold">&#9733;&#9733;&#9733;&#9733;&#9733;</span> 4.9 <span className="opacity-50">&middot;</span> 370+ Reviews <span className="opacity-50">&middot;</span> 3 Doctors <span className="opacity-50">&middot;</span> Se Habla Espa&ntilde;ol
            </div>
          </div>
          <div className="relative z-[1] flex justify-center lg:justify-end">
            <Image src="https://vitalitychiroarlington.com/wp-content/uploads/2025/08/Elise-Hernandez-Female-Chiropractor.jpg" alt="Dr. Elise Hernandez — Founder of Vitality Family Chiropractic" width={560} height={700} className="w-full max-w-[560px] h-auto object-cover rounded-[18px]" priority />
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <ScrollReveal><section className="py-24 bg-white"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <div className="text-center mb-13"><span className="eyebrow text-sage">CARE FOR EVERYONE</span><h2><span className="block text-[clamp(28px,3vw,40px)] font-normal">Who are you?</span><span className="block text-[clamp(36px,4vw,56px)] font-black">We&apos;ve got you.</span></h2></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { title: "I'm Pregnant", desc: "Prenatal chiropractic with Webster-certified doctors.", color: "bg-primary", href: "/prenatal-chiropractic-arlington-tx" },
            { title: "My Kid Needs Care", desc: "Gentle pediatric care from newborns to teens.", color: "bg-sage", href: "/pediatric-chiropractor-arlington-tx" },
            { title: "I'm In Pain", desc: "Corrective chiropractic that fixes the root cause.", color: "bg-accent", href: "/back-pain-treatment-arlington-tx" },
            { title: "I'm An Athlete", desc: "Sports chiro with a former pro rugby player.", color: "bg-neutral", href: "/schedule" },
          ].map((card, i) => (
            <Link key={i} href={card.href} className={`${card.color} p-9 rounded-[18px] text-white text-center transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[var(--shadow-card-lg)]`}>
              <h3 className="text-[1.15rem] font-extrabold mb-2">{card.title}</h3>
              <p className="text-[0.82rem] opacity-90 leading-snug">{card.desc}</p>
            </Link>
          ))}
        </div>
      </div></section></ScrollReveal>

      {/* DOCTORS */}
      <ScrollReveal><section className="py-24 bg-linen"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <div className="text-center mb-14"><span className="eyebrow text-primary">THREE DOCTORS. THREE SPECIALTIES.</span><h2><span className="block text-[clamp(28px,3vw,44px)] font-normal">One team.</span><span className="block text-[clamp(36px,4vw,56px)] font-black">Complete care.</span></h2></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
          {[
            { name: "Dr. Elise Hernandez, D.C.", creds: "Founder · Prenatal & Pediatric Specialist\nUF → Life University · WNBA Dallas Wings", color: "border-primary", linkColor: "text-primary", img: "https://vitalitychiroarlington.com/wp-content/uploads/2025/08/Elise-Hernandez-Female-Chiropractor.jpg" },
            { name: "Dr. Mary Davis, D.C.", creds: "Prenatal Specialist · Pregnancy Educator\nTexas Chiropractic College", color: "border-sage", linkColor: "text-sage", img: "https://vitalitychiroarlington.com/wp-content/uploads/2025/08/Dr-Mary.jpg" },
            { name: "Dr. Chad London, D.C., CCSP", creds: "Sports & Performance Specialist\nPalmer College · Former Dallas Jackals", color: "border-accent", linkColor: "text-accent", img: "" },
          ].map((doc, i) => (
            <div key={i} className={`bg-white rounded-[18px] shadow-[var(--shadow-card-lg)] overflow-hidden border-t-[5px] ${doc.color} hover:-translate-y-3 transition-all duration-500`}>
              <div className="h-[260px] bg-linen overflow-hidden">
                {doc.img ? <Image src={doc.img} alt={doc.name} width={360} height={260} className="w-full h-full object-cover object-top" /> : <div className="w-full h-full flex items-center justify-center text-[0.8rem] text-text-muted text-center p-5">Sports &amp; Performance Specialist</div>}
              </div>
              <div className="p-5 pb-6">
                <h3 className="text-[1.1rem] font-extrabold mb-1">{doc.name}</h3>
                <p className="text-[0.78rem] text-text-muted mb-2.5 leading-snug whitespace-pre-line">{doc.creds}</p>
                <Link href="/team" className={`text-[0.85rem] font-bold ${doc.linkColor} hover:gap-2 transition-all`}>Meet {doc.name.split(",")[0]} &rarr;</Link>
              </div>
            </div>
          ))}
        </div>
      </div></section></ScrollReveal>

      {/* PRENATAL */}
      <ScrollReveal><section className="py-24 bg-soft-teal"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-14 items-center">
        <div>
          <span className="eyebrow text-sage">FOR MOMS &amp; LITTLE ONES</span>
          <h2 className="mb-5"><span className="block text-[clamp(28px,3vw,40px)] font-normal">The practice</span><span className="block text-[clamp(36px,4vw,56px)] font-black">Arlington moms trust.</span></h2>
          <p className="text-base text-text-muted mb-8 leading-relaxed">Two Webster-certified doctors. Gentle care from pregnancy through childhood. Dr. Elise and Dr. Mary specialize in prenatal chiropractic &mdash; helping moms stay comfortable, reduce back pain, and prepare for healthier deliveries.</p>
          {["Webster Technique Certified", "Gentle Infant & Toddler Adjustments", "Supporting Development"].map((item, i) => (
            <div key={i} className="flex gap-3.5 items-start mb-5"><CheckIcon className="w-7 h-7 text-sage flex-shrink-0" /><h4 className="text-[0.95rem] font-bold">{item}</h4></div>
          ))}
          <p className="text-[0.85rem] text-primary font-semibold mt-2">Se Habla Espa&ntilde;ol</p>
        </div>
        <div className="rounded-[18px] overflow-hidden bg-white shadow-[var(--shadow-card)] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-soft-teal to-[#F0FAF9] text-[0.85rem] text-text-muted text-center p-5">
          Pregnant woman receiving gentle chiropractic adjustment
        </div>
      </div></section></ScrollReveal>

      {/* SPORTS */}
      <ScrollReveal><section className="py-20 bg-white"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-14 items-center">
        <div className="rounded-[18px] overflow-hidden bg-linen min-h-[360px] flex items-center justify-center text-[0.85rem] text-text-muted text-center p-5 order-last lg:order-first">Athletic sports chiropractic setting</div>
        <div>
          <span className="eyebrow text-accent">FOR ATHLETES</span>
          <h2 className="mb-5"><span className="block text-[clamp(28px,3vw,40px)] font-normal">Train harder.</span><span className="block text-[clamp(36px,4vw,56px)] font-black text-accent">Recover faster.</span></h2>
          <p className="text-base text-text-muted mb-7 leading-relaxed">Dr. Chad London brings 6 years of professional rugby, CCSP sports certification, and FAKTR soft tissue techniques to every athlete he treats.</p>
          <Link href="/schedule" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-[16px] font-bold hover:bg-accent-dark transition-all">Book a Sports Assessment &rarr;</Link>
          <div className="flex flex-wrap gap-2 mt-4">{["CCSP", "FAKTR", "Webster", "Former Dallas Jackals"].map((b) => <span key={b} className="px-3.5 py-1.5 rounded-full text-[0.72rem] font-bold text-accent border-[1.5px] border-accent">{b}</span>)}</div>
        </div>
      </div></section></ScrollReveal>

      {/* SERVICES */}
      <ScrollReveal><section id="services" className="py-24 bg-linen"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <div className="text-center mb-13"><span className="eyebrow text-primary">WHAT WE DO</span><h2><span className="font-normal">Everything your family needs.</span><span className="block font-black text-[clamp(32px,3.5vw,48px)]"> Under one roof.</span></h2></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Core Chiropractic", color: "text-primary", border: "border-t-primary", services: ["Chiropractic Adjustments", "Advanced Spinal Correction", "Corrective Exercises"] },
            { label: "Family & Specialty", color: "text-sage", border: "border-t-sage", services: ["Prenatal Chiropractic", "Pediatric Chiropractic", "Family Wellness Care"] },
            { label: "Sports & Performance", color: "text-accent", border: "border-t-accent", services: ["Sports Chiropractic", "sEMG Nerve Scan", "Orthopedic Testing"] },
            { label: "Nutrition & Wellness", color: "text-neutral", border: "border-t-neutral", services: ["Nutritional Coaching", "Metabolix Testing", "Detox Programs"] },
          ].map((group) => (
            <div key={group.label}>
              <div className={`text-[0.68rem] font-bold tracking-[0.15em] uppercase mb-2.5 px-1 ${group.color}`}>{group.label}</div>
              {group.services.map((svc) => (
                <div key={svc} className={`bg-white rounded-[16px] p-5 mb-3 shadow-[var(--shadow-card)] border-t-[3px] ${group.border} hover:-translate-y-1 transition-all cursor-pointer`}>
                  <h4 className="text-[0.9rem] font-bold mb-1">{svc}</h4>
                  <span className={`text-[0.78rem] font-bold ${group.color}`}>Learn More &rarr;</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div></section></ScrollReveal>

      {/* REVIEWS */}
      <ScrollReveal><section className="py-24 bg-deep-teal relative overflow-hidden"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20 relative z-[1]">
        <div className="text-center mb-13"><span className="eyebrow text-primary">ARLINGTON LOVES US</span><h2><span className="block text-[clamp(28px,3vw,40px)] font-normal text-linen">370+ reviews. 4.9 stars.</span><span className="block text-[clamp(36px,4vw,56px)] font-black text-primary">Read the proof.</span></h2></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">{reviews.map((r, i) => <ReviewCard key={i} quote={r.quote} name={r.name} tag={r.tag} even={i % 2 === 1} />)}</div>
        <div className="text-center mt-10 text-[0.9rem] text-linen opacity-80"><span className="text-accent font-bold">&#9733;&#9733;&#9733;&#9733;&#9733;</span> 4.9 Google &middot; 370+ Reviews</div>
      </div></section></ScrollReveal>

      {/* $149 OFFER */}
      <ScrollReveal><section id="offer" className="py-24 bg-white"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
        <div>
          <span className="eyebrow text-accent">NEW PATIENT SPECIAL</span>
          <h2 className="leading-none"><span className="block text-[clamp(56px,6vw,80px)] font-black text-accent">$149.</span><span className="block text-[clamp(24px,2.5vw,32px)] font-normal text-neutral line-through mt-1">Normally $320.</span></h2>
          <div className="text-[1.2rem] font-bold text-primary my-4">You save $171.</div>
          <p className="text-[0.95rem] text-text-muted mb-2">Includes: Consultation &middot; Comprehensive Exam &middot; Spinal X-Rays &middot; First Adjustment</p>
          <p className="text-[0.88rem] text-text-muted mb-7">sEMG nerve scan included. Same-day appointments available.</p>
          <Link href="/schedule" className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-[16px] font-bold text-[1.05rem] hover:bg-primary-dark transition-all">Book Your $149 Exam &rarr;</Link>
          <p className="text-[0.85rem] text-text-muted mt-4">Se Habla Espa&ntilde;ol &middot; (817) 962-0182</p>
        </div>
        <div className="bg-white rounded-[18px] shadow-[var(--shadow-card-lg)] border-t-4 border-accent overflow-hidden p-8">
          <div className="text-[1.2rem] font-black mb-5 text-center"><span className="text-accent">$149</span> New Patient Exam</div>
          <form className="space-y-3.5">
            <input type="text" placeholder="First Name" className="w-full px-3.5 py-3 border-[1.5px] border-border rounded-[10px] text-[0.9rem] bg-linen focus:border-primary focus:bg-white outline-none transition-colors" />
            <input type="text" placeholder="Last Name" className="w-full px-3.5 py-3 border-[1.5px] border-border rounded-[10px] text-[0.9rem] bg-linen focus:border-primary focus:bg-white outline-none transition-colors" />
            <input type="tel" placeholder="Phone" className="w-full px-3.5 py-3 border-[1.5px] border-border rounded-[10px] text-[0.9rem] bg-linen focus:border-primary focus:bg-white outline-none transition-colors" />
            <input type="email" placeholder="Email" className="w-full px-3.5 py-3 border-[1.5px] border-border rounded-[10px] text-[0.9rem] bg-linen focus:border-primary focus:bg-white outline-none transition-colors" />
            <button type="submit" className="w-full py-3.5 bg-primary text-white rounded-[16px] font-bold text-[0.95rem] hover:bg-primary-dark transition-colors cursor-pointer">Book Now &rarr;</button>
          </form>
        </div>
      </div></section></ScrollReveal>

      {/* 5 ESSENTIALS */}
      <ScrollReveal><section className="py-24 bg-linen"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <div className="text-center mb-14"><span className="eyebrow text-sage">THE MAXLIVING DIFFERENCE</span><h2><span className="block text-[clamp(28px,3vw,40px)] font-normal">Five essentials.</span><span className="block text-[clamp(36px,4vw,56px)] font-black">One vital life.</span></h2></div>
        <div className="flex flex-wrap justify-center gap-7">
          {[
            { name: "Chiropractic", desc: "Spinal correction restoring nervous system function.", color: "bg-primary" },
            { name: "Nutrition", desc: "Personalized plans with Katy Moore.", color: "bg-sage" },
            { name: "Exercise", desc: "Movement strategies for every body.", color: "bg-accent" },
            { name: "Mindset", desc: "Stress management and resilience.", color: "bg-neutral" },
            { name: "Toxin Reduction", desc: "Detox programs for better health.", color: "bg-warm" },
          ].map((ess) => (
            <div key={ess.name} className="text-center flex-[0_0_calc(33%-20px)] lg:flex-[0_0_calc(20%-22px)] min-w-[140px]">
              <div className={`w-[72px] h-[72px] rounded-full ${ess.color} text-white flex items-center justify-center mx-auto mb-4 shadow-[var(--shadow-card)] hover:scale-110 transition-transform`}><SpineIcon className="w-8 h-8" /></div>
              <h4 className="text-[0.85rem] font-extrabold uppercase tracking-[0.08em] mb-1.5">{ess.name}</h4>
              <p className="text-[0.8rem] text-text-muted leading-snug">{ess.desc}</p>
            </div>
          ))}
        </div>
      </div></section></ScrollReveal>

      {/* FAQ */}
      <ScrollReveal><section className="py-24 bg-white"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <div className="text-center mb-12"><span className="eyebrow text-neutral">COMMON QUESTIONS</span><h2><span className="block text-[clamp(28px,3vw,40px)] font-normal">Your questions,</span><span className="block text-[clamp(36px,4vw,52px)] font-black">answered.</span></h2></div>
        <div className="max-w-[800px] mx-auto"><FAQAccordion items={faqItems} /></div>
      </div></section></ScrollReveal>

      {/* FINAL CTA */}
      <ScrollReveal><section className="py-24 bg-soft-teal text-center"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <h2 className="mb-7"><span className="block text-[clamp(28px,3vw,44px)] font-normal">Your family&apos;s</span><span className="block text-[clamp(48px,5vw,72px)] font-black text-primary">vitality</span><span className="block text-[clamp(28px,3vw,44px)] font-normal">starts here.</span></h2>
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          <Link href="/schedule" className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-white rounded-[16px] font-bold text-[1.05rem] hover:bg-accent-dark transition-all">Book Your $149 Exam &rarr;</Link>
          <a href="tel:8179620182" className="inline-flex items-center gap-2 px-10 py-4 border-2 border-neutral text-neutral rounded-[16px] font-bold text-[1.05rem] hover:bg-neutral hover:text-white transition-all">Call (817) 962-0182</a>
        </div>
        <p className="text-[0.85rem] text-text-muted">Se Habla Espa&ntilde;ol <span className="mx-2 opacity-40">|</span> 3 Doctors <span className="mx-2 opacity-40">|</span> Open 1st &amp; 3rd Saturdays <span className="mx-2 opacity-40">|</span> All Ages Welcome</p>
      </div></section></ScrollReveal>
    </>
  );
}
