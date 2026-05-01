import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Check,
  Handshake,
  ClipboardList,
  MessagesSquare,
  Megaphone,
  Wallet,
  Calculator,
  Ruler,
  Code2,
  type LucideIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const NPR_RATE = 135;

type Tier = {
  name: string;
  price: string;
  meta: string;
};

type ServiceCard = {
  icon: LucideIcon;
  title: string;
  badge?: { label: string; tone: "gold" | "navy" };
  description: string;
  tiers: [Tier, Tier, Tier];
  includes: string[];
};

const services: ServiceCard[] = [
  {
    icon: Handshake,
    title: "Virtual Assistant Services",
    badge: { label: "Most Popular", tone: "gold" },
    description:
      "Email management, calendar scheduling, admin support, inbox organisation, research, and daily task management for busy business owners.",
    tiers: [
      { name: "Starter (Part-time)", price: "$350/mo", meta: "40 hrs/mo · $8.75/hr" },
      { name: "Growth (Half-time)", price: "$650/mo", meta: "80 hrs/mo · $8.13/hr" },
      { name: "Full-time Dedicated", price: "$1,100/mo", meta: "160 hrs/mo · $6.88/hr" },
    ],
    includes: [
      "Daily check-ins",
      "Weekly reports",
      "Slack/Zoom support",
      "Clockify time tracking",
      "Tool access included",
    ],
  },
  {
    icon: ClipboardList,
    title: "Data Entry & Back-office Support",
    badge: { label: "Fast Turnaround", tone: "navy" },
    description:
      "Data entry, spreadsheet management, database building, PDF to Excel conversion, copy-paste tasks, lead list building, and document processing.",
    tiers: [
      { name: "Per Hour", price: "$6–$8/hr", meta: "General data entry tasks" },
      { name: "Monthly Retainer", price: "$280–$550/mo", meta: "40–80 hrs committed" },
      { name: "Per Project", price: "$50–$500", meta: "Fixed scope projects" },
    ],
    includes: [
      "99%+ accuracy guarantee",
      "Double-entry verification",
      "NDA & data confidentiality",
      "48hr turnaround",
    ],
  },
  {
    icon: MessagesSquare,
    title: "Customer Support (Email & Chat)",
    description:
      "Email support, live chat, complaint handling, order tracking, refund processing, FAQ responses, and customer follow-ups.",
    tiers: [
      { name: "Email Support Only", price: "$400–$600/mo", meta: "Up to 50 tickets/day" },
      { name: "Email + Live Chat", price: "$700–$1,000/mo", meta: "1 dedicated agent" },
      { name: "Full Support Team", price: "$1,500+/mo", meta: "2–3 agents, multi-shift" },
    ],
    includes: [
      "Freshdesk/Zendesk ready",
      "Response within 4 hrs",
      "Weekly performance report",
      "CSAT tracking",
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & Social Media",
    description:
      "Social media management, content creation, scheduling, Canva graphics, hashtag research, engagement management, and monthly content calendars.",
    tiers: [
      { name: "Basic (1 platform)", price: "$250–$380/mo", meta: "12 posts/mo + scheduling" },
      { name: "Standard (2–3 platforms)", price: "$450–$700/mo", meta: "20–25 posts + engagement" },
      { name: "Full Management", price: "$800–$1,200/mo", meta: "All platforms + ads + reports" },
    ],
    includes: [
      "Canva graphics included",
      "Monthly content calendar",
      "Buffer/Hootsuite scheduling",
      "Monthly analytics report",
    ],
  },
  {
    icon: Wallet,
    title: "Payroll Management",
    badge: { label: "Nepal Compliant", tone: "navy" },
    description:
      "Monthly payroll processing, TDS/SSF deductions, payslip generation, IRD reporting, and full Nepal Labour Act 2074 compliance.",
    tiers: [
      { name: "Up to 10 employees", price: "$80–$130/mo", meta: "$8–13 per employee/mo" },
      { name: "11–30 employees", price: "$180–$280/mo", meta: "$6–9 per employee/mo" },
      { name: "31–60 employees", price: "$300–$450/mo", meta: "$5–7.50 per employee/mo" },
    ],
    includes: [
      "Payslip generation",
      "TDS & SSF filing",
      "IRD compliance",
      "Salary bank advice",
      "Leave & attendance tracking",
    ],
  },
  {
    icon: Calculator,
    title: "Accounting & Bookkeeping",
    description:
      "Full bookkeeping, VAT filing, tax return preparation, accounts payable/receivable, monthly financial statements, and bank reconciliation.",
    tiers: [
      { name: "Bookkeeping Only", price: "$150–$280/mo", meta: "Transactions + reports" },
      { name: "Full Accounting", price: "$350–$600/mo", meta: "Books + VAT + statements" },
      { name: "Tax Return (Annual)", price: "$120–$350", meta: "Income tax preparation" },
    ],
    includes: [
      "QuickBooks/Xero compatible",
      "Monthly P&L statement",
      "VAT filing bi-monthly",
      "Bank reconciliation",
    ],
  },
  {
    icon: Ruler,
    title: "AutoCAD & Engineering Drafting",
    badge: { label: "High Value", tone: "gold" },
    description:
      "2D/3D CAD drafting, architectural drawings, structural drawings, shop drawings, as-built drawings, and engineering design for international clients.",
    tiers: [
      { name: "2D Drafting", price: "$15–$22/hr", meta: "Floor plans, elevations, sections" },
      { name: "3D Modelling", price: "$20–$30/hr", meta: "3D CAD, rendering, walkthroughs" },
      { name: "Monthly Retainer", price: "$900–$1,800/mo", meta: "60–80 hrs dedicated drafter" },
    ],
    includes: [
      "AutoCAD/Revit/SketchUp",
      "DWG/PDF delivery",
      "2 revision rounds",
      "NDA on all drawings",
    ],
  },
  {
    icon: Code2,
    title: "Web Development & IT Services",
    description:
      "Website design and development, WordPress, Shopify, landing pages, mobile apps, software support, IT helpdesk, and ongoing maintenance.",
    tiers: [
      { name: "Basic Website", price: "$400–$900", meta: "5-page WordPress site" },
      { name: "Custom Web Dev", price: "$18–$30/hr", meta: "Custom builds & e-commerce" },
      { name: "Maintenance Retainer", price: "$150–$350/mo", meta: "Updates, backups, support" },
    ],
    includes: [
      "React/WordPress/Shopify",
      "Mobile responsive",
      "Basic SEO setup",
      "30-day post-launch support",
    ],
  },
];

const bundles = [
  {
    name: "Starter Bundle",
    price: "$350/mo",
    includes: "40 hrs VA + basic data entry",
    best: "Solo founders and small businesses just getting started with outsourcing.",
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Growth Bundle",
    price: "$750/mo",
    includes: "80 hrs VA + payroll (up to 15 staff) + social media (2 platforms)",
    best: "Growing SMEs who want to hand off multiple operations at once.",
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Enterprise Bundle",
    price: "From $1,500/mo",
    includes: "Full-time VA + accounting + payroll + customer support + web maintenance",
    best: "Companies wanting a fully outsourced operations department.",
    cta: "Request Quote",
    featured: false,
  },
];

const comparison = [
  ["Virtual Assistant", "$3,500–$6,000/mo", "$4,500–$7,000/mo", "$350–$1,100/mo", "Up to 80%"],
  ["Data Entry", "$25–$45/hr", "$20–$35/hr", "$6–$8/hr", "Up to 75%"],
  ["Customer Support", "$2,500–$5,000/mo", "$4,000+/mo", "$400–$1,500/mo", "Up to 72%"],
  ["Digital Marketing", "$1,500–$4,000/mo", "$3,500+/mo", "$250–$1,200/mo", "Up to 70%"],
  ["Payroll (20 staff)", "$400–$600/mo", "$800+/mo", "$180–$280/mo", "Up to 65%"],
  ["Accounting", "$1,000–$3,000/mo", "$3,500+/mo", "$150–$600/mo", "Up to 80%"],
  ["AutoCAD Drafting", "$60–$120/hr", "$65–$100/hr", "$15–$30/hr", "Up to 75%"],
  ["Web Development", "$75–$200/hr", "$80,000+/yr", "$18–$30/hr", "Up to 70%"],
];

const faqs = [
  {
    q: "Do you require long-term contracts?",
    a: "No. All our services are month-to-month. You can cancel with 30 days written notice. We do offer 10–15% discounts for clients who commit to 3, 6, or 12-month agreements.",
  },
  {
    q: "How do I pay? What currencies do you accept?",
    a: "We accept payment via Wise (international bank transfer), direct bank transfer (USD/GBP/AUD), eSewa, and Khalti. International clients pay in USD. Nepal clients can pay in NPR at the equivalent rate.",
  },
  {
    q: "Can I upgrade or downgrade my plan?",
    a: "Yes, anytime. If your needs grow, simply upgrade with 7 days notice. If you want to scale back, give us 30 days notice.",
  },
  {
    q: "Do you offer a free trial or consultation?",
    a: "Yes. We offer a free 30-minute discovery call to understand your needs and a 1-week trial for VA and data entry services so you can experience the quality before committing.",
  },
  {
    q: "Is my data safe with Bovnex?",
    a: "Absolutely. We sign an NDA with every client before work begins. Our team follows strict data confidentiality protocols and we comply with international data protection standards including GDPR guidelines.",
  },
];

function convertToNPR(price: string): string {
  // convert any $X or $X-$Y patterns to NPR equivalents, keep suffixes like /mo, /hr, +
  return price.replace(/\$([0-9,]+(?:\.[0-9]+)?)/g, (_m, num: string) => {
    const n = parseFloat(num.replace(/,/g, ""));
    const npr = Math.round((n * NPR_RATE) / 100) * 100;
    return `NPR ${npr.toLocaleString()}`;
  });
}

export function Pricing() {
  const [currency, setCurrency] = useState<"USD" | "NPR">("USD");

  const fmt = useMemo(
    () => (p: string) => (currency === "USD" ? p : convertToNPR(p)),
    [currency],
  );

  return (
    <section className="section-y bg-background" id="pricing">
      <div className="container-x">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">
            Transparent Pricing
          </p>
          <h2 className="text-4xl md:text-5xl text-navy">Investment in Your Growth</h2>
          <p className="mt-5 text-foreground/70 text-lg">
            Market-researched rates positioned 60–70% below US agency costs. No hidden fees.
            No lock-in contracts. Cancel anytime with 30 days notice.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {[
              "8 Service Categories",
              "Starting at $6/hr",
              "60–70% Cost Savings",
              "Month-to-Month Contracts",
            ].map((pill) => (
              <span
                key={pill}
                className="text-xs px-3.5 py-1.5 rounded-full bg-surface text-navy hairline"
              >
                {pill}
              </span>
            ))}
          </div>

          {/* Currency toggle */}
          <div className="mt-7 inline-flex hairline rounded-full p-1 bg-card">
            {(["USD", "NPR"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-4 py-1.5 text-xs rounded-full transition ${
                  currency === c
                    ? "bg-navy text-navy-foreground"
                    : "text-navy/70 hover:text-navy"
                }`}
                aria-pressed={currency === c}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-5 max-w-6xl mx-auto">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="group relative reveal bg-card hairline rounded-2xl p-7 transition hover:-translate-y-0.5 hover:shadow-lg hover:border-navy/40"
                style={{ animationDelay: `${(i % 4) * 0.06}s` }}
              >
                {s.badge && (
                  <span
                    className={`absolute -top-3 right-6 text-[10px] uppercase tracking-widest font-medium px-3 py-1 rounded-full ${
                      s.badge.tone === "gold"
                        ? "bg-gold text-navy"
                        : "bg-navy text-navy-foreground"
                    }`}
                  >
                    {s.badge.label}
                  </span>
                )}

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-surface text-navy flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl text-navy">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-foreground/70">{s.description}</p>
                  </div>
                </div>

                <div className="mt-6 grid sm:grid-cols-3 gap-3">
                  {s.tiers.map((t) => (
                    <div
                      key={t.name}
                      className="rounded-xl hairline p-4 bg-background/60"
                    >
                      <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                        {t.name}
                      </div>
                      <div className="mt-1.5 font-serif text-xl text-navy leading-tight">
                        {fmt(t.price)}
                      </div>
                      <div className="mt-1 text-[11px] text-foreground/60">{t.meta}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5 text-[11px] text-foreground/65">
                  {s.includes.map((it, idx) => (
                    <span key={it} className="inline-flex items-center gap-1.5">
                      {idx > 0 && <span className="text-border">·</span>}
                      <Check className="w-3 h-3 text-gold" />
                      {it}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Bundles */}
        <div className="mt-24 max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl text-navy">Bundle &amp; Save</h3>
            <p className="mt-3 text-foreground/70">
              Combine services for better value. Long-term contracts (3–12 months) get an
              additional 10–15% discount.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 items-stretch">
            {bundles.map((b) => (
              <div
                key={b.name}
                className={`relative rounded-2xl p-8 flex flex-col transition ${
                  b.featured
                    ? "bg-card border-2 border-navy shadow-xl md:-translate-y-3 md:py-10"
                    : "bg-card hairline hover:border-navy/40"
                }`}
              >
                {b.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy text-[10px] uppercase tracking-widest font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h4 className="text-2xl text-navy">{b.name}</h4>
                <div className="mt-3 font-serif text-4xl text-navy">{fmt(b.price)}</div>
                <p className="mt-5 text-sm text-foreground/75">
                  <span className="text-navy font-medium">Includes: </span>
                  {b.includes}
                </p>
                <p className="mt-3 text-sm text-foreground/65">
                  <span className="text-navy font-medium">Best for: </span>
                  {b.best}
                </p>
                <Link
                  to="/contact"
                  className={`mt-auto pt-8 inline-flex w-full justify-center items-center px-6 py-3 rounded-full text-sm font-medium transition ${
                    b.featured
                      ? "bg-navy text-navy-foreground hover:bg-navy/90"
                      : "hairline text-navy hover:bg-surface"
                  }`}
                >
                  <span className={b.featured ? "" : ""}>{b.cta}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison table */}
        <div className="mt-24 max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl text-navy">How We Compare</h3>
            <p className="mt-3 text-foreground/70">
              Bovnex rates vs US agencies and in-house hiring.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl hairline bg-card">
            <table className="w-full text-sm min-w-[720px]">
              <thead>
                <tr className="bg-surface text-navy text-left">
                  <th className="px-5 py-4 font-medium">Service</th>
                  <th className="px-5 py-4 font-medium">US Agency Rate</th>
                  <th className="px-5 py-4 font-medium">In-house Cost</th>
                  <th className="px-5 py-4 font-medium">Bovnex Rate</th>
                  <th className="px-5 py-4 font-medium">Your Savings</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row[0]} className={i % 2 ? "bg-background/40" : ""}>
                    <td className="px-5 py-4 text-navy font-medium">{row[0]}</td>
                    <td className="px-5 py-4 text-foreground/70 line-through decoration-foreground/30">
                      {row[1]}
                    </td>
                    <td className="px-5 py-4 text-foreground/70">{row[2]}</td>
                    <td className="px-5 py-4 text-navy">{row[3]}</td>
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium">
                        {row[4]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground text-center">
            Source: 2025 global BPO market research.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-24 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl text-navy">Frequently Asked Questions</h3>
          </div>
          <Accordion type="single" collapsible className="bg-card hairline rounded-2xl px-6">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className={i === faqs.length - 1 ? "border-b-0" : ""}
              >
                <AccordionTrigger className="text-navy text-base py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/75 leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Final CTA */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="rounded-3xl bg-navy text-navy-foreground px-8 py-14 md:px-14 md:py-20 text-center">
            <h3 className="text-3xl md:text-4xl text-white">
              Not sure which plan is right for you?
            </h3>
            <p className="mt-4 text-white/75 max-w-2xl mx-auto">
              Book a free 30-minute consultation. We will assess your needs and recommend the
              exact services and pricing that fit your business.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex justify-center items-center px-7 py-3 rounded-full text-sm font-medium bg-gold text-navy hover:bg-gold/90 transition"
              >
                Book Free Consultation
              </Link>
              <Link
                to="/services"
                className="inline-flex justify-center items-center px-7 py-3 rounded-full text-sm font-medium border border-white/40 text-white hover:bg-white/10 transition"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
