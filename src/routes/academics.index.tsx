import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { academicPillars, developmentAreas, programmes } from "@/data/school";

export const Route = createFileRoute("/academics/")({
  head: () => ({
    meta: [
      { title: "Academics | The Academy PECHS" },
      {
        name: "description",
        content:
          "Academic life at The Academy PECHS: O Level and A Level programmes, learning approach, academic support and student development in Karachi.",
      },
      { property: "og:title", content: "Academics at The Academy PECHS" },
      {
        property: "og:description",
        content:
          "O Level and A Level programmes, learning approach and academic support at The Academy PECHS.",
      },
    ],
  }),
  component: AcademicsIndex,
});

function AcademicsIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="Learning goes beyond the classroom"
        description="Academic development is a journey that encourages students to understand concepts, ask meaningful questions, think critically and develop the confidence to apply what they learn."
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <h2 className="accent-rule font-display text-3xl font-bold">Programmes</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {programmes.map((programme, i) => (
            <Reveal key={programme.slug} delay={i * 100}>
              <Link
                to="/academics/$programme"
                params={{ programme: programme.slug }}
                className="group hover-lift block h-full rounded-lg border border-border bg-card p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                  {programme.stage}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold">{programme.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {programme.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  View programme <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <h2 className="accent-rule font-display text-3xl font-bold">The academic experience</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {academicPillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 70}>
                <article className="hover-lift h-full rounded-lg border border-border bg-card p-6">
                  <h3 className="font-display text-lg font-bold">{pillar.title}</h3>
                  <span className="mt-3 block h-0.5 w-8 rounded-full bg-gold" aria-hidden="true" />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {pillar.detail}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <h2 className="accent-rule font-display text-3xl font-bold">Student development</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {developmentAreas.map((area, i) => (
            <Reveal key={area.title} delay={i * 70}>
              <article className="hover-lift h-full rounded-lg border border-border bg-card p-6">
                <h3 className="font-display text-lg font-bold">{area.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{area.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
