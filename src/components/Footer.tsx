import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 px-8 mt-16 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">

        {/* Left: Copyright */}
        <p className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Moustafa Ragheb. All rights reserved.
        </p>

        {/* Right: Social Icons */}
        <div className="flex space-x-4 text-lg">
          <a
            href="mailto:mousragheb@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Mouragheb"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/moustafa-ragheb-7b474aa6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;