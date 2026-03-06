"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { PhoneIcon, LogoIcon } from "./Icons";

const serviceLinks = [
  { href: "/chiropractic-adjustments-arlington-tx", label: "Chiropractic Adjustments" },
  { href: "/prenatal-chiropractic-arlington-tx", label: "Prenatal Chiropractic" },
  { href: "/pediatric-chiropractor-arlington-tx", label: "Pediatric Chiropractic" },
  { href: "/sports-chiropractor-arlington-tx", label: "Sports Chiropractic" },
  { href: "/advanced-spinal-correction-arlington-tx", label: "Spinal Correction" },
  { href: "/family-chiropractic-arlington-tx", label: "Family Chiropractic" },
  { href: "/maxliving-5-essentials-arlington-tx", label: "MaxLiving 5 Essentials" },
  { href: "/auto-accident-chiropractor-arlington-tx", label: "Auto Accident Care" },
];

const conditionLinks = [
  { href: "/back-pain-treatment-arlington-tx", label: "Back Pain" },
  { href: "/neck-pain-treatment-arlington-tx", label: "Neck Pain" },
  { href: "/headache-migraine-relief-arlington-tx", label: "Headaches & Migraines" },
  { href: "/sciatica-treatment-arlington-tx", label: "Sciatica" },
  { href: "/herniated-disc-treatment-arlington-tx", label: "Herniated Disc" },
];

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/team", label: "Our Team" },
  { href: "/new-patient", label: "New Patients" },
  { href: "/testimonials", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 200);
  };

  return (
    <>
      {/* Banner */}
      <div className="bg-sage text-white text-center py-1.5 text-[0.72rem] font-semibold tracking-wide">
        Se Habla Espa&ntilde;ol <span className="mx-3 opacity-60">|</span> 3 Doctors on Staff <span className="mx-3 opacity-60">|</span> Formerly Dallas Wings WNBA Chiropractor
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-[1000] bg-white/97 backdrop-blur-[12px] shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20 flex items-center justify-between h-[72px]">
          <Link href="/" className="font-black text-lg text-deep-teal flex items-center gap-2">
            <LogoIcon className="w-8 h-8" />
            Vitality Family Chiropractic
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-7 items-center">
            <Link href="/about" className="text-[0.85rem] font-semibold text-text hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/team" className="text-[0.85rem] font-semibold text-text hover:text-primary transition-colors">
              Our Team
            </Link>

            {/* Services Dropdown */}
            <div ref={dropdownRef} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button
                className="text-[0.85rem] font-semibold text-text hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <svg className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                  <div className="bg-white rounded-[16px] shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-black/5 p-5 min-w-[520px] grid grid-cols-2 gap-x-6 gap-y-0.5">
                    <div>
                      <p className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-primary mb-2 px-2">Services</p>
                      {serviceLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block text-[0.84rem] font-medium text-text hover:text-primary hover:bg-soft-teal/50 rounded-lg px-2 py-1.5 transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                    <div>
                      <p className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-accent mb-2 px-2">Conditions</p>
                      {conditionLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block text-[0.84rem] font-medium text-text hover:text-primary hover:bg-soft-teal/50 rounded-lg px-2 py-1.5 transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                      <div className="border-t border-black/5 mt-2 pt-2">
                        <Link
                          href="/faq"
                          className="block text-[0.84rem] font-medium text-text hover:text-primary hover:bg-soft-teal/50 rounded-lg px-2 py-1.5 transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
                          FAQ
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/new-patient" className="text-[0.85rem] font-semibold text-text hover:text-primary transition-colors">
              New Patients
            </Link>
            <Link href="/testimonials" className="text-[0.85rem] font-semibold text-text hover:text-primary transition-colors">
              Reviews
            </Link>
            <Link href="/contact" className="text-[0.85rem] font-semibold text-text hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Right */}
          <div className="flex items-center gap-5">
            <a
              href="tel:8179620182"
              className="hidden md:flex items-center gap-1.5 text-[0.85rem] font-bold text-text"
            >
              <PhoneIcon className="w-4 h-4 text-primary" />
              (817) 962-0182
            </a>
            <Link
              href="/schedule"
              className="hidden sm:inline-flex bg-primary text-white px-5 py-2.5 rounded-[16px] font-bold text-[0.85rem] hover:bg-primary-dark hover:-translate-y-px transition-all"
            >
              Book Your <span className="font-black text-white ml-1">$149</span> Exam
            </Link>

            {/* Hamburger */}
            <button
              className="flex lg:hidden flex-col gap-[5px] w-7 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span className={`block h-[2.5px] bg-text rounded transition-all ${menuOpen ? "rotate-45 translate-y-[7.5px]" : ""}`} />
              <span className={`block h-[2.5px] bg-text rounded transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-[2.5px] bg-text rounded transition-all ${menuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden absolute top-[72px] left-0 right-0 bg-white/98 flex flex-col p-5 gap-1 shadow-[0_8px_24px_rgba(0,0,0,0.08)] z-50 max-h-[80vh] overflow-y-auto">
            {navLinks.filter(l => l.label !== "Services").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.95rem] font-semibold text-text hover:text-primary py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Services Accordion */}
            <button
              className="text-[0.95rem] font-semibold text-text hover:text-primary py-2 flex items-center justify-between w-full cursor-pointer"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Services
              <svg className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 flex flex-col gap-0.5 pb-2">
                <p className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-primary mt-1 mb-1">Services</p>
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[0.88rem] text-text-muted hover:text-primary py-1.5"
                    onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                  >
                    {link.label}
                  </Link>
                ))}
                <p className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-accent mt-3 mb-1">Conditions</p>
                {conditionLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[0.88rem] text-text-muted hover:text-primary py-1.5"
                    onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            <a href="tel:8179620182" className="text-[0.95rem] font-bold text-primary py-2">
              (817) 962-0182
            </a>
            <Link
              href="/schedule"
              className="bg-primary text-white text-center py-3 rounded-[16px] font-bold mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Book Your $149 Exam
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
