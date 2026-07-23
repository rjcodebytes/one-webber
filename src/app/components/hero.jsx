"use client";

import { useEffect, useRef, memo } from "react";
import { PhoneCall, FileText } from "lucide-react";
import gsap from "gsap";

function Hero() {
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current.querySelectorAll(".animate"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
          immediateRender: false,
        }
      );
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white flex flex-col items-center justify-center ">
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgb(239, 234, 255) 1px, transparent 1px), linear-gradient(rgb(239, 234, 255) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Blur Blob - Left */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "-10%",
          top: "10%",
          width: "50%",
          height: "60%",
          background: "rgb(239, 234, 255)",
          borderRadius: "50%",
          filter: "blur(100px)",
          opacity: 0.8,
          mixBlendMode: "multiply",
        }}
      />

      {/* Blur Blob - Center Top */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "25%",
          top: "0%",
          width: "50%",
          height: "50%",
          background: "oklab(0.52685 0.0663759 -0.243664 / 0.05)",
          borderRadius: "50%",
          filter: "blur(100px)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Blur Blob - Bottom Right */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: "-10%",
          bottom: "-10%",
          width: "60%",
          height: "70%",
          background: "oklab(0.52685 0.0663759 -0.243664 / 0.1)",
          borderRadius: "50%",
          filter: "blur(120px)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Content */}
      <header
        ref={contentRef}
        className="relative z-10 w-full max-w-5xl mx-auto px-8 text-center flex flex-col items-center"
      >
        {/* Heading */}
        <div className="animate w-full max-w-[1000px] mx-auto text-center">
          <h1 className="text-[56px] md:text-[76px] text-gray-900 font-medium tracking-[-3.8px] leading-[1.08]">
            Define Your
            <span className="text-[#683AF2]"> Digital Future</span>
            <br />
            with Innovative IT Solutions.
          </h1>
        </div>

        {/* Description */}
        <div className="animate w-full max-w-[672px] mx-auto text-center">
          <p
            className="text-[17px] md:text-[19px] leading-[1.625] mb-10 mx-auto text-center"
            style={{ color: "lab(47.7841 -0.393182 -10.0268)" }}
          >
            We partner with startups and businesses to design, develop, and automate digital experiences through modern UI/UX, websites, mobile applications, and intelligent AI solutions.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="animate flex flex-wrap items-center justify-center gap-3 mb-8">
          <a
            href="https://calendly.com/akhirahlab/30min?month=2026-05"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-4 rounded-full bg-[#683AF2] text-white font-bold text-[15px] whitespace-nowrap hover:scale-105 transition-transform duration-150 shadow-lg"
          >
            Grow Your Business
          </a>
          <a
            href="/#services"
            className="inline-flex items-center px-10 py-4 rounded-full bg-white text-[#1a1a1a] font-bold text-[15px] whitespace-nowrap border border-[#e5e5e5] hover:scale-105 transition-transform duration-150"
          >
            Our Services
          </a>
        </div>


        {/* Bottom Floating Badges - Desktop */}
      </header>

      {/* Left badge */}
      <div
        className="hidden lg:flex absolute bottom-12 right-1/2 -translate-x-[calc(50%+320px)] z-20 items-center gap-3 px-3 py-2.5 pr-7 rounded-full bg-white/80 backdrop-blur-[12px] border border-white shadow-[0_8px_30px_0_rgba(0,0,0,0.08)]"
        >
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white">
            <PhoneCall size={18} />
          </div>
          <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
          <a
            href="https://calendly.com/akhirahlab/30min?month=2026-05"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#1a1a1a] hover:text-[#683AF2] transition-colors"
          >
            Book a strategy call
          </a>
        </div>

        {/* Right badge */}
      <div
        className="hidden lg:flex absolute bottom-12 left-1/2 translate-x-[calc(50%+320px)] z-20 items-center gap-3 px-3 py-2.5 pr-7 rounded-full bg-white/80 backdrop-blur-[12px] border border-white shadow-[0_8px_30px_0_rgba(0,0,0,0.08)]"
        >
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white">
            <FileText size={18} />
          </div>
          <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
          <a
            href="https://calendly.com/akhirahlab/30min?month=2026-05"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#1a1a1a] hover:text-[#683AF2] transition-colors"
          >
            Discuss your project now
          </a>
        </div>
    </section>
  );
}

export default memo(Hero);
