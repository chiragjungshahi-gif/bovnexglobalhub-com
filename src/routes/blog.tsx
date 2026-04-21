import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Bovnex Global Hub" },
      {
        name: "description",
        content: "Outsourcing tips, VA guides, and Nepal BPO industry news from the Bovnex team.",
      },
      { property: "og:title", content: "Blog — Bovnex Global Hub" },
      { property: "og:description", content: "Insights on outsourcing, VAs, and the Nepal BPO industry." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    cat: "Outsourcing",
    title: "10 hours a week, back: a founder's guide to delegating",
    excerpt: "The exact framework we use with new Bovnex clients to identify what to offload first.",
    date: "Apr 12, 2026",
    read: "6 min",
  },
  {
    cat: "Virtual Assistants",
    title: "Hiring a VA vs hiring full-time: the real economics",
    excerpt: "What you actually save when you replace a $4,000/mo admin hire with a Bovnex VA.",
    date: "Apr 02, 2026",
    read: "5 min",
  },
  {
    cat: "Nepal BPO",
    title: "Why Nepal is becoming the next BPO hotspot",
    excerpt: "Demographics, English proficiency and time zones explain the quiet rise of Nepal.",
    date: "Mar 24, 2026",
    read: "7 min",
  },
  {
    cat: "Operations",
    title: "Building a back-office that scales with revenue",
    excerpt: "How to design accounting and admin workflows that don't break at 10x volume.",
    date: "Mar 14, 2026",
    read: "8 min",
  },
  {
    cat: "Payroll",
    title: "A simple guide to Nepal payroll compliance",
    excerpt: "TDS, SSF, IRD reporting — what every employer in Nepal needs to know.",
    date: "Feb 28, 2026",
    read: "6 min",
  },
  {
    cat: "Customer Support",
    title: "What 'great support' looks like in 2026",
    excerpt: "Benchmarks, response times and tone-of-voice tips from our support team leads.",
    date: "Feb 16, 2026",
    read: "5 min",
  },
];

function BlogPage() {
  return (
    <>
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-surface">
        <div className="container-x max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Journal</p>
          <h1 className="text-5xl md:text-6xl text-navy leading-[1.05]">
            Insights from the <span className="italic font-light">Bovnex team.</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/70">
            Practical guides on outsourcing, Virtual Assistants, and building back-offices that
            scale.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group p-7 rounded-2xl bg-card hairline hover:bg-surface transition cursor-pointer flex flex-col"
            >
              <div className="aspect-[4/3] rounded-xl bg-surface mb-6 grid-bg" />
              <div className="text-[11px] uppercase tracking-widest text-gold">{p.cat}</div>
              <h2 className="mt-3 text-xl text-navy group-hover:text-navy/90">{p.title}</h2>
              <p className="mt-2 text-sm text-foreground/65 leading-relaxed flex-1">{p.excerpt}</p>
              <div className="mt-6 pt-5 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span>{p.date} · {p.read}</span>
                <ArrowRight className="w-4 h-4 text-navy group-hover:translate-x-0.5 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        <div className="container-x mt-20 text-center">
          <p className="text-foreground/70">Want to be the first to read new posts?</p>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center bg-navy text-navy-foreground px-7 py-3.5 rounded-full text-sm font-medium hover:bg-navy/90 transition"
          >
            Subscribe via email
          </Link>
        </div>
      </section>
    </>
  );
}
