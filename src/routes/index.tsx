import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpenText, Compass, GraduationCap, Users } from "lucide-react";

import classroomImage from "@/assets/classroom.jpg";
import libraryImage from "@/assets/library.jpg";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import {
  aboutIntro,
  academicPillars,
  developmentAreas,
  newsItems,
  programmes,
  school,
} from "@/data/school";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Academy PECHS — O & A Level School in Karachi" },
      {
        name: "description",
        content:
          "The Academy PECHS is an academic institution in PECHS, Karachi, supporting O Level and A Level students with strong learning, confidence and preparation for higher education.",
      },
      { property: "og:title", content: "The Academy PECHS — Learn Today. Lead Tomorrow." },
      {
        property: "og:description",
        content:
          "A strong academic foundation for confident, capable and responsible young individuals in PECHS, Karachi.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: school.name,
          description:
            "An academic institution in PECHS, Karachi associated with the O Level and A Level segment.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "PECHS, Karachi",
            addressRegion: "Sindh",
            addressCountry: "PK",
          },
        }),
      },
    ],
  }),
  component: Home,
});

const pillarIcons = [BookOpenText, Compass, GraduationCap, Users, ArrowRight];

function Home() {
  const featured = newsItems[0]!;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy text-navy-foreground">
        <HeroCarousel />
        <div className="absolute inset-0 bg-navy/70" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
          <p className="reveal inline-flex items-center gap-2 border-l-2 border-gold pl-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            {school.segment}
          </p>
          <h1
            className="reveal mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.15] sm:text-5xl md:text-6xl"
            style={{ animationDelay: "0.12s" }}
          >
            {school.tagline}
          </h1>
          <p
            className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-navy-foreground/85"
            style={{ animationDelay: "0.24s" }}
          >
            {school.intro} {school.name} supports academic growth, independent thinking and
            preparation for higher education.
          </p>
          <div className="reveal mt-9 flex flex-wrap gap-3" style={{ animationDelay: "0.36s" }}>
            <Button asChild size="lg">
              <Link to="/admissions">Start an admission inquiry</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-navy-foreground/40 bg-transparent text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground"
            >
              <Link to="/academics">Explore academics</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">
                About the school
              </p>
              <h2 className="accent-rule mt-4 font-display text-3xl font-bold sm:text-4xl">
                An environment built for learning
              </h2>
              <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground">
                {aboutIntro.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
              <Button asChild variant="outline" className="mt-8">
                <Link to="/about">Read more about us</Link>
              </Button>
            </Reveal>
            <Reveal delay={120}>
              <img
                src={libraryImage}
                alt="Students studying together in the school library"
                width={1600}
                height={912}
                loading="lazy"
                className="w-full rounded-lg border border-border object-cover shadow-sm"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">
            The academic experience
          </p>
          <h2 className="accent-rule mt-4 font-display text-3xl font-bold sm:text-4xl">
            Learning that goes beyond the classroom
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {academicPillars.map((pillar, i) => {
            const Icon = pillarIcons[i % pillarIcons.length]!;
            return (
              <Reveal key={pillar.title} delay={i * 80}>
                <article className="group hover-lift h-full rounded-lg border border-border bg-card p-6">
                  <span className="icon-pop flex size-11 items-center justify-center rounded-md bg-navy text-navy-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {pillar.detail}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Programmes</p>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              O Level and A Level
            </h2>
            <p className="mt-5 max-w-2xl text-navy-foreground/80">
              Exact grade levels, subjects and examination board details are still to be confirmed
              by the school and are clearly marked on each programme page.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {programmes.map((programme, i) => (
              <Reveal key={programme.slug} delay={i * 100}>
                <Link
                  to="/academics/$programme"
                  params={{ programme: programme.slug }}
                  className="group hover-lift block h-full rounded-lg border border-navy-foreground/20 bg-navy-foreground/5 p-7"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                    {programme.stage}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold">{programme.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-navy-foreground/80">
                    {programme.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                    View programme <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center">
          <Reveal>
            <img
              src={classroomImage}
              alt="A teacher explaining a topic to students during a lesson"
              width={1600}
              height={912}
              loading="lazy"
              className="w-full rounded-lg border border-border object-cover shadow-sm"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">
              Student development
            </p>
            <h2 className="accent-rule mt-4 font-display text-3xl font-bold sm:text-4xl">
              Growth in every direction
            </h2>
            <ul className="mt-8 space-y-4">
              {developmentAreas.map((area) => (
                <li key={area.title} className="flex gap-3">
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-gold"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">{area.title}. </span>
                    {area.detail}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">
              News & events
            </p>
            <h2 className="accent-rule mt-4 font-display text-3xl font-bold sm:text-4xl">
              Latest from the school
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <article className="hover-lift mt-10 rounded-lg border border-border bg-card p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                {featured.category} · {featured.date}
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold">{featured.title}</h3>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {featured.excerpt}
              </p>
              <Button asChild variant="outline" className="mt-6">
                <Link to="/news">All news & events</Link>
              </Button>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="rounded-lg border border-border bg-navy px-8 py-14 text-center text-navy-foreground">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Take the next step in your educational journey
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-navy-foreground/80">
              Discover {school.name}, explore the academic environment and learn more about the
              admissions process.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link to="/admissions">Admission inquiry</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-navy-foreground/40 bg-transparent text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground"
              >
                <Link to="/contact">Contact the school</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
