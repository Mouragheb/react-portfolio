import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#07101b] text-white px-8 py-12 flex flex-col justify-between">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-40 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      {/* Top Right Icons */}
      <div className="z-10 mt-6 flex justify-end gap-5 text-xl text-slate-200">
        <a
          href="mailto:mousragheb@outlook.com"
          className="rounded-full border border-white/10 bg-white/5 p-3 hover:bg-white/10 hover:text-white transition"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/Mouragheb"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/10 bg-white/5 p-3 hover:bg-white/10 hover:text-white transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/moustafa-ragheb-7b474aa6"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/10 bg-white/5 p-3 hover:bg-white/10 hover:text-white transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Main Content */}
      <div className="z-10 mx-auto w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center mt-14">
        {/* Left: Profile + Bio */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-5">
            <img
              src="/moustafa_new.png"
              alt="Moustafa Ragheb"
              className="w-28 h-28 md:w-32 md:h-32 rounded-full border border-white/15 shadow-2xl object-cover"
            />

            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-slate-300">
                Senior Frontend Engineer • SaaS Builder
              </p>
              <h1 className="mt-1 text-4xl md:text-5xl font-semibold leading-tight">
                Moustafa Ragheb
              </h1>
            </div>
          </div>

          <p className="mt-8 text-lg leading-relaxed text-slate-200 max-w-xl">
            I build production-grade <span className="font-semibold text-white">React + TypeScript</span> SaaS products
            with strong UI/UX, clean architecture, and real business workflows.
            My work includes multi-app platforms, payments, authentication, dashboards, and customer-facing experiences.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/projects"
              className="inline-flex items-center justify-center rounded-xl bg-white text-[#07101b] px-5 py-3 font-semibold hover:bg-slate-100 transition"
            >
              View Projects
            </a>
            <a
              href="/resume"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              View Resume
            </a>
          </div>

          {/* Micro highlights */}
          <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-slate-200">
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-slate-300">Focus</div>
              <div className="font-semibold text-white">Frontend Ownership</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-slate-300">Stack</div>
              <div className="font-semibold text-white">React • TS • Tailwind</div>
            </div>
          </div>
        </div>

        {/* Right: Projects Quick Links */}
        <div className="md:justify-self-end w-full">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Featured Projects</h2>
              <span className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300">
                Production Systems
              </span>
            </div>

            <ul className="mt-5 space-y-3 text-slate-200">
              {/* Keep Gyros Hero */}
              <li>
                <a
                  href="/projects#gyros-hero"
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-[#0b1726]/60 px-4 py-3 hover:bg-[#0b1726] transition"
                >
                  <span className="font-medium">Gyros Hero Website</span>
                  <span className="text-slate-400 group-hover:text-cyan-300 transition">View →</span>
                </a>
              </li>

              {/* YBS Platform + Apps */}
              <li>
                <a
                  href="/projects#ybs-platform"
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-[#0b1726]/60 px-4 py-3 hover:bg-[#0b1726] transition"
                >
                  <span className="font-medium">YourBizSuite Platform (All Apps Hub)</span>
                  <span className="text-slate-400 group-hover:text-cyan-300 transition">View →</span>
                </a>
              </li>

              <li className="pt-1">
                <div className="text-xs uppercase tracking-wider text-slate-400 px-1">
                  YBS Apps
                </div>
              </li>

              <li>
                <a href="/projects#cashlytic" className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition">
                  <span className="font-medium">Cashlytic</span>
                  <span className="text-slate-400 group-hover:text-cyan-300 transition">View →</span>
                </a>
              </li>

              <li>
                <a href="/projects#brandmail" className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition">
                  <span className="font-medium">BrandMail</span>
                  <span className="text-slate-400 group-hover:text-cyan-300 transition">View →</span>
                </a>
              </li>

              <li>
                <a href="/projects#ybs-meet" className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition">
                  <span className="font-medium">YBS Meet</span>
                  <span className="text-slate-400 group-hover:text-cyan-300 transition">View →</span>
                </a>
              </li>

              <li>
                <a href="/projects#ybs-esign" className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition">
                  <span className="font-medium">YBS eSign</span>
                  <span className="text-slate-400 group-hover:text-cyan-300 transition">View →</span>
                </a>
              </li>

              <li>
                <a href="/projects#eventpro" className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition">
                  <span className="font-medium">EventPro</span>
                  <span className="text-slate-400 group-hover:text-cyan-300 transition">View →</span>
                </a>
              </li>
            </ul>

            <div className="mt-5 text-xs text-slate-400">
              Tip: Keep project anchors consistent with your Projects page sections.
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="z-10 mt-16 text-right text-xs text-slate-500">
        © {new Date().getFullYear()} moustafa-ragheb.com
      </div>
    </section>
  );
};

export default Home;