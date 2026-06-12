"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const STATS = [
  { value: 14, suffix: "+", label: "Agent systems shipped" },
  { value: 38, suffix: "k", label: "Hours automated / year" },
  { value: 6, suffix: "", label: "Industries served" },
  { value: 97, suffix: "%", label: "Tasks resolved without escalation" },
];

export function StatsSection() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        const counter = { value: 0 };
        gsap.to(counter, {
          value: target,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
          onUpdate: () => {
            el.textContent = String(Math.round(counter.value));
          },
        });
      });

      gsap.from("[data-stat-cell]", {
        autoAlpha: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.9,
        scrollTrigger: { trigger: scope.current, start: "top 85%" },
      });
    },
    { scope }
  );

  return (
    <section ref={scope} className="px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] lg:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            data-stat-cell
            className="flex flex-col gap-3 bg-background p-8 md:p-12"
          >
            <p className="headline text-5xl text-foreground md:text-7xl">
              <span data-count={stat.value}>0</span>
              <span className="text-lime">{stat.suffix}</span>
            </p>
            <p className="eyebrow text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
