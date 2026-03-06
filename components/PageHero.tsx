import Link from "next/link";

interface PageHeroProps {
  variant?: "dark" | "warm" | "teal-soft" | "sage-soft";
  breadcrumbs?: { label: string; href?: string }[];
  eyebrow?: string;
  eyebrowColor?: "teal" | "sage" | "orange" | "blue" | "beige";
  titleSmall?: string;
  titleLarge?: string;
  titleLargeColor?: "teal" | "sage" | "orange";
  subtitle?: string;
  children?: React.ReactNode;
  minHeight?: string;
}

const bgMap = {
  dark: "bg-deep-teal text-linen",
  warm: "bg-linen text-text",
  "teal-soft": "bg-soft-teal text-text",
  "sage-soft": "bg-gradient-to-br from-[#EDF5E0] to-[#F5F9ED] text-text",
};

const eyebrowColorMap = {
  teal: "text-primary",
  sage: "text-sage",
  orange: "text-accent",
  blue: "text-neutral",
  beige: "text-warm",
};

const titleColorMap = {
  teal: "text-primary",
  sage: "text-sage",
  orange: "text-accent",
};

export default function PageHero({
  variant = "dark",
  breadcrumbs,
  eyebrow,
  eyebrowColor = "teal",
  titleSmall,
  titleLarge,
  titleLargeColor = "teal",
  subtitle,
  children,
  minHeight = "min-h-[44vh]",
}: PageHeroProps) {
  return (
    <section className={`${bgMap[variant]} ${minHeight} flex items-center py-24 pb-14 relative`}>
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20 w-full">
        {breadcrumbs && (
          <p className="text-[0.78rem] mb-4 opacity-60">
            {breadcrumbs.map((crumb, i) => (
              <span key={i}>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:opacity-100 transition-opacity">
                    {crumb.label}
                  </Link>
                ) : (
                  crumb.label
                )}
                {i < breadcrumbs.length - 1 && " / "}
              </span>
            ))}
          </p>
        )}
        {eyebrow && (
          <span className={`eyebrow ${eyebrowColorMap[eyebrowColor]}`}>{eyebrow}</span>
        )}
        <h1 className="leading-[1.15] mb-4">
          {titleSmall && (
            <span className="block text-[clamp(28px,3vw,40px)] font-normal">{titleSmall}</span>
          )}
          {titleLarge && (
            <span className={`block text-[clamp(36px,4.5vw,56px)] font-black ${titleColorMap[titleLargeColor]}`}>
              {titleLarge}
            </span>
          )}
        </h1>
        {subtitle && (
          <p className={`text-[1.05rem] max-w-[600px] leading-relaxed ${variant === "dark" ? "text-linen/70" : "opacity-80"}`}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
