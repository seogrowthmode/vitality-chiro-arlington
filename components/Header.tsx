"use client";

import Link from "next/link";
import { useState } from "react";
import { PhoneIcon, LogoIcon } from "./Icons";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/team", label: "Our Team" },
  { href: "/#services", label: "Services" },
  { href: "/new-patient", label: "New Patients" },
  { href: "/testimonials", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <div className="hidden lg:flex gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.85rem] font-semibold text-text hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
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
          <div className="lg:hidden absolute top-[72px] left-0 right-0 bg-white/98 flex flex-col p-5 gap-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)] z-50">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.95rem] font-semibold text-text hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:8179620182" className="text-[0.95rem] font-bold text-primary">
              (817) 962-0182
            </a>
            <Link
              href="/schedule"
              className="bg-primary text-white text-center py-3 rounded-[16px] font-bold"
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
