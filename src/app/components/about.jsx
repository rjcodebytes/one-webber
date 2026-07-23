"use client";

import { memo } from "react";

function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-white py-24 md:py-32 overflow-hidden"
    >
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        {/* Flex layout */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Left column - Label */}
          <div
            className="w-full lg:w-1/6 shrink-0"
          >
            <h2 className="flex items-center text-gray-700 text-base font-medium pt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#683AF2] shrink-0 mr-2.5" />
              About OneWebbers
            </h2>
          </div>

          {/* Right column - Content */}
          <div className="w-full lg:w-5/6 flex flex-col">
            {/* Main text */}
            <div>
              <p className="text-[22px] md:text-[28px] lg:text-[36px] font-medium leading-[1.2] lg:leading-[1.2] tracking-[-0.5px] lg:tracking-[-1.8px] text-[#1a1a1a]">
                At OneWebbers, we don&apos;t just build websites&mdash;we
                engineer digital experiences that empower businesses to grow.
                Whether it&apos;s an engaging website, a high-performance web
                application, a mobile app, or AI-driven automation, we combine
                creativity with technology to deliver solutions that create
                measurable business impact.
              </p>

              <p className="text-[22px] md:text-[28px] lg:text-[36px] font-medium leading-[1.2] lg:leading-[1.2] tracking-[-0.5px] lg:tracking-[-1.8px] text-[#1a1a1a] mt-6 lg:mt-8">
                Our expertise spans UI/UX design, web and mobile development,
                custom software engineering, and AI automation. Every solution
                is designed to enhance user experiences, optimize workflows, and
                help businesses stay ahead in an ever-evolving digital
                landscape.
              </p>
            </div>

            {/* Stats Grid 
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10 mt-10 lg:mt-12"
            >
              
              <div className="flex flex-col">
                <div className="flex items-center text-sm font-bold tracking-[-0.35px] pb-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#683AF2] shrink-0 mr-2" />
                  <span className="text-[#1a1a1a]">Happy Clients</span>
                </div>
                <div className="border-t border-[#d4d4d4] pt-3">
                  <div className="text-[#683AF2] text-[72px] md:text-[96px] font-bold leading-none tracking-[-2.4px]">
                    50<span className="text-[#683AF2]">+</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center text-sm font-bold tracking-[-0.35px] pb-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#683AF2] shrink-0 mr-2" />
                  <span className="text-[#1a1a1a]">Projects Delivered</span>
                </div>
                <div className="border-t border-[#d4d4d4] pt-3">
                  <div className="text-[#683AF2] text-[72px] md:text-[96px] font-bold leading-none tracking-[-2.4px]">
                    100<span className="text-[#683AF2]">+</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center text-sm font-bold tracking-[-0.35px] pb-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#683AF2] shrink-0 mr-2" />
                  <span className="text-[#1a1a1a]">Client Satisfaction</span>
                </div>
                <div className="border-t border-[#d4d4d4] pt-3">
                  <div className="text-[#683AF2] text-[72px] md:text-[96px] font-bold leading-none tracking-[-2.4px]">
                    95<span className="text-[#683AF2]">%</span>
                  </div>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(About);
