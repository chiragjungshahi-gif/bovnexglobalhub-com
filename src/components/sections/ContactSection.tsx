import { useState } from "react";
import { MapPin, Mail, Phone, Globe, CheckCircle2 } from "lucide-react";

const serviceOptions = [
  "Virtual Assistant",
  "Data Entry",
  "Customer Support",
  "Payroll",
  "Accounting",
  "AutoCAD",
  "Web Development",
  "Digital Marketing",
  "Other",
];

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!String(fd.get("name") || "").trim()) next.name = "Required";
    const email = String(fd.get("email") || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Valid email required";
    if (!String(fd.get("message") || "").trim()) next.message = "Required";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      e.currentTarget.reset();
    }
  }

  return (
    <section className="section-y bg-surface" id="contact">
      <div className="container-x grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Contact</p>
          <h2 className="text-4xl md:text-5xl text-navy leading-tight">
            Let's start working together.
          </h2>
          <p className="mt-5 text-foreground/70 text-lg max-w-md">
            Tell us a little about your business and what you'd like off your plate. We reply within
            one business day.
          </p>

          <ul className="mt-10 space-y-5 text-sm">
            {[
              { Icon: MapPin, t: "Kathmandu, Nepal" },
              { Icon: Mail, t: "bovnex@gmail.com" },
              { Icon: Phone, t: "+977-9813086002" },
              { Icon: Globe, t: "www.bovnexglobalhub.com" },
            ].map(({ Icon, t }) => (
              <li key={t} className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-navy">
                  <Icon className="w-4 h-4" />
                </span>
                <span className="text-foreground/85">{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 p-5 rounded-2xl bg-card hairline text-sm">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
              Business Hours
            </div>
            <div className="text-navy">Sunday–Friday, 9AM–6PM NPT</div>
            <div className="text-foreground/65 mt-1">Available for international clients anytime.</div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="bg-card hairline rounded-2xl p-7 md:p-9">
          {sent && (
            <div className="mb-6 flex items-start gap-3 p-4 rounded-xl bg-surface border border-border">
              <CheckCircle2 className="w-5 h-5 text-navy mt-0.5" />
              <div>
                <div className="text-sm font-medium text-navy">Message sent</div>
                <div className="text-xs text-foreground/70 mt-0.5">
                  Thanks — we'll get back to you within one business day.
                </div>
              </div>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full Name" name="name" error={errors.name} />
            <Field label="Email Address" name="email" type="email" error={errors.email} />
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <Field label="Country" name="country" />
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">
                Service Interested In
              </label>
              <select
                name="service"
                className="mt-2 w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-navy"
                defaultValue=""
              >
                <option value="" disabled>Select a service</option>
                {serviceOptions.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea
              name="message"
              rows={5}
              className={`mt-2 w-full bg-background border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-navy resize-none ${
                errors.message ? "border-destructive" : "border-border"
              }`}
            />
            {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="mt-6 w-full inline-flex items-center justify-center bg-navy text-navy-foreground px-6 py-3.5 rounded-full text-sm font-medium hover:bg-navy/90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        className={`mt-2 w-full bg-background border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-navy ${
          error ? "border-destructive" : "border-border"
        }`}
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
