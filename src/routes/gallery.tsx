import { createFileRoute } from "@tanstack/react-router";

import campusHero from "@/assets/campus-hero.jpg";
import classroom from "@/assets/classroom.jpg";
import computerLab from "@/assets/computer-lab.jpg";
import library from "@/assets/library.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import studentLife from "@/assets/student-life.jpg";
import { PageHeader, VerifyBadge } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { campusAreas } from "@/data/school";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | The Academy PECHS" },
      {
        name: "description",
        content:
          "A look at the learning environment at The Academy PECHS, Karachi: classrooms, laboratories, library, computer facilities and student activities.",
      },
      { property: "og:title", content: "Gallery — The Academy PECHS" },
      {
        property: "og:description",
        content: "Classrooms, laboratories, library and student activities at The Academy PECHS.",
      },
    ],
  }),
  component: Gallery,
});

const photos = [
  { src: campusHero, alt: "Entrance and campus grounds of the school" },
  { src: classroom, alt: "A lesson in progress in a classroom" },
  { src: scienceLab, alt: "Students working in the science laboratory" },
  { src: library, alt: "Students reading and studying in the library" },
  { src: computerLab, alt: "Students working in the computer laboratory" },
  { src: studentLife, alt: "Students taking part in a school activity" },
];

function Gallery() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="A look at the learning environment"
        description="These illustrative photographs show the kind of academic environment described on this site. Real campus photographs will replace them once the school provides them."
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-center gap-4 rounded-lg border border-border bg-accent/60 p-5">
            <VerifyBadge>Illustrative</VerifyBadge>
            <p className="text-sm text-accent-foreground">
              The images below are illustrative and do not show the actual campus.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, i) => (
            <Reveal key={photo.alt} delay={i * 70}>
              <figure className="hover-lift overflow-hidden rounded-lg border border-border bg-card">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={1600}
                  height={912}
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />
                <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                  {photo.alt}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <h2 className="accent-rule mt-20 font-display text-2xl font-bold">Campus facilities</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {campusAreas.map((area, i) => (
            <Reveal key={area.title} delay={i * 60}>
              <article className="hover-lift h-full rounded-lg border border-border bg-card p-6">
                <h3 className="font-display text-lg font-bold">{area.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{area.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
