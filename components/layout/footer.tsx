"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ArrowUpRight, Linkedin, Instagram } from "lucide-react";

const NAV = [
  { href: "/projects", label: "Work" },
  { href: "/about", label: "Studio" },
  { href: "/team", label: "Team" },
  { href: "/join", label: "Join" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from("[data-footer-reveal]", {
        yPercent: 110,
        stagger: 0.08,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: scope.current,
          start: "top 80%",
        },
      });
      gsap.from("[data-wordmark]", {
        yPercent: 40,
        autoAlpha: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-wordmark]",
          start: "top 95%",
        },
      });
    },
    { scope }
  );

  return (
    <footer ref={scope} className="relative overflow-hidden border-t border-white/[0.06] bg-background">
      <div className="mx-auto max-w-[1500px] px-5 pt-20 md:px-10 md:pt-28">
        {/* CTA */}
        <div className="flex flex-col gap-10 pb-20 md:flex-row md:items-end md:justify-between md:pb-28">
          <div>
            <p className="eyebrow mb-6 text-lime">Next step</p>
            <h2 className="headline text-5xl text-foreground sm:text-6xl lg:text-8xl">
              <span className="mask-line">
                <span data-footer-reveal>Put agents</span>
              </span>
              <span className="mask-line">
                <span data-footer-reveal>to work.</span>
              </span>
            </h2>
          </div>
          <Link
            href="/contact?intent=project"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-lime/40 px-8 py-4 text-sm font-bold uppercase tracking-wider text-lime transition-colors duration-300 hover:bg-lime hover:text-lime-foreground"
          >
            Book an intro call
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300" />
          </Link>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-10 border-t border-white/[0.06] py-10 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="eyebrow text-muted-foreground transition-colors hover:text-lime"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-5">
            <Link
              aria-label="LinkedIn"
              href="https://www.linkedin.com/company/revamp-uiuc/"
              className="text-muted-foreground transition-colors hover:text-lime"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link aria-label="Instagram" href="#" className="text-muted-foreground transition-colors hover:text-lime">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="pointer-events-none select-none overflow-hidden">
          <p
            data-wordmark
            className="headline -mb-[0.16em] whitespace-nowrap text-center text-[21vw] leading-none text-white/[0.05]"
          >
            REVAMP
          </p>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/[0.06] py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-muted-foreground">
            &copy; {new Date().getFullYear()} REVAMP - Agentic AI Consulting
          </p>
          <p className="font-mono text-[11px] text-muted-foreground">
            HUMANS × AGENTS, IN PRODUCTION<span className="blink text-lime">_</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
