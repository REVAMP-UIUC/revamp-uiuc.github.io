"use client";

import Link from "next/link";
import { useRef } from "react";
import dynamic from "next/dynamic";
import { gsap, useGSAP } from "@/lib/gsap";
import { ArrowUpRight, ArrowDown } from "lucide-react";

const HeroCanvas = dynamic(
  () => import("@/components/three/hero-canvas").then((m) => m.HeroCanvas),
  { ssr: false }
);

export function HeroSection() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from("[data-hero-line]", {
        yPercent: 115,
        duration: 1.3,
        stagger: 0.12,
        delay: 0.15,
      })
        .from(
          "[data-hero-fade]",
          { autoAlpha: 0, y: 24, duration: 1, stagger: 0.12 },
          "-=0.7"
        )
        .from(
          "[data-hero-rule]",
          { scaleX: 0, transformOrigin: "left center", duration: 1.2, ease: "power3.inOut" },
          "-=0.9"
        );

      // Content gently recedes as you scroll away
      gsap.to("[data-hero-content]", {
        yPercent: -12,
        autoAlpha: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: scope.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope }
  );

  return (
    <section ref={scope} className="relative flex min-h-svh flex-col overflow-x-visible overflow-y-hidden">
      {/* Three.js particle field */}
      <HeroCanvas className="absolute inset-0 z-0" />
      {/* Legibility gradients */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-background/70 via-transparent to-background" />

      <div
        data-hero-content
        className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-grow flex-col justify-end px-5 pb-14 pt-40 md:px-10 md:pb-20"
      >
        <p data-hero-fade className="eyebrow mb-8 flex items-center gap-3 text-lime">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-lime" />
          Agentic AI Consulting
        </p>

        <h1 className="headline py-8 w-full text-[13.5vw] text-foreground sm:text-[11vw] lg:text-[8.6rem] xl:text-[9.5rem]">
          <span className="mask-line">
            <span data-hero-line>Autonomous AI,</span>
          </span>
          <span className="mask-line">
            <span data-hero-line>
              built around <span className="text-lime">you.</span>
            </span>
          </span>
        </h1>

        <div data-hero-rule className="my-10 h-px w-full bg-white/10 md:my-12" />

        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <p data-hero-fade className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            We design, build, and run agentic frameworks for companies that don&apos;t
            write code, turning your everyday operations into an autonomous workforce.
          </p>

          <div data-hero-fade className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact?intent=project"
              className="group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-lime-foreground transition-transform duration-300 hover:scale-[1.04]"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-foreground transition-colors duration-300 hover:border-lime hover:text-lime"
            >
              See the work
            </Link>
          </div>
        </div>

        <div
          data-hero-fade
          className="mt-12 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:mt-16"
        >
          <span className="flex items-center gap-2">
            <ArrowDown className="h-3 w-3 animate-bounce" /> Scroll
          </span>
          <span className="hidden sm:block">For operators, not engineers</span>
          <span>EST. 2024</span>
        </div>
      </div>
    </section>
  );
}
