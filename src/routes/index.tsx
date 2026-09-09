import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import campusHero from "@/assets/campus-hero.jpg";
import classroomImage from "@/assets/classroom.jpg";
import libraryImage from "@/assets/library.jpg";
import studentLifeImage from "@/assets/student-life.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { aboutIntro, academicPillars, developmentAreas, newsItems, programmes, school } from "@/data/school";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Academy PECHS — O & A Level School in Karachi" },
      { name: "description", content: "The Academy PECHS supports O Level and A Level students with strong learning, confidence and preparation for higher education." },
      { property: "og:title", content: "The Academy PECHS — Learn Today. Lead Tomorrow." },
      { property: "og:description", content: "A strong academic foundation for confident, capable and responsible young individuals in PECHS, Karachi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "EducationalOrganization", name: school.name, description: school.intro, address: { "@type": "PostalAddress", addressLocality: "PECHS, Karachi", addressRegion: "Sindh", addressCountry: "PK" } }) }],
  }),
  component: Home,
});

function Home() {
  const featured = newsItems.at(0);

  return (
    <>
      <section className="overflow-hidden bg-surface">
        <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-16">
          <div className="relative z-10 py-4 lg:py-12">
            <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              {school.segment}
            </p>
            <h1 className="mt-7 max-w-2xl font-display text-5xl leading-[1.02] text-navy sm:text-6xl lg:text-7xl">
              Learn today. <span className="italic text-brand">Lead tomorrow.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">{school.intro} The Academy PECHS supports independent thinking and preparation for higher education.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="press"><Link to="/admissions">Admission inquiry</Link></Button>
              <Button asChild size="lg" variant="outline"><Link to="/about">Discover our ethos</Link></Button>
            </div>
          </div>

          <div className="relative pb-8 lg:pb-14">
            <div className="aspect-[4/5] overflow-hidden bg-ocean sm:aspect-[5/4] lg:aspect-[4/5]">
              <img src={campusHero} alt="Students walking through The Academy PECHS campus" width={1600} height={912} className="size-full object-cover" />
            </div>
            <div className="absolute -bottom-0 -left-4 h-28 w-36 bg-gold sm:h-40 sm:w-56 lg:-left-10" aria-hidden="true" />
            <blockquote className="absolute bottom-5 right-0 max-w-[17rem] bg-background p-6 shadow-xl sm:bottom-8 sm:right-6">
              <p className="font-display text-xl italic leading-snug text-navy">“Education builds the confidence to meet what comes next.”</p>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-navy-foreground sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Academic pathways</p>
                <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">Programmes for purposeful progress</h2>
              </div>
              <Link to="/academics" className="inline-flex items-center gap-2 text-sm font-semibold text-gold">Explore academics <ArrowRight className="size-4" /></Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-12">
            <Reveal className="md:col-span-8">
              <Link to="/academics/$programme" params={{ programme: "o-level" }} className="group relative block min-h-[25rem] overflow-hidden bg-ocean">
                <img src={classroomImage} alt="Students learning together in a classroom" width={1600} height={912} loading="lazy" className="absolute inset-0 size-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Lower secondary to O Level</p><h3 className="mt-3 font-display text-4xl">O Level</h3><p className="mt-3 max-w-xl text-sm leading-relaxed text-navy-foreground/80">{programmes[0]?.summary}</p></div>
              </Link>
            </Reveal>
            <Reveal className="md:col-span-4" delay={100}>
              <div className="flex min-h-[25rem] flex-col justify-between bg-gold p-8 text-gold-foreground sm:p-10">
                <span className="flex size-12 items-center justify-center rounded-full border border-gold-foreground/30 font-display text-xl">01</span>
                <div><p className="text-xs font-semibold uppercase tracking-[0.22em]">Learning approach</p><h3 className="mt-3 font-display text-3xl">Understand. Question. Apply.</h3><p className="mt-4 text-sm leading-relaxed opacity-80">Structured learning that develops knowledge, independent thought, communication and examination readiness.</p></div>
              </div>
            </Reveal>
            <Reveal className="md:col-span-4">
              <div className="flex min-h-[21rem] flex-col justify-center border border-navy-foreground/20 p-8 text-center sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Higher secondary</p><h3 className="mt-4 font-display text-3xl">A Level</h3><p className="mt-4 text-sm leading-relaxed text-navy-foreground/70">{programmes[1]?.summary}</p><Link to="/academics/$programme" params={{ programme: "a-level" }} className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-gold">View programme →</Link>
              </div>
            </Reveal>
            <Reveal className="md:col-span-8" delay={100}>
              <Link to="/student-life" className="group relative block min-h-[21rem] overflow-hidden">
                <img src={studentLifeImage} alt="Students presenting their work to classmates" width={1600} height={912} loading="lazy" className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10"><h3 className="font-display text-3xl">Life beyond lessons</h3><p className="mt-2 max-w-md text-sm text-navy-foreground/75">Confidence, communication, leadership and social development alongside academic growth.</p></div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">Why The Academy</p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-navy sm:text-5xl">An environment built for learning and growth</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">{aboutIntro[0]}</p>
            <Button asChild variant="outline" className="mt-8"><Link to="/about">Our educational philosophy</Link></Button>
          </Reveal>
          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {academicPillars.slice(0, 4).map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 70}>
                <article className="border-t-2 border-gold pt-6"><span className="text-xs font-semibold text-brand">0{i + 1}</span><h3 className="mt-3 font-display text-2xl text-navy">{pillar.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.detail}</p></article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="grid bg-background lg:grid-cols-2">
        <div className="min-h-[28rem] overflow-hidden"><img src={libraryImage} alt="Students studying in the school library" width={1600} height={912} loading="lazy" className="size-full object-cover" /></div>
        <div className="flex items-center px-6 py-16 sm:px-12 lg:px-16">
          <Reveal><p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">Student development</p><h2 className="mt-5 font-display text-4xl leading-tight text-navy sm:text-5xl">Growth in every direction</h2><div className="mt-8 grid gap-5 sm:grid-cols-2">{developmentAreas.slice(0, 4).map((area) => <div key={area.title}><h3 className="font-semibold text-navy">{area.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.detail}</p></div>)}</div></Reveal>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal><div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">News & events</p><h2 className="mt-4 font-display text-4xl text-navy sm:text-5xl">Latest from the school</h2></div><Link to="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-brand">View all news <ArrowRight className="size-4" /></Link></div></Reveal>
          {featured ? <Reveal delay={100}><article className="mt-12 grid overflow-hidden border border-border bg-card md:grid-cols-[0.75fr_1.25fr]"><div className="bg-navy p-8 text-navy-foreground sm:p-10"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{featured.category}</p><p className="mt-24 text-sm text-navy-foreground/60">{featured.date}</p></div><div className="p-8 sm:p-12"><h3 className="font-display text-3xl text-navy">{featured.title}</h3><p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{featured.excerpt}</p><Button asChild variant="outline" className="mt-7"><Link to="/admissions">Make an inquiry</Link></Button></div></article></Reveal> : null}
        </div>
      </section>

      <section className="bg-ocean px-4 py-20 text-ocean-foreground sm:px-6 sm:py-24">
        <Reveal className="mx-auto max-w-4xl text-center"><p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Admissions</p><h2 className="mt-5 font-display text-4xl sm:text-5xl">Take the next step in your educational journey</h2><p className="mx-auto mt-5 max-w-2xl text-ocean-foreground/75">Discover The Academy PECHS, explore the academic environment and learn more about the admissions process.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Button asChild size="lg"><Link to="/admissions">Admission inquiry</Link></Button><Button asChild size="lg" variant="outline" className="border-ocean-foreground/40 bg-transparent text-ocean-foreground hover:bg-ocean-foreground/10 hover:text-ocean-foreground"><Link to="/contact">Contact the school</Link></Button></div></Reveal>
      </section>
    </>
  );
}