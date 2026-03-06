import Link from "next/link";
import { FacebookIcon, InstagramIcon, YouTubeIcon, CheckIcon } from "./Icons";

const serviceLinks = [
  { href: "/chiropractic-adjustments-arlington-tx", label: "Chiropractic Adjustments" },
  { href: "/prenatal-chiropractic-arlington-tx", label: "Prenatal Chiropractic" },
  { href: "/pediatric-chiropractor-arlington-tx", label: "Pediatric Chiropractic" },
  { href: "/sports-chiropractor-arlington-tx", label: "Sports Chiropractic" },
  { href: "/maxliving-5-essentials-arlington-tx", label: "MaxLiving 5 Essentials" },
  { href: "/advanced-spinal-correction-arlington-tx", label: "Spinal Correction" },
];

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Our Team" },
  { href: "/new-patient", label: "New Patients" },
  { href: "/testimonials", label: "Reviews" },
  { href: "/schedule", label: "Schedule" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-deep-teal pt-20 pb-10 text-linen">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <p className="text-[1.1rem] font-black text-white">Vitality Family Chiropractic</p>
            <span className="inline-flex items-center gap-1.5 text-[0.72rem] font-semibold text-primary border border-primary/30 rounded-full px-3 py-1 w-fit">
              <CheckIcon className="w-3.5 h-3.5" />
              MaxLiving Health Center
            </span>
            <p className="text-[0.82rem] text-linen/60 leading-relaxed">
              One of the largest family wellness practices in Texas. Three doctors. Bilingual staff. All ages welcome.
            </p>
            <p className="text-[0.82rem] text-linen/60 mt-1">English &middot; Espa&ntilde;ol</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-primary mb-4">Services</h4>
            <div className="flex flex-col">
              {serviceLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-[0.85rem] text-linen/70 py-0.5 hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-primary mb-4">Quick Links</h4>
            <div className="flex flex-col">
              {quickLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-[0.85rem] text-linen/70 py-0.5 hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-primary mb-4">Visit Us</h4>
            <p className="text-[0.85rem] text-linen/70 leading-relaxed">
              1106 W. Pioneer Parkway<br />Suite 300<br />Arlington, TX 76013
            </p>
            <p className="mt-3">
              <a href="tel:8179620182" className="text-[0.85rem] text-linen/70 hover:text-primary transition-colors">(817) 962-0182</a>
            </p>
            <p>
              <a href="mailto:info@vitalitychiroarlington.com" className="text-[0.85rem] text-linen/70 hover:text-primary transition-colors">
                info@vitalitychiroarlington.com
              </a>
            </p>
            <div className="mt-4">
              <h4 className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-primary mb-3">Hours</h4>
              <p className="text-[0.82rem] text-linen/50 leading-relaxed">
                Mon/Wed: 7:30am &ndash; 10:30am, 3:00pm &ndash; 6:00pm<br />
                Tue: 11:00am &ndash; 2:00pm<br />
                Thu: 3:00pm &ndash; 6:00pm<br />
                Fri: 7:00am &ndash; 10:00am<br />
                1st &amp; 3rd Sat: 8:00am &ndash; 9:30am<br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary/15 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[0.78rem] text-linen/40">
            &copy; {new Date().getFullYear()} Vitality Family Chiropractic &middot; Se Habla Espa&ntilde;ol &middot; MaxLiving Health Center
          </p>
          <div className="flex gap-3">
            {[
              { icon: <FacebookIcon className="w-4 h-4" />, label: "Facebook", href: "https://www.facebook.com/vitalityfamilychiropractic/" },
              { icon: <InstagramIcon className="w-4 h-4" />, label: "Instagram", href: "https://www.instagram.com/thedocelise/" },
              { icon: <YouTubeIcon className="w-4 h-4" />, label: "YouTube", href: "https://www.youtube.com/@thedocelise" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-full border border-primary/30 flex items-center justify-center text-linen/60 hover:bg-primary hover:border-primary hover:text-white transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
