"use client";

import { useEffect, useRef } from "react";

export default function CursorDot() {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;

    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;

    const move = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      x += (targetX - x) * 0.15;
      y += (targetY - y) * 0.15;

      if (dot) {
        dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="
        fixed top-0 left-0 z-[9999]
        w-3 h-3 rounded-full
        bg-sky-400
        pointer-events-none
        mix-blend-screen
        shadow-[0_0_12px_rgba(56,189,248,0.8)]
      "
    />
  );
}
