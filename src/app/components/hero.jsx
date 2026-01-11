"use client";

import { useEffect, useRef, useState, memo, useMemo } from "react";
import gsap from "gsap";

const words = ["UI/UX Design", "Website Design & Development", "Web Application Development","Mobile App Development (Android / iOS)","Frontend & Backend Development","Software Development"];

function Hero() {
  const contentRef = useRef(null);
  const wordRef = useRef(null);
  const [wordIndex, setWordIndex] = useState(0);

  // Memoized background so it never re-renders
  const unicornBg = useMemo(
    () => (
      <div
        data-us-project="p7Ff6pfTrb5Gs59C7nLC"
        className="absolute inset-0 z-0"
      />
    ),
    []
  );

  useEffect(() => {
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };

      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";

      script.onload = () => {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };

      document.body.appendChild(script);
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
          immediateRender: false,
        }
      );
    }, contentRef);

  const interval = setInterval(() => {
  if (!wordRef.current) return;

  const tl = gsap.timeline();

  tl.to(wordRef.current, {
    opacity: 0,
    y: -12,
    scale: 0.95,
    filter: "blur(4px)",
    duration: 0.35,
    ease: "power3.inOut",
  }).add(() => {
    setWordIndex((i) => (i + 1) % words.length);
  }).fromTo(
    wordRef.current,
    {
      opacity: 0,
      y: 14,
      scale: 1.05,
      filter: "blur(4px)",
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.45,
      ease: "power3.out",
    },
    "-=0.05"
  );
}, 1800); // adjust timing here (e.g., 1500–2500)


    return () => {
      clearInterval(interval);
      ctx.revert();
    };
  }, []);

  return (
    <main>
      <section
        className="relative min-h-screen w-full overflow-hidden bg-black"
        aria-labelledby="hero-heading"
      >
        {/* Unicorn Background */}
        {unicornBg}

        {/* Content */}
        <header
          ref={contentRef}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center min-h-screen"
        >
          <span className="hero-item mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-400 text-sm">
            ● Welcome to Onewebbers
          </span>

          <h1
            id="hero-heading"
            className="hero-item text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-300">
              Building Future-Ready
            </span>
            <br />
            <span
              ref={wordRef}
              className="text-white inline-block min-h-[1.2em]"
            >
              {words[wordIndex]}
            </span>
          </h1>

          <p className="hero-item mt-6 text-white/70 max-w-2xl text-lg">
            Enterprise-grade IT services for startups, businesses, and
            enterprises. We combine innovation, security, and performance to
            transform your digital vision into reality.
          </p>

          <div className="hero-item mt-10 flex gap-4">
            <button className="px-8 py-3 rounded-xl bg-sky-400 text-black font-semibold hover:bg-sky-300 transition shadow-lg shadow-sky-400/30">
              Get a Quote
            </button>
            <button className="px-8 py-3 rounded-xl border border-sky-400/40 text-sky-400 hover:bg-sky-400/10 transition">
              View Services
            </button>
          </div>
        </header>
      </section>
    </main>
  );
}

export default memo(Hero);
