"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "James Wilson",
    role: "Product Manager, FinTech",
    quote:
      "Security and performance were critical for our financial platform. TechFlow demonstrated deep expertise in both areas. Their architecture is solid and future-proof.",
    tag: "Security First Approach",
  },
  {
    name: "Ava Martinez",
    role: "Founder, SaaS Startup",
    quote:
      "The team transformed our idea into a polished product in record time. Communication was seamless and the final result exceeded expectations.",
    tag: "Startup Friendly",
  },
  {
    name: "Rohan Mehta",
    role: "CTO, E-Commerce Brand",
    quote:
      "Our platform now handles massive traffic without breaking a sweat. Performance improved drastically after TechFlow stepped in.",
    tag: "High Performance",
  },
  {
    name: "Emily Carter",
    role: "Operations Head, HealthTech",
    quote:
      "From UI/UX to backend architecture, everything feels thoughtful and scalable. We finally have a system we can grow with.",
    tag: "Scalable Design",
  },
  {
    name: "Daniel Kim",
    role: "CEO, AI Startup",
    quote:
      "TechFlow understood our vision instantly. Their AI integration expertise helped us launch features our competitors still struggle with.",
    tag: "AI Expertise",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const t = testimonials[index];

  return (
    <section className="relative w-full py-24 bg-black">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          What Our <span className="text-sky-400">Clients</span> Say
        </h2>
        <p className="mt-4 text-white/60 max-w-2xl mx-auto">
          Join hundreds of companies that have trusted us to transform their
          digital presence.
        </p>

        {/* Card */}
        <div className="relative mt-26">
          <div className="rounded-2xl p-10 bg-black/40 backdrop-blur-xl border border-sky-400/20 transition-all">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>

            <p className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto">
              “{t.quote}”
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-sky-400 flex items-center justify-center text-black font-bold">
                {t.name.charAt(0)}
              </div>
              <div className="text-left">
                <p className="text-white font-medium">{t.name}</p>
                <p className="text-white/60 text-sm">{t.role}</p>
              </div>
            </div>

            <p className="mt-4 text-sky-400 text-sm">{t.tag}</p>
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 rounded-full border border-sky-400/30 text-sky-400 flex items-center justify-center hover:bg-sky-400/10 transition"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 rounded-full border border-sky-400/30 text-sky-400 flex items-center justify-center hover:bg-sky-400/10 transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? "bg-sky-400 w-6" : "bg-white/20"
              }`}
            />
          ))}
        </div>

        <p className="mt-4 text-white/40 text-sm">
          {index + 1} of {testimonials.length}
        </p>
      </div>
    </section>
  );
}
