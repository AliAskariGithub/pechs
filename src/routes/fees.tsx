import { Link, createFileRoute } from "@tanstack/react-router";
import { AlertTriangle } from "lucide-react";

import { PageHeader, VerifyBadge } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { feeNotes, feeStructure } from "@/data/school";

export const Route = createFileRoute("/fees")({
  head: () => ({
    meta: [
      { title: "Fee Structure | The Academy PECHS, Karachi" },
      {
        name: "description",
        content:
          "Fee structure information for The Academy PECHS, Karachi. Official admission, tuition and annual charges will be published once confirmed by the school.",
      },
      { property: "og:title", content: "Fee Structure — The Academy PECHS" },
      {
        property: "og:description",
        content:
          "Admission, tuition and annual charges for The Academy PECHS, pending confirmation by the school office.",
      },
    ],
  }),
  component: Fees,
});

function Fees() {
  return (
    <>
      <PageHeader
        eyebrow="Fees"
        title="Fee structure"
        description="Fee information is published only once it has been confirmed by the school, so that families always see accurate figures."
      />

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="flex gap-3 rounded-lg border border-border bg-accent/60 p-5 text-sm text-accent-foreground">
            <AlertTriangle className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            <p>
              <strong>Not yet confirmed.</strong> The school has not shared its official fee
              schedule. Once provided, the exact amounts will replace the placeholders below.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 overflow-hidden rounded-lg border border-border bg-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Level</TableHead>
                  <TableHead>Admission fee</TableHead>
                  <TableHead>Monthly tuition</TableHead>
                  <TableHead>Annual charges</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {feeStructure.map((row) => (
                  <TableRow key={row.level}>
                    <TableCell className="font-medium">{row.level}</TableCell>
                    <TableCell>
                      <VerifyBadge />
                    </TableCell>
                    <TableCell>
                      <VerifyBadge />
                    </TableCell>
                    <TableCell>
                      <VerifyBadge />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <h2 className="accent-rule mt-16 font-display text-2xl font-bold">Payment notes</h2>
          <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
            {feeNotes.map((note) => (
              <li key={note} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                {note}
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/admissions">Start an admission inquiry</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Ask the office about fees</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
