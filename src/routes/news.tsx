import { createFileRoute } from "@tanstack/react-router";

import { PageHeader, VerifyBadge } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { newsItems, newsNote } from "@/data/school";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Events | The Academy PECHS" },
      {
        name: "description",
        content:
          "News, events, notices and student achievements from The Academy PECHS, Karachi. Announcements are published once confirmed by the school.",
      },
      { property: "og:title", content: "News & Events — The Academy PECHS" },
      {
        property: "og:description",
        content: "Announcements, events and student achievements from The Academy PECHS, Karachi.",
      },
    ],
  }),
  component: News,
});

function News() {
  return (
    <>
      <PageHeader
        eyebrow="News & events"
        title="What's happening at the school"
        description="Announcements, academic events, achievements and notices for parents will be shared in this section."
      />

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-center gap-4 rounded-lg border border-border bg-accent/60 p-5">
            <VerifyBadge />
            <p className="text-sm text-accent-foreground">{newsNote}</p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-5">
          {newsItems.map((item, i) => (
            <Reveal key={item.slug} delay={i * 70}>
              <article className="hover-lift rounded-lg border border-border bg-card p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  {item.category} · {item.date}
                </p>
                <h2 className="mt-3 font-display text-xl font-bold">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
