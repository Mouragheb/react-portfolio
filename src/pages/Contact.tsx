import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-8">Contact Me</h2>
        <p className="text-gray-300 mb-12">
          Let’s connect! Whether you want to collaborate, hire, or just say hi — I’d love to hear from you.
        </p>

        <div className="flex flex-col gap-6 items-start text-left text-lg text-gray-300">

          <a
            href="mailto:mousragheb@outlook.com"
            className="flex items-center gap-3 hover:text-yellow-400 transition"
          >
            <FaEnvelope /> mousragheb@outlook.com
          </a>

          <a
            href="tel:2485657012"
            className="flex items-center gap-3 hover:text-yellow-400 transition"
          >
            <FaPhone /> (248) 565-7012
          </a>

          <a
            href="https://github.com/Mouragheb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-yellow-400 transition"
          >
            <FaGithub /> github.com/Mouragheb
          </a>

          <a
            href="https://www.linkedin.com/in/moustafa-ragheb-7b474aa6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-yellow-400 transition"
          >
            <FaLinkedin /> linkedin.com/in/moustafa-ragheb-7b474aa6
          </a>
          <a
            href="https://moustafa-ragheb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-yellow-400 transition"
          >
            <FaGlobe />React website: moustafa-ragheb.com
          </a>

          <a
            href="https://moustafaragheb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-yellow-400 transition"
          >
            <FaGlobe />Wordpress website: moustafaragheb.com
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;