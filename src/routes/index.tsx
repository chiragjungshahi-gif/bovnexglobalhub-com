import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/Marquee";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { Industries } from "@/components/sections/Industries";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bovnex Global Hub — BPO & Virtual Assistant Services from Nepal" },
      {
        name: "description",
        content:
          "Save 10–20 hours every week. Outsource admin, payroll, accounting, AutoCAD, web and IT to a skilled team in Nepal.",
      },
      { property: "og:title", content: "Bovnex Global Hub — People Behind Every Process" },
      {
        property: "og:description",
        content: "Premium BPO and Virtual Assistant services from Kathmandu, Nepal.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServicesGrid />
      <WhyUs />
      <Process />
      <Industries />
      <Pricing />
      <Testimonials />
      <ContactSection />
    </>
  );
}
