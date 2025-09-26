import Reveal from "@/components/site/Reveal";
import TiltCard from "@/components/site/TiltCard";

export default function About() {
  const disciplines = [
    {
      title: "Computer Science",
      desc:
        "Systems, full‑stack product, agent frameworks, tooling, and reliable shipping from prototype to production.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M7 20h10" />
        </svg>
      ),
    },
    {
      title: "Statistics",
      desc:
        "Experiment design, evaluation, and metrics for agentic systems. We quantify impact with robust analyses.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18" />
          <path d="M7 15v3M11 11v7M15 7v11M19 9v9" />
        </svg>
      ),
    },
    {
      title: "Information Sciences (Data Science)",
      desc:
        "Retrieval, embeddings, and knowledge systems. Clean data pipelines that power RAG and search.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="8" cy="8" r="3" />
          <circle cx="16" cy="16" r="3" />
          <path d="M10 10l4 4" />
        </svg>
      ),
    },
    {
      title: "Finance (Data Science)",
      desc:
        "ROI modeling, dashboards, and decision support. We align AI investments with measurable business value.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 17l4-4 3 3 7-7" />
          <path d="M3 3v18h18" />
        </svg>
      ),
    },
    {
      title: "Physics",
      desc:
        "Modeling, optimization, and first‑principles thinking for tough problems, from controls to simulation.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      ),
    },
    {
      title: "Systems Engineering",
      desc:
        "Architecture, reliability, and automation: CI/CD, observability, and scalable foundations in cloud.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 7h16M4 12h10M4 17h7" />
        </svg>
      ),
    },
  ];

  return (
    <div className="">
      {/* Intro */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-grid opacity-30 mask-fade" />
        <div className="container py-16 md:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">About Revamp</h1>
            <p className="mt-4 text-muted-foreground">
              We’re a six‑person UIUC club collaborating with companies on agentic AI and modern tech.
              Our members span Computer Science, Statistics, Information Sciences (Data Science), Finance (Data Science), Physics, and Systems Engineering.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Team disciplines */}
      <section className="py-8 md:py-12">
        <div className="container">
          <Reveal className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Our Team</h2>
            <p className="mt-2 text-muted-foreground">Six disciplines, one mission: ship useful AI with real impact.</p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {disciplines.map((m) => (
              <Reveal key={m.title}>
                <TiltCard className="group rounded-xl border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    {m.icon}
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary">{m.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-12 md:py-16">
        <div className="container">
          <Reveal className="rounded-xl border bg-secondary/30 p-6 text-center">
            <h3 className="text-xl md:text-2xl font-semibold">Want to work with us?</h3>
            <p className="mt-2 text-muted-foreground">Reach out or apply to join. We collaborate with teams to deliver agentic AI and cloud solutions.</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
