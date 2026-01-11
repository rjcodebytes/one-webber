"use client";

import { useEffect, useRef, useState, memo, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Counter = memo(function Counter({ end, suffix = "", duration = 1500, start }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setValue(end);
        clearInterval(timer);
      } else {
        setValue(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, start]);

  return (
    <span className="text-4xl md:text-5xl font-bold text-sky-400">
      {value}
      {suffix}
    </span>
  );
});

function About() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const statsRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  // Memoized cards data
  const cards = useMemo(
    () => [
      {
        title: "Our Mission",
        text:
          "Empower businesses with innovative digital solutions that drive growth, efficiency, and competitive advantage in an increasingly digital world.",
        color: "text-sky-400",
      },
      {
        title: "Our Vision",
        text:
          "To be the leading digital transformation partner for global enterprises, known for innovation, reliability, and exceptional delivery.",
        color: "text-cyan-400",
      },
      {
        title: "Our Values",
        text:
          "Excellence in execution, transparent communication, continuous innovation, and unwavering commitment to our clients' success.",
        color: "text-blue-400",
      },
    ],
    []
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
          immediateRender: false,
        }
      );

      gsap.fromTo(
        ".about-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".about-card",
            start: "top 80%",
          },
          immediateRender: false,
        }
      );

      gsap.fromTo(
        statsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            onEnter: () => setStartCount(true),
          },
          immediateRender: false,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full min-h-[80vh] py-24 bg-black"
      aria-labelledby="about-heading"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <header ref={headerRef}>
          <h2 id="about-heading" className="text-3xl md:text-5xl font-bold text-white">
            About <span className="text-sky-400">Onewebbers</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-white/60">
            A team of passionate engineers and designers dedicated to
            transforming businesses through cutting-edge technology.
          </p>
        </header>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <article
              key={i}
              className="
                about-card
                rounded-2xl p-8 text-left
                bg-black/40 backdrop-blur-xl
                border border-sky-400/20
                hover:border-sky-400/40 transition
              "
            >
              <h3 className={`text-xl font-semibold ${card.color}`}>
                {card.title}
              </h3>
              <p className="mt-4 text-white/70 leading-relaxed">
                {card.text}
              </p>
            </article>
          ))}
        </div>

        <hr className="my-20 h-px w-full bg-white/10 border-none" />

        <section
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-10"
        >
          <div className="text-center">
            <Counter end={500} suffix="+" start={startCount} />
            <p className="mt-2 text-white/60 text-sm">Projects Completed</p>
          </div>
          <div className="text-center">
            <Counter end={250} suffix="+" start={startCount} />
            <p className="mt-2 text-white/60 text-sm">Happy Clients</p>
          </div>
          <div className="text-center">
            <Counter end={8} start={startCount} />
            <p className="mt-2 text-white/60 text-sm">Years Experience</p>
          </div>
          <div className="text-center">
            <Counter end={99} suffix="%" start={startCount} />
            <p className="mt-2 text-white/60 text-sm">Uptime Guarantee</p>
          </div>
        </section>
      </div>
    </section>
  );
}

export default memo(About);
