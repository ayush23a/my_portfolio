'use client';

import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background/80 relative">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">About Me</h2>
        <div className="flex flex-col items-center gap-6">
          {/* Profile Picture Placeholder */}
          <div className="w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-1 glow-animation mb-4">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden">
                 <Image
                    src="/images/ashu.jpg"
                    alt="Ayush's Profile"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
              </div>
            </div>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground">
            Passionate AI/ML enthusiast with hands-on experience in Deep Learning, LLMs, and real-world problem solving. Skilled in C++/DSA, Python, and AI frameworks, with contributions to civic-tech, sustainability, and optimization projects. Actively involved in GDG IEM & ACIC communities, building impactful tech solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
