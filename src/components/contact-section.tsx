'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setForm({ name: '', email: '', message: '' });
      toast.success('Message sent! I will get back to you soon.');
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background/90 relative">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Contact</h2>
        <p className="text-center text-lg text-muted-foreground mb-8">
          Let&apos;s build something impactful together 🚀
        </p>
        <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-lg flex flex-col gap-6">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:ring-2 focus:ring-primary outline-none transition"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:ring-2 focus:ring-primary outline-none transition"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:ring-2 focus:ring-primary outline-none transition"
            required
          />
          <button
            type="submit"
            className="neon-button flex items-center justify-center gap-2 text-lg mt-2 disabled:opacity-60"
            disabled={loading}
          >
            <Send size={20} />
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
