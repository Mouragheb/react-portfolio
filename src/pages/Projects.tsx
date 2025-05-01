import React from 'react';

const projects = [
  {
    id: 'rtm',
    title: 'Restaurant Task Manager',
    description: 'Assign and track employee tasks in real time with photo uploads and status filters. Built for restaurant operations.',
    tech: ['React', 'JavaScript', 'Tailwind', 'Node.js', 'MongoDB'],
    codeLink: [
      { label: 'Frontend', url: 'https://github.com/Mouragheb/RTM_frontend' },
      { label: 'Backend', url: 'https://github.com/Mouragheb/RTM_backend' },
    ],
    liveLink: 'https://retaskman.com',
  },
  {
    id: 'gyros',
    title: 'Gyros Hero Website',
    description: 'A branded online ordering site integrated with Square POS. Fully responsive and production-ready.',
    tech: ['React', 'JavaScript','Node.js', 'Express', 'Square API'],
    codeLink: [
      { label: 'Frontend', url: 'https://github.com/Mouragheb/gyroshero-frontend' },
      { label: 'Backend', url: 'https://github.com/Mouragheb/gyroshero-backend' },
    ],
    liveLink: 'https://gyrosheros.com',
  },
  {
    id: 's3redshift',
    title: 'S3 to Redshift ETL',
    description: 'A pipeline that extracts, transforms, and loads data from S3 to Redshift via Python and SQL.',
    tech: ['Python', 'AWS S3', 'Redshift', 'EC2'],
    codeLink: 'https://github.com/Mouragheb/s3_redshift_etl_project',
  },
  {
    id: 'kafka',
    title: 'Kafka Streaming Pipeline',
    description: 'Real-time streaming system using Kafka, Spark, and Redshift for high-volume analytics.',
    tech: ['Kafka', 'Spark', 'Redshift', 'Python'],
    codeLink: 'https://github.com/Mouragheb/Kafka_streaming_project',
  },
  {
    id: 'salesetl',
    title: 'Restaurant Sales ETL',
    description: 'ETL project for extracting and transforming daily restaurant sales into structured PostgreSQL tables.',
    tech: ['Python', 'Pandas', 'PostgreSQL', 'AWS EC2'],
    codeLink: 'https://github.com/Mouragheb/restaurant_sales_etl_project',
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-400 mb-12 text-center">My Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} id={project.id} className="bg-gray-800 border border-yellow-400 rounded-xl p-6 shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-semibold text-yellow-300 mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 text-sm mb-4">
                {project.tech.map((tech, index) => (
                  <span key={index} className="bg-gray-700 text-yellow-300 px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-500 transition"
                  >
                    Live Site
                  </a>
                )}
                <div className="flex space-x-4">
                  {Array.isArray(project.codeLink) ? (
                    project.codeLink.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-400 hover:text-yellow-500 transition"
                      >
                        {link.label}
                      </a>
                    ))
                  ) : (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-400 hover:text-yellow-500 transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;