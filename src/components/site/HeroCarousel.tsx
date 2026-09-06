import { useEffect, useState } from "react";

import campusHero from "@/assets/campus-hero.jpg";
import classroom from "@/assets/classroom.jpg";
import computerLab from "@/assets/computer-lab.jpg";
import library from "@/assets/library.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import studentLife from "@/assets/student-life.jpg";

const slides = [
  {
    src: campusHero,
    alt: "Students walking into the campus of The Academy PECHS in Karachi",
  },
  { src: classroom, alt: "A teacher leading a lesson with students at their desks" },
  { src: scienceLab, alt: "Students carrying out a chemistry experiment in the science laboratory" },
  { src: library, alt: "Students studying at tables in the school library" },
  { src: computerLab, alt: "Students working at desktop computers in the computer laboratory" },
  { src: studentLife, alt: "Students presenting a project to classmates in the assembly hall" },
];

const INTERVAL_MS = 3500;

/**
 * Auto-advancing hero background carousel with a gentle Ken Burns zoom,
 * dot indicators and a subtle parallax shift. Pauses on hover.
 */
export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [offset, setOffset] = useState(0);

  const goTo = (next: number) =>
    setActive((current) => {
      if (next === current) return current;
      setPrev(current);
      return next;
    });

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => goTo((active + 1) % slides.length), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, active]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setOffset(Math.min(window.scrollY * 0.15, 120)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="School photo highlights"
    >
      <div
        className="absolute -inset-y-8 inset-x-0 overflow-hidden"
        style={{ transform: `translateY(${offset}px)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`hero-slide absolute inset-0${
              i === active ? " is-active" : i === prev ? " is-leaving" : ""
            }`}
            aria-hidden={i !== active}
          >
            <img
              src={slide.src}
              alt={i === active ? slide.alt : ""}
              width={1600}
              height={912}
              loading={i === 0 ? "eager" : "lazy"}
              className="size-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show photo ${i + 1}`}
            aria-current={i === active}
            onClick={() => goTo(i)}
            className={`hero-dot h-1.5 rounded-full ${
              i === active ? "w-6 bg-gold" : "w-1.5 bg-navy-foreground/50 hover:bg-navy-foreground/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
