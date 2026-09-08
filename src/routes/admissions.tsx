import { createFileRoute } from "@tanstack/react-router";

import { InquiryForm } from "@/components/site/InquiryForm";
import { PageHeader, VerifyBadge } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { admissionSteps, requiredDocuments, school } from "@/data/school";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions | The Academy PECHS, Karachi" },
      {
        name: "description",
        content:
          "The admissions process at The Academy PECHS: inquiry, campus visit, application, assessment, interview and enrolment, plus an online admission inquiry form.",
      },
      { property: "og:title", content: "Admissions — The Academy PECHS" },
      {
        property: "og:description",
        content:
          "Step-by-step admissions process and an online inquiry form for The Academy PECHS, Karachi.",
      },
    ],
  }),
  component: Admissions,
});

function Admissions() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Joining The Academy"
        description="The admissions process is designed to be clear and supportive for both students and parents. Specific dates, requirements and criteria are confirmed by the school office."
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <h2 className="accent-rule font-display text-2xl font-bold">Admission steps</h2>
        </Reveal>
        <ol className="mt-12 space-y-4">
          {admissionSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 60}>
              <li className="hover-lift flex gap-5 rounded-lg border border-border bg-card p-6">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-navy font-display text-sm font-bold text-navy-foreground">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.detail}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <h2 className="accent-rule font-display text-2xl font-bold">
              Requirements & eligibility
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {requiredDocuments.map((doc, i) => (
              <Reveal key={doc} delay={i * 60}>
                <li className="flex items-center justify-between gap-4 rounded-lg border border-border bg-card p-5 text-sm">
                  <span className="text-muted-foreground">{doc}</span>
                  <VerifyBadge />
                </li>
              </Reveal>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">
            Please contact the school office for the current admission requirements and deadlines:{" "}
            {school.phonePlaceholder}.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <Reveal>
          <h2 className="accent-rule font-display text-2xl font-bold">Admission inquiry form</h2>
          <p className="mt-8 text-sm text-muted-foreground">
            Share the student's details and you will be able to email them to the school or copy
            them to send on WhatsApp.
          </p>
        </Reveal>
        <div className="mt-8">
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
