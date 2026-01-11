"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 pointer-events-none">
      <div
        className={`
          mx-auto transition-all duration-300 pointer-events-auto
          ${
            scrolled
              ? "max-w-6xl mt-3 rounded-2xl bg-black/40 backdrop-blur-xl   shadow-xl shadow-black/40"
              : "max-w-7xl bg-transparent"
          }
        `}
      >
        <nav
          aria-label="Main Navigation"
          className={`
            px-6 flex items-center justify-between transition-all duration-300
            ${scrolled ? "py-3" : "py-4"}
          `}
        >
          {/* Logo */}
          <h1 className="flex items-center gap-2 text-2xl font-bold text-white leading-none">
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
            <li>
              <Link href="/" className="text-sky-400 hover:text-sky-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white/80 hover:text-white transition">
                About Us
              </Link>
            </li>

            <li className="relative group">
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
                {[
                  "UI/UX Design (Web & Mobile)",
                  "Website Design & Development",
                  "Web Application Development",
                  "Mobile App Development (Android / iOS)",
                  "Frontend & Backend Development",
                  "Software Development",
                ].map((item, i) => (
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

            <li>
              <Link href="/" className="text-white/80 hover:text-white transition">
                Process
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white/80 hover:text-white transition">
                Portfolio
              </Link>
            </li>
          </ul>

          {/* CTA */}
          <Link
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
