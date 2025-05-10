import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="relative bg-gray-900 text-white min-h-screen px-8 py-12 flex flex-col justify-between overflow-hidden">

      {/* Gold Corners */}
      <img src="/corner-top-left.svg" alt="" className="absolute top-0 left-0 w-28 opacity-70" />
      <img src="/corner-bottom-right.svg" alt="" className="absolute bottom-0 right-0 w-28 opacity-70" />

      {/* Top Right Icons */}
      <div className="flex justify-end space-x-6 text-2xl z-10 mt-10">
        <a
          href="mailto:mousragheb@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition animate-float-x"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/Mouragheb"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition animate-float-y"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/moustafa-ragheb-7b474aa6"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition animate-float-x"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Main Grid Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center mt-20 z-10">
        {/* Left Side: Image + Welcome + Bio */}
        <div className="flex flex-col items-start">
          <img
            src="/moustafa.png"
            alt="Moustafa Ragheb"
            className="w-36 h-36 rounded-full border-4 border-yellow-400 shadow-2xl mb-6"
          />
          <h1 className="text-6xl font-extralight mb-6">Welcome.</h1>
          <p className="text-gray-300 border-l-4 border-yellow-400 pl-4 leading-relaxed text-lg max-w-xl">
            My name is <span className="font-semibold text-white">Moustafa Ragheb</span>, a full-stack web developer and cloud data engineer based in Houston, TX.
            I build React frontends, REST APIs, and data pipelines using AWS, Kafka, and Redshift — turning business ideas into powerful, real-world software.
          </p>
        </div>

        {/* Right Side: Project Quick Links */}
        <div className="text-right">
          <h2 className="text-xl mb-4 text-yellow-400">Projects</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/projects#rtm" className="hover:text-yellow-400 transition">Restaurant Task Manager</a></li>
            <li><a href="/projects#gyros" className="hover:text-yellow-400 transition">Gyros Hero Website</a></li>
            <li><a href="/projects#s3redshift" className="hover:text-yellow-400 transition">S3 to Redshift ETL</a></li>
            <li><a href="/projects#kafka" className="hover:text-yellow-400 transition">Kafka Streaming Pipeline</a></li>
            <li><a href="/projects#salesetl" className="hover:text-yellow-400 transition">Restaurant Sales ETL</a></li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="text-right text-sm text-gray-500 mt-20 z-10">
        © {new Date().getFullYear()} moustafa-ragheb.com
      </div>
    </section>
  );
};

export default Home;