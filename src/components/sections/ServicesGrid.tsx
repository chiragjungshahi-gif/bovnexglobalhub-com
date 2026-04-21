import { services } from "@/data/services";

export function ServicesGrid() {
  return (
    <section className="section-y bg-background" id="services">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">What we do</p>
          <h2 className="text-4xl md:text-5xl text-navy leading-tight">
            End-to-end outsourcing,<br />designed for scale.
          </h2>
          <p className="mt-5 text-foreground/70 text-lg">
            Eight specialized services to free your time, reduce overhead, and grow your business
            with a skilled dedicated team in Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <article
              key={s.slug}
              className="group p-6 bg-card hairline rounded-2xl hover:bg-surface transition-all duration-300 hover:-translate-y-0.5"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-surface group-hover:bg-navy group-hover:text-navy-foreground text-navy flex items-center justify-center transition-colors">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-5 text-xl text-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{s.description}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-surface text-navy/80 border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
