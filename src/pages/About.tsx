import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-400 mb-10 text-center">About Me</h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Profile Photo */}
          <img
            src="/profilePic.jpg" // replace with actual filename
            alt="Moustafa Ragheb"
            className="w-48 h-48 rounded-full object-cover border-4 border-yellow-400"
          />

          {/* Text Content */}
          <div className="text-gray-300 space-y-6 leading-relaxed text-lg">
            <p>
              I'm <span className="text-white font-semibold">Moustafa Ragheb</span>, a full-stack web developer and cloud data engineer based in Houston, Texas.
              I specialize in building modern web applications, business automation tools, and data pipelines that solve real-world problems.
            </p>

            <p>
              In 2021, I launched my own Mediterranean restaurant, <span className="text-white font-semibold">Gyros Hero</span>. Facing daily small business challenges inspired me to build software that solves them — from streamlining task management to syncing orders and improving customer service. This hands-on experience shaped the way I think as an engineer: practical, fast, and user-focused.
            </p>

            <p>
              I’ve built and deployed full production-grade platforms like restaurant task managers, POS-integrated online ordering systems, and real-time data streaming pipelines using Kafka and Redshift.
              My stack includes <span className="text-yellow-400">React, JavaScript, TypeScript, Node.js, MongoDB, PostgreSQL, AWS, Kafka, Spark, and Python</span>.
            </p>

            <p>
              Beyond building systems, I care deeply about performance, clean code, responsive UI, and making software feel intuitive.
              I’ve worked on everything from frontend UX to backend infrastructure and cloud deployments.
            </p>

            <p>
              When I’m not coding, I’m usually running my restaurant, exploring new ideas, or learning new tech to level up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;