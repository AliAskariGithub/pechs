import { createFileRoute } from "@tanstack/react-router";

import { PageHeader, VerifyBadge } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import {
  aboutIntro,
  coreValues,
  headMessage,
  mission,
  school,
  vision,
} from "@/data/school";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | The Academy PECHS, Karachi" },
      {
        name: "description",
        content:
          "Learn about The Academy PECHS: our mission, vision, core values, educational philosophy and the learning environment we build for students in Karachi.",
      },
      { property: "og:title", content: "About The Academy PECHS" },
      {
        property: "og:description",
        content:
          "Mission, vision, core values and educational philosophy of The Academy PECHS in Karachi.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A serious, modern academic institution"
        description="The Academy PECHS is committed to creating an environment where students can learn, grow and prepare confidently for the future."
      />

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            {aboutIntro.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-20 sm:px-6 md:grid-cols-2">
          <Reveal>
            <article className="hover-lift h-full rounded-lg border border-border bg-card p-8">
              <h2 className="accent-rule font-display text-2xl font-bold">Our mission</h2>
              <p className="mt-8 leading-relaxed text-muted-foreground">{mission}</p>
            </article>
          </Reveal>
          <Reveal delay={100}>
            <article className="hover-lift h-full rounded-lg border border-border bg-card p-8">
              <h2 className="accent-rule font-display text-2xl font-bold">Our vision</h2>
              <p className="mt-8 leading-relaxed text-muted-foreground">{vision}</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <h2 className="accent-rule font-display text-3xl font-bold">Core values</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value, i) => (
            <Reveal key={value.title} delay={i * 60}>
              <article className="hover-lift h-full rounded-lg border border-border bg-card p-6">
                <h3 className="font-display text-lg font-bold">{value.title}</h3>
                <span className="mt-3 block h-0.5 w-8 rounded-full bg-gold" aria-hidden="true" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{value.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Head's message
            </p>
            <div className="mt-8 space-y-5 font-display text-lg leading-relaxed sm:text-xl">
              {headMessage.map((para) => (
                <p key={para}>“{para}”</p>
              ))}
            </div>
            <p className="mt-8 text-sm text-navy-foreground/70">
              Draft wording, pending approval. Principal / Head name: {school.principalPlaceholder}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <h2 className="accent-rule font-display text-3xl font-bold">School information</h2>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            The details below have not been confirmed by the school yet, so they are shown as
            placeholders rather than published as fact.
          </p>
        </Reveal>
        <dl className="mt-10 grid gap-4 sm:grid-cols-2">
          {[
            { label: "Year established", value: school.foundedPlaceholder },
            { label: "Examination board", value: school.boardPlaceholder },
            { label: "Grade levels", value: "Grade levels offered — TO VERIFY" },
            { label: "Leadership team", value: school.principalPlaceholder },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-card p-5"
            >
              <dt className="text-sm font-semibold">{item.label}</dt>
              <dd>
                <VerifyBadge />
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
