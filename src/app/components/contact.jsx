"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full py-24 bg-black"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <header className="text-center mb-16">
          <h2
            id="contact-heading"
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Let's <span className="text-sky-400">Build Something Great</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Ready to transform your vision into reality? Get in touch with our
            team today.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Info */}
          <article>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Get In Touch
            </h3>
            <p className="text-white/60 mb-8">
              Have a question or ready to start your project? We'd love to hear
              from you. Reach out and let's discuss how we can help.
            </p>

            <address className="not-italic space-y-6">
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-black/40 border border-sky-400/20">
                <div className="w-10 h-10 rounded-xl bg-sky-400/10 flex items-center justify-center text-sky-400">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-white/60 text-sm">info@onewebbers.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-black/40 border border-sky-400/20">
                <div className="w-10 h-10 rounded-xl bg-sky-400/10 flex items-center justify-center text-sky-400">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-white/60 text-sm">+91 8180977321</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-black/40 border border-sky-400/20">
                <div className="w-10 h-10 rounded-xl bg-sky-400/10 flex items-center justify-center text-sky-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-white font-medium">Address</p>
                  <p className="text-white/60 text-sm">Pune, Maharashtra</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-black/40 border border-sky-400/20 text-sm text-white/60">
                ⚡ <span className="text-sky-400">Quick Response:</span> We
                typically respond within 2–4 hours during business hours.
              </div>
            </address>
          </article>

          {/* Right Form */}
          <section className="rounded-2xl p-8 bg-black/40 border border-sky-400/20">
            <form className="space-y-6" aria-label="Contact Form">
              <div>
                <label htmlFor="name" className="block text-sm text-white mb-2">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-sky-400/40"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-white mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-sky-400/40"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm text-white mb-2">
                  Company Name
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Your company"
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-sky-400/40"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm text-white mb-2">
                  What service are you interested in? *
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white focus:outline-none focus:border-sky-400/40"
                >
                  <option>Select a service...</option>
                  <option>Web Development</option>
                  <option>App Development</option>
                  <option>UI/UX Design</option>
                  <option>Cloud Solutions</option>
                  <option>AI Integration</option>
                  <option>Digital Transformation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-sky-400/40"
                />
              </div>

              {/* Gradient Button */}
              <div className="group">
                <button
                  type="submit"
                  className="
                    relative w-full px-8 py-3 rounded-xl
                    bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500
                    text-black font-semibold
                    transition-all duration-300
                    hover:brightness-110
                    shadow-lg shadow-sky-400/40
                    overflow-hidden
                  "
                >
                  <span className="relative z-10">Send Message</span>
                  <span
                    className="
                      absolute inset-0
                      bg-gradient-to-r from-transparent via-white/40 to-transparent
                      -translate-x-full group-hover:translate-x-full
                      transition-transform duration-700
                    "
                  />
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
}
