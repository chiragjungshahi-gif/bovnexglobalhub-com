const steps = [
  { n: "01", t: "Discovery Call", d: "Tell us about your business and what you need off your plate." },
  { n: "02", t: "Custom Plan", d: "We build a tailored outsourcing plan for your specific needs." },
  { n: "03", t: "Team Assigned", d: "Your dedicated Bovnex team is briefed and ready within 48 hours." },
  { n: "04", t: "Deliver & Report", d: "Daily updates, weekly reports, full transparency always." },
];

export function Process() {
  return (
    <section className="section-y" id="process">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Process</p>
          <h2 className="text-4xl md:text-5xl text-navy">How we work</h2>
          <p className="mt-5 text-foreground/70 text-lg">
            A simple, transparent four-step path from first call to ongoing delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden hairline">
          {steps.map((s) => (
            <div key={s.n} className="bg-card p-8 hover:bg-surface transition-colors min-h-52">
              <div className="font-serif text-5xl text-gold/80">{s.n}</div>
              <h3 className="mt-5 text-xl text-navy">{s.t}</h3>
              <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
