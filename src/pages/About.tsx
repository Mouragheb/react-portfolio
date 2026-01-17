import React from "react";

const About = () => {
  const tech = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Stripe",
    "OAuth / JWT",
    "AWS (S3-like patterns)",
    "REST APIs",
  ];

  const highlights = [
    "Built and shipped production SaaS platforms used by real businesses",
    "Strong frontend ownership: UI architecture, UX patterns, and maintainability",
    "Backend focus on API architecture, data integrity, and scalable business logic",
    "Experienced with payments, auth, dashboards, PDF workflows, and integrations",
    "Remote-first mindset with clear communication and delivery focus",
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#07101b] text-white px-6 py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-300">
            About
          </p>
          <h2 className="mt-2 text-4xl md:text-5xl font-semibold">
            Moustafa Ragheb
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-slate-200">
            Builder of production-grade SaaS products with a focus on clean UI,
            real business workflows, and scalable architecture.
          </p>
        </div>

        {/* Main Card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-start gap-10">
            {/* Profile Photo */}
            <div className="shrink-0">
              <img
                src="/moustafa_new.png"
                alt="Moustafa Ragheb"
                className="w-36 h-36 md:w-44 md:h-44 rounded-2xl object-cover border border-white/10 shadow-2xl"
              />
              <div className="mt-4 text-sm text-slate-300">
                Houston, TX • Open to Remote
              </div>
            </div>

            {/* Text Content */}
            <div className="text-slate-200 space-y-5 leading-relaxed text-[15.5px] md:text-lg">
              <p>
                I’m <span className="font-semibold text-white">Moustafa Ragheb</span>, a
                full-stack engineer with a strong focus on{" "}
                <span className="font-semibold text-white">React + TypeScript frontend ownership</span>{" "}
                and building software that solves real operational problems.
              </p>

              <p>
                I’m also a business owner — I launched my Mediterranean restaurant{" "}
                <span className="font-semibold text-white">Gyros Hero</span>. Living the day-to-day
                challenges of running a business shaped how I build software:
                practical, fast to use, and built around real workflows (not theory).
              </p>

              <p>
                Over the past years, I’ve designed and shipped production systems ranging from
                customer-facing web experiences to multi-app SaaS platforms, including
                payments, invoicing, authentication, dashboards, and integrations.
              </p>

              <p>
                I care deeply about clean UI, responsive layouts, and software that feels
                simple—even when the underlying system is complex.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-10">
            <div className="text-xs uppercase tracking-wider text-slate-400 mb-3">
              What I bring
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {highlights.map((h, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-[#0b1726]/60 px-5 py-4"
                >
                  <div className="flex gap-3">
                    <span className="mt-[6px] h-2 w-2 rounded-full bg-cyan-300/80 shrink-0" />
                    <p className="text-slate-200">{h}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-10">
            <div className="text-xs uppercase tracking-wider text-slate-400 mb-3">
              Tech Stack (Core)
            </div>
            <div className="flex flex-wrap gap-2">
              {tech.map((t, i) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="/projects"
              className="inline-flex items-center justify-center rounded-xl bg-white text-[#07101b] px-5 py-3 font-semibold hover:bg-slate-100 transition"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} moustafa-ragheb.com
        </div>
      </div>
    </section>
  );
};

export default About;