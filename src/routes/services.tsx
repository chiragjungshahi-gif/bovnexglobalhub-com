import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Bovnex Global Hub" },
      {
        name: "description",
        content:
          "Eight outsourcing services: VA, data entry, customer support, payroll, accounting, AutoCAD, web development and digital marketing.",
      },
      { property: "og:title", content: "Services — Bovnex Global Hub" },
      {
        property: "og:description",
        content: "End-to-end BPO and VA services from Nepal for businesses worldwide.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="pt-36 pb-16 md:pt-44 md:pb-24 bg-surface">
        <div className="container-x max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Services</p>
          <h1 className="text-5xl md:text-6xl text-navy leading-[1.05]">
            Eight services. <span className="italic font-light">One trusted team.</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/70">
            From inbox triage to engineering drawings — Bovnex offers end-to-end outsourcing built
            around your operation.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x space-y-px bg-border rounded-2xl overflow-hidden hairline">
          {services.map((s, i) => (
            <article
              key={s.slug}
              className="bg-card p-8 md:p-12 grid md:grid-cols-12 gap-6 hover:bg-surface transition"
            >
              <div className="md:col-span-1 font-serif text-3xl text-gold/80">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="md:col-span-3">
                <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-navy mb-4">
                  <s.icon className="w-5 h-5" />
                </div>
                <h2 className="text-2xl text-navy">{s.title}</h2>
              </div>
              <div className="md:col-span-6">
                <p className="text-foreground/75 leading-relaxed">{s.details}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-surface text-navy/80 border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2 md:text-right">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm text-navy hover:gap-3 transition-all"
                >
                  Discuss <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
