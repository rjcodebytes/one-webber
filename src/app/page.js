"use client";

import { useEffect } from "react";
import Navbar from "../app/components/navbar";
import Hero from "../app/components/hero";
import About from "../app/components/about";
import Services from "../app/components/services";
import Contact from "../app/components/contact";
import Footer from "../app/components/footer";
import Project from "./components/projects";
import Testimonial from "./components/testimonial";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
      smoothTouch: true,
      touchMultiplier: 1.2,
    });

    // Sync Lenis with GSAP's internal ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Make ScrollTrigger update on scroll for correct positions
    const onLenisScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onLenisScroll);

    // Animate each section on enter with ScrollTrigger
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray("main > *");
      sections.forEach((section, i) => {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            overwrite: "auto",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 30%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => {
      ctx.revert();
      lenis.off("scroll", onLenisScroll);
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      // Lenis doesn't have a destroy; allow GC to collect
    };
  }, []);
  return (
    <>
    
        <Navbar />
     

      <main>
        <Hero />
        <About />
        <Services />
        <Project />
        <Testimonial />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

