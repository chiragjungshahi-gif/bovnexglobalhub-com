import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky/5 blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="max-w-4xl mx-auto text-center">
          <span className="reveal inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-navy/70 px-4 py-2 rounded-full border border-border bg-card">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            People Behind Every Process
          </span>

          <h1 className="reveal reveal-delay-1 mt-7 text-5xl md:text-7xl text-navy leading-[1.05]">
            Your business.<br />
            <span className="italic font-light text-navy/80">Our expertise.</span>{" "}
            Global results.
          </h1>

          <p className="reveal reveal-delay-2 mt-7 max-w-2xl mx-auto text-lg text-foreground/70 leading-relaxed">
            Bovnex Global Hub is Nepal's emerging BPO and Virtual Assistant company helping US, UK,
            and Australian businesses save 10–20 hours every week by outsourcing admin, operations,
            payroll, and IT work to a skilled dedicated team.
          </p>

          <div className="reveal reveal-delay-3 mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-navy text-navy-foreground px-7 py-3.5 rounded-full text-sm font-medium hover:bg-navy/90 transition group"
            >
              Get Started Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center bg-transparent text-navy px-7 py-3.5 rounded-full text-sm font-medium border border-border hover:bg-surface transition"
            >
              See Our Services
            </Link>
          </div>

          <div className="reveal reveal-delay-4 mt-16 grid grid-cols-3 max-w-2xl mx-auto divide-x divide-border">
            {[
              { n: "8+", l: "Specialized Services" },
              { n: "24/7", l: "Global Support" },
              { n: "2026", l: "Established" },
            ].map((s) => (
              <div key={s.l} className="px-4">
                <div className="font-serif text-3xl md:text-4xl text-navy">{s.n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
