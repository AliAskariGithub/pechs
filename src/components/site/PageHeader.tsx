export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-border bg-navy text-navy-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">{eyebrow}</p>
        ) : null}
        <h1 className="accent-rule mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-foreground/80 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export function VerifyBadge({ children }: { children?: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-accent px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground">
      {children ?? "To verify"}
    </span>
  );
}
