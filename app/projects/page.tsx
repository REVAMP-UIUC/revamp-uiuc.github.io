import type { Metadata } from "next";
import { PageHeader, HeaderLine } from "@/components/anim/page-header";
import { Reveal } from "@/components/anim/reveal";
import { CaseStudyCard } from "@/components/projects/case-study-card";
import { CTASection } from "@/components/sections/cta";
import { CASE_STUDIES } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Work - Revamp",
  description:
    "Case studies in autonomy: voice agents, compliance routers, knowledge platforms, and multi-agent orchestration, deployed in production.",
};

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader
        eyebrow="Selected work"
        sub="Every system below runs in production today, answering calls, enforcing compliance, and orchestrating work for companies without an engineering org."
      >
        <HeaderLine>Case studies</HeaderLine>
        <HeaderLine>
          in <span className="text-lime">autonomy.</span>
        </HeaderLine>
      </PageHeader>

      <section className="mx-auto w-full max-w-[1500px] px-5 pb-28 md:px-10 md:pb-40">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {CASE_STUDIES.map((study, i) => (
            <Reveal key={study.slug} delay={(i % 2) * 0.12}>
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
