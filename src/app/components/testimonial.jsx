"use client";

import { memo, useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: "01",
    name: "Antony Key",
    role: "Founder, Italy",
    rating: 5,
    quote:
      "Working with OneWebbers has been an outstanding experience. The team consistently delivers high-quality work, communicates clearly, and approaches every task with professionalism and attention to detail. They are responsive to feedback, proactive in solving challenges, and committed to delivering results that exceed expectations. I'm very happy with the progress so far and look forward to continuing our collaboration. Highly recommended.",
  },
  {
    id: "02",
    name: "Shubham Goel",
    role: "3D Designer",
    rating: 5,
    quote:
      "I truly appreciate the UI/UX expertise of the OneWebbers team. Every website and application they've designed for us has been unique, modern, and highly professional. What impresses me the most is that their first design concepts are usually approved by clients without major revisions \u2014 a true reflection of their creativity, attention to detail, and strong design sense. Fantastic work, keep it up! I highly recommend OneWebbers to anyone looking for exceptional digital design services.",
  },
  {
    id: "03",
    name: "Anand Gunde",
    role: "Founder & CEO \u2013 RentifyAI",
    rating: 5,
    quote:
      "OneWebbers played a key role in bringing the RentifyAI platform to life. From designing an intuitive user experience to developing our complete web platform and mobile application, the team demonstrated exceptional technical expertise and a deep understanding of our business requirements. They were always available for discussions, delivered features on time, and provided valuable suggestions that improved the final product. I highly recommend OneWebbers to anyone looking for a reliable technology partner capable of building scalable digital solutions.",
  },
];

function Testimonial() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const goNext = () => setIndex((i) => (i + 1) % total);
  const goPrev = () => setIndex((i) => (i - 1 + total) % total);

  const t = testimonials[index];

  return (
    <section id="testimonials" className="relative w-full bg-white py-24 md:py-32 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16 lg:mb-20">
          {/* Left */}
          <div className="w-full lg:w-1/2">
            <h2 className="flex items-center text-gray-700 text-base font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-[#683AF2] shrink-0 mr-2.5" />
              Testimonials
            </h2>
            <p className="text-[40px] md:text-[48px] lg:text-[60px] font-medium tracking-[-1.5px] lg:tracking-[-2.5px] leading-[1.05] lg:leading-[1.05] text-[#1a1a1a] mt-3">
              What our{" "}
              <br className="hidden sm:block" />
              clients say.
            </p>
          </div>

          {/* Right */}
          <div className="w-full lg:w-1/3 flex flex-col items-start gap-5 pb-2">
            <p className="text-sm md:text-base text-gray-500 leading-relaxed">
              We take pride in delivering exceptional digital solutions. Here is
              what our clients have to say about working with us.
            </p>
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="relative md:hidden">
          <div
            key={t.id}
            className="flex flex-col rounded-2xl min-h-112 p-8 bg-[#EFEAFF] overflow-hidden"
          >
            {/* Top row */}
            <div className="flex items-start justify-between w-full relative z-10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#683AF2] shrink-0" />
              <span className="text-[80px] font-medium leading-none text-black/5 select-none -mr-2 -mt-4">
                &ldquo;
              </span>
            </div>

            {/* Bottom content */}
            <div className="flex flex-col items-start mt-auto pt-12 relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    strokeWidth={1.5}
                    className="text-[#683AF2] fill-[#683AF2]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm leading-relaxed text-black/70 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Name & Role */}
              <div className="mt-auto w-full pt-4 border-t border-[#683AF2]/10">
                <p className="text-base font-bold text-[#1a1a1a]">{t.name}</p>
                <p className="text-sm text-black/60">{t.role}</p>
              </div>
            </div>
          </div>

          {/* Arrow Buttons */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={goPrev}
              className="group w-10 h-10 rounded-full border border-[#683AF2]/30 text-[#683AF2] flex items-center justify-center hover:bg-[#683AF2]/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft
                size={18}
                className="transition-transform duration-500 ease-in-out group-hover:-rotate-180"
              />
            </button>

            {/* Dots */}
            <div className="relative flex items-center">
              {/* Sliding active pill */}
              <motion.div
                animate={{ x: index * 32 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 35,
                }}
                className="absolute left-0 h-2 w-6 rounded-full bg-[#683AF2]"
              />
              {/* Dot backgrounds */}
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className="relative w-8 h-2 flex items-center justify-center"
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <span className="block h-2 w-2 rounded-full bg-[#683AF2]/30" />
                </button>
              ))}
            </div>

            <button
              onClick={goNext}
              className="group w-10 h-10 rounded-full border border-[#683AF2]/30 text-[#683AF2] flex items-center justify-center hover:bg-[#683AF2]/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight
                size={18}
                className="transition-transform duration-500 ease-in-out group-hover:rotate-180"
              />
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="group relative flex flex-col rounded-2xl min-h-112 p-8 bg-[#EFEAFF] overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Top row */}
              <div className="flex items-start justify-between w-full relative z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-[#683AF2] shrink-0" />
                <span className="text-[80px] md:text-[90px] font-medium leading-none text-black/5 select-none -mr-2 -mt-4">
                  &ldquo;
                </span>
              </div>

              {/* Bottom content */}
              <div className="flex flex-col items-start relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      strokeWidth={1.5}
                      className="text-[#683AF2] fill-[#683AF2]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm leading-relaxed text-black/70 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Name & Role */}
                <div className="mt-auto w-full pt-4 border-t border-[#683AF2]/10">
                  <p className="text-base font-bold text-[#1a1a1a]">{t.name}</p>
                  <p className="text-sm text-black/60">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Testimonial);
