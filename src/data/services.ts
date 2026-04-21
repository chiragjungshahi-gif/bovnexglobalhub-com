import {
  HeadphonesIcon,
  Database,
  MessageSquare,
  Megaphone,
  Wallet,
  Calculator,
  Ruler,
  Code2,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  details: string;
};

export const services: Service[] = [
  {
    slug: "virtual-assistant",
    icon: HeadphonesIcon,
    title: "Virtual Assistant Services",
    description:
      "Email management, calendar scheduling, and administrative support for busy executives.",
    tags: ["Inbox", "Scheduling", "Admin"],
    details:
      "Free up 10–20 hours every week with a dedicated VA handling email, calendars, appointments, travel, research and daily task management.",
  },
  {
    slug: "data-entry",
    icon: Database,
    title: "Data Entry & Back-office",
    description:
      "Accurate data entry, spreadsheet management, database building and document processing.",
    tags: ["Excel", "CRM", "Documents"],
    details:
      "From large dataset cleaning to ongoing CRM hygiene — accurate, timely, and quality-checked back-office work.",
  },
  {
    slug: "customer-support",
    icon: MessageSquare,
    title: "Customer Support",
    description:
      "Email and chat support, complaint handling, order tracking and customer follow-ups.",
    tags: ["Email", "Chat", "Tickets"],
    details:
      "Trained agents respond in your brand voice across email, chat and helpdesk tools — 24/7 coverage available.",
  },
  {
    slug: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Social media management, content scheduling, Canva graphics and engagement.",
    tags: ["Social", "Canva", "Content"],
    details:
      "Monthly content calendars, caption writing, hashtag research, scheduling and engagement management for growing brands.",
  },
  {
    slug: "payroll",
    icon: Wallet,
    title: "Payroll Management",
    description:
      "Monthly payroll, TDS, SSF, payslips and full Nepal labor law compliance.",
    tags: ["TDS", "SSF", "IRD"],
    details:
      "End-to-end payroll for Nepal-based teams — calculations, deductions, payslips, IRD reporting and statutory compliance.",
  },
  {
    slug: "accounting",
    icon: Calculator,
    title: "Accounting & Bookkeeping",
    description:
      "Bookkeeping, VAT filing, tax returns, financial reporting, AR/AP management.",
    tags: ["Books", "VAT", "Reports"],
    details:
      "Clean books, on-time VAT filing and crisp monthly financial reports — for Nepal and international clients alike.",
  },
  {
    slug: "autocad",
    icon: Ruler,
    title: "AutoCAD & Drafting",
    description:
      "2D & 3D CAD drafting, architectural, engineering and shop drawings.",
    tags: ["2D", "3D", "Shop Dwgs"],
    details:
      "Trained drafters deliver architectural, structural and shop drawings to international standards and tight deadlines.",
  },
  {
    slug: "web-development",
    icon: Code2,
    title: "Web Development & IT",
    description:
      "Website design, web apps, mobile apps and ongoing IT-enabled services.",
    tags: ["Web", "Mobile", "Support"],
    details:
      "Modern marketing sites, internal tools and mobile apps — designed, built, and maintained by our engineering team.",
  },
];
