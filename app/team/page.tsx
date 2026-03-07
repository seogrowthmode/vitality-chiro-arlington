import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import ConversionCTA from "@/components/ConversionCTA";
import ReviewCard from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet Dr. Elise Hernandez, Dr. Mary Davis, and Dr. Chad London. Three doctors, three specialties. Prenatal, pediatric, and sports chiropractic in Arlington TX.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero variant="dark" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Team" }]} eyebrow="OUR DOCTORS & STAFF" eyebrowColor="teal" titleSmall="Three doctors. Three specialties." titleLarge="Your family covered." />

      {/* DR. ELISE */}
      <ScrollReveal><section className="py-20 bg-white"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-14 items-center">
          <div className="rounded-[18px] overflow-hidden shadow-[var(--shadow-card)]"><Image src="/images/staff/dr-elise-hernandez.jpg" alt="Dr. Elise Hernandez" width={600} height={480} className="w-full object-cover object-top" /></div>
          <div className="border-l-4 border-primary pl-7">
            <span className="eyebrow text-primary">FOUNDER &amp; PRENATAL SPECIALIST</span>
            <h2 className="text-[1.8rem] font-black mb-4">Dr. Elise Hernandez, D.C.</h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>Second-generation chiropractor who grew up watching her father change lives. Graduated from the University of Florida and earned her Doctor of Chiropractic at Life University.</p>
              <p>Became the official chiropractor for the WNBA&apos;s Dallas Wings. Co-hosted MaxLiving Radio. In 2017, she opened Vitality Family Chiropractic in Arlington.</p>
              <p>Today she specializes in prenatal and pediatric chiropractic with Webster Technique certification.</p>
            </div>
            <blockquote className="border-l-[3px] border-primary p-4 my-6 bg-soft-teal rounded-r-[10px]"><p className="text-[1.1rem] text-deep-teal">&ldquo;We empower patients with both knowledge and healing.&rdquo;</p></blockquote>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-4 py-1.5 rounded-full text-[0.75rem] font-bold bg-primary text-white">Former WNBA Dallas Wings Chiropractor</span>
              <span className="px-4 py-1.5 rounded-full text-[0.75rem] font-bold bg-sage text-white">MaxLiving Certified</span>
              <span className="px-4 py-1.5 rounded-full text-[0.75rem] font-bold bg-soft-teal text-primary">Webster Technique</span>
            </div>
            <p className="text-[0.88rem] text-text-muted">When she&apos;s not in the office, Dr. Elise enjoys family time and her chihuahua Presley.</p>
          </div>
        </div>
      </div></section></ScrollReveal>

      {/* DR. MARY */}
      <ScrollReveal><section className="py-20 bg-linen"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-14 items-center">
          <div className="border-l-4 border-sage pl-7">
            <span className="eyebrow text-sage">PRENATAL SPECIALIST</span>
            <h2 className="text-[1.8rem] font-black mb-4">Dr. Mary Davis, D.C.</h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>Graduate of Texas Chiropractic College. Dr. Mary&apos;s passion lies in educating and caring for pregnant women through their chiropractic journey.</p>
              <p>Her gentle approach and deep knowledge of pregnancy biomechanics make her a favorite among Arlington&apos;s expecting mothers.</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-5">{["Texas Chiropractic College", "Prenatal Specialist", "Pregnancy Educator"].map((b) => <span key={b} className="px-4 py-1.5 rounded-full text-[0.75rem] font-bold border-[1.5px] border-sage text-sage">{b}</span>)}</div>
          </div>
          <div className="rounded-[18px] overflow-hidden shadow-[var(--shadow-card)]"><Image src="/images/staff/dr-mary-davis.jpg" alt="Dr. Mary Davis" width={600} height={440} className="w-full object-cover object-top" /></div>
        </div>
      </div></section></ScrollReveal>

      {/* DR. CHAD */}
      <ScrollReveal><section className="py-20 bg-white"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-14 items-center">
          <div className="rounded-[18px] overflow-hidden shadow-[var(--shadow-card)]"><Image src="/images/staff/dr-chad-london.jpg" alt="Dr. Chad London" width={600} height={480} className="w-full object-cover object-top" /></div>
          <div className="border-l-4 border-accent pl-7">
            <span className="eyebrow text-accent">SPORTS &amp; PERFORMANCE</span>
            <h2 className="text-[1.8rem] font-black mb-4">Dr. Chad London, D.C., CCSP</h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>Born in Johannesburg, South Africa. Graduated from Palmer College of Chiropractic in 2012. Spent 6 years as a professional rugby player with the Dallas Jackals.</p>
              <p>Joined Vitality in 2020. Certified Sports Chiropractic Physician (CCSP) with FAKTR soft tissue certification and Webster Technique training.</p>
            </div>
            <div className="flex flex-wrap gap-2 my-5">{["CCSP", "FAKTR", "Webster", "Former Dallas Jackals"].map((b) => <span key={b} className="px-4 py-1.5 rounded-full text-[0.75rem] font-bold border-[1.5px] border-accent text-accent">{b}</span>)}</div>
            <p className="text-[0.88rem] text-text-muted">Outside the office, Dr. Chad enjoys golfing, hiking, and outdoor activities.</p>
          </div>
        </div>
      </div></section></ScrollReveal>

      {/* SUPPORT TEAM */}
      <ScrollReveal><section className="py-20 bg-deep-teal"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <span className="eyebrow text-primary">THE TEAM BEHIND THE TEAM</span>
        <h2 className="mb-10"><span className="font-normal text-[clamp(28px,3vw,40px)] text-linen">Meet our </span><span className="font-black text-[clamp(36px,4vw,52px)] text-primary">support staff.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Katy Moore", role: "CLINIC DIRECTOR & METABOLIX SPECIALIST", roleColor: "text-sage", bio: "MaxLiving Nutrition certified since 2020. Personalized nutrition coaching using Genova Labs Metabolix testing.", img: "/images/staff/katy-moore.jpg" },
            { name: "Beth Humphus", role: "PATIENT COORDINATOR", roleColor: "text-primary", bio: "Joined 2023. Beth keeps the practice running smoothly and makes every patient feel at home.", img: "/images/staff/beth-humphus.jpg" },
            { name: "Tiffany Bogan", role: "NEW PATIENT COORDINATOR", roleColor: "text-accent", bio: "20+ years of finance experience. Ensures every new patient has a seamless first experience.", img: "/images/staff/tiffany-bogan.jpg" },
          ].map((s) => (
            <div key={s.name} className="bg-deep-teal-hi border border-primary/15 rounded-[18px] overflow-hidden">
              <div className="rounded-[18px] overflow-hidden"><Image src={s.img} alt={s.name} width={400} height={320} className="w-full object-cover object-top" /></div>
              <div className="p-6"><div className="text-[1.1rem] font-extrabold text-linen mb-1">{s.name}</div><div className={`text-[0.8rem] font-bold uppercase tracking-[0.1em] mb-2 ${s.roleColor}`}>{s.role}</div><p className="text-[0.85rem] text-linen/70 leading-relaxed">{s.bio}</p></div>
            </div>
          ))}
        </div>
      </div></section></ScrollReveal>

      {/* TEAM GROUP PHOTO */}
      <ScrollReveal><section className="py-20 bg-linen"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20 text-center">
        <span className="eyebrow text-primary">THE VITALITY FAMILY</span>
        <h2 className="mb-8"><span className="font-normal text-[clamp(28px,3vw,40px)]">One team. </span><span className="font-black text-[clamp(36px,4vw,52px)]">One mission.</span></h2>
        <div className="rounded-[18px] overflow-hidden shadow-[var(--shadow-card)]"><Image src="/images/team/team-mission-wall.jpg" alt="The Vitality Family Chiropractic team — doctors and staff in Arlington, TX" width={1200} height={600} className="w-full object-cover object-top" /></div>
      </div></section></ScrollReveal>

      {/* TESTIMONIALS */}
      <ScrollReveal><section className="py-20 bg-linen"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <span className="eyebrow text-primary">WHAT PATIENTS SAY</span>
        <h2 className="mb-10"><span className="font-normal text-[clamp(28px,3vw,40px)]">About our </span><span className="font-black text-[clamp(36px,4vw,52px)]">doctors.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ReviewCard quote="Dr. Elise is the most thorough chiropractor I've ever been to. She truly cares about your health journey." name="Lisa R." tag="Dr. Elise" tagColor="teal" />
          <ReviewCard quote="Dr. Mary made my pregnancy so much more comfortable. I went from barely walking at 32 weeks to feeling amazing." name="Christina M." tag="Dr. Mary" tagColor="sage" even />
          <ReviewCard quote="Dr. Chad fixed my shoulder after surgery failed. As a former rugby player, he understands athletes." name="Jake T." tag="Dr. Chad" tagColor="orange" />
        </div>
      </div></section></ScrollReveal>

      <ConversionCTA headline="Your team is ready." subtext='Book your <span class="text-accent">$149</span> new patient exam today.' />
    </>
  );
}
