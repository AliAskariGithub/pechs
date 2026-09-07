import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

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
  component: Contact;
});

function Contact() {
  return <div />;
}
