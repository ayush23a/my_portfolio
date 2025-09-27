'use client';

import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Email Summarizing Agent',
    tagline: 'Email Summarizer Agent using AI Automation ',
    description:
      'Automated email assistant that summarizes daily inbox activity using n8n and LLM, sending a draft digest every morning.',
    stack: ['n8n', 'LLM', 'AI Automation', 'GCP', 'APIs', 'Gemini'],
    github: 'https://github.com/ayush23a/n8n_projects/tree/main/Email_Summarizing_Agent', 
    live: null,
  },
  {
    title: 'Automated RAG Agent',
    tagline: 'Advanced RAG agent with AI Automation',
    description:
      'Build an advanced RAG agent that uses AI automation for more advanced RAG tasks, such as answering questions about context, summarizing evidence, and generating answers.',
    stack: ['n8n', 'LLM', 'Supabase', 'GCP', 'APIs', 'Gemini', 'PostgreSQL'],
    github: '#', // Dummy link
    live: null,
  },
  {
    title: 'Automatic Voter Verification System',
    tagline: 'Google Solution Challenge, 2025',
    description:
      'AI-powered system for secure, automated voter verification and fraud prevention. Built for civic-tech impact.',
    stack: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI', 'CivicTech'],
    github: 'https://github.com/ayush23a/automatic-voter-verification',
    live: null, // Coming soon
  },
  {
    title: 'In-Cert',
    tagline: 'IEM Hackoasis, 2025',
    description:
      'Forged and Tampered certificate verification system using Web3 and ML algorithms. Checked alignments, font & line spacing along with NFT and JWT based verification  ',
    stack: ['Rust', 'Web3', 'Solana', 'Anchor', 'Blockchain', 'Typescript', 'WebSockets', 'Prisma', 'PostgreSQL', 'Express', 'Turborepo', 'OCR', 'Tesseract', 'Python', ],
    github: 'https://github.com/Anjansuman/in-cert', 
    live: null,
  },
  {
    title: 'ZhenLogix',
    tagline: 'Last-mile Delivery Optimization (Walmart Sparkathon, 2025)',
    description:
      'Optimizes last-mile delivery routes using AI/ML for cost, time, and sustainability. Built for Walmart Sparkathon.',
    stack: ['Python', 'AI/ML', 'Optimization', 'FastAPI', 'React'],
    github: 'https://github.com/ayush23a/zhenlogix',
    live: 'https://zhenlogix-demo.com',
  },
  {
    title: 'CarboSense',
    tagline: 'Gen-AI Carbon Footprint Analyzer',
    description:
      'Analyzes and visualizes carbon footprint using Gen-AI and ML. Empowers users to make sustainable choices.',
    stack: ['Python', 'GenAI', 'TensorFlow', 'React', 'Sustainability'],
    github: 'https://github.com/ayush23a/carbosense',
    live: 'https://carbosense-demo.com',
  },
  {
    title: 'Flood Prediction System',
    tagline: 'Hackathon Project',
    description:
      'Real-time flood prediction using ML and geospatial data. Built for rapid disaster response.',
    stack: ['Python', 'ML', 'Geospatial', 'FastAPI'],
    github: '#', // Dummy link
    live: null,
  },

];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-background/90 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 gradient-text text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="project-card rounded-2xl p-6 flex flex-col gap-4 float-animation relative shadow-lg"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-semibold gradient-text">
                  {project.title}
                </h3>
                <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary font-medium">
                  {project.tagline}
                </span>
              </div>
              <p className="text-muted-foreground mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="skill-badge px-3 py-1 rounded-full text-xs font-semibold text-primary border border-primary/30 bg-primary/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-button flex-1 justify-center"
                  >
                    <ExternalLink size={18} /> Check Live
                  </a>
                ) : (
                  <span className="neon-button flex-1 justify-center opacity-60 cursor-not-allowed">
                    <ExternalLink size={18} /> Coming Soon
                  </span>
                )}
                {project.github && project.github !== '#' ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-button flex-1 justify-center"
                  >
                    <Github size={18} /> View Code
                  </a>
                ) : (
                  <span className="neon-button flex-1 justify-center opacity-60 cursor-not-allowed">
                    <Github size={18} /> View Code
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
