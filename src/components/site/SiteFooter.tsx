import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { school } from "@/data/school";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1.25fr_1fr_1fr]">
        <div>
          <h2 className="font-display text-xl font-bold">{school.name}</h2>
          <span className="mt-3 block h-0.5 w-14 rounded-full bg-gold" aria-hidden="true" />
          <p className="mt-4 text-sm leading-relaxed text-navy-foreground/75">
            An academic institution in {school.location}, focused on strong learning, student
            development and preparation for higher education.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Quick links
          </h2>
          <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">
            {[
              { to: "/about", label: "About" },
              { to: "/academics", label: "Academics" },
              { to: "/student-life", label: "Student Life" },
              { to: "/admissions", label: "Admissions" },
              { to: "/fees", label: "Fees" },
              { to: "/news", label: "News & Events" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-navy-foreground/80 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Contact</h2>
          <ul className="mt-5 space-y-3 text-sm text-navy-foreground/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>{school.location}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>{school.phonePlaceholder}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>{school.emailPlaceholder}</span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>{school.officeHoursPlaceholder}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/15 py-5 text-center text-xs text-navy-foreground/60">
        © {new Date().getFullYear()} {school.name}, {school.location}. All rights reserved.
      </div>
    </footer>
  );
}
