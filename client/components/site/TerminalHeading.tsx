import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Alignment = "left" | "center" | "right";

type TerminalHeadingProps = {
  label?: string;
  text: string;
  subtext?: string;
  align?: Alignment;
  className?: string;
};

export default function TerminalHeading({
  label,
  text,
  subtext,
  align = "left",
  className,
}: TerminalHeadingProps) {
  const headingRef = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = headingRef.current;
    if (!node) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const alignmentClass =
    align === "center"
      ? "text-center items-center"
      : align === "right"
        ? "text-right items-end"
        : "text-left items-start";

  const textAlignmentClass =
    align === "center"
      ? "mx-auto"
      : align === "right"
        ? "ml-auto"
        : undefined;

  return (
    <div className={cn("flex flex-col gap-3", alignmentClass, className)}>
      {label && (
        <span className="text-[0.65rem] uppercase tracking-[0.65em] text-secondary font-mono">
          {label}
        </span>
      )}
      <span className="sr-only">{text}</span>
      <span
        ref={headingRef}
        data-active={active}
        className={cn(
          "terminal-heading font-mono text-3xl font-semibold md:text-4xl lg:text-5xl text-foreground/95",
          textAlignmentClass,
        )}
        style={{ ["--characters" as string]: text.length }}
        aria-hidden="true"
      >
        {text}
      </span>
      {subtext && (
        <p
          className={cn(
            "text-base text-muted-foreground/90 max-w-3xl",
            textAlignmentClass,
          )}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}


