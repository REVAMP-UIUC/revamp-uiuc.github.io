"use client";

import { useEffect, useRef, useState } from "react";
import type { CaseStudy } from "@/lib/case-studies";

/**
 * Case study card with a faux-terminal that "types" its execution log
 * while the card is on screen.
 */
export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const cardRef = useRef<HTMLElement>(null);
  const [visibleLines, setVisibleLines] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), {
      threshold: 0.35,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleLines(study.logs.length);
      return;
    }
    setVisibleLines(0);
    const id = setInterval(() => {
      setVisibleLines((n) => {
        if (n >= study.logs.length) {
          clearInterval(id);
          return n;
        }
        return n + 1;
      });
    }, 550);
    return () => clearInterval(id);
  }, [active, study.logs.length]);

  return (
    <article
      ref={cardRef}
      className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-card transition-colors duration-500 hover:border-lime/40"
    >
      {/* Terminal */}
      <div className="m-3 rounded-xl border border-white/[0.06] bg-[#070708] p-5 md:m-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-lime/60" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            agent.run — live
          </span>
        </div>
        <div className="min-h-[150px] space-y-1.5 font-mono text-[11px] leading-relaxed md:text-xs">
          {study.logs.slice(0, visibleLines).map((line, i) => (
            <p
              key={i}
              className={
                i === study.logs.length - 1 ? "text-lime" : "text-muted-foreground"
              }
            >
              {line}
            </p>
          ))}
          {visibleLines < study.logs.length && (
            <p className="text-lime">
              <span className="blink">▋</span>
            </p>
          )}
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-grow flex-col p-6 pt-3 md:p-8 md:pt-4">
        <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          <span>
            {study.client} · {study.industry}
          </span>
          <span>{study.year}</span>
        </div>
        <h3 className="headline mb-3 text-3xl text-foreground transition-colors duration-300 group-hover:text-lime md:text-4xl">
          {study.title}
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
          {study.description}
        </p>
        <div className="mt-auto flex flex-col gap-4">
          <p className="font-mono text-xs text-lime">↳ {study.outcome}</p>
          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
