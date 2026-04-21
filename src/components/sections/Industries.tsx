const industries = [
  "Real Estate", "E-commerce", "Healthcare", "Legal", "Education",
  "Hospitality", "Travel & Tourism", "Financial Services", "Technology Startups",
  "Coaching & Consulting", "NGOs & INGOs", "Construction & Engineering",
  "Restaurants & Food", "Insurance", "Accounting Firms",
];

export function Industries() {
  return (
    <section className="section-y bg-surface" id="industries">
      <div className="container-x">
        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Clients</p>
          <h2 className="text-4xl md:text-5xl text-navy">Industries we serve</h2>
          <p className="mt-5 text-foreground/70 text-lg">
            From solo coaches to multi-location operations — we tailor our teams to your sector.
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {industries.map((i) => (
            <span
              key={i}
              className="px-5 py-2.5 rounded-full bg-card border border-border text-sm text-navy hover:border-navy hover:bg-navy hover:text-navy-foreground transition cursor-default"
            >
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
