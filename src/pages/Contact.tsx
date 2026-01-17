import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaGlobe,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#07101b] text-white px-6 py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Header */}
        <p className="text-sm uppercase tracking-[0.22em] text-slate-300">
          Get in Touch
        </p>
        <h2 className="mt-2 text-4xl md:text-5xl font-semibold">
          Contact
        </h2>
        <p className="mt-4 text-slate-200 max-w-xl mx-auto">
          Whether you want to collaborate, discuss an opportunity, or just say
          hi — I’m always open to connecting.
        </p>

        {/* Contact Card */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm text-left">
          <ul className="space-y-6 text-slate-200">
            <li>
              <a
                href="mailto:mousragheb@outlook.com"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-[#0b1726]/60 px-5 py-4 hover:bg-[#0b1726] transition"
              >
                <span className="rounded-full border border-white/10 bg-white/5 p-3 text-cyan-300">
                  <FaEnvelope />
                </span>
                <span className="font-medium">
                  mousragheb@outlook.com
                </span>
              </a>
            </li>

            <li>
              <a
                href="tel:2485657012"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-[#0b1726]/60 px-5 py-4 hover:bg-[#0b1726] transition"
              >
                <span className="rounded-full border border-white/10 bg-white/5 p-3 text-cyan-300">
                  <FaPhone />
                </span>
                <span className="font-medium">(248) 565-7012</span>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/Mouragheb"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-[#0b1726]/60 px-5 py-4 hover:bg-[#0b1726] transition"
              >
                <span className="rounded-full border border-white/10 bg-white/5 p-3 text-cyan-300">
                  <FaGithub />
                </span>
                <span className="font-medium">github.com/Mouragheb</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/moustafa-ragheb-7b474aa6"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-[#0b1726]/60 px-5 py-4 hover:bg-[#0b1726] transition"
              >
                <span className="rounded-full border border-white/10 bg-white/5 p-3 text-cyan-300">
                  <FaLinkedin />
                </span>
                <span className="font-medium">
                  linkedin.com/in/moustafa-ragheb-7b474aa6
                </span>
              </a>
            </li>

            <li>
              <a
                href="https://moustafa-ragheb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-[#0b1726]/60 px-5 py-4 hover:bg-[#0b1726] transition"
              >
                <span className="rounded-full border border-white/10 bg-white/5 p-3 text-cyan-300">
                  <FaGlobe />
                </span>
                <span className="font-medium">
                  moustafa-ragheb.com
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className="mt-12 text-xs text-slate-400">
          © {new Date().getFullYear()} moustafa-ragheb.com
        </div>
      </div>
    </section>
  );
};

export default Contact;