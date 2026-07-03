"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileCTA() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <div className="mobile-cta-bar fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-3 px-5 z-[950]">
      <div className="flex items-center justify-between gap-3">
        <div className="text-[0.82rem] font-bold text-text">
          New Patient: <span className="text-accent">$67</span> Exam
        </div>
        <Link
          href="/schedule"
          className="px-6 py-3 bg-primary text-white rounded-[16px] font-bold text-[0.85rem] whitespace-nowrap"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
