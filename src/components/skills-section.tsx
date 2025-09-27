'use client';

import Image from 'next/image';

const skills = [
  { name: 'Python', image: '/images/python.png' },
  { name: 'C++', image: '/images/cpp.png' },
  { name: 'n8n', image: '/images/n8n.png' },
  { name: 'Linux', image: '/images/linux.png' },
  { name: 'Docker', image: '/images/docker.png' },
  { name: 'Vertex AI', image: '/images/vertex_ai.png' },
  { name: 'Git', image: '/images/git.png' },
  { name: 'HTML5', image: '/images/html.png' },
  { name: 'TensorFlow', image: '/images/tf.png' },
  { name: 'GitHub', image: '/images/github.png' },
  { name: 'LangChain', image: '/images/langchain.png' },
  { name: 'LangServe', image: '/images/langserve.png' },
  { name: 'FastAPI', image: '/images/fastapi.png.png' },
  { name: 'MySQL', image: '/images/mysql.png' },
  { name: 'PostgreSQL', image: '/images/postgres.png' },
  { name: 'GCP', image: '/images/gcp.png' },
  { name: 'Azure', image: '/images/azure.png' },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-background/90 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              className="skill-badge rounded-xl p-4 text-center float-animation hover:scale-110 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-12 h-12 mx-auto mb-2 relative">
                <Image
                  src={skill.image}
                  alt={`${skill.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-sm font-semibold text-primary">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}