"use client";

import { memo } from "react";
import { ArrowUpRight, Monitor, Palette, Smartphone, Bot } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Website Design & Development",
    description:
      "Craft visually stunning, high-performance websites engineered for speed, scalability, SEO, and exceptional user experiences that drive measurable business growth.",
    Icon: Monitor,
  },
  {
    id: "02",
    title: "UI/UX Design (Web & Mobile)",
    description:
      "Create intuitive, research-driven interfaces that combine aesthetics with usability, ensuring every interaction feels effortless and meaningful.",
    Icon: Palette,
  },
  {
    id: "03",
    title: "Mobile App Development",
    description:
      "Develop secure, scalable mobile applications for Android and iOS that empower users with seamless performance and engaging digital experiences.",
    Icon: Smartphone,
  },
  {
    id: "04",
    title: "AI Solutions & Automation",
    description:
      "Transform your business with intelligent AI solutions, custom chatbots, workflow automation, and smart integrations that save time and increase efficiency.",
    Icon: Bot,
  },
];

function Services() {
  return (
    <section id="services" className="relative w-full bg-white py-24 md:py-32 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16 lg:mb-20">
          {/* Left */}
          <div className="w-full lg:w-1/2">
            <h2 className="flex items-center text-gray-700 text-base font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-[#683AF2] shrink-0 mr-2.5" />
              Services
            </h2>
            <p className="text-[40px] md:text-[48px] lg:text-[60px] font-medium tracking-[-1.5px] lg:tracking-[-2.5px] leading-[1.05] lg:leading-[1.05] text-[#1a1a1a] mt-3">
              Everything you{" "}
              <br className="hidden sm:block" />
              need to grow.
            </p>
          </div>

          {/* Right */}
          <div className="w-full lg:w-1/3 flex flex-col items-start gap-5 pb-2">
            <p className="text-sm md:text-base text-gray-500 leading-relaxed">
              From strategy to execution, we offer a full suite of marketing
              services designed to grow your brand, reach your audience, and
              drive real results.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#683AF2] text-white text-sm font-medium px-5 py-2.5 hover:scale-105 transition-transform duration-150"
            >
              Contact us
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-[#683AF2]">
                <ArrowUpRight size={14} strokeWidth={3} />
              </span>
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {services.map((service) => {
            const Icon = service.Icon;
            return (
              <div
                key={service.id}
                className="group relative flex flex-col rounded-2xl min-h-90 p-8 bg-[#EFEAFF] overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Top row */}
                <div className="flex items-start justify-between w-full relative z-10">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#683AF2] shrink-0" />
                  <span className="text-[80px] md:text-[90px] font-medium leading-none text-black/5 select-none -mr-2 -mt-4">
                    {service.id}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="flex flex-col items-start mt-auto pt-16 relative z-10">
                  <div className="mb-4">
                    <Icon
                      size={24}
                      strokeWidth={1.5}
                      className="text-[#1a1a1a]"
                    />
                  </div>
                  <h3 className="text-lg font-bold leading-snug mb-2 text-[#1a1a1a]">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-black/70 max-w-[90%]">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default memo(Services);
