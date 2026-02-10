import Reveal from "@/components/site/Reveal";
import TiltCard from "@/components/site/TiltCard";
import TerminalHeading from "@/components/site/TerminalHeading";

const services = [
  {
    title: "Agentic AI",
    desc: "Designing autonomous agents with tool-use, memory, evaluation, and safety.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3v18M3 12h18" />
      </svg>
    ),
  },
  {
    title: "RAG Models",
    desc: "Retrieval-augmented generation: embeddings, vector stores, and ranking.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M7 20h10" />
      </svg>
    ),
  },
  {
    title: "AI Workflows",
    desc: "Multi-step orchestrations, evals, and monitoring for production reliability.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18" />
        <path d="M7 13l3 3 7-7" />
      </svg>
    ),
  },
  {
    title: "AWS AI/ML",
    desc: "Bedrock, SageMaker, Lambda, Step Functions, and secure cloud foundations.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l9 4v6c0 5-4 9-9 10C7 21 3 17 3 12V6l9-4z" />
      </svg>
    ),
  },
  {
    title: "Azure AI",
    desc: "Azure OpenAI, Cognitive Search, Functions, and enterprise integrations.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l7 7-7 13L5 9l7-7z" />
      </svg>
    ),
  },
  {
    title: "LLM Integrations",
    desc: "Product features powered by LLMs: chat, summarization, extraction, tools.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 7h16M4 12h10M4 17h7" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <div className="space-y-0">
      <section className="relative overflow-hidden">
        <div className="cyber-grid" />
        <div className="container py-16 md:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <TerminalHeading
              label="revamp/services"
              text="Our Services"
              subtext="We partner with teams to architect, build, and ship agentic AI systems and cloud-backed products."
              align="center"
            />
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Reveal key={s.title}>
                <TiltCard className="glitch-card rounded-2xl border border-border/60 bg-card/80 p-6 shadow-lg transition hover:-translate-y-1">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <div className="mt-6 h-px bg-border/50" />
                  <p className="mt-3 text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground/70">
                    status: active
                  </p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <Reveal className="rounded-2xl border border-border/60 bg-card/70 p-8 text-center shadow-xl">
            <TerminalHeading
              label="revamp/contact"
              text="Have a problem to solve?"
              subtext="Tell us your goals and constraints—we’ll propose a pragmatic plan to reach production."
              align="center"
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
