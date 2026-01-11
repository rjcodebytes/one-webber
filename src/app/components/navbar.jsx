"use client";

import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navRef = useRef(null);
  const logoRef = useRef(null);
  const menuItemsRef = useRef([]);
  const ctaRef = useRef(null);
  const ticking = useRef(false);

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
    const ctx = gsap.context(() => {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
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
          delay: 0.4,
        }
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        borderRadius: scrolled ? "1rem" : "0rem",
        y: scrolled ? 8 : 0,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [scrolled]);

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
      `px-4 md:px-6 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "py-2 md:py-3" : "py-3 md:py-4"
      }`,
    [scrolled]
  );

  return (
    <header className="fixed top-0 md:top-5 w-full z-50 pointer-events-none">
      <div
        ref={navRef}
        className={navClassName}
        style={{
          transition:
            "max-width 0.4s cubic-bezier(0.4,0,0.2,1), background-color 0.4s ease, box-shadow 0.4s ease",
        }}
      >
        <nav aria-label="Main Navigation" className={navInnerClassName}>
          {/* Logo */}
          <h1
            ref={logoRef}
            className="flex items-center gap-2 text-lg md:text-2xl font-bold text-white leading-none"
          >
            <Image
              src="/logo.png"
              alt="OneWebbers"
              width={32}
              height={32}
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
              <Link href="#about" className="text-white/80 hover:text-white transition">
                About Us
              </Link>
            </li>

            <li
              ref={(el) => (menuItemsRef.current[2] = el)}
              className="relative group"
            >
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
              <Link href="#projects" className="text-white/80 hover:text-white transition">
                Portfolio
              </Link>
            </li>
          </ul>

          {/* CTA */}
          <Link
            ref={ctaRef}
            href="#contact"
            className="
              hidden md:inline-block
              ml-3 px-4 py-1.5 rounded-lg
              bg-sky-400 text-black text-sm font-medium
              hover:bg-sky-300 transition
              shadow-md shadow-sky-400/20
            "
          >
            Contact Us
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-white pointer-events-auto"
            aria-label="Open Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[64px] bg-black/85 backdrop-blur-xl border-t border-white/10
        transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col px-6 py-5 gap-4 text-white/80">
          <li>
            <Link onClick={() => setOpen(false)} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(false)} href="#about">
              About Us
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(false)} href="#services">
              Services
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(false)} href="#projects">
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setOpen(false)}
              href="#contact"
              className="mt-2 inline-block px-4 py-2 rounded-lg bg-sky-400 text-black text-sm font-medium"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
