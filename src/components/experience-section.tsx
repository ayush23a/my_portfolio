'use client';

import { MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Microcontroller Developer (Contract)',
    company: 'Aptechx Logic Systems',
    location: 'Kolkata, West Bengal, India · On-site',
    type: 'Contract',
    description: 'Developed embedded systems and microcontroller solutions for industrial applications.',
  },
  {
    title: 'Co-Lead ML',
    company: 'Google Developer Group-IEM',
    location: 'Kolkata, West Bengal, India · On-site',
    type: 'Full-time',
    description: 'Leading ML initiatives, organizing workshops, and mentoring developers in AI/ML technologies.',
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-background/80 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={exp.title}
              className="project-card rounded-2xl p-6 float-animation"
              style={{ animationDelay: `${idx * 0.3}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold gradient-text mb-1">{exp.title}</h3>
                  <p className="text-lg text-foreground font-medium">{exp.company}</p>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <span className="text-sm px-3 py-1 rounded-full bg-primary/20 text-primary font-medium mb-2">
                    {exp.type}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground mb-3">
                <MapPin size={16} />
                <span className="text-sm">{exp.location}</span>
              </div>
              <p className="text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}