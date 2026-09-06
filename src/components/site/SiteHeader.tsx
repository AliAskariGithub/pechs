import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { school } from "@/data/school";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/student-life", label: "Student Life" },
  { to: "/admissions", label: "Admissions" },
  { to: "/fees", label: "Fees" },
  { to: "/news", label: "News" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const primary = tone === "light" ? "text-navy-foreground" : "text-navy";
  const secondary = tone === "light" ? "text-navy-foreground/70" : "text-muted-foreground";
  return (
    <span className="leading-tight">
      <span className={`block font-display text-lg font-bold tracking-tight ${primary}`}>
        The Academy
      </span>
      <span
        className={`mt-1 block border-t-2 border-gold pt-1 text-[10px] font-semibold uppercase tracking-[0.32em] ${secondary}`}
      >
        PECHS
      </span>
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="group flex items-center gap-3" aria-label={school.name}>
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-0.5 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="nav-link rounded-md px-3 py-2 text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-navy"
              activeProps={{ className: "text-navy" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="press hidden sm:inline-flex">
            <Link to="/admissions">Apply Now</Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="xl:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="mt-8 flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors hover:translate-x-1 hover:bg-secondary"
                    activeProps={{ className: "text-brand bg-secondary" }}
                    activeOptions={{ exact: item.to === "/" }}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <Link to="/admissions" onClick={() => setOpen(false)}>
                    Apply Now
                  </Link>
                </Button>
                <p className="mt-6 text-xs text-muted-foreground">{school.location}</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
