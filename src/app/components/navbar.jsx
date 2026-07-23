"use client";

import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const menuItemsRef = useRef([]);
  const ctaRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileMenuOverlayRef = useRef(null);
  const mobileLinksContainerRef = useRef(null);
  const dropdownRef = useRef(null);
  const chevronRef = useRef(null);
  const ticking = useRef(false);

  // Memoize services array to prevent re-creation
  const services = useMemo(
    () => [
      "Website Design & Development",
      "UI/UX Design (Web & Mobile)",
      "Mobile App Development",
      "AI Solutions & Automation",
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
      gsap.set([logoRef.current, ...menuItemsRef.current.filter(Boolean), ctaRef.current].filter(Boolean), {
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

      // Set initial state for mobile menu
      gsap.set(mobileMenuRef.current, { x: "100%" });
      gsap.set(mobileMenuOverlayRef.current, { opacity: 0, pointerEvents: "none" });

      // Set initial state for dropdown
      gsap.set(dropdownRef.current, { scaleY: 0, opacity: 0, transformOrigin: "top center" });
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

  // Mobile menu open/close animation
  useEffect(() => {
    if (mobileMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        x: "0%",
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.to(mobileMenuOverlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        pointerEvents: "auto",
      });
      if (mobileLinksContainerRef.current) {
        gsap.fromTo(
          mobileLinksContainerRef.current.children,
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: "power2.out",
            delay: 0.15,
          }
        );
      }
      document.body.style.overflow = "hidden";
    } else {
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        duration: 0.3,
        ease: "power2.in",
      });
      gsap.to(mobileMenuOverlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
        pointerEvents: "none",
      });
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  // Cleanup body overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    closeMobileMenu();
  };

  // Dropdown hover handlers with GSAP height animation
  const handleDropdownEnter = () => {
    gsap.to(dropdownRef.current, {
      scaleY: 1,
      opacity: 1,
      duration: 0.35,
      ease: "power3.out",
    });
    gsap.to(chevronRef.current, {
      rotation: 180,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleDropdownLeave = () => {
    gsap.to(dropdownRef.current, {
      scaleY: 0,
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
    });
    gsap.to(chevronRef.current, {
      rotation: 0,
      duration: 0.25,
      ease: "power2.in",
    });
  };

  // Memoize className to prevent re-calculation
  const navClassName = useMemo(
    () =>
      `mx-auto pointer-events-auto ${scrolled
        ? "max-w-6xl bg-black/40 backdrop-blur-xl shadow-xl shadow-black/40"
        : "max-w-7xl bg-transparent"
      }`,
    [scrolled]
  );

  const navInnerClassName = useMemo(
    () =>
      `px-6 flex items-center justify-between transition-all duration-300 ${scrolled ? "py-3" : "py-4"
      }`,
    [scrolled]
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="relative flex items-center justify-between px-4 sm:px-10 py-4 sm:py-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <Image
            src="/logo.svg"
            alt="OneWebbers"
            width={60}
            height={60}
            className="w-20.5 h-20.5 sm:w-16.25 sm:h-16.25 md:w-20 md:h-20"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <nav
            className="
              flex items-center gap-10 px-10 py-4 rounded-full
              bg-white/10 backdrop-blur-xl border border-gray-200
            "
          >
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 font-semibold hover:text-[#683AF2] transition"
            >
              About Us
            </button>

            <div
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                onClick={() => scrollToSection("services")}
                className="flex items-center gap-1.5 text-gray-700 font-semibold hover:text-[#683AF2] transition"
              >
                Services
                <ChevronDown
                  ref={chevronRef}
                  size={16}
                  className="text-gray-500"
                />
              </button>

              {/* Dropdown with hover bridge */}
              <div className="absolute left-1/2 -translate-x-1/2 pt-5">
                <div
                  ref={dropdownRef}
                  className="w-80 rounded-2xl bg-[#101010]/90 backdrop-blur-xl border border-white/10 overflow-hidden"
                  style={{ transformOrigin: "top center" }}
                >
                  {services.map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection("services")}
                      className="block w-full text-left px-6 py-4 text-white/80 hover:text-white hover:bg-white/5"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/" className="text-gray-700 font-semibold hover:text-[#683AF2] transition">
              Work
            </Link>

            <Link href="/" className="text-gray-700 font-semibold hover:text-[#683AF2] transition">
              Pricing
            </Link>

            <Link href="/" className="text-gray-700 font-semibold hover:text-[#683AF2] transition">
              Blog
            </Link>
          </nav>
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="
            hidden md:inline-flex rounded-full px-7 py-3
            bg-linear-to-r from-violet-600 to-indigo-500 text-white font-semibold
            shadow-lg hover:scale-105 transition
          "
        >
          Contact Us
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden z-50 p-2 text-white rounded-full bg-[#4A20E3] hover:text-sky-400 transition-colors"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuOverlayRef}
        onClick={closeMobileMenu}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden opacity-0 pointer-events-none"
      />

      {/* Mobile Menu Drawer */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 h-full w-full max-w-sm bg-[#0a0a0a]/95 backdrop-blur-2xl border-l border-white/10 z-40 md:hidden overflow-y-auto translate-x-full"
      >
        <div ref={mobileLinksContainerRef} className="flex flex-col pt-28 px-8 pb-10 gap-1">
          <button
            onClick={() => scrollToSection("about")}
            className="text-xl text-white/80 hover:text-white py-4 border-b border-white/5 transition w-full text-left"
          >
            About Us
          </button>

          {/* Mobile Services */}
          <div className="py-4 border-b border-white/5">
            <button
              onClick={() => scrollToSection("services")}
              className="text-xl text-white/80 hover:text-white mb-3 font-medium w-full text-left"
            >
              Services
            </button>
            <div className="flex flex-col gap-2 pl-4">
              {services.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection("services")}
                  className="block w-full text-left text-base text-white/60 hover:text-white transition"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <Link
            href="/"
            onClick={closeMobileMenu}
            className="text-xl text-white/80 hover:text-white py-4 border-b border-white/5 transition"
          >
            Work
          </Link>

          <Link
            href="/"
            onClick={closeMobileMenu}
            className="text-xl text-white/80 hover:text-white py-4 border-b border-white/5 transition"
          >
            Pricing
          </Link>

          <Link
            href="/"
            onClick={closeMobileMenu}
            className="text-xl text-white/80 hover:text-white py-4 border-b border-white/5 transition"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="mt-6 text-center rounded-full px-7 py-4 bg-linear-to-r from-violet-600 to-indigo-500 text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
