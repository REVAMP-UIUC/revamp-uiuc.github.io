"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Search, PenTool, Hammer, Rocket, TrendingUp } from "lucide-react";

const STEPS = [
  {
    index: "01",
    title: "Diagnose",
    icon: Search,
    duration: "Week 1–2",
    description:
      "We shadow your team, map every workflow, and quantify where hours and money leak. You get a heat-map of automation leverage across the business.",
  },
  {
    index: "02",
    title: "Design",
    icon: PenTool,
    duration: "Week 3–4",
    description:
      "We architect the agent framework: which agents exist, what they're allowed to do, how they escalate to humans, and how success is measured.",
  },
  {
    index: "03",
    title: "Build",
    icon: Hammer,
    duration: "Week 5–10",
    description:
      "Engineers ship in weekly increments you can see and test. Every agent comes with evals, guardrails, and an audit trail from day one.",
  },
  {
    index: "04",
    title: "Deploy",
    icon: Rocket,
    duration: "Week 11–12",
    description:
      "Agents go live inside your real stack — CRM, phones, inboxes, ERPs. We run them in shadow mode first, then hand over the keys gradually.",
  },
  {
    index: "05",
    title: "Evolve",
    icon: TrendingUp,
    duration: "Ongoing",
    description:
      "Monthly model upgrades, new capabilities, and performance reviews. Your agentic workforce compounds while your headcount stays flat.",
  },
];

export function ProcessSection() {
  const scope = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop: pin the section and scrub the track horizontally
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const track = trackRef.current!;
        const getDistance = () => track.scrollWidth - window.innerWidth;

        gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: scope.current,
            start: "top top",
            end: () => `+=${getDistance()}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        });
      });

      // Mobile / reduced motion: simple card reveals
      mm.add("(max-width: 1023px)", () => {
        gsap.utils.toArray<HTMLElement>("[data-process-card]").forEach((card) => {
          gsap.from(card, {
            autoAlpha: 0,
            y: 50,
            duration: 0.9,
            scrollTrigger: { trigger: card, start: "top 88%" },
          });
        });
      });
    },
    { scope }
  );

  return (
    <section
      ref={scope}
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#0d0d0f] lg:h-screen"
    >
      <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative flex h-full flex-col py-20 lg:py-0">
        <div className="mx-auto w-full max-w-[1500px] px-5 md:px-10 lg:pt-20">
          <p className="eyebrow mb-6 text-lime">How it works</p>
          <h2 className="headline text-5xl text-foreground sm:text-6xl lg:text-7xl">
            From audit to autonomy
            <span className="text-lime">.</span>
          </h2>
        </div>

        {/* Track: horizontal on desktop, vertical stack on mobile */}
        <div className="mt-14 flex-grow lg:mt-16 lg:flex lg:items-center">
          <div
            ref={trackRef}
            className="flex flex-col gap-5 px-5 md:px-10 lg:w-max lg:flex-row lg:gap-8 lg:pl-[max(2.5rem,calc((100vw-1500px)/2+2.5rem))] lg:pr-24"
          >
            {STEPS.map((step) => (
              <article
                key={step.index}
                data-process-card
                className="group flex w-full flex-col justify-between rounded-2xl border border-white/[0.08] bg-background/80 p-7 backdrop-blur-sm transition-colors duration-500 hover:border-lime/50 md:p-9 lg:h-[420px] lg:w-[420px] lg:shrink-0"
              >
                <div className="flex items-start justify-between">
                  <span className="headline text-6xl text-white/[0.08] transition-colors duration-500 group-hover:text-lime/25 lg:text-7xl">
                    {step.index}
                  </span>
                  <step.icon className="h-6 w-6 text-lime" />
                </div>
                <div className="mt-10 lg:mt-0">
                  <p className="eyebrow mb-3 text-muted-foreground">{step.duration}</p>
                  <h3 className="headline mb-4 text-3xl text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}

            {/* End card */}
            <div className="hidden items-center lg:flex lg:w-[360px] lg:shrink-0">
              <p className="headline text-5xl leading-tight text-stroke">
                Your ops,
                <br />
                on autopilot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
