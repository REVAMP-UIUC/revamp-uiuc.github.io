"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    index: "01",
    title: "Agentic Readiness Audit",
    description:
      "We map your operations end to end, find the workflows where autonomy pays for itself, and hand you a prioritized roadmap — before a single line of code.",
    tags: ["Workflow mapping", "ROI modeling", "Roadmap"],
  },
  {
    index: "02",
    title: "Custom Agent Frameworks",
    description:
      "Multi-agent systems designed around your business — voice agents, document pipelines, RAG knowledge bases — built on proven orchestration patterns.",
    tags: ["Multi-agent systems", "Voice AI", "RAG"],
  },
  {
    index: "03",
    title: "Integration & Deployment",
    description:
      "Agents that plug into the tools you already use: CRM, ERP, email, telephony. Shipped to production with monitoring, evals, and rollback paths.",
    tags: ["CRM / ERP", "Telephony", "Production ops"],
  },
  {
    index: "04",
    title: "Governance & Enablement",
    description:
      "Compliance guardrails, audit trails, and human-in-the-loop controls — plus training so your team owns the system after we leave.",
    tags: ["Compliance", "Guardrails", "Training"],
  },
];

export function ServicesSection() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>("[data-service-row]").forEach((row) => {
        gsap.from(row, {
          autoAlpha: 0,
          y: 60,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 88%" },
        });
      });
      gsap.from("[data-services-heading]", {
        yPercent: 110,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: { trigger: scope.current, start: "top 75%" },
      });
    },
    { scope }
  );

  return (
    <section ref={scope} id="services" className="px-5 pb-28 pt-10 md:px-10 md:pb-44">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-6 text-lime">What we do</p>
            <h2 className="headline text-5xl text-foreground sm:text-6xl lg:text-7xl">
              <span className="mask-line">
                <span data-services-heading>Services</span>
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Four engagements, one outcome: agentic systems that run your operations —
            without you hiring a machine learning team.
          </p>
        </div>

        <div className="border-t border-white/[0.08]">
          {SERVICES.map((service) => (
            <Link
              key={service.index}
              href="/contact?intent=project"
              data-service-row
              className="row-sweep group grid grid-cols-1 gap-4 border-b border-white/[0.08] px-2 py-10 transition-colors duration-300 md:grid-cols-12 md:items-center md:gap-8 md:py-14"
            >
              <span className="font-mono text-sm text-muted-foreground transition-colors duration-300 group-hover:text-lime-foreground/60 md:col-span-1">
                /{service.index}
              </span>
              <h3 className="headline text-3xl text-foreground transition-colors duration-300 group-hover:text-lime-foreground sm:text-4xl md:col-span-5 lg:text-5xl">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-lime-foreground/80 md:col-span-4">
                {service.description}
              </p>
              <div className="flex flex-wrap items-center gap-2 md:col-span-2 md:justify-end">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors duration-300 group-hover:border-lime-foreground/30 group-hover:text-lime-foreground"
                  >
                    {tag}
                  </span>
                ))}
                <ArrowUpRight className="ml-1 hidden h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-lime-foreground md:block" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
