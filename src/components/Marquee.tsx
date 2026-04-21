const items = [
  "Virtual Assistant",
  "Data Entry",
  "Customer Support",
  "Payroll Management",
  "Accounting",
  "AutoCAD Drafting",
  "Web Development",
  "Digital Marketing",
  "BPO Services",
  "Nepal's Trusted Outsourcing Partner",
];

export function Marquee() {
  return (
    <div className="bg-navy text-navy-foreground py-5 overflow-hidden border-y border-navy/40">
      <div className="marquee">
        {[0, 1].map((k) => (
          <div className="marquee-track" key={k} aria-hidden={k === 1}>
            {items.map((it, i) => (
              <span key={i} className="flex items-center gap-12 text-sm tracking-wide whitespace-nowrap">
                {it}
                <span className="text-gold">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
