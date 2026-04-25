type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#b33a32]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold md:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-[color:var(--muted)] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
