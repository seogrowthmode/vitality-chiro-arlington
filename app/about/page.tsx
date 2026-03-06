import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import ConversionCTA from "@/components/ConversionCTA";
import ReviewCard from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Vitality Family Chiropractic — one of the largest family chiropractic practices in Texas. Three doctors, bilingual staff, all ages welcome since 2017.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero variant="warm" breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]} eyebrow="OUR STORY" eyebrowColor="teal" titleSmall="One of the largest" titleLarge="family practices in Texas." subtitle="Three doctors. Bilingual staff. All ages welcome since 2017." />

      {/* OUR STORY */}
      <ScrollReveal><section className="py-20 bg-white"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
          <div>
            <span className="eyebrow text-sage">HOW IT STARTED</span>
            <h2 className="mb-5"><span className="block text-[clamp(24px,2.5vw,36px)] font-normal">A lifetime in</span><span className="block text-[clamp(30px,3.5vw,48px)] font-black">chiropractic care.</span></h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>Dr. Elise Hernandez grew up watching her father adjust patients. After completing her degrees at the University of Florida and Life University, she became the official chiropractor for the WNBA&apos;s Dallas Wings.</p>
              <p>She co-hosted MaxLiving Radio, reaching thousands of families with health education. In 2017, she opened Vitality Family Chiropractic in Arlington with a vision: whole-family wellness under one roof.</p>
              <p>Today, with Dr. Mary Davis and Dr. Chad London, the practice has grown into one of the largest family chiropractic centers in Texas.</p>
            </div>
          </div>
          <div className="rounded-[18px] overflow-hidden shadow-[var(--shadow-card)] bg-linen min-h-[360px] flex items-center justify-center text-[0.85rem] text-text-muted text-center p-6">Editorial team photo &mdash; all three doctors together, bright clinic, natural light</div>
        </div>
      </div></section></ScrollReveal>

      {/* WHAT WE BELIEVE */}
      <ScrollReveal><section className="py-20 bg-deep-teal"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <div className="text-center mb-12"><span className="eyebrow text-primary">WHAT WE BELIEVE</span><h2 className="text-linen"><span className="block text-linen/70 text-[clamp(24px,2.5vw,36px)] font-normal">The principles that</span><span className="block text-[clamp(30px,3.5vw,48px)] font-black">guide everything we do.</span></h2></div>
        <div className="max-w-[860px] mx-auto space-y-10">
          {[
            { word: "Health", color: "text-primary", text: "begins in the spine." },
            { word: "Families", color: "text-sage", text: "deserve better than symptom management." },
            { word: "Every", color: "text-accent", text: "age deserves care — from newborns to grandparents." },
            { word: "Your", color: "text-neutral", text: "body was designed to heal itself." },
            { word: "Wellness", color: "text-warm", text: "is a journey, not a destination." },
          ].map((b, i) => (
            <p key={i} className="text-[clamp(22px,2.5vw,32px)] font-bold text-linen/85 leading-snug"><span className={`font-black text-[clamp(28px,3vw,40px)] ${b.color}`}>{b.word}</span> {b.text}</p>
          ))}
        </div>
      </div></section></ScrollReveal>

      {/* STATS */}
      <ScrollReveal><section className="py-20 bg-linen"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <div className="text-center mb-3"><span className="eyebrow text-primary">BY THE NUMBERS</span></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-center py-12">
          {[
            { num: "4.9★", label: "Google Rating" }, { num: "370+", label: "Reviews" }, { num: "3", label: "Doctors on Staff" }, { num: "2017", label: "Established" }, { num: "Si", label: "Se Habla Espanol" }, { num: "All", label: "Ages Welcome" },
          ].map((s) => (
            <div key={s.label}><div className="text-[clamp(28px,3vw,42px)] font-black text-primary leading-none">{s.num}</div><div className="text-[0.82rem] text-text-muted mt-1.5 font-semibold">{s.label}</div></div>
          ))}
        </div>
      </div></section></ScrollReveal>

      {/* CREDENTIALS */}
      <ScrollReveal><section className="py-20 bg-white"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <div className="text-center mb-12"><span className="eyebrow text-accent">RECOGNITION</span><h2><span className="block text-[clamp(24px,2.5vw,36px)] font-normal">Awards &amp;</span><span className="block text-[clamp(30px,3.5vw,48px)] font-black">Credentials.</span></h2></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "WNBA Dallas Wings", desc: "Official Team Chiropractor for the Dallas Wings professional basketball team.", iconBg: "bg-soft-teal text-primary" },
            { title: "MaxLiving Radio", desc: "Co-Host reaching thousands of families with natural health education.", iconBg: "bg-sage-light text-sage" },
            { title: "MaxLiving Health Center", desc: "Certified MaxLiving Health Center following the 5 Essentials.", iconBg: "bg-accent-light text-accent" },
            { title: "Community Leaders Award", desc: "Recognized for outstanding community leadership and dedication to Arlington families.", iconBg: "bg-neutral-light text-neutral" },
          ].map((c) => (
            <div key={c.title} className="bg-white rounded-[16px] p-8 shadow-[var(--shadow-card)] text-center hover:-translate-y-1 transition-transform">
              <div className={`w-14 h-14 rounded-full ${c.iconBg} flex items-center justify-center mx-auto mb-4`}>
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="5"/><path d="M7 13l-2 8 7-4 7 4-2-8"/></svg>
              </div>
              <h4 className="text-[0.95rem] font-extrabold mb-1.5">{c.title}</h4>
              <p className="text-[0.82rem] text-text-muted leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div></section></ScrollReveal>

      {/* TEAM PREVIEW */}
      <ScrollReveal><section className="py-20 bg-linen"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <div className="text-center mb-12"><span className="eyebrow text-primary">OUR DOCTORS</span><h2><span className="block text-[clamp(24px,2.5vw,36px)] font-normal">Meet the team behind</span><span className="block text-[clamp(30px,3.5vw,48px)] font-black">your family&apos;s health.</span></h2></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {[
            { name: "Dr. Elise Hernandez, D.C.", role: "Founder & Lead Doctor", roleColor: "text-primary", bio: "Former WNBA Dallas Wings chiropractor. University of Florida and Life University graduate." },
            { name: "Dr. Mary Davis, D.C.", role: "Associate Doctor", roleColor: "text-sage", bio: "Specializing in prenatal and pediatric chiropractic care." },
            { name: "Dr. Chad London, D.C.", role: "Associate Doctor", roleColor: "text-accent", bio: "Sports and corrective care specialist. Former professional rugby player." },
          ].map((doc) => (
            <div key={doc.name} className="bg-white rounded-[18px] overflow-hidden shadow-[var(--shadow-card)] hover:-translate-y-1 transition-transform">
              <div className="h-[320px] bg-linen flex items-center justify-center text-[0.8rem] text-text-muted text-center p-5">{doc.name}</div>
              <div className="p-6"><h3 className="text-[1.1rem] font-extrabold mb-1">{doc.name}</h3><p className={`text-[0.8rem] font-bold uppercase tracking-[0.1em] mb-2 ${doc.roleColor}`}>{doc.role}</p><p className="text-[0.85rem] text-text-muted leading-relaxed">{doc.bio}</p></div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-text-muted mb-4">Plus our bilingual front desk team and wellness coordinators.</p>
          <Link href="/team" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-[16px] font-bold hover:bg-primary-dark transition-all">Meet The Full Team &rarr;</Link>
        </div>
      </div></section></ScrollReveal>

      <ConversionCTA headline="Ready to experience the difference?" subtext='Book your <span class="text-accent">$149</span> new patient exam today.' />
    </>
  );
}
