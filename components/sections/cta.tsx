"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ArrowUpRight } from "lucide-react";

export function CTASection() {
  const scope = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useGSAP(
    (context, contextSafe) => {
      gsap.from("[data-cta-line]", {
        yPercent: 115,
        stagger: 0.1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: { trigger: scope.current, start: "top 70%" },
      });

      // Magnetic button (pointer devices only)
      const btn = buttonRef.current;
      if (!btn || !window.matchMedia("(hover: hover)").matches) return;

      const xTo = gsap.quickTo(btn, "x", { duration: 0.5, ease: "power3.out" });
      const yTo = gsap.quickTo(btn, "y", { duration: 0.5, ease: "power3.out" });

      const onMove = contextSafe!((e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const dist = Math.hypot(dx, dy);
        if (dist < 220) {
          xTo(dx * 0.35);
          yTo(dy * 0.35);
        } else {
          xTo(0);
          yTo(0);
        }
      });

      window.addEventListener("mousemove", onMove);
      return () => window.removeEventListener("mousemove", onMove);
    },
    { scope }
  );

  return (
    <section
      ref={scope}
      className="relative overflow-hidden border-t border-white/[0.06] px-5 py-32 text-center md:px-10 md:py-48"
    >
      <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto flex max-w-[1500px] flex-col items-center gap-12">
        <p className="eyebrow text-lime">Ready when you are</p>
        <h2 className="headline text-[13vw] text-foreground sm:text-7xl lg:text-9xl">
          <span className="mask-line">
            <span data-cta-line>Stop hiring for</span>
          </span>
          <span className="mask-line">
            <span data-cta-line className="text-lime">
              repetitive work.
            </span>
          </span>
        </h2>
        <Link
          ref={buttonRef}
          href="/contact?intent=project"
          className="group inline-flex items-center gap-3 rounded-full bg-lime px-10 py-5 text-sm font-bold uppercase tracking-wider text-lime-foreground transition-shadow duration-300 hover:shadow-[0_0_60px_-10px_rgba(217,249,90,0.5)]"
        >
          Book an intro call
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300" />
        </Link>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          30 minutes · No deck · Just your workflows
        </p>
      </div>
    </section>
  );
}
