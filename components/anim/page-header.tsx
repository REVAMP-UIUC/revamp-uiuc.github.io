"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type PageHeaderProps = {
  eyebrow: string;
  /** Headline content — wrap each line in <HeaderLine>. */
  children: React.ReactNode;
  sub?: string;
};

export function HeaderLine({ children }: { children: React.ReactNode }) {
  return (
    <span className="mask-line">
      <span data-ph-line>{children}</span>
    </span>
  );
}

export function PageHeader({ eyebrow, children, sub }: PageHeaderProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from("[data-ph-line]", {
        yPercent: 115,
        duration: 1.2,
        stagger: 0.1,
        delay: 0.1,
      }).from("[data-ph-fade]", { autoAlpha: 0, y: 20, duration: 0.9, stagger: 0.1 }, "-=0.7");
    },
    { scope }
  );

  return (
    <div ref={scope} className="mx-auto w-full max-w-[1500px] px-5 pb-16 pt-36 md:px-10 md:pb-24 md:pt-48">
      <p data-ph-fade className="eyebrow mb-8 flex items-center gap-3 text-lime">
        <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-lime" />
        {eyebrow}
      </p>
      <h1 className="headline text-[12vw] text-foreground sm:text-7xl lg:text-8xl xl:text-9xl">
        {children}
      </h1>
      {sub && (
        <p data-ph-fade className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {sub}
        </p>
      )}
    </div>
  );
}
