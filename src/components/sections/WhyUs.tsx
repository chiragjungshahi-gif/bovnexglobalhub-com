const reasons = [
  {
    title: "Cost Savings",
    desc: "Save 60–70% compared to hiring in-house staff in the US, UK, or Australia.",
  },
  {
    title: "English-Proficient Team",
    desc: "Our team communicates fluently in English — zero language barrier.",
  },
  {
    title: "GMT+5:45 Time Zone",
    desc: "Tasks done while you sleep. Results waiting for your morning.",
  },
  {
    title: "Reliability First",
    desc: "Weekly reports, daily check-ins, and full transparency on every task.",
  },
  {
    title: "No Lock-in Contracts",
    desc: "Month-to-month arrangements. Cancel anytime with 30 days notice.",
  },
];

const metrics = [
  { label: "Average cost reduction", value: 68 },
  { label: "Client retention rate", value: 94 },
  { label: "Tasks delivered on-time", value: 99 },
  { label: "English proficiency", value: 96 },
];

export function WhyUs() {
  return (
    <section className="section-y bg-surface" id="why">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Why Bovnex</p>
          <h2 className="text-4xl md:text-5xl text-navy leading-tight">
            Built on bond, trust,<br />and connection.
          </h2>
          <div className="mt-10 space-y-6">
            {reasons.map((r, i) => (
              <div key={r.title} className="flex gap-5 group">
                <div className="shrink-0 w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center font-serif text-navy group-hover:bg-navy group-hover:text-navy-foreground transition">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="pt-1.5">
                  <h3 className="font-sans text-base font-medium text-navy">{r.title}</h3>
                  <p className="mt-1 text-sm text-foreground/70 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-28">
          <div className="bg-card hairline rounded-2xl p-8">
            <div className="flex items-baseline justify-between mb-8">
              <h3 className="text-2xl text-navy">By the numbers</h3>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">2026</span>
            </div>
            <div className="space-y-6">
              {metrics.map((m) => (
                <div key={m.label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground/80">{m.label}</span>
                    <span className="font-medium text-navy">{m.value}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-surface overflow-hidden">
                    <div
                      className="h-full bg-navy rounded-full transition-all duration-1000"
                      style={{ width: `${m.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-border grid grid-cols-3 text-center">
              <div>
                <div className="font-serif text-2xl text-navy">Bond</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Value 01</div>
              </div>
              <div>
                <div className="font-serif text-2xl text-navy">Trust</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Value 02</div>
              </div>
              <div>
                <div className="font-serif text-2xl text-navy">Connect</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Value 03</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
