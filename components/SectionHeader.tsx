type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  light = false
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p
          className={`mb-3 text-sm font-extrabold uppercase tracking-wide ${
            light ? "text-lavender" : "text-purple"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h1
        className={`text-4xl font-extrabold tracking-normal sm:text-5xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h1>
      {description ? (
        <p className={`mt-5 text-lg leading-8 ${light ? "text-white/85" : "text-ink/80"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
