import { createFileRoute } from "@tanstack/react-router";

import studentLifeImage from "@/assets/student-life.jpg";
import { PageHeader, VerifyBadge } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { studentLifeAreas } from "@/data/school";

export const Route = createFileRoute("/student-life")({
  head: () => ({
    meta: [
      { title: "Student Life | The Academy PECHS" },
      {
        name: "description",
        content:
          "Student life at The Academy PECHS: activities, clubs, societies, sports, events and leadership opportunities that support confidence and personal growth.",
      },
      { property: "og:title", content: "Student Life at The Academy PECHS" },
      {
        property: "og:description",
        content:
          "Activities, clubs, sports, events and leadership opportunities beyond the classroom.",
      },
    ],
  }),
  component: StudentLife,
});

function StudentLife() {
  return (
    <>
      <PageHeader
        eyebrow="Student life"
        title="More than lessons and examinations"
        description="Student activities, events, collaboration and leadership opportunities help students discover their interests, build confidence and develop skills beyond academics."
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <img
            src={studentLifeImage}
            alt="Students presenting to classmates during a school event"
            width={1600}
            height={912}
            loading="lazy"
            className="w-full rounded-lg border border-border object-cover shadow-sm"
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 flex flex-wrap items-center gap-4 rounded-lg border border-border bg-accent/60 p-6">
            <VerifyBadge />
            <p className="text-sm text-accent-foreground">
              The specific clubs, societies, sports and events offered have not been confirmed by
              the school yet, so nothing is listed as fact below.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studentLifeAreas.map((area, i) => (
            <Reveal key={area.title} delay={i * 70}>
              <article className="hover-lift h-full rounded-lg border border-border bg-card p-6">
                <h2 className="font-display text-lg font-bold">{area.title}</h2>
                <span className="mt-3 block h-0.5 w-8 rounded-full bg-gold" aria-hidden="true" />
                <p className="mt-4 text-sm text-muted-foreground">{area.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
