import React from "react";

type ProjectLink = { label: string; url: string };

type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tech: string[];
  integrations?: string[];
  liveLinks?: ProjectLink[];
  codeLinks?: ProjectLink[];
  badge?: string;
};

const projects: Project[] = [
  {
    id: "ybs-platform",
    title: "YourBizSuite Apps Platform",
    subtitle: "One login • Multi-business • Five integrated apps",
    badge: "Flagship Platform",
    description:
      "A unified SaaS platform where business owners manage multiple businesses under one account. Each plan includes the same apps and features—plans differ by the number of business profiles allowed.",
    highlights: [
      "Unified platform experience across all apps under one login",
      "Multi-business architecture (separate data, settings, and workflows per business)",
      "Consistent UI/UX patterns across products for a smooth learning curve",
      "Subscription-based access with plan limits based on business profiles",
      "Cross-app workflows (events → invitations via BrandMail, invoices → payments, etc.)",
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT / OAuth",
      "Stripe (Billing + Connect)",
      "Cloud Storage (S3-like patterns / CDN)",
    ],
    integrations: ["Stripe", "Google Calendar", "Zoom", "Email Infrastructure (high-volume delivery)"],
    liveLinks: [{ label: "Live Platform", url: "https://apps.yourbizsuite.com" }],
  },

  {
    id: "cashlytic",
    title: "Cashlytic",
    subtitle: "Smart financial tracking, invoicing, and insights for modern businesses",
    badge: "Finance + Invoicing",
    description:
      "Cashlytic helps business owners stay in control of finances without complexity—daily tracking, P&L automation, invoices, and clear analytics.",
    highlights: [
      "Record daily income/expenses with automatic Profit & Loss generation",
      "Interactive financial tables + charts for performance tracking",
      "Category-based pie charts for spending/earning clarity",
      "Rule-based AI insights highlighting trends, risks, and opportunities",
      "Create estimates → convert to invoices in one click",
      "Stripe-connected invoices with secure card payments",
      "PDF export + email delivery (approval + payment links)",
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe Checkout",
      "Stripe Webhooks",
      "PDF Export (html2canvas + jsPDF)",
    ],
    integrations: ["Stripe (Payments)", "Email Delivery", "PDF generation"],
    liveLinks: [
      { label: "Open in YBS Platform", url: "https://apps.yourbizsuite.com" },
    ],
  },

  {
    id: "ybs-meet",
    title: "YBS Meet",
    subtitle: "Professional appointment booking built for real businesses",
    badge: "Scheduling",
    description:
      "A complete appointment system that streamlines scheduling, communication, and lifecycle tracking—designed for service businesses.",
    highlights: [
      "Zoom, Google Meet, phone, and in-person appointment support",
      "Google Calendar + Zoom integrations for automated scheduling",
      "Branded public booking pages customers can access anytime",
      "Automated confirmation, reminder, and follow-up emails",
      "Full appointment lifecycle tracking from booking to completion",
      "Includes 30 full-flow appointments per business/month (with add-on capacity)",
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "OAuth",
      "Calendar Sync Workflows",
    ],
    integrations: ["Google Calendar", "Zoom", "Email automation"],
    liveLinks: [
      { label: "Open in YBS Platform", url: "https://apps.yourbizsuite.com" },
    ],
  },

  {
    id: "ybs-esign",
    title: "YBS eSign",
    subtitle: "Simple, secure document signing for businesses",
    badge: "eSignature",
    description:
      "A secure document signing experience with templates, envelopes, recipient portal access, and full audit trails for signature events.",
    highlights: [
      "Unlimited reusable document templates",
      "Send documents for signature with complete email workflow",
      "Recipient portal to view and access signed documents",
      "Full audit trail for every envelope and signature",
      "Includes 30 completed envelopes per business/month (with add-on capacity)",
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Secure Token Links",
      "Document Storage (AWS S3)",
      "Audit Logging",
    ],
    integrations: ["Email workflow", "Cloud storage", "Audit trail reporting"],
    liveLinks: [
      { label: "Open in YBS Platform", url: "https://apps.yourbizsuite.com" },
    ],
  },

  {
    id: "brandmail",
    title: "YBS BrandMail",
    subtitle: "Beautiful business emails without complexity",
    badge: "Email Marketing",
    description:
      "An email builder and sending system that helps businesses create professional campaigns quickly—without learning heavy marketing tools.",
    highlights: [
      "50+ professionally designed themes",
      "Save templates for reuse across campaigns",
      "Send marketing emails directly to customer lists",
      "Built-in reporting (delivered, opens, clicks, failures)",
      "Includes 500 emails per business/month (with add-on credits)",
      "Enterprise-grade infrastructure for reliable delivery at scale",
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Email templating",
      "Campaign reporting",
    ],
    integrations: ["High-volume email infrastructure AWS SES", "Tracking (opens/clicks)", "Template system"],
    liveLinks: [
      { label: "Open in YBS Platform", url: "https://apps.yourbizsuite.com" },
    ],
  },

  {
    id: "eventpro",
    title: "YBS EventPro",
    subtitle: "Events, invitations, and RSVPs—fully integrated",
    badge: "Events + RSVP",
    description:
      "Create business events, invite guests, collect RSVPs, and track attendance—integrated with BrandMail for polished invitations and reporting.",
    highlights: [
      "Create business events and manage them inside a built-in calendar",
      "Send invitations through BrandMail using designed templates",
      "RSVP links open public response pages for guests",
      "Real-time attendance tracking (Attending / Maybe / Not attending)",
      "Centralized event reporting to measure engagement and turnout",
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Public RSVP pages",
      "Reporting dashboards",
    ],
    integrations: ["BrandMail (invites)", "Public RSVP pages", "Attendance reporting"],
    liveLinks: [
      { label: "Open in YBS Platform", url: "https://apps.yourbizsuite.com" },
    ],
  },

  {
    id: "gyros-hero",
    title: "Gyros Hero Website",
    subtitle: "Branded online ordering site integrated with Square POS",
    badge: "Production Website",
    description:
      "A branded online ordering experience integrated with Square POS—fully responsive, production-ready, and optimized for real restaurant operations.",
    highlights: [
      "Online ordering experience designed for conversion and clarity",
      "Square API integration for POS-aligned workflows",
      "Responsive UI for mobile-first ordering",
      "Production deployment with operational reliability",
    ],
    tech: ["React", "JavaScript", "Node.js", "Express", "Square API"],
    integrations: ["Square POS / Square API"],
    liveLinks: [{ label: "Live Site", url: "https://gyrosheros.com" }],
    codeLinks: [
      { label: "Frontend Code", url: "https://github.com/Mouragheb/gyroshero-frontend" },
      { label: "Backend Code", url: "https://github.com/Mouragheb/gyroshero-backend" },
    ],
  },
];

const pill =
  "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200";

const Projects = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#07101b] text-white px-6 py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-40 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-300">
            Selected Work
          </p>
          <h2 className="mt-2 text-4xl md:text-5xl font-semibold">
            Projects
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-slate-200">
            Production SaaS systems and real-business software—built with React + TypeScript, modern UI patterns,
            and strong ownership from architecture to delivery.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((p) => (
            <article
            key={p.id}
            id={p.id}
            className={`rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:bg-white/10 transition
              ${p.id === "ybs-platform" ? "md:col-span-2" : ""}
            `}
          >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-300">{p.subtitle}</p>
                </div>

                {p.badge && (
                  <span className="text-xs rounded-full border border-white/10 bg-[#0b1726]/70 px-3 py-1 text-slate-200">
                    {p.badge}
                  </span>
                )}
              </div>

              <p className="mt-4 text-slate-200 leading-relaxed">{p.description}</p>

              {/* Highlights */}
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {p.highlights.slice(0, 5).map((h, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-[2px] h-2 w-2 rounded-full bg-cyan-300/80 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tech */}
              <div className="mt-5">
                <div className="text-xs uppercase tracking-wider text-slate-400 mb-2">
                  Tech Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t, i) => (
                    <span key={i} className={pill}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Integrations */}
              {p.integrations?.length ? (
                <div className="mt-5">
                  <div className="text-xs uppercase tracking-wider text-slate-400 mb-2">
                    Integrations
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.integrations.map((t, i) => (
                      <span key={i} className={pill}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Links */}
              <div className="mt-6 flex flex-wrap gap-3">
                {p.liveLinks?.map((l, idx) => (
                  <a
                    key={idx}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-white text-[#07101b] px-4 py-2 text-sm font-semibold hover:bg-slate-100 transition"
                  >
                    {l.label}
                  </a>
                ))}

                {p.codeLinks?.map((l, idx) => (
                  <a
                    key={idx}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-14 text-center text-sm text-slate-400">
          Main platform link:{" "}
          <a
            href="https://apps.yourbizsuite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4"
          >
            apps.yourbizsuite.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;