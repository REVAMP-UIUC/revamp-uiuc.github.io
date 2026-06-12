"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { CASE_STUDIES } from "@/lib/case-studies";
import { CaseStudyCard } from "@/components/projects/case-study-card";
import { ArrowUpRight } from "lucide-react";

export function WorkSection() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from("[data-work-heading]", {
        yPercent: 110,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: { trigger: scope.current, start: "top 78%" },
      });
      gsap.utils.toArray<HTMLElement>("[data-work-card]").forEach((card, i) => {
        gsap.from(card, {
          autoAlpha: 0,
          y: 80,
          duration: 1.1,
          delay: (i % 2) * 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 90%" },
        });
      });
    },
    { scope }
  );

  return (
    <section ref={scope} className="px-5 pb-28 md:px-10 md:pb-44">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-6 text-lime">Selected work</p>
            <h2 className="headline text-5xl text-foreground sm:text-6xl lg:text-7xl">
              <span className="mask-line">
                <span data-work-heading>Agents in production</span>
              </span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex w-fit items-center gap-2 border-b border-lime/50 pb-1 text-sm font-bold uppercase tracking-wider text-foreground transition-colors hover:text-lime"
          >
            All case studies
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {CASE_STUDIES.map((study) => (
            <div key={study.slug} data-work-card>
              <CaseStudyCard study={study} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
