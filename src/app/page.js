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
import Lenis from "lenis";

export default function Home() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 0.6,
      easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
      smoothTouch: true,
      touchMultiplier: 1.2,
    });

    // Sync Lenis with GSAP's internal ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    return () => {
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
        <Testimonial />
        {/*
        <Project />
        <Contact />*/}
      </main>

      <Footer />
    </>
  );
}

