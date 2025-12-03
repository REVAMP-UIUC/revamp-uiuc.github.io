import Reveal from "@/components/site/Reveal";
import TerminalHeading from "@/components/site/TerminalHeading";
import TiltCard from "@/components/site/TiltCard";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const atlasMetrics = [
  { label: "Intent Detection", value: 96, note: "voice + text" },
  { label: "Lead Conversion", value: 38, note: "lift vs. baseline" },
  { label: "Latency", value: 1.8, note: "s avg turn" },
];

const projectCards = [
  {
    name: "Atlas · Real-estate agent",
    desc: "Voice + text agent that qualifies leads, schedules tours, and syncs data back to CRMs.",
    stack: ["ReALM", "Whisper", "RAG"],
  },
  {
    name: "Nimbus Insights",
    desc: "Telemetry dashboards and automation for agent deployments and eval runs.",
    stack: ["Supabase", "dbt", "React"],
  },
  {
    name: "Helix Integrations",
    desc: "Custom LLM tooling for partner teams: workflow orchestration, tool-use, observability.",
    stack: ["LangChain", "Temporal", "AWS"],
  },
];

export default function Projects() {
  return (
    <div className="space-y-0">
      <section className="relative overflow-hidden">
        <div className="cyber-grid" />
        <div className="container relative py-16 md:py-24 space-y-12">
          <Reveal>
            <TerminalHeading
              label="revamp/projects"
              text="Projects"
              subtext="Dynamic, interactive builds for partners who need agentic AI, analytics, and automation that feel futuristic."
            />
          </Reveal>
          <Reveal className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="glitch-card rounded-2xl border border-border/60 bg-card/80 p-8 shadow-2xl backdrop-blur-xl">
              <p className="text-xs font-mono uppercase tracking-[0.35em] text-secondary">Atlas · Feature Drop</p>
              <h2 className="mt-4 text-3xl font-semibold">Real-estate voice + text agent</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Atlas qualifies buyers and renters through natural conversations, surfaces comps, and books tours via
                voice or text. It leans on RAG, evals, and guardrails so teams can trust every response.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {atlasMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-border/60 bg-background/40 p-4">
                    <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground/70">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-primary">
                      {metric.value}
                      {metric.label === "Latency" ? "s" : "%"}
                    </p>
                    <p className="text-xs text-muted-foreground">{metric.note}</p>
                    <div className="progress-track mt-3">
                      <div
                        className="progress-meter"
                        style={{ width: `${Math.min(metric.value, 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Voice Ops", "Calendar", "CRM Sync", "LLM Tooling"].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-border/60 px-4 py-1 text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground/80"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <Dialog>
              <div className="rounded-2xl border border-border/60 bg-card/70 p-6 shadow-2xl transition hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-mono uppercase tracking-[0.35em] text-secondary">Atlas Walkthrough</p>
                  <DialogTrigger asChild>
                    <Button className="bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.35em]">
                      Open Modal
                    </Button>
                  </DialogTrigger>
                </div>
                <p className="mt-4 text-lg font-semibold text-foreground">
                  Watch the Atlas voice + text agent flow in action, including the real-time analytics overlay.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Smooth transitions, glitch-inspired overlays, and a full-stack telemetry view highlight how the
                  experience feels like a terminal coming alive.
                </p>
                <div className="mt-6 rounded-xl border border-border/50 bg-background/40 p-4 font-mono text-sm">
                  <p className="text-secondary uppercase tracking-[0.35em]">Demo contains:</p>
                  <ul className="mt-3 space-y-2 text-foreground/90">
                    <li>• Voice agent greeting and lead qualification.</li>
                    <li>• Text follow-up with property data retrieval.</li>
                    <li>• CRM sync and analytics dashboard transition.</li>
                  </ul>
                </div>
              </div>
              <DialogContent className="max-w-4xl border border-border/60 bg-background/95">
                <DialogHeader>
                  <DialogTitle className="font-mono text-sm uppercase tracking-[0.4em] text-secondary">
                    Atlas · Real-estate voice & text agent
                  </DialogTitle>
                  <DialogDescription className="text-sm text-muted-foreground">
                    Video walkthrough + interactive demo overlay showing the agent pipeline, eval hooks, and telemetry.
                  </DialogDescription>
                </DialogHeader>
                <div className="aspect-video w-full overflow-hidden rounded-xl border border-border/40">
                  <iframe
                    title="Atlas walkthrough"
                    src="https://www.youtube.com/embed/XHOmBV4js_E"
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-border/60 bg-card/70 p-4">
                    <p className="text-xs font-mono uppercase tracking-[0.35em] text-secondary">Voice Flow</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Wake word, intent detection, retrieval, and booking with a glitch-style waveform overlay.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-card/70 p-4">
                    <p className="text-xs font-mono uppercase tracking-[0.35em] text-secondary">Analytics Overlay</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Shows eval scores, guardrail triggers, and CRM sync confirmations with smooth transitions.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container space-y-10">
          <Reveal className="text-center">
            <TerminalHeading
              label="revamp/projects/list"
              text="More Builds"
              subtext="Each build uses interactive cards, glitch effects, and data viz so stakeholders can feel the system responding."
              align="center"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {projectCards.map((project) => (
              <Reveal key={project.name}>
                <TiltCard className="glitch-card rounded-2xl border border-border/50 bg-card/70 p-6 shadow-lg transition hover:-translate-y-1">
                  <p className="text-xs font-mono uppercase tracking-[0.35em] text-secondary">Project</p>
                  <h3 className="mt-3 text-xl font-semibold">{project.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{project.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2 text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground/80">
                    {project.stack.map((tag) => (
                      <span key={tag} className="rounded-full border border-border/60 px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

