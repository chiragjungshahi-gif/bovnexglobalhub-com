import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bovnex Global Hub" },
      {
        name: "description",
        content:
          "Founded in 2026 in Kathmandu, Bovnex Global Hub connects skilled Nepali professionals with businesses worldwide.",
      },
      { property: "og:title", content: "About Bovnex Global Hub" },
      {
        property: "og:description",
        content: "Built on bond, trust and connection — Nepal's emerging BPO partner.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { t: "Bond", d: "We invest in long-term relationships, not transactions." },
  { t: "Trust", d: "Transparent reporting, predictable delivery, honest communication." },
  { t: "Connection", d: "We become an extension of your team — not a vendor." },
];

function AboutPage() {
  return (
    <>
      <section className="pt-36 pb-16 md:pt-44 md:pb-24 bg-surface">
        <div className="container-x max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Our story</p>
          <h1 className="text-5xl md:text-6xl text-navy leading-[1.05]">
            People behind <span className="italic font-light">every process.</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/70">
            Bovnex Global Hub was founded in 2026 in Kathmandu with a simple mission: connect skilled,
            English-proficient Nepali professionals with growing businesses around the world — and
            give those businesses back the time they need to scale.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl text-navy">Mission</h2>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              To free entrepreneurs from operational overhead by delivering reliable, affordable, and
              high-quality outsourced services from Nepal — backed by transparent processes and a
              team that genuinely cares.
            </p>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl text-navy">Vision</h2>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              To become the most trusted BPO and Virtual Assistant company in South Asia — recognized
              globally for craft, dependability, and the human touch behind every process.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Our values</p>
            <h2 className="text-4xl md:text-5xl text-navy">A triangle of three.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.t} className="p-8 rounded-2xl bg-card hairline">
                <div className="font-serif text-4xl text-navy">{v.t}</div>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Why Nepal</p>
            <h2 className="text-3xl md:text-4xl text-navy leading-tight">
              An outsourcing destination on the rise.
            </h2>
            <p className="mt-5 text-foreground/70 leading-relaxed">
              Nepal offers a young, English-fluent workforce, a favorable time zone overlap with the
              US, UK and Australia, and a stable business environment — all at a meaningful cost
              advantage. We're proud to bring this talent to the global stage.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center bg-navy text-navy-foreground px-7 py-3.5 rounded-full text-sm font-medium hover:bg-navy/90 transition"
            >
              Talk to our team
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden hairline">
            {[
              ["GMT+5:45", "Time zone advantage"],
              ["English", "Working language"],
              ["60–70%", "Cost vs in-house"],
              ["2026", "Founded"],
            ].map(([n, l]) => (
              <div key={l} className="bg-card p-8">
                <div className="font-serif text-3xl text-navy">{n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
