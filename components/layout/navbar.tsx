"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Work" },
  { href: "/about", label: "Studio" },
  { href: "/team", label: "Team" },
  { href: "/join", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const barRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Hide on scroll down, reveal on scroll up
  useGSAP(() => {
    const showAnim = gsap
      .from(barRef.current, { yPercent: -100, paused: true, duration: 0.35, ease: "power2.out" })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        if (self.scroll() < 80) {
          showAnim.play();
          return;
        }
        if (self.direction === -1) showAnim.play();
        else showAnim.reverse();
      },
    });
  });

  // Mobile overlay open/close
  useGSAP(
    () => {
      const overlay = overlayRef.current;
      if (!overlay) return;
      if (menuOpen) {
        gsap.set(overlay, { display: "flex" });
        gsap.fromTo(
          overlay,
          { clipPath: "inset(0% 0% 100% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 0.6, ease: "power4.inOut" }
        );
        gsap.fromTo(
          overlay.querySelectorAll("[data-menu-link]"),
          { yPercent: 120 },
          { yPercent: 0, stagger: 0.06, duration: 0.7, delay: 0.2, ease: "power4.out" }
        );
      } else {
        gsap.to(overlay, {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 0.5,
          ease: "power4.inOut",
          onComplete: () => gsap.set(overlay, { display: "none" }),
        });
      }
    },
    { dependencies: [menuOpen] }
  );

  // Close the menu and lock body scroll while open
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        ref={barRef}
        className="fixed top-0 left-0 right-0 z-[100] border-b border-white/[0.06] bg-background/70 backdrop-blur-xl"
      >
        <nav className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-5 md:px-10">
          <Link href="/" className="font-display text-lg font-bold tracking-tight">
            REVAMP<span className="text-lime">.</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {LINKS.filter((l) => l.href !== "/").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "eyebrow transition-colors duration-300 hover:text-lime",
                  pathname === link.href ? "text-lime" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact?intent=project"
              className="group inline-flex items-center gap-1.5 rounded-full bg-lime px-5 py-2 text-xs font-bold uppercase tracking-wider text-lime-foreground transition-transform duration-300 hover:scale-[1.04]"
            >
              Start a project
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="relative z-[110] flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={cn(
                "h-px w-6 bg-foreground transition-transform duration-300",
                menuOpen && "translate-y-[3.5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "h-px w-6 bg-foreground transition-transform duration-300",
                menuOpen && "-translate-y-[3.5px] -rotate-45"
              )}
            />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[105] hidden flex-col justify-between bg-background px-6 pb-10 pt-28 md:hidden"
        style={{ clipPath: "inset(0% 0% 100% 0%)" }}
      >
        <nav className="flex flex-col gap-1">
          {LINKS.map((link, i) => (
            <span key={link.href} className="mask-line border-b border-white/[0.06] py-2">
              <Link
                data-menu-link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "headline flex items-baseline gap-4 text-5xl",
                  pathname === link.href ? "text-lime" : "text-foreground"
                )}
              >
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                {link.label}
              </Link>
            </span>
          ))}
        </nav>
        <div className="flex flex-col gap-6">
          <Link
            href="/contact?intent=project"
            onClick={() => setMenuOpen(false)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime py-4 text-sm font-bold uppercase tracking-wider text-lime-foreground"
          >
            Start a project <ArrowUpRight className="h-4 w-4" />
          </Link>
          <p className="eyebrow text-muted-foreground">Agentic AI Consulting — Worldwide</p>
        </div>
      </div>
    </>
  );
}
