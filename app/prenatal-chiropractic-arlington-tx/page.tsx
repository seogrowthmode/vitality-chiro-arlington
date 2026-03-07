import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import ConversionCTA from "@/components/ConversionCTA";
import ReviewCard from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: "Prenatal Chiropractic in Arlington TX",
  description: "Webster-certified prenatal chiropractic in Arlington TX. Two specialists for safer pregnancies, less pain, easier deliveries. $149 exam. Se Habla Español.",
};

export default function PrenatalPage() {
  return (
    <>
      <PageHero variant="sage-soft" eyebrow="PRENATAL CHIROPRACTIC IN ARLINGTON" eyebrowColor="sage" titleSmall="The safest hands" titleLarge="for you and baby." titleLargeColor="sage" subtitle="Two Webster-certified doctors specializing in prenatal care. Safer pregnancies, less pain, easier deliveries. Se Habla Español.">
        <div className="mt-7 flex gap-3 flex-wrap">
          <Link href="/schedule" className="inline-flex items-center gap-2 px-10 py-4 bg-sage text-white rounded-[16px] font-bold text-[1.05rem] hover:opacity-90 transition-all">Book Your $149 Prenatal Exam &rarr;</Link>
          <a href="tel:8179620182" className="inline-flex items-center gap-2 px-10 py-4 border-2 border-white/40 text-white rounded-[16px] font-bold text-[1.05rem] hover:bg-white/10 transition-all">Call (817) 962-0182</a>
        </div>
      </PageHero>

      {/* WEBSTER EXPLAINED */}
      <ScrollReveal><section className="py-20 bg-white"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
          <div>
            <span className="eyebrow text-sage">THE WEBSTER TECHNIQUE</span>
            <h2 className="mb-5"><span className="block text-[clamp(24px,2.5vw,36px)] font-normal">What is the</span><span className="block text-[clamp(30px,3.5vw,48px)] font-black">Webster Technique?</span></h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>The Webster Technique is a specific chiropractic sacral analysis and diversified adjustment. The goal of the adjustment is to reduce the effects of sacral subluxation and SI joint dysfunction. In doing so, neuro-biomechanical function in the pelvis is facilitated.</p>
              <p>In simpler terms: we keep your pelvis balanced so your baby has the most room to grow, move, and position for a healthy birth. Dr. Elise and Dr. Mary are both certified in this technique and use it daily.</p>
              <p className="text-sage font-semibold">Both of our prenatal specialists are Webster Technique certified by the ICPA.</p>
            </div>
          </div>
          <div className="rounded-[18px] overflow-hidden shadow-[var(--shadow-card)] relative min-h-[400px]">
            <Image src="/images/services/prenatal-chiropractic-care-clinic-treatment-3.webp" alt="Webster Technique prenatal chiropractic adjustment — gentle sacral correction for expecting mothers" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
          </div>
        </div>
      </div></section></ScrollReveal>

      {/* TRIMESTER BENEFITS */}
      <ScrollReveal><section className="py-20 bg-[#F5F9ED]"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <span className="eyebrow text-sage">CARE THROUGH EVERY TRIMESTER</span>
        <h2 className="mb-9"><span className="font-normal text-[clamp(28px,3vw,40px)]">Benefits at </span><span className="font-black text-[clamp(36px,4vw,52px)]">every stage.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "First Trimester", desc: "Establish optimal alignment early. Reduce nausea and fatigue by supporting nervous system function. Build a foundation for a comfortable pregnancy from day one." },
            { title: "Second Trimester", desc: "As your body changes, maintain pelvic balance. Reduce round ligament pain, hip discomfort, and mid-back tension. Keep your spine adapting to your growing baby." },
            { title: "Third Trimester", desc: "Optimize baby positioning with Webster Technique. Reduce low back pain and sciatic symptoms. Prepare your pelvis for labor and delivery. Many patients report shorter, easier labors." },
          ].map((t) => (
            <div key={t.title} className="bg-white rounded-[18px] p-8 shadow-[var(--shadow-card)] border-t-4 border-sage hover:-translate-y-1 transition-transform">
              <h4 className="text-[1rem] font-extrabold text-sage mb-2">{t.title}</h4>
              <p className="text-[0.85rem] text-text-muted leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div></section></ScrollReveal>

      {/* WHAT TO EXPECT */}
      <ScrollReveal><section className="py-20 bg-white"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <span className="eyebrow text-sage">YOUR PRENATAL VISIT</span>
        <h2 className="mb-9"><span className="font-normal text-[clamp(28px,3vw,40px)]">What to </span><span className="font-black text-[clamp(36px,4vw,52px)]">expect.</span></h2>
        <div className="max-w-[640px] space-y-8">
          {[
            { num: "01", title: "Prenatal Consultation", desc: "We discuss your pregnancy journey, concerns, birth plan, and goals. We want to support YOUR vision for your pregnancy and delivery." },
            { num: "02", title: "Gentle Assessment", desc: "Pregnancy-safe evaluation using specialized tables with belly drop-outs. We assess your pelvis, spine, and overall alignment without any discomfort." },
            { num: "03", title: "Webster Adjustment", desc: "Gentle, specific adjustments tailored to your stage of pregnancy. Most moms feel immediate relief and look forward to their next visit." },
          ].map((step) => (
            <div key={step.num} className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-full bg-sage text-white flex items-center justify-center font-black text-[1.1rem] flex-shrink-0">{step.num}</div>
              <div><h4 className="text-base font-bold mb-1">{step.title}</h4><p className="text-[0.88rem] text-text-muted leading-relaxed">{step.desc}</p></div>
            </div>
          ))}
        </div>
      </div></section></ScrollReveal>

      {/* YOUR DOCTORS */}
      <ScrollReveal><section className="py-20 bg-linen"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <span className="eyebrow text-sage">YOUR PRENATAL DOCTORS</span>
        <h2 className="mb-9"><span className="font-normal text-[clamp(28px,3vw,40px)]">Meet your </span><span className="font-black text-[clamp(36px,4vw,52px)]">specialists.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-[18px] overflow-hidden shadow-[var(--shadow-card)] border-t-4 border-primary">
            <div className="h-[320px] overflow-hidden"><Image src="/images/staff/dr-elise-hernandez.jpg" alt="Dr. Elise Hernandez" width={600} height={320} className="w-full h-full object-cover object-top" /></div>
            <div className="p-6">
              <div className="text-[1.1rem] font-extrabold mb-1">Dr. Elise Hernandez, D.C.</div>
              <div className="text-[0.8rem] font-bold uppercase tracking-[0.1em] mb-2 text-primary">FOUNDER &middot; PRENATAL &amp; PEDIATRIC SPECIALIST</div>
              <p className="text-[0.85rem] text-text-muted leading-relaxed">Second-generation chiropractor. Webster certified. Former WNBA Dallas Wings chiropractor. Passionate about helping moms have healthier pregnancies and easier deliveries.</p>
              <Link href="/team" className="text-primary font-bold text-[0.85rem] mt-3 inline-block">Full Bio &rarr;</Link>
            </div>
          </div>
          <div className="bg-white rounded-[18px] overflow-hidden shadow-[var(--shadow-card)] border-t-4 border-sage">
            <div className="h-[320px] overflow-hidden"><Image src="/images/staff/dr-mary-davis.jpg" alt="Dr. Mary Davis" width={600} height={320} className="w-full h-full object-cover object-top" /></div>
            <div className="p-6">
              <div className="text-[1.1rem] font-extrabold mb-1">Dr. Mary Davis, D.C.</div>
              <div className="text-[0.8rem] font-bold uppercase tracking-[0.1em] mb-2 text-sage">PRENATAL SPECIALIST &middot; PREGNANCY EDUCATOR</div>
              <p className="text-[0.85rem] text-text-muted leading-relaxed">Texas Chiropractic College graduate. Specializes in educating and caring for pregnant women. Her gentle approach makes her a favorite among Arlington&apos;s expecting mothers.</p>
              <Link href="/team" className="text-sage font-bold text-[0.85rem] mt-3 inline-block">Full Bio &rarr;</Link>
            </div>
          </div>
        </div>
      </div></section></ScrollReveal>

      {/* PRENATAL TESTIMONIALS */}
      <ScrollReveal><section className="py-20 bg-deep-teal"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <span className="eyebrow text-primary">MOMS TRUST US</span>
        <h2 className="mb-9"><span className="font-normal text-[clamp(28px,3vw,40px)] text-linen">Prenatal </span><span className="font-black text-[clamp(36px,4vw,52px)] text-primary">reviews.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ReviewCard quote="Dr. Elise changed my pregnancy. After just 3 visits my back pain was gone. She explained everything and made me feel so safe." name="Sarah M." tag="1st Pregnancy" tagColor="sage" />
          <ReviewCard quote="Both my pregnancies were managed by Dr. Mary. The second was SO much easier because I started care in my first trimester." name="Lauren A." tag="2nd Pregnancy" tagColor="sage" even />
          <ReviewCard quote="My baby was breech at 34 weeks. After 3 Webster adjustments she turned. I'm so grateful I found Vitality." name="Jasmine T." tag="Breech Positioning" tagColor="sage" />
        </div>
      </div></section></ScrollReveal>

      {/* $149 OFFER */}
      <ScrollReveal><section className="py-20 bg-white"><div className="max-w-[640px] mx-auto px-5 text-center">
        <span className="eyebrow text-accent">PRENATAL SPECIAL</span>
        <div className="mb-3"><span className="text-[clamp(56px,6vw,72px)] font-black text-accent leading-none">$149</span></div>
        <p className="text-[1.1rem] text-neutral line-through mb-2">Normally $320</p>
        <p className="text-[1.2rem] font-bold text-primary mb-5">Save $171 on your prenatal exam.</p>
        <p className="text-text-muted mb-7">Includes consultation, pregnancy-safe examination, digital X-rays (when appropriate), sEMG nerve scan, and your first Webster adjustment.</p>
        <Link href="/schedule" className="inline-flex items-center gap-2 px-10 py-4 bg-sage text-white rounded-[16px] font-bold text-[1.05rem] hover:opacity-90 transition-all">Book Your Prenatal Exam &rarr;</Link>
        <p className="text-[0.82rem] text-text-muted mt-4">Se Habla Espa&ntilde;ol &middot; (817) 962-0182 &middot; Same-Day Appointments</p>
      </div></section></ScrollReveal>

      <ConversionCTA bgClass="bg-sage" headline="A healthier pregnancy starts here." subtext="Book your prenatal exam with our Webster-certified specialists." />
    </>
  );
}
