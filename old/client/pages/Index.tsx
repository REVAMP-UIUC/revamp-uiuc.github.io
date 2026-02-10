import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";
import TiltCard from "@/components/site/TiltCard";
import TerminalHeading from "@/components/site/TerminalHeading";

const telemetry = [
  { label: "Autonomy Level", value: 92, meta: "Atlas voice agent" },
  { label: "Data Reliability", value: 98, meta: "Pipelines & evals" },
  { label: "Deploy Velocity", value: 14, meta: "days to ship" },
];

const events = [
  {
    date: "Oct 21, 2025",
    title: "Revamp x Startup: Agentic AI Workshop",
    desc: "Hands-on session building autonomous agents.",
  },
  {
    date: "Nov 5, 2025",
    title: "LLM Product Clinic",
    desc: "Bring your ideas; we help architect MVPs.",
  },
  {
    date: "Nov 19, 2025",
    title: "Company Partner Info Night",
    desc: "Learn how to collaborate with Revamp.",
  },
];

const expertise = [
  {
    title: "Agentic AI Systems",
    desc: "Design and deploy autonomous AI agents to automate complex workflows.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3v18M3 12h18" />
      </svg>
    ),
  },
  {
    title: "LLM Products & Integrations",
    desc: "Ship reliable products with modern LLMs, vector search, and tool-use.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M7 20h10" />
      </svg>
    ),
  },
  {
    title: "Data & Automation",
    desc: "Pipelines, analytics, and integrations that unlock business leverage.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18" />
        <path d="M7 13l3 3 7-7" />
      </svg>
    ),
  },
];

const process = [
  {
    title: "Discover",
    desc: "We align on goals, constraints, and KPIs.",
    command: 'revamp discover --goals="aligned"',
  },
  {
    title: "Design",
    desc: "System design, data, and evaluation plan.",
    command: "revamp design --systems --evals",
  },
  {
    title: "Build",
    desc: "Iterate quickly with real users and data.",
    command: "revamp build --agents --tooling",
  },
  {
    title: "Ship",
    desc: "Deploy, monitor, and improve continuously.",
    command: "revamp ship --monitor --improve",
  },
];

const trusted = ["Acme Corp", "Orion", "Nimbus", "Helix", "Vector", "Atlas Labs"];

export default function Index() {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="cyber-grid" />
        <div className="beam left-1/4 top-10" />
        <div className="beam right-0 top-40" />
        <div className="container relative py-20 md:py-28 grid gap-12 lg:grid-cols-[1.05fr,0.95fr] items-center">
          <Reveal className="space-y-8">
            <TerminalHeading
              label="~/revamp"
              text="revamp.run --agentic-ai"
              subtext="Agentic AI and tech consulting."
            />
            <p className="text-lg text-muted-foreground max-w-2xl">
              From agentic AI to end-to-end integrations, our teams deliver high-impact outcomes with a futuristic,
              data-driven workflow.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground/80">
              <span className="px-4 py-2 rounded-full bg-card/80 border border-border/60">
                Agentic AI
              </span>
              <span className="px-4 py-2 rounded-full bg-card/80 border border-border/60">
                Data Analytics
              </span>
              <span className="px-4 py-2 rounded-full bg-card/80 border border-border/60">
                UIUC Collective
              </span>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/get-involved"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 font-mono text-sm uppercase tracking-[0.4em] text-primary-foreground transition hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(15,228,205,0.35)]"
              >
                Get Involved
              </Link>
              <Link
                to="/projects"
                className="inline-flex h-12 items-center justify-center rounded-md border border-border px-8 font-mono text-sm uppercase tracking-[0.4em] transition hover:border-primary hover:text-primary"
              >
                View Projects
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal className="rounded-2xl border border-border/60 bg-card/80 p-6 shadow-2xl backdrop-blur-xl glitch-card">
              <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.4em] text-secondary">
                <span>Signal</span>
                <span>live feed</span>
              </div>
              <p className="mt-4 text-base font-semibold text-foreground">
                Agentic AI and tech consulting.
              </p>
              <p className="text-sm text-muted-foreground">
                Autonomous voice + text agents, analytics, and systems that feel alive.
              </p>
              <div className="mt-6 space-y-3">
                {telemetry.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs text-muted-foreground/80 mb-1">
                      <span>{item.label}</span>
                      <span>{item.meta}</span>
                    </div>
                    <div className="progress-track">
                      <div className="progress-meter" style={{ width: `${item.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2">
              <Reveal className="rounded-xl border border-border/60 bg-card/70 p-5 shadow-lg transition hover:-translate-y-1 hover:border-primary/60">
                <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground/70">
                  Next Event
                </p>
                <p className="mt-3 text-lg font-semibold text-foreground">
                  Revamp x Startup: Agentic AI Workshop
                </p>
                <p className="text-sm text-muted-foreground">Oct 21, 2025</p>
              </Reveal>
              <Reveal className="rounded-xl border border-border/60 bg-card/70 p-5 shadow-lg transition hover:-translate-y-1 hover:border-secondary/60">
                <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground/70">
                  Active Build
                </p>
                <p className="mt-3 text-lg font-semibold text-foreground">
                  Atlas · real-estate voice & text agent
                </p>
                <Link to="/projects" className="mt-4 inline-flex text-sm text-secondary hover:text-secondary/80">
                  View Atlas log →
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted ticker */}
      <section className="py-8">
        <div className="container">
          <div className="ticker rounded-full border border-border/40 bg-card/60 px-6 py-4">
            <div className="ticker-track text-xs font-mono uppercase tracking-[0.4em] text-muted-foreground/70">
              {[...trusted, ...trusted].map((brand, idx) => (
                <span key={`${brand}-${idx}`} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-secondary" />
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 md:py-24">
        <div className="container space-y-12">
          <Reveal className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <TerminalHeading
              label="revamp/areas-of-expertise"
              text="Areas of Expertise"
              subtext="From agentic AI to end-to-end integrations, our teams deliver high-impact outcomes."
            />
            <Link
              to="/services"
              className="text-sm font-mono uppercase tracking-[0.4em] text-secondary hover:text-secondary/80"
            >
              Explore Services →
            </Link>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((card) => (
              <Reveal key={card.title}>
                <TiltCard className="glitch-card rounded-2xl border border-border/60 bg-card/80 p-6 shadow-xl transition hover:-translate-y-1">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{card.desc}</p>
                  <div className="mt-6 h-px bg-border/50" />
                  <p className="mt-3 text-xs font-mono uppercase tracking-[0.4em] text-muted-foreground/70">
                    status: ready
                  </p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Execution feed */}
      <section className="py-16 md:py-24 bg-card/40">
        <div className="container grid gap-10 lg:grid-cols-2">
          <Reveal>
            <TerminalHeading
              label="revamp/process"
              text="How We Work"
              subtext="Short cycles, close collaboration, and production-grade delivery."
            />
          </Reveal>
          <div className="space-y-4">
            {process.map((step) => (
              <Reveal key={step.title}>
                <div className="command-line p-5">
                  <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.35em] text-secondary">
                    <span>{step.title}</span>
                    <span>RUN</span>
                  </div>
                  <p className="mt-2 font-mono text-sm text-foreground">{step.command}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 md:py-24">
        <div className="container space-y-10">
          <Reveal className="text-center">
            <TerminalHeading
              label="revamp/events"
              text="Upcoming Events"
              subtext="Join our sessions and initiatives to build with the community."
              align="center"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {events.map((event) => (
              <Reveal key={event.title}>
                <div className="rounded-2xl border border-border/50 bg-card/80 p-6 shadow-lg transition hover:-translate-y-1 hover:border-secondary/60">
                  <p className="text-xs font-mono uppercase tracking-[0.35em] text-secondary">{event.date}</p>
                  <h3 className="mt-3 text-xl font-semibold">{event.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{event.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/20 via-transparent to-secondary/25" />
        <div className="container py-16 md:py-20">
          <Reveal className="mx-auto max-w-3xl text-center space-y-6">
            <TerminalHeading
              label="revamp/join"
              text="Ready to get involved?"
              subtext="Apply to join Revamp and collaborate on real AI and tech projects."
              align="center"
            />
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/get-involved"
                className="inline-flex h-12 items-center justify-center rounded-md bg-secondary px-8 font-mono text-sm uppercase tracking-[0.4em] text-secondary-foreground transition hover:bg-secondary/90"
              >
                Get Involved
              </Link>
              <Link
                to="/projects"
                className="inline-flex h-12 items-center justify-center rounded-md border border-border px-8 font-mono text-sm uppercase tracking-[0.4em] transition hover:border-primary hover:text-primary"
              >
                Browse Projects
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
