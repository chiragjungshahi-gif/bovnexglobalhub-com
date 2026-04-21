import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";

const tiers = [
  {
    name: "Starter",
    npr: "15,000",
    usd: "110",
    features: [
      "Up to 40 hours of VA/BPO work",
      "Email and calendar management",
      "Basic data entry",
      "Weekly report",
      "Email support",
    ],
  },
  {
    name: "Growth",
    npr: "30,000",
    usd: "220",
    featured: true,
    features: [
      "Up to 90 hours per month",
      "Full VA support",
      "Social media scheduling",
      "Payroll for up to 15 staff",
      "VAT filing",
      "Daily check-ins",
      "Priority response",
    ],
  },
  {
    name: "Enterprise",
    npr: "55,000",
    usd: "400",
    features: [
      "Unlimited hours, dedicated team",
      "All services included",
      "AutoCAD, web, accounting",
      "Full payroll and compliance",
      "Dedicated account manager",
      "24/7 availability",
      "Monthly strategy call",
    ],
  },
];

export function Pricing() {
  return (
    <section className="section-y" id="pricing">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl text-navy">Simple, transparent pricing</h2>
          <p className="mt-5 text-foreground/70 text-lg">
            No hidden fees. No lock-in. Pay only for what you need.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl p-8 transition ${
                t.featured
                  ? "bg-navy text-navy-foreground shadow-xl lg:-translate-y-3"
                  : "bg-card hairline"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy text-[10px] uppercase tracking-widest font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className={`text-2xl ${t.featured ? "text-white" : "text-navy"}`}>{t.name}</h3>
              <div className="mt-6">
                <div className="flex items-baseline gap-2">
                  <span className={`font-serif text-5xl ${t.featured ? "text-white" : "text-navy"}`}>
                    NPR {t.npr}
                  </span>
                </div>
                <div className={`text-sm mt-1 ${t.featured ? "text-white/70" : "text-muted-foreground"}`}>
                  or ${t.usd}/month · billed monthly
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${t.featured ? "text-gold" : "text-navy"}`} />
                    <span className={t.featured ? "text-white/85" : "text-foreground/75"}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`mt-8 inline-flex w-full justify-center items-center px-6 py-3 rounded-full text-sm font-medium transition ${
                  t.featured
                    ? "bg-gold text-navy hover:bg-gold/90"
                    : "bg-navy text-navy-foreground hover:bg-navy/90"
                }`}
              >
                Get started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
