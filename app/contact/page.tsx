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
                    ["Monday", "7:30am – 10:30am, 3:00pm – 6:00pm"],
                    ["Tuesday", "11:00am – 2:00pm"],
                    ["Wednesday", "7:30am – 10:30am, 3:00pm – 6:00pm"],
                    ["Thursday", "3:00pm – 6:00pm"],
                    ["Friday", "7:00am – 10:00am"],
                    ["Saturday", "1st & 3rd: 8:00am – 9:30am"],
                    ["Sunday", "Closed"],
                  ].map(([day, hrs]) => (
                    <div key={day} className="flex justify-between"><span className="font-semibold">{day}</span><span className={hrs === "Closed" ? "text-text-muted" : ""}>{hrs}</span></div>
                  ))}
                </div>
              </div>
              <div className="bg-deep-teal rounded-[16px] p-6 text-linen">
                <h4 className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-primary mb-3">MAP</h4>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.1!2d-97.1088!3d32.7157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e62d0e97a762d%3A0xa8d098f9f91c3e05!2sVitality%20Family%20Chiropractic!5e0!3m2!1sen!2sus!4v1709744000000!5m2!1sen!2sus" width="100%" height="200" style={{ border: 0, borderRadius: "10px" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Vitality Family Chiropractic location map" />
              </div>
            </div>
          </div>
        </div>
      </div></section></ScrollReveal>

      <ConversionCTA headline="Ready to book?" subtext='Schedule your <span class="text-accent">$67</span> new patient exam.' />
    </>
  );
}
