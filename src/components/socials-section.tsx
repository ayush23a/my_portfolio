'use client';

import { Linkedin, Github, Instagram, Twitter, Download } from 'lucide-react';

const socials = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/ayush-aman23',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/ayush23a',
    icon: Github,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/iamaayushaman?igsh=MTJtanJjbnVhb2lxNg==',
    icon: Instagram,
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/aman_ayush4',
    icon: Twitter,
  },
];

export function SocialsSection() {
  return (
    <section className="py-16 bg-background/80 relative">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Connect &amp; Resume</h2>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button text-lg flex items-center gap-2"
            >
              <social.icon size={22} /> {social.name}
            </a>
          ))}
        </div>
        <div className="flex justify-center">
          <a
            href="/AyushAman_Resume.pdf"
            download
            className="neon-button text-lg flex items-center gap-2"
          >
            <Download size={22} /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
