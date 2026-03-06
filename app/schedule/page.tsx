import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata: Metadata = {
  title: "Schedule Appointment",
  description: "Schedule your $149 new patient exam at Vitality Family Chiropractic in Arlington TX. 3 doctors. Same-day appointments. Se Habla Español.",
};

export default function SchedulePage() {
  return (
    <>
      <PageHero variant="warm" minHeight="min-h-[35vh]" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Schedule" }]} eyebrow="BOOK YOUR APPOINTMENT" eyebrowColor="orange" titleLarge="Schedule your visit." titleLargeColor="teal" subtitle="Same-day appointments available. Se Habla Español." />

      {/* CENTERED FORM */}
      <ScrollReveal><section className="py-20 bg-white"><div className="max-w-[580px] mx-auto px-5">
        <div className="bg-white rounded-[18px] shadow-[var(--shadow-card-lg)] border-t-4 border-primary overflow-hidden p-7 sm:p-10">
          <div className="text-[1.4rem] font-black text-center mb-2"><span className="text-accent">$149</span> New Patient Exam</div>
          <p className="text-center text-[0.88rem] text-text-muted mb-6">Consultation + Exam + X-Rays + First Adjustment<br /><span className="text-primary font-bold">Save $171</span> &mdash; normally $320</p>
          <AppointmentForm pageSource="schedule" variant="full" />
        </div>

        {/* TRUST STRIP */}
        <div className="mt-8 flex items-center justify-center gap-2 text-[0.88rem] text-text-muted font-semibold flex-wrap">
          <span className="text-accent">&#9733;&#9733;&#9733;&#9733;&#9733;</span> 4.9 <span>&middot;</span> 370+ Reviews <span>&middot;</span> 3 Doctors <span>&middot;</span> Saturday Hours Available
        </div>

        {/* PREFER TO CALL */}
        <div className="mt-10 text-center p-8 bg-linen rounded-[18px]">
          <p className="text-[1rem] font-bold mb-2">Prefer to call?</p>
          <p className="text-[2rem] font-black text-primary mb-2"><a href="tel:8179620182" className="text-primary">(817) 962-0182</a></p>
          <p className="text-[0.85rem] text-text-muted">Our team is ready to help &middot; Se Habla Espa&ntilde;ol</p>
        </div>
      </div></section></ScrollReveal>
    </>
  );
}
