"use client";

import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const menuItemsRef = useRef([]);
  const ctaRef = useRef(null);
  const ticking = useRef(false);

  // Memoize services array to prevent re-creation
  const services = useMemo(
    () => [
      "UI/UX Design (Web & Mobile)",
      "Website Design & Development",
      "Web Application Development",
      "Mobile App Development (Android / iOS)",
      "Frontend & Backend Development",
      "Software Development",
    ],
    []
  );

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    // Initial animation on page load
    const ctx = gsap.context(() => {
      // Set initial state without animation flickering
      gsap.set([logoRef.current, ...menuItemsRef.current.filter(Boolean), ctaRef.current], {
        willChange: "transform, opacity",
      });

      gsap.fromTo(
        logoRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "willChange",
        }
      );

      gsap.fromTo(
        menuItemsRef.current.filter(Boolean),
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.2,
          clearProps: "willChange",
        }
      );

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          delay: 0.5,
          clearProps: "willChange",
        }
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  // Smooth GSAP transition for navbar shrink - optimized
  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        borderRadius: scrolled ? "1rem" : "0rem",
        y: scrolled ? 12 : 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [scrolled]);

  // Memoize className to prevent re-calculation
  const navClassName = useMemo(
    () =>
      `mx-auto pointer-events-auto ${
        scrolled
          ? "max-w-6xl bg-black/40 backdrop-blur-xl shadow-xl shadow-black/40"
          : "max-w-7xl bg-transparent"
      }`,
    [scrolled]
  );

  const navInnerClassName = useMemo(
    () =>
      `px-6 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "py-3" : "py-4"
      }`,
    [scrolled]
  );

  return (
    <header className="fixed top-5 w-full z-50 pointer-events-none">
      <div
        ref={navRef}
        className={navClassName}
        style={{
          transition: "max-width 0.5s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.5s ease, box-shadow 0.5s ease",
          willChange: scrolled ? "transform" : "auto",
        }}
      >
        <nav aria-label="Main Navigation" className={navInnerClassName}>
          {/* Logo */}
          <h1
            ref={logoRef}
            className="flex items-center gap-2 text-2xl font-bold text-white leading-none"
          >
            <Image
              src="/logo.png"
              alt="OneWebbers - Web Development Company"
              width={36}
              height={36}
              className="object-contain"
            />
            One<span className="text-sky-400">Webbers</span>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            <li ref={(el) => (menuItemsRef.current[0] = el)}>
              <Link href="/" className="text-sky-400 hover:text-sky-300 transition">
                Home
              </Link>
            </li>
            <li ref={(el) => (menuItemsRef.current[1] = el)}>
              <Link href="/" className="text-white/80 hover:text-white transition">
                About Us
              </Link>
            </li>

            <li ref={(el) => (menuItemsRef.current[2] = el)} className="relative group">
              <button className="text-white/80 hover:text-white transition">
                Services ▾
              </button>

              <ul
                className="
                  absolute left-0 mt-4 w-80
                  rounded-2xl
                  bg-black/60 backdrop-blur-xl
                  border border-white/10
                  shadow-2xl shadow-black/40
                  opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  translate-y-2 group-hover:translate-y-0
                  transition-all duration-300
                  overflow-hidden
                "
              >
                {services.map((item, i) => (
                  <li key={i}>
                    <Link
                      href="#services"
                      className="block px-6 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li ref={(el) => (menuItemsRef.current[3] = el)}>
              <Link href="/" className="text-white/80 hover:text-white transition">
                Process
              </Link>
            </li>
            <li ref={(el) => (menuItemsRef.current[4] = el)}>
              <Link href="/" className="text-white/80 hover:text-white transition">
                Portfolio
              </Link>
            </li>
          </ul>

          {/* CTA */}
          <Link
            ref={ctaRef}
            href="/"
            className="
              ml-3 px-4 py-1.5 rounded-lg
              bg-sky-400 text-black text-sm font-medium
              hover:bg-sky-300 transition
              shadow-md shadow-sky-400/20
            "
          >
            Contact Us
          </Link>

          <button className="md:hidden text-white" aria-label="Open Menu">
            <Menu />
          </button>
        </nav>
      </div>
    </header>
  );
}
