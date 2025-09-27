'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown, Eye, Mail } from 'lucide-react';

export function HeroSection() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'AI-Native Developer',
    'Agentic AI & LLMs',
    'Prompt Engineering',
    'Competitive Programmer (C++/DSA)',
    'Deep Learning with TensorFlow',
    'Community Member @ Developer Relations',
    'Community Core @ GDG IEM, ACIC',
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (!isDeleting) {
        if (currentText.length < current.length) {
          setCurrentText(current.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(current.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-1 glow-animation">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/main.jpg"
                  alt="Ayush's Profile"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
            Ayush Aman
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Agentic AI, LLMs & Competitive Programming Enthusiast
          </p>

          {/* Dynamic Typing Animation */}
          <div className="mb-12 h-16 flex items-center justify-center">
            <div className="text-lg md:text-xl text-primary font-mono">
              <span className="inline-block min-w-0">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('#projects')}
              className="neon-button group"
            >
              <Eye size={20} />
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="neon-button group"
            >
              <Mail size={20} />
              Get in Touch
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-primary" />
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl float-animation"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl float-animation" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-green-500/20 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }}></div>
    </section>
  );
}