"use client";

import { useState } from "react";
import { PlusIcon } from "./Icons";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-[800px]">
      {items.map((item, i) => (
        <div key={i} className="faq-item border-b border-border-light overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full py-5 flex justify-between items-center cursor-pointer gap-4 text-left"
          >
            <h3 className="text-base font-bold text-text">{item.question}</h3>
            <div
              className={`faq-icon w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                openIndex === i ? "bg-primary" : "bg-linen"
              }`}
            >
              <PlusIcon
                className={`w-3.5 h-3.5 transition-all duration-300 ${
                  openIndex === i ? "text-white rotate-45" : "text-primary"
                }`}
              />
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-400 ${
              openIndex === i ? "max-h-[300px] opacity-100 pb-5" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-[0.9rem] text-text-muted leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
