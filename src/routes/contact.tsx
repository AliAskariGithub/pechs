import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { InquiryForm } from "@/components/site/InquiryForm";
import { PageHeader, VerifyBadge } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { school } from "@/data/school";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | The Academy PECHS, Karachi" },
      {
        name: "description",
        content:
          "Contact The Academy PECHS in Karachi: location, phone, WhatsApp, email and office hours, plus a map of the PECHS area.",
      },
      { property: "og:title", content: "Contact The Academy PECHS" },
      {
        property: "og:description",
        content: "Location, phone, email and office hours for The Academy PECHS, Karachi.",
      },
    ],
  }),
  component: Contact,
});

const details = [
  { icon: MapPin, label: "Address", value: school.addressPlaceholder },
  { icon: Phone, label: "Phone", value: school.phonePlaceholder },
  { icon: MessageCircle, label: "WhatsApp", value: school.whatsappPlaceholder },
  { icon: Mail, label: "Email", value: school.emailPlaceholder },
  { icon: Mail, label: "Admissions email", value: school.admissionsEmailPlaceholder },
  { icon: Clock, label: "Office hours", value: school.officeHoursPlaceholder },
];

function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch with the school"
        description={`${school.name} is located in ${school.location}. Contact details below are placeholders until the school confirms them.`}
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <h2 className="accent-rule font-display text-2xl font-bold">School details</h2>
            <ul className="mt-8 space-y-4">
              {details.map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-4 rounded-lg border border-border bg-card p-5"
                >
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md bg-navy text-navy-foreground">
                    <item.icon className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{item.label}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.value}</p>
                  </div>
                  <span className="ml-auto">
                    <VerifyBadge />
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="accent-rule font-display text-2xl font-bold">Find us</h2>
            <div className="mt-8 overflow-hidden rounded-lg border border-border">
              <iframe
                title={`Map of ${school.location}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(school.mapQuery)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[22rem] w-full border-0"
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              The map shows the PECHS area of Karachi. The exact campus pin will be added once the
              street address is confirmed.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <Reveal>
            <h2 className="accent-rule font-display text-2xl font-bold">Send an inquiry</h2>
            <p className="mt-8 text-sm text-muted-foreground">
              Fill in the form and you will be able to email the details to the school or copy them
              to share on WhatsApp.
            </p>
          </Reveal>
          <div className="mt-8">
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
