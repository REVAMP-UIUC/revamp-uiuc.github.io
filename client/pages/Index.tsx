import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";
import TiltCard from "@/components/site/TiltCard";

export default function Index() {
  return (
    <div className="">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-[hsl(19,100%,50%)/12]" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-40 mask-fade" />
        <div className="container py-20 md:py-28">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-[hsl(19,100%,50%)] to-primary bg-clip-text text-transparent animate-gradient-x">
              REVAMP
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Agentic AI and tech consulting.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/get-involved"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Get Involved
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trusted by */}
      <section className="py-8">
        <div className="container">
          <Reveal className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 opacity-80">
            {["Acme Corp", "Orion", "Nimbus", "Helix", "Vector"].map((n) => (
              <div
                key={n}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <div className="h-6 w-6 rounded bg-primary/15" />
                <span>{n}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Reveal className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Areas of Expertise
              </h2>
              <p className="mt-2 text-muted-foreground max-w-prose">
                From agentic AI to end-to-end integrations, our teams deliver
                high-impact outcomes.
              </p>
            </div>
            <Link
              to="/services"
              className="hidden md:inline text-sm hover:text-primary"
            >
              Explore services →
            </Link>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Agentic AI Systems",
                desc: "Design and deploy autonomous AI agents to automate complex workflows.",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-[hsl(19,100%,50%)]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 3v18M3 12h18" />
                  </svg>
                ),
              },
              {
                title: "LLM Products & Integrations",
                desc: "Ship reliable products with modern LLMs, vector search, and tool-use.",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-[hsl(19,100%,50%)]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="4" width="18" height="14" rx="2" />
                    <path d="M7 20h10" />
                  </svg>
                ),
              },
              {
                title: "Data & Automation",
                desc: "Pipelines, analytics, and integrations that unlock business leverage.",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-[hsl(19,100%,50%)]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 3v18h18" />
                    <path d="M7 13l3 3 7-7" />
                  </svg>
                ),
              },
            ].map((card) => (
              <Reveal key={card.title}>
                <TiltCard className="group rounded-xl border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {card.desc}
                  </p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <Reveal className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Upcoming Events
            </h2>
            <p className="mt-2 text-muted-foreground">
              Join our sessions and initiatives to build with the community.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
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
            ].map((e) => (
              <Reveal key={e.title}>
                <div className="rounded-xl border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="text-xs font-semibold text-[hsl(210,13%,40%)]">
                    {e.date}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">{e.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <Reveal className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              How We Work
            </h2>
            <p className="mt-2 text-muted-foreground">
              Short cycles, close collaboration, and production-grade delivery.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                t: "Discover",
                d: "We align on goals, constraints, and KPIs.",
                i: (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 3" />
                  </svg>
                ),
              },
              {
                t: "Design",
                d: "System design, data, and evaluation plan.",
                i: (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 7h16M4 12h10M4 17h7" />
                  </svg>
                ),
              },
              {
                t: "Build",
                d: "Iterate quickly with real users and data.",
                i: (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 12h18" />
                    <path d="M12 3v18" />
                  </svg>
                ),
              },
              {
                t: "Ship",
                d: "Deploy, monitor, and improve continuously.",
                i: (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                ),
              },
            ].map((s) => (
              <Reveal key={s.t}>
                <TiltCard className="rounded-xl border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    {s.i}
                  </div>
                  <h3 className="font-semibold">{s.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/15 via-transparent to-[hsl(19,100%,50%)/15]" />
        <div className="container py-16 md:py-20">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Ready to get involved?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Apply to join Revamp and collaborate on real AI and tech projects.
            </p>
            <div className="mt-6">
              <Link
                to="/get-involved"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-md"
              >
                Get Involved
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
