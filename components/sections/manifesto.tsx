"use client";

import { useRef } from "react";
import { gsap, useGSAP, SplitText } from "@/lib/gsap";

export function ManifestoSection() {
  const scope = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const split = SplitText.create(textRef.current, { type: "words" });
      gsap.fromTo(
        split.words,
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 78%",
            end: "bottom 45%",
            scrub: 0.6,
          },
        }
      );
      return () => split.revert();
    },
    { scope }
  );

  return (
    <section ref={scope} className="relative px-5 py-28 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1500px]">
        <p className="eyebrow mb-10 text-lime">The thesis</p>
        <p
          ref={textRef}
          className="font-display max-w-5xl text-3xl font-medium leading-[1.25] tracking-tight text-foreground sm:text-4xl md:text-5xl"
        >
          Most companies don&apos;t need an AI team, they need outcomes. We embed
          autonomous agents inside the workflows you already run: answering calls,
          moving paperwork, reconciling data, routing decisions. Your people call the
          shots. The agents automate the grind.
        </p>
      </div>
    </section>
  );
}
