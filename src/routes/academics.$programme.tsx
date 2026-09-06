import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { PageHeader, VerifyBadge } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { getProgramme, programmes } from "@/data/school";

export const Route = createFileRoute("/academics/$programme")({
  loader: ({ params }) => {
    const programme = getProgramme(params.programme);
    if (!programme) throw notFound();
    return { programme };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Programme not found | The Academy PECHS" }, { name: "robots", content: "noindex" }],
      };
    }
    const { programme } = loaderData;
    const description = `${programme.name} at The Academy PECHS: learning approach, academic support and faculty. ${programme.summary}`;
    return {
      meta: [
        { title: `${programme.name} | The Academy PECHS` },
        { name: "description", content: description.slice(0, 155) },
        { property: "og:title", content: `${programme.name} — The Academy PECHS` },
        { property: "og:description", content: description.slice(0, 155) },
      ],
    };
  },
  notFoundComponent: ProgrammeNotFound,
  component: ProgrammePage,
});

function ProgrammeNotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <h1 className="font-display text-3xl font-bold">Programme not found</h1>
      <p className="mt-4 text-muted-foreground">
        The programme you are looking for is not listed. Browse the academics section instead.
      </p>
      <Button asChild className="mt-8">
        <Link to="/academics">Back to academics</Link>
      </Button>
    </section>
  );
}

function ProgrammePage() {
  const { programme } = Route.useLoaderData();

  return (
    <>
      <PageHeader eyebrow={programme.stage} title={programme.name} description={programme.summary} />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="accent-rule font-display text-2xl font-bold">Learning approach</h2>
            <ul className="mt-8 space-y-4">
              {programme.approach.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="accent-rule font-display text-2xl font-bold">Academic support</h2>
            <ul className="mt-8 space-y-4">
              {programme.support.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <h2 className="accent-rule font-display text-2xl font-bold">Subjects</h2>
            <div className="mt-8 flex flex-wrap items-center gap-4 rounded-lg border border-border bg-card p-6">
              <VerifyBadge />
              <p className="text-sm text-muted-foreground">{programme.subjectsStatus}</p>
            </div>
            <p className="mt-5 max-w-2xl text-sm text-muted-foreground">
              Subject combinations are not published until the school confirms them, so that no
              incorrect information reaches parents or students.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <h2 className="accent-rule font-display text-2xl font-bold">Faculty</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programme.faculty.map((member, i) => (
            <Reveal key={`${member.role}-${member.area}`} delay={i * 80}>
              <article className="hover-lift h-full rounded-lg border border-border bg-card p-6">
                <h3 className="font-display text-lg font-bold">{member.role}</h3>
                <p className="mt-1 text-sm text-brand">{member.area}</p>
                <p className="mt-4 text-sm text-muted-foreground">{member.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Names, qualifications and photographs will be published once the school provides verified
          faculty information.
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/admissions">Start an admission inquiry</Link>
          </Button>
          {programmes
            .filter((p) => p.slug !== programme.slug)
            .map((p) => (
              <Button asChild variant="outline" key={p.slug}>
                <Link to="/academics/$programme" params={{ programme: p.slug }}>
                  View {p.name}
                </Link>
              </Button>
            ))}
        </div>
      </section>
    </>
  );
}
