import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import ConversionCTA from "@/components/ConversionCTA";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Vitality Family Chiropractic in Arlington TX. (817) 962-0182. 1106 W. Pioneer Parkway, Suite 300. Se Habla Español.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero variant="dark" minHeight="min-h-[35vh]" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} eyebrow="GET IN TOUCH" eyebrowColor="teal" titleLarge="Let's talk." />

      <ScrollReveal><section className="py-20 bg-white"><div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-black text-2xl mb-5">Send Us a Message</h2>
            <div className="bg-white rounded-[18px] shadow-[var(--shadow-card-lg)] border-t-4 border-primary overflow-hidden p-7">
              <AppointmentForm pageSource="contact" variant="contact" />
            </div>
          </div>
          <div>
            <h2 className="font-black text-2xl mb-5">Contact Information</h2>
            <div className="space-y-5">
              <div className="bg-linen rounded-[16px] p-6">
                <h4 className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-primary mb-3">ADDRESS</h4>
                <p className="text-[0.95rem] leading-relaxed">1106 W. Pioneer Parkway<br />Suite 300<br />Arlington, TX 76013</p>
              </div>
              <div className="bg-linen rounded-[16px] p-6">
                <h4 className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-primary mb-3">PHONE &amp; EMAIL</h4>
                <p className="text-[0.95rem] leading-relaxed"><a href="tel:8179620182" className="text-primary font-bold">(817) 962-0182</a><br /><a href="mailto:info@vitalitychiroarlington.com" className="text-text">info@vitalitychiroarlington.com</a></p>
                <p className="text-[0.82rem] text-sage font-semibold mt-1.5">Se Habla Espa&ntilde;ol</p>
              </div>
              <div className="bg-linen rounded-[16px] p-6">
                <h4 className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-primary mb-3">OFFICE HOURS</h4>
                <div className="text-[0.88rem] leading-relaxed space-y-1">
                  {[
                    ["Monday", "8:00am – 11:00am, 3:00pm – 6:30pm"],
                    ["Tuesday", "2:30pm – 6:00pm"],
                    ["Wednesday", "8:00am – 11:00am, 3:00pm – 6:30pm"],
                    ["Thursday", "2:30pm – 6:00pm"],
                    ["Friday", "Closed"],
                    ["Saturday", "1st & 3rd: 8:00am – 9:30am"],
                    ["Sunday", "Closed"],
                  ].map(([day, hrs]) => (
                    <div key={day} className="flex justify-between"><span className="font-semibold">{day}</span><span className={hrs === "Closed" ? "text-text-muted" : ""}>{hrs}</span></div>
                  ))}
                </div>
              </div>
              <div className="bg-deep-teal rounded-[16px] p-6 text-linen">
                <h4 className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-primary mb-3">MAP</h4>
                <div className="bg-primary/10 rounded-[10px] h-[200px] flex items-center justify-center text-[0.82rem] text-linen/50">Google Maps embed &mdash; 1106 W. Pioneer Pkwy, Arlington TX</div>
              </div>
            </div>
          </div>
        </div>
      </div></section></ScrollReveal>

      <ConversionCTA headline="Ready to book?" subtext='Schedule your <span class="text-accent">$149</span> new patient exam.' />
    </>
  );
}
