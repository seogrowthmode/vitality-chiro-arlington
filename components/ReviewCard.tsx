interface ReviewCardProps {
  quote: string;
  name: string;
  tag: string;
  tagColor?: "teal" | "sage" | "orange";
  even?: boolean;
}

const tagColorMap = {
  teal: "text-primary",
  sage: "text-sage",
  orange: "text-accent",
};

export default function ReviewCard({ quote, name, tag, tagColor = "teal", even = false }: ReviewCardProps) {
  return (
    <div className={`rounded-[16px] p-5 shadow-[var(--shadow-card)] ${even ? "bg-linen" : "bg-white"}`}>
      <div className="text-accent text-[0.85rem] mb-2 tracking-[2px]">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      <p className="text-[0.85rem] leading-relaxed text-text mb-2.5">&ldquo;{quote}&rdquo;</p>
      <div className="text-[0.78rem] font-bold text-text">{name}</div>
      <div className={`text-[0.68rem] font-semibold mt-0.5 ${tagColorMap[tagColor]}`}>{tag}</div>
    </div>
  );
}
