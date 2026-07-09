"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Github, Linkedin, AtSign } from "lucide-react";
import { PageHeader, HeaderLine } from "@/components/anim/page-header";
import { Reveal } from "@/components/anim/reveal";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
  github?: string;
  linkedin?: string;
  email?: string;
  category: "pm" | "scrum" | "swe";
};

const TEAM_DATA: TeamMember[] = [
  {
    id: "raaghav",
    name: "Raaghav Pillai",
    role: "Engagement Lead",
    image: "/team/raaghav.jpg",
    category: "pm",
    description:
      "Works across YOLO, LangChain, and vector databases. Passionate about SWE, product thinking, and photography.",
    github: "https://github.com/Raaghav-Pillai",
    linkedin: "https://www.linkedin.com/in/raaghavpillai/",
    email: "mailto:raaghavpillai@gmail.com",
  },
  {
    id: "diti",
    name: "Diti Chhaproo",
    role: "Engagement Lead",
    image: "/team/diti.png",
    category: "pm",
    description:
      "Brings experience in product lifecycle and systems engineering. Interests in quantum computing, design optimization, and AI product strategy.",
    email: "mailto:ditichhaproo@gmail.com",
    github: "https://github.com/diti-chhaproo",
    linkedin: "https://linkedin.com/in/ditichhaproo",
  },
  {
    id: "swarnika",
    name: "Swarnika Bhardwaj",
    role: "Engagement Lead",
    image: "/team/swarnika.jpg",
    category: "pm",
    description:
      "Skilled in LLMs, Django, and ML-driven acoustic modeling. Passionate about agentic AI, product engineering, economics, and music-tech.",
  },
  {
    id: "nakul",
    name: "Nakul Jindal",
    role: "Delivery Lead",
    image: "/team/nakul.jpeg",
    category: "scrum",
    description:
      "Focused on DS/AI applications including XGBoost models and FastAPI–OpenAI systems. Interested in quant finance, economics, and sports analytics.",
    email: "mailto:nakuljindal27@gmail.com",
    linkedin: "http://www.linkedin.com/in/nakul-jindal-817279332",
  },
  {
    id: "hunar",
    name: "Hunar Pasricha",
    role: "Delivery Lead",
    image: "/team/hunar.jpeg",
    category: "scrum",
    description:
      "Experienced with YOLO, OpenCV, TensorFlow/PyTorch, and PostgreSQL. Interested in deep learning, model experimentation, and soccer.",
  },
  {
    id: "shubh",
    name: "Shubh Jain",
    role: "Agent Engineer",
    image: "/team/shubh.png",
    category: "swe",
    description: "Builds the agent pipelines and the interfaces that make them legible.",
  },
  {
    id: "sonika",
    name: "Sonika Potnis",
    role: "Agent Engineer",
    image: "/team/sonika.png",
    category: "swe",
    description: "Builds the agent pipelines and the interfaces that make them legible.",
  },
  {
    id: "eunice",
    name: "Eunice Mok",
    role: "Agent Engineer",
    image: "/team/eunice.png",
    category: "swe",
    description: "Builds the agent pipelines and the interfaces that make them legible.",
  },
  {
    id: "nalin",
    name: "Nalin Gupta",
    role: "Agent Engineer",
    image: "/team/nalin.png",
    category: "swe",
    description: "Builds the agent pipelines and the interfaces that make them legible.",
  },
];

const FILTERS = [
  { id: "all", label: "Everyone" },
  { id: "pm", label: "Engagement" },
  { id: "scrum", label: "Delivery" },
  { id: "swe", label: "Engineering" },
] as const;

export default function TeamPage() {
  const [filter, setFilter] = useState<"all" | "pm" | "scrum" | "swe">("all");

  const members = TEAM_DATA.filter((m) => filter === "all" || m.category === filter);

  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader
        eyebrow="The team"
        sub="A small senior team of engagement leads, delivery leads, and agent engineers, fluent in both boardrooms and codebases."
      >
        <HeaderLine>The humans</HeaderLine>
        <HeaderLine>
          behind the <span className="text-lime">agents.</span>
        </HeaderLine>
      </PageHeader>

      {/* Filter chips */}
      <div className="mx-auto w-full max-w-[1500px] px-5 pb-12 md:px-10">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id as typeof filter)}
              className={cn(
                "rounded-full border px-5 py-2 font-mono text-[11px] uppercase tracking-wider transition-colors duration-300",
                filter === f.id
                  ? "border-lime bg-lime text-lime-foreground"
                  : "border-white/15 text-muted-foreground hover:border-lime/60 hover:text-lime"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="mx-auto w-full max-w-[1500px] px-5 pb-28 md:px-10 md:pb-40">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map((member, i) => (
            <Reveal key={`${filter}-${member.id}`} delay={(i % 4) * 0.06}>
              <article className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-card transition-colors duration-500 hover:border-lime/40">
                <div className="relative aspect-[4/5] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top grayscale transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  {/* Hover bio */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="border-l-2 border-lime pl-3 font-mono text-[11px] leading-relaxed text-foreground/90">
                      {member.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-end justify-between p-5">
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {member.name}
                    </h3>
                    <p className="eyebrow mt-1 text-lime">{member.role}</p>
                  </div>
                  <div className="flex gap-3">
                    {member.github && (
                      <a
                        href={member.github}
                        aria-label={`${member.name} on GitHub`}
                        className="text-muted-foreground transition-colors hover:text-lime"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        className="text-muted-foreground transition-colors hover:text-lime"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={member.email}
                        aria-label={`Email ${member.name}`}
                        className="text-muted-foreground transition-colors hover:text-lime"
                      >
                        <AtSign className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
