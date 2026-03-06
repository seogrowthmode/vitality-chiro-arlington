import Link from "next/link";

interface ConversionCTAProps {
  headline?: string;
  subtext?: string;
  bgClass?: string;
}

export default function ConversionCTA({
  headline = "Ready to start?",
  subtext = "Book your $149 new patient exam today.",
  bgClass = "bg-deep-teal",
}: ConversionCTAProps) {
  return (
    <section className={`py-20 ${bgClass} text-center text-linen`}>
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <h2 className="text-[clamp(28px,3.5vw,44px)] font-black mb-2">{headline}</h2>
        <p className="text-base opacity-70 mb-7" dangerouslySetInnerHTML={{ __html: subtext }} />
        <div className="flex justify-center gap-4 mb-5 flex-wrap">
          <Link
            href="/schedule"
            className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-white rounded-[16px] font-bold text-[1.05rem] hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] transition-all"
          >
            Book Your $149 Exam &rarr;
          </Link>
          <a
            href="tel:8179620182"
            className="inline-flex items-center gap-2 px-10 py-4 bg-transparent border-2 border-linen/30 text-linen rounded-[16px] font-bold text-[1.05rem] hover:bg-neutral hover:text-white hover:-translate-y-0.5 transition-all"
          >
            Call (817) 962-0182
          </a>
        </div>
        <p className="text-[0.82rem] opacity-50">Se Habla Espa&ntilde;ol &bull; 3 Doctors on Staff &bull; All Ages Welcome</p>
      </div>
    </section>
  );
}
