"use client";

import { useEffect, useRef, memo, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Smartphone,
  Palette,
  Cloud,
  Zap,
  Rocket,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const services = useMemo(
    () => [
      {
        title: "Web Development",
        desc: "Modern, responsive web applications built with cutting-edge frameworks and best practices.",
        icon: Code2,
      },
      {
        title: "App Development",
        desc: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
        icon: Smartphone,
      },
      {
        title: "UI/UX Design",
        desc: "Beautiful, intuitive interfaces designed with user-centered principles and modern aesthetics.",
        icon: Palette,
      },
      {
        title: "Cloud Solutions",
        desc: "Scalable cloud infrastructure and deployment solutions for enterprise-grade applications.",
        icon: Cloud,
      },
      {
        title: "AI Integration",
        desc: "Intelligent solutions powered by machine learning and AI to automate and enhance processes.",
        icon: Zap,
      },
      {
        title: "Digital Transformation",
        desc: "End-to-end digital transformation strategies and implementation for modern enterprises.",
        icon: Rocket,
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
        ".service-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".service-card",
            start: "top 80%",
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
      id="services"
      className="relative w-full py-24 bg-black"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <header ref={headerRef} className="text-center">
          <h2
            id="services-heading"
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Our <span className="text-sky-400">Services</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs and
            goals.
          </p>
        </header>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={i}
                className="
                  service-card
                  group rounded-2xl p-8
                  bg-black/40 backdrop-blur-xl
                  border border-sky-400/20
                  hover:border-sky-400/50
                  transition-all duration-300
                "
              >
                <div
                  className="
                    w-12 h-12 rounded-xl
                    bg-sky-400/10
                    flex items-center justify-center
                    text-sky-400
                    transition-all duration-300
                    group-hover:scale-110
                    group-hover:bg-gradient-to-br group-hover:from-sky-400/30 group-hover:to-cyan-300/20
                    group-hover:shadow-lg group-hover:shadow-sky-400/40
                  "
                >
                  <Icon
                    size={22}
                    className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]"
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {s.title}
                </h3>

                <p className="mt-3 text-white/70 leading-relaxed">
                  {s.desc}
                </p>

                <span className="inline-block mt-6 text-sky-400 text-sm hover:translate-x-1 transition">
                  Learn More →
                </span>
              </article>
            );
          })}
        </div>

        <div className="mt-20 text-center group">
          <p className="text-white/60 mb-6">
            Not sure which service fits your needs?
          </p>

          <button
            className="
              relative px-8 py-3 rounded-xl
              bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500
              text-black font-semibold
              transition-all duration-300
              hover:brightness-110
              shadow-lg shadow-sky-400/40
              overflow-hidden
            "
          >
            <span className="relative z-10">Schedule a Consultation</span>
            <span
              className="
                absolute inset-0
                bg-gradient-to-r from-transparent via-white/40 to-transparent
                -translate-x-full
                group-hover:translate-x-full
                transition-transform duration-700
              "
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default memo(Services);
