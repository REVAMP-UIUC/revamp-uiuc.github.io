"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

const INDUSTRIES = [
  "Real Estate",
  "Healthcare",
  "Logistics",
  "Legal",
  "Retail",
  "Manufacturing",
  "Finance",
  "Hospitality",
];

function Row({ items }: { items: string[] }) {
  return (
    <div data-marquee-track className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="headline whitespace-nowrap px-6 text-5xl uppercase text-lime md:px-10 md:text-7xl">
            {item}
          </span>
          <span className="text-2xl text-lime md:text-3xl">✦</span>
        </span>
      ))}
    </div>
  );
}

export function MarqueeSection() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Seamless loop: track duplicated once, each copy shifts by its own width
      const loop = gsap.to("[data-marquee-track]", {
        xPercent: -100,
        ease: "none",
        duration: 38,
        repeat: -1,
      });

      // Scroll velocity gives the marquee a kick
      ScrollTrigger.create({
        trigger: scope.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const boost = gsap.utils.clamp(0, 3, Math.abs(self.getVelocity()) / 400);
          gsap.to(loop, { timeScale: 1 + boost, duration: 0.5, overwrite: true });
        },
      });
    },
    { scope }
  );

  return (
    <section
      ref={scope}
      aria-label="Industries we serve"
      className="overflow-hidden border-y border-white/[0.06] py-10 md:py-14"
    >
      <div className="flex w-max">
        <Row items={INDUSTRIES} />
        <Row items={INDUSTRIES} />
      </div>
    </section>
  );
}
