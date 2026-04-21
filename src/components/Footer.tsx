import { Link } from "@tanstack/react-router";
import { Globe, Send, AtSign, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

const services = [
  "Virtual Assistant",
  "Data Entry & Back-office",
  "Customer Support",
  "Digital Marketing",
  "Payroll Management",
  "Accounting & Bookkeeping",
  "AutoCAD & Drafting",
  "Web Development & IT",
];

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-x py-16">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-5 text-sm text-foreground/70 max-w-sm leading-relaxed">
              Bovnex Global Hub is Nepal's emerging BPO and Virtual Assistant company.
              We handle your operations so you can focus on growth.
            </p>
            <div className="flex gap-3 mt-6">
              {[Globe, AtSign, MessageCircle, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-navy hover:bg-navy hover:text-navy-foreground transition"
                  aria-label="Social"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-foreground/75 hover:text-navy">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="text-foreground/75 hover:text-navy">About</Link></li>
              <li><Link to="/" className="text-foreground/75 hover:text-navy">How It Works</Link></li>
              <li><Link to="/" className="text-foreground/75 hover:text-navy">Pricing</Link></li>
              <li><Link to="/blog" className="text-foreground/75 hover:text-navy">Blog</Link></li>
              <li><Link to="/contact" className="text-foreground/75 hover:text-navy">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-foreground/75">
              <li>Kathmandu, Nepal</li>
              <li>info@bovnexglobalhub.com</li>
              <li>+977-XXXXXXXXX</li>
              <li className="pt-3">
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">Legal</span>
                <a href="#" className="block hover:text-navy">Privacy Policy</a>
                <a href="#" className="block hover:text-navy">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-5 text-xs text-muted-foreground flex flex-col md:flex-row gap-2 justify-between">
          <p>© 2026 Bovnex Global Hub Pvt. Ltd. All rights reserved.</p>
          <p>Kathmandu, Nepal · People Behind Every Process</p>
        </div>
      </div>
    </footer>
  );
}
