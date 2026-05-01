const items = [
  {
    quote:
      "Bovnex has saved me at least 15 hours every week. My inbox is organized, my calendar runs itself, and I finally have time to grow my business.",
    name: "Sarah M.",
    role: "Business Coach",
    country: "United States",
  },
  {
    quote:
      "We outsourced our data entry and payroll to Bovnex. The quality is outstanding and the cost savings have been incredible.",
    name: "James T.",
    role: "Operations Manager",
    country: "Australia",
  },
  {
    quote:
      "Professional, reliable, and always on time. Bovnex feels like an extension of our own team, not an outsourcing vendor.",
    name: "Priya K.",
    role: "Founder",
    country: "United Kingdom",
  },
];

export function Testimonials() {
  return (
    <section className="section-y bg-navy text-navy-foreground relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="container-x relative">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl text-white">What our clients say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t) => (
            <figure
              key={t.name}
              className="p-8 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur"
            >
              <div className="flex gap-1 text-gold" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-3 text-white/85 leading-relaxed">{t.quote}</blockquote>
              <figcaption className="mt-8 pt-6 border-t border-white/10">
                <div className="font-medium text-white">{t.name}</div>
                <div className="text-xs text-white/60 mt-0.5">{t.role} · {t.country}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
