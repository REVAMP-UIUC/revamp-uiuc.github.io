import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Code, Users, Zap } from "lucide-react";
import { PageHeader, HeaderLine } from "@/components/anim/page-header";
import { Reveal } from "@/components/anim/reveal";

export const metadata: Metadata = {
  title: "Careers — Revamp",
  description:
    "Join Revamp and build autonomous agent systems that run real businesses. Engineering, product, and design roles.",
};

const ROLES = [
  {
    index: "01",
    icon: Code,
    title: "Agent Engineer",
    description:
      "Design and ship multi-agent systems — orchestration, RAG pipelines, voice agents — that survive contact with production workloads.",
    skills: ["Python / TypeScript", "LangChain · AutoGen", "RAG & evals"],
  },
  {
    index: "02",
    icon: Users,
    title: "Engagement Manager",
    description:
      "Own client relationships end to end. Translate messy operational reality into agent architectures engineers can build.",
    skills: ["Client strategy", "Workflow mapping", "Agile delivery"],
  },
  {
    index: "03",
    icon: Zap,
    title: "Product Designer",
    description:
      "Make autonomy legible. Design the dashboards, approvals, and interfaces where humans supervise their agents.",
    skills: ["Figma / Next.js", "Design systems", "Data visualization"],
  },
];

export default function JoinPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader
        eyebrow="Careers — applications open for Spring 2026"
        sub="We hire people who want their code, strategy, and design running inside real businesses — not sitting in a slide deck."
      >
        <HeaderLine>Build the</HeaderLine>
        <HeaderLine>
          <span className="text-stroke">autonomous</span> era.
        </HeaderLine>
      </PageHeader>

      {/* Roles */}
      <section className="mx-auto w-full max-w-[1500px] px-5 pb-20 md:px-10 md:pb-28">
        <div className="border-t border-white/[0.08]">
          {ROLES.map((role) => (
            <Reveal key={role.index}>
              <div className="row-sweep group grid grid-cols-1 gap-5 border-b border-white/[0.08] px-2 py-10 md:grid-cols-12 md:items-center md:gap-8 md:py-14">
                <span className="font-mono text-sm text-muted-foreground transition-colors duration-300 group-hover:text-lime-foreground/60 md:col-span-1">
                  /{role.index}
                </span>
                <div className="flex items-center gap-4 md:col-span-4">
                  <role.icon className="h-6 w-6 shrink-0 text-lime transition-colors duration-300 group-hover:text-lime-foreground" />
                  <h2 className="headline text-3xl text-foreground transition-colors duration-300 group-hover:text-lime-foreground md:text-4xl">
                    {role.title}
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-lime-foreground/80 md:col-span-4">
                  {role.description}
                </p>
                <div className="flex flex-wrap gap-2 md:col-span-3 md:justify-end">
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors duration-300 group-hover:border-lime-foreground/30 group-hover:text-lime-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Apply */}
      <section className="mx-auto w-full max-w-[1500px] px-5 pb-28 md:px-10 md:pb-40">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-10 rounded-2xl border border-lime/25 bg-card p-8 md:flex-row md:items-center md:p-14">
            <div>
              <p className="eyebrow mb-4 text-lime">Spring 2026 cohort</p>
              <h2 className="headline text-3xl text-foreground md:text-5xl">
                Interested? Raise your hand.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Drop your details in the interest form and we&apos;ll reach out when
                applications open. Strong portfolios beat strong résumés.
              </p>
            </div>
            <Link
              href="https://forms.gle/giA8kNWZ2hiuf8Hy5"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-lime px-8 py-4 text-xs font-bold uppercase tracking-wider text-lime-foreground transition-transform duration-300 hover:scale-[1.04]"
            >
              Interest form
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
