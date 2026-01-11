"use client"
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

  const getItem = (offset) =>
    testimonials[(index + offset + testimonials.length) % testimonials.length];

const positions = [
  {
    key: "left",
    item: getItem(-1),
    className:
      "scale-90 -translate-x-40 z-10 opacity-60 blur-[1px] " +
      "border-sky-400/40 shadow-[0_0_40px_rgba(56,189,248,0.25)]",
  },
  {
    key: "center",
    item: getItem(0),
    className:
      "scale-100 translate-x-0 z-20 opacity-100 " +
      "border-sky-400/30 shadow-[0_0_80px_rgba(56,189,248,0.35)]",
  },
  {
    key: "right",
    item: getItem(1),
    className:
      "scale-90 translate-x-40 z-10 opacity-60 blur-[1px] " +
      "border-sky-400/40 shadow-[0_0_40px_rgba(56,189,248,0.25)]",
  },
];


  return (
    <section className="relative w-full py-24 bg-black">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          What Our <span className="text-sky-400">Clients</span> Say
        </h2>

        <div className="relative mt-20 h-[340px] flex items-center justify-center">
          {positions.map(({ key, item, className }) => (
           <article
  key={key}
  className={`absolute w-full max-w-2xl rounded-2xl p-10 
  bg-black/40 backdrop-blur-xl 
  border transition-all duration-500 ${className}`}
>

              <div className="flex justify-center gap-1 mb-6 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <blockquote className="text-white/80 text-lg leading-relaxed">
                “{item.quote}”
              </blockquote>

              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-sky-400 flex items-center justify-center text-black font-bold">
                  {item.name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="text-white font-medium">{item.name}</p>
                  <p className="text-white/60 text-sm">{item.role}</p>
                </div>
              </div>

              <p className="mt-4 text-sky-400 text-sm">{item.tag}</p>
            </article>
          ))}

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 w-10 h-10 rounded-full border border-sky-400/30 text-sky-400 flex items-center justify-center hover:bg-sky-400/10 transition"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 w-10 h-10 rounded-full border border-sky-400/30 text-sky-400 flex items-center justify-center hover:bg-sky-400/10 transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
