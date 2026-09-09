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
    <section className="relative isolate overflow-hidden bg-navy text-navy-foreground">
      <div className="absolute inset-y-0 right-0 hidden w-1/3 border-l border-navy-foreground/10 bg-ocean/30 lg:block" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-20 sm:px-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:py-28">
        <div className="min-w-0">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">{eyebrow}</p>
        ) : null}
        <h1 className="mt-5 max-w-4xl font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-foreground/80 sm:text-lg">
            {description}
          </p>
        ) : null}
        </div>
        <span className="hidden h-px w-28 bg-gold md:block" aria-hidden="true" />
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
