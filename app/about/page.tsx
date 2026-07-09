import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader, HeaderLine } from "@/components/anim/page-header";
import { Reveal } from "@/components/anim/reveal";
import { ManifestoSection } from "@/components/sections/manifesto";
import { StatsSection } from "@/components/sections/stats";

export const metadata: Metadata = {
  title: "Studio - Revamp",
  description:
    "Revamp is an agentic AI consultancy. We design, build, and run autonomous agent frameworks for companies that don't write code.",
};

const PRINCIPLES = [
  {
    index: "01",
    title: "Outcomes over demos",
    description:
      "We don't ship proofs of concept. Every engagement ends with agents running in production, measured against the business metric they were hired to move.",
  },
  {
    index: "02",
    title: "Your stack, not ours",
    description:
      "Agents plug into the CRM, phones, and spreadsheets you already use. No rip-and-replace, no platform lock-in, no six-month migration.",
  },
  {
    index: "03",
    title: "Humans hold the keys",
    description:
      "Every agent has explicit permissions, escalation paths, and audit trails. Autonomy is earned in shadow mode before it's granted in production.",
  },
  {
    index: "04",
    title: "Leave you independent",
    description:
      "We train your operators to run, tune, and extend the system. Success is when you stop needing us, not when the retainer renews.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader
        eyebrow="The studio"
        sub="Revamp is an agentic AI consultancy. We embed autonomous agents inside the operations of non-technical companies, and stay until they're carrying real weight."
      >
        <HeaderLine>We are the AI team</HeaderLine>
        <HeaderLine>
          you <span className="text-stroke">don&apos;t have to hire.</span>
        </HeaderLine>
      </PageHeader>

      <ManifestoSection />

      {/* Principles */}
      <section className="mx-auto w-full max-w-[1500px] px-5 pb-28 md:px-10 md:pb-40">
        <Reveal>
          <p className="eyebrow mb-6 text-lime">How we operate</p>
          <h2 className="headline mb-16 text-5xl text-foreground sm:text-6xl lg:text-7xl">
            Principles<span className="text-lime">.</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.index} delay={(i % 2) * 0.1} className="h-full">
              <div className="flex h-full flex-col gap-6 bg-background p-8 transition-colors duration-500 hover:bg-card md:p-12">
                <span className="headline text-6xl text-white/[0.07]">{p.index}</span>
                <h3 className="headline text-2xl text-foreground md:text-3xl">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <StatsSection />

      {/* Origin */}
      <section className="border-t border-white/[0.06] px-5 py-28 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow mb-6 text-lime">Origin</p>
            <h2 className="headline text-4xl text-foreground md:text-5xl">
              Born in the lab,
              <br />
              raised in the field.
            </h2>
          </Reveal>
          <div className="flex flex-col gap-8 lg:col-span-8">
            <Reveal>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Revamp started at the University of Illinois, shipping agentic systems for
                real clients while the field was still being invented. That habit never
                left: we build with the newest research, but we only ship what survives
                contact with a production workload.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Today we work with operators in real estate, healthcare, logistics, and
                consumer brands, teams with deep domain knowledge and zero interest in
                becoming software companies. That&apos;s exactly who we built Revamp for.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <Link
                href="/team"
                className="group inline-flex items-center gap-2 border-b border-lime/50 pb-1 text-sm font-bold uppercase tracking-wider text-foreground transition-colors hover:text-lime"
              >
                Meet the team
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
