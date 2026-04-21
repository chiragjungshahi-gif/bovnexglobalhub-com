import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Bovnex Global Hub" },
      {
        name: "description",
        content: "Get a free consultation. Tell us what you'd like to outsource and we'll reply within one business day.",
      },
      { property: "og:title", content: "Contact Bovnex Global Hub" },
      { property: "og:description", content: "Free consultation for BPO and VA services from Nepal." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-28">
      <ContactSection />
    </div>
  );
}
