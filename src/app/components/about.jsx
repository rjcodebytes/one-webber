"use client";

import { useEffect, useRef, useState, memo, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Briefcase, Eye } from "lucide-react";

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
      }
    );

    gsap.fromTo(
      ".about-left",
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      ".timeline-item",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: ".timeline-item",
          start: "top 80%",
        },
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

       <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
  {/* Left Column */}
  <div className="about-left text-left">
    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
      Elevating Your Brand
      <br />
      with <span className="text-sky-400">Future-Ready</span>
      <br />
      Digital Solutions.
    </h3>

    <div className="relative mt-10 p-8 rounded-2xl bg-black/60 backdrop-blur-xl border border-sky-400/30 shadow-[0_0_60px_rgba(56,189,248,0.15)] hover:shadow-[0_0_90px_rgba(56,189,248,0.25)] transition">
      <p className="text-sky-400 text-lg font-semibold">
        🚀 Ready to grow your business?
      </p>
      <p className="mt-2 text-white/70">
        Let’s build something powerful together.
      </p>
      <p className="mt-2 text-white/70">
        Whether you’re launching a new product or improving an existing one, we’re here to help you create digital experiences that stand out and perform.
      </p>

      <button className="mt-6 px-6 py-3 rounded-xl bg-sky-400 text-black font-semibold hover:bg-sky-300 hover:scale-[1.03] transition shadow-lg shadow-sky-400/30">
        Get Started →
      </button>
    </div>
  </div>

  {/* Right Column – Vertical Features */}
  <div className="relative pl-6">
    <span className="absolute left-2 top-0 h-full w-px bg-white/10" />

    {[
      {
        title: "Our Mission",
        text:
          "Our mission is to help startups and businesses design, build, and grow digital products that users love and businesses trust.",
        icon: Target,
      },
      {
        title: "What We Do",
        text:
          "We craft high-performance websites, apps, and platforms that convert visitors into loyal users.",
        icon: Briefcase,
      },
      {
        title: "Our Vision",
        text:
          "Our vision is to become a trusted digital partner for brands worldwide by delivering innovative, growth-oriented solutions.",
        icon: Eye,
      },
    ].map((item, i) => {
      const Icon = item.icon;
      return (
        <div
          key={i}
          className="timeline-item relative flex gap-6 mb-14 group"
        >
         

          <div className="mt-1 w-10 h-10 rounded-xl bg-sky-400/10 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:bg-sky-400/20 transition">
            <Icon size={25} />
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white">
              {item.title}
            </h4>
            <p className="mt-2 text-white/60 leading-relaxed max-w-md">
              {item.text}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</div>




       
      </div>
    </section>
  );
}

export default memo(About);
