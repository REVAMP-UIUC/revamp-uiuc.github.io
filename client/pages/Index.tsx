import { DemoResponse } from "@shared/api";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-[hsl(19,100%,50%)/12]" />
        <div className="container py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Revamp — Agentic AI & Tech Consulting
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We partner with companies to design and ship modern AI systems and technology solutions. Minimal, reliable, production-focused.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/get-involved" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-primary-foreground transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                Get Involved
              </Link>
              <Link to="/services" className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-6 transition-colors hover:bg-accent hover:text-accent-foreground">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Areas of Expertise</h2>
              <p className="mt-2 text-muted-foreground max-w-prose">From agentic AI to end-to-end integrations, our teams deliver high-impact outcomes.</p>
            </div>
            <Link to="/services" className="hidden md:inline text-sm hover:text-primary">Explore services →</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Agentic AI Systems",
                desc: "Design and deploy autonomous AI agents to automate complex workflows.",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-[hsl(19,100%,50%)]" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v18M3 12h18"/></svg>
                ),
              },
              {
                title: "LLM Products & Integrations",
                desc: "Ship reliable products with modern LLMs, vector search, and tool-use.",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-[hsl(19,100%,50%)]" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M7 20h10"/></svg>
                ),
              },
              {
                title: "Data & Automation",
                desc: "Pipelines, analytics, and integrations that unlock business leverage.",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-[hsl(19,100%,50%)]" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M7 13l3 3 7-7"/></svg>
                ),
              },
            ].map((card) => (
              <div key={card.title} className="group rounded-xl border bg-card p-6 shadow-sm transition hover:shadow-md">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">{card.icon}</div>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Upcoming Events</h2>
            <p className="mt-2 text-muted-foreground">Join our sessions and initiatives to build with the community.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { date: "Oct 21, 2025", title: "Revamp x Startup: Agentic AI Workshop", desc: "Hands-on session building autonomous agents." },
              { date: "Nov 5, 2025", title: "LLM Product Clinic", desc: "Bring your ideas; we help architect MVPs." },
              { date: "Nov 19, 2025", title: "Company Partner Info Night", desc: "Learn how to collaborate with Revamp." },
            ].map((e) => (
              <div key={e.title} className="rounded-xl border bg-card p-5 shadow-sm">
                <div className="text-xs font-semibold text-[hsl(210,13%,40%)]">{e.date}</div>
                <h3 className="mt-2 text-lg font-semibold">{e.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies preview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Selected Work</h2>
              <p className="mt-2 text-muted-foreground max-w-prose">Highlights from projects where we shipped measurable results.</p>
            </div>
            <Link to="/projects" className="hidden md:inline text-sm hover:text-primary">See all →</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { title: "Support Agent that solves 40% of tickets", desc: "Multi-tool agent with memory, search, and integrations.", tag: "Agentic AI" },
              { title: "Data pipeline cutting reporting time by 80%", desc: "Automations across SaaS tools with robust monitoring.", tag: "Automation" },
            ].map((c) => (
              <Link to="/projects" key={c.title} className="group rounded-xl border bg-card p-6 shadow-sm transition hover:shadow-md">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">{c.tag}</span>
                <h3 className="mt-3 text-lg font-semibold group-hover:text-primary">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
