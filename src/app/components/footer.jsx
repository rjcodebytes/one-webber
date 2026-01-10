"use client";

import Link from "next/link";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="OneWebbers - Web Development Company"
                width={36}
                height={36}
                className="object-contain"
              />
              <span className="text-2xl font-bold text-white leading-none">
                One<span className="text-sky-400">Webbers</span>
              </span>
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Building future-ready digital solutions for businesses and
              enterprises worldwide.
            </p>

            <nav aria-label="Social Links" className="flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-sky-400 hover:border-sky-400/40 transition"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-sky-400 hover:border-sky-400/40 transition"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-sky-400 hover:border-sky-400/40 transition"
              >
                <Github size={16} />
              </a>
              <a
                href="#"
                aria-label="Email"
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-sky-400 hover:border-sky-400/40 transition"
              >
                <Mail size={16} />
              </a>
            </nav>
          </section>

          {/* Services */}
          <nav aria-labelledby="footer-services">
            <h4 id="footer-services" className="text-white font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="#" className="hover:text-sky-400 transition">Web Development</Link></li>
              <li><Link href="#" className="hover:text-sky-400 transition">App Development</Link></li>
              <li><Link href="#" className="hover:text-sky-400 transition">UI/UX Design</Link></li>
              <li><Link href="#" className="hover:text-sky-400 transition">Cloud Solutions</Link></li>
              <li><Link href="#" className="hover:text-sky-400 transition">AI Integration</Link></li>
            </ul>
          </nav>

          {/* Company */}
          <nav aria-labelledby="footer-company">
            <h4 id="footer-company" className="text-white font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="#" className="hover:text-sky-400 transition">About Us</Link></li>
              <li><Link href="#" className="hover:text-sky-400 transition">Blog</Link></li>
              <li><Link href="#" className="hover:text-sky-400 transition">Careers</Link></li>
              <li><Link href="#" className="hover:text-sky-400 transition">Contact</Link></li>
              <li><Link href="#" className="hover:text-sky-400 transition">Privacy Policy</Link></li>
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-labelledby="footer-resources">
            <h4 id="footer-resources" className="text-white font-semibold mb-4">
              Resources
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="#" className="hover:text-sky-400 transition">Documentation</Link></li>
              <li><Link href="#" className="hover:text-sky-400 transition">Case Studies</Link></li>
              <li><Link href="#" className="hover:text-sky-400 transition">Portfolio</Link></li>
              <li><Link href="#" className="hover:text-sky-400 transition">Insights</Link></li>
              <li><Link href="#" className="hover:text-sky-400 transition">Support</Link></li>
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© 2026 Onewebbers. All rights reserved.</p>

          <nav aria-label="Legal Links" className="flex items-center gap-6">
            <Link href="#" className="hover:text-sky-400 transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-sky-400 transition">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
