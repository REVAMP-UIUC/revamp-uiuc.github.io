import Reveal from "@/components/site/Reveal";
import TiltCard from "@/components/site/TiltCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";

export default function About() {
  const disciplines = [
    {
      title: "Computer Science and Statistics",
      desc: "Systems, full‑stack product, agent frameworks, tooling, and reliable shipping from prototype to production.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
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
      title: "Systems Engineering",
      desc: "Experiment design, evaluation, and metrics for agentic systems. We quantify impact with robust analyses.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 3v18h18" />
          <path d="M7 15v3M11 11v7M15 7v11M19 9v9" />
        </svg>
      ),
    },
    {
      title: "Information Sciences and Data Science",
      desc: "Retrieval, embeddings, and knowledge systems. Clean data pipelines that power RAG and search.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="8" cy="8" r="3" />
          <circle cx="16" cy="16" r="3" />
          <path d="M10 10l4 4" />
        </svg>
      ),
    },
    {
      title: "Finance and Data Science",
      desc: "ROI modeling, dashboards, and decision support. We align AI investments with measurable business value.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 17l4-4 3 3 7-7" />
          <path d="M3 3v18h18" />
        </svg>
      ),
    },
    {
      title: "Physics",
      desc: "Modeling, optimization, and first‑principles thinking for tough problems, from controls to simulation.",
      icon: (
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
      title: "Physics",
      desc: "Architecture, reliability, and automation: CI/CD, observability, and scalable foundations in cloud.",
      icon: (
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
  ];

  const members = [
    {
      name: "Raaghav Pillai",
      role: "Computer Science and Statistics",
      initials: "CS",
      bio: "Builds agent frameworks, full‑stack, and tooling. Focus on product velocity.",
      linkedin: "#",
    },
    {
      name: "Diti Chhaproo",
      role: "Systems Engineering",
      initials: "SE",
      bio: "Designs experiments and metrics; evaluates agent systems rigorously.",
      linkedin: "#",
    },
    {
      name: "Swarnika Bhardwaj",
      role: "Information Sciences and Data Science",
      initials: "IS",
      bio: "Leads retrieval and RAG pipelines; owns data quality and search.",
      linkedin: "#",
    },
    {
      name: "Nakul Jindal",
      role: "Finance and Data Science",
      initials: "FD",
      bio: "Models ROI and risk; creates dashboards and decision support.",
      linkedin: "#",
    },
    {
      name: "Abhinav Gupta",
      role: "Physics",
      initials: "PH",
      bio: "Applies modeling and optimization to complex technical problems.",
      linkedin: "#",
    },
    {
      name: "Hunar Pasricha",
      role: "Physics",
      initials: "PH",
      bio: "Architects reliable cloud, CI/CD, and observability foundations.",
      linkedin: "#",
    },
  ];

  return (
    <div className="">
      {/* Intro */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-grid opacity-30 mask-fade" />
        <div className="container py-16 md:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              About Revamp
            </h1>
            <p className="mt-4 text-muted-foreground">
              We’re a six‑person UIUC club collaborating with companies on
              agentic AI and modern tech. Our members span Computer Science,
              Statistics, Information Sciences (Data Science), Finance (Data
              Science), Physics, and Systems Engineering.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Team members */}
      <section className="py-8 md:py-12">
        <div className="container">
          <Reveal className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Team Members
            </h2>
            <p className="mt-2 text-muted-foreground">
              Profiles for six members. Replace with your details anytime.
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((p) => (
              <Reveal key={p.role}>
                <TiltCard className="group rounded-xl border bg-card p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex flex-col items-center text-center gap-4">
                    <Avatar className="h-24 w-24 md:h-28 md:w-28 ring-2 ring-primary/30">
                      <AvatarImage src="" alt={p.name} />
                      <AvatarFallback className="text-lg">
                        {p.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-primary">
                        {p.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{p.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{p.bio}</p>
                  <div className="mt-5">
                    <a
                      href={p.linkedin}
                      className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm hover:bg-accent"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </a>
                  </div>
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
            <h3 className="text-xl md:text-2xl font-semibold">
              Want to work with us?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Reach out or apply to join. We collaborate with teams to deliver
              agentic AI and cloud solutions.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
