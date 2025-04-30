import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">About Me</h2>

        <div className="text-gray-300 space-y-6 leading-relaxed text-lg">
          <p>
            I'm <span className="text-white font-semibold">Moustafa Ragheb</span>, a full-stack web developer and cloud data engineer based in Houston, Texas.
            I specialize in building modern web applications, business automation tools, and data pipelines that solve real-world problems.
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
    </section>
  );
};

export default About;