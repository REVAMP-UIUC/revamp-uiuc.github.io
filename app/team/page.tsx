
"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Github, Linkedin, AtSign } from "lucide-react";

type TeamMember = {
    id: string;
    name: string;
    role: string;
    image: string;
    tags: string[];
    description: string;
    github?: string;
    linkedin?: string;
    email?: string;
    hoverName: string; // The name that appears on hover (glitch effect)
    hoverRole: string; // The role that appears on hover
    category: "all" | "pm" | "scrum" | "swe"; // For simpler filtering
};

const TEAM_DATA: TeamMember[] = [
    {
        id: "raaghav",
        name: "Raaghav Pillai",
        role: "Project Manager",
        image: "/team/raaghav.jpg",
        tags: ["Project Manager"],
        category: "pm",
        description: "> Works across YOLO, LangChain, and vector databases. \n> Passionate about SWE, product thinking, and photography",
        github: "https://github.com/Raaghav-Pillai",
        linkedin: "https://www.linkedin.com/in/raaghavpillai/",
        email: "mailto:raaghavpillai@gmail.com",
        hoverName: "Raaghav Pillai",
        hoverRole: "Project Manager"
    },
    {
        id: "diti",
        name: "Diti Chhaproo",
        role: "Project Manager",
        image: "/team/diti.png",
        tags: ["Project Manager"],
        category: "pm",
        description: "> Brings experience in product lifecycle and systems engineering.\n> Interests in quantum computing, design optimization, and AI product strategy.",
        email: "mailto:ditichhaproo@gmail.com",
        github: "github.com/diti-chhaproo",
        linkedin: "linkedin.com/in/ditichhaproo",
        hoverName: "Diti Chhaproo",
        hoverRole: "Project Manager"
    },
    {
        id: "swarnika",
        name: "Swarnika Bhardwaj",
        role: "Project Manager",
        image: "/team/swarnika.jpg",
        tags: ["Project Manager"],
        category: "pm",
        description: "> Skilled in LLMs, Django, and ML-driven acoustic modeling.\n> Passionate about Agentic AI, product engineering, PM, economics, and music-tech.",
        email: "#",
        github: "#",
        linkedin: "#",
        hoverName: "Swarnika Bhardwaj",
        hoverRole: "Project Manager"
    },
    {
        id: "nakul",
        name: "Nakul Jindal",
        role: "Scrum Lead",
        image: "/team/nakul.jpeg",
        tags: ["Scrum Lead"],
        category: "scrum",
        description: "> Focused on DS/AI applications including XGBoost models and FastAPI–OpenAI systems.\n> Interested in quant finance, economics, and sports analytics.",
        email: "mailto:nakuljindal27@gmail.com",
        github: "#",
        linkedin: "http://www.linkedin.com/in/nakul-jindal-817279332",
        hoverName: "Nakul Jindal",
        hoverRole: "Scrum Lead"
    },
    {
        id: "hunar",
        name: "Hunar Pasricha",
        role: "Scrum Lead",
        image: "/team/hunar.jpeg",
        tags: ["Scrum Lead"],
        category: "scrum",
        description: "> Experienced with YOLO, OpenCV, TensorFlow/PyTorch, and PostgreSQL.\n> Interested in deep learning, model experimentation, and soccer.",
        email: "#",
        github: "#",
        linkedin: "#",
        hoverName: "Hunar Pasricha",
        hoverRole: "Scrum Lead"
    },
    {
        id: "janine",
        name: "Janine Leong",
        role: "Scrum Lead",
        image: "/team/janine.jpeg",
        tags: ["Software Engineer"],
        category: "swe",
        description: "",
        email: "#",
        github: "#",
        linkedin: "#",
        hoverName: "Janine Leong",
        hoverRole: "Software Engineer"
    },
    {
        id: "shubham",
        name: "Shubh Jain",
        role: "Scrum Lead",
        image: "/team/shubh.jpeg",
        tags: ["Software Engineer"],
        category: "swe",
        description: "",
        email: "#",
        github: "#",
        linkedin: "#",
        hoverName: "Shubh Jain",
        hoverRole: "Software Engineer"
    },
    {
        id: "sonika",
        name: "Sonika",
        role: "Software Engineer",
        image: "/team/sonika.jpeg",
        tags: ["Software Engineer"],
        category: "swe",
        description: "",
        email: "#",
        github: "#",
        linkedin: "#",
        hoverName: "Sonika",
        hoverRole: "Software Engineer"
    }
];

export default function TeamPage() {
    const [filter, setFilter] = useState<"all" | "pm" | "scrum" | "swe">("all");

    const filteredMembers = TEAM_DATA.filter((member) => {
        if (filter === "all") return true;
        return member.category === filter;
    });

    return (
        <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden transition-colors duration-300">
            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center w-full">
                {/* Hero Section */}
                <section className="w-full relative px-6 py-20 lg:py-28 overflow-hidden bg-background">
                    {/* Abstract tech background */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none"></div>
                    <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            UIUC Research Collective
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[1.1] font-display">
                            Architects of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                                Autonomous Agents
                            </span>
                        </h1>
                        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed font-display">
                            Top-tier researchers and engineers specializing in Large Language
                            Model operations, robotic integration, and custom agentic
                            workflows.
                        </p>
                    </div>
                </section>

                {/* Filter Bar */}
                <div className="w-full max-w-[1200px] px-6 pb-10 sticky top-20 z-40">
                    <div className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-xl bg-background/50 border border-border backdrop-blur-md shadow-lg">
                        <button
                            onClick={() => setFilter("all")}
                            className={cn(
                                "px-5 py-2 rounded-lg text-sm font-medium transition-all font-display",
                                filter === "all" ? "bg-primary text-white font-bold shadow-md" : "hover:bg-secondary text-muted-foreground"
                            )}
                        >
                            All Members
                        </button>
                        <button
                            onClick={() => setFilter("pm")}
                            className={cn(
                                "px-5 py-2 rounded-lg text-sm font-medium transition-all font-display",
                                filter === "pm" ? "bg-primary text-white font-bold shadow-md" : "hover:bg-secondary text-muted-foreground"
                            )}
                        >
                            Project Managers
                        </button>
                        <button
                            onClick={() => setFilter("scrum")}
                            className={cn(
                                "px-5 py-2 rounded-lg text-sm font-medium transition-all font-display",
                                filter === "scrum" ? "bg-primary text-white font-bold shadow-md" : "hover:bg-secondary text-muted-foreground"
                            )}
                        >
                            Scrum Leads
                        </button>
                        <button
                            onClick={() => setFilter("swe")}
                            className={cn(
                                "px-5 py-2 rounded-lg text-sm font-medium transition-all font-display",
                                filter === "swe" ? "bg-primary text-white font-bold shadow-md" : "hover:bg-secondary text-muted-foreground"
                            )}
                        >
                            Software Engineers
                        </button>
                    </div>
                </div>

                {/* Team Grid */}
                <section className="w-full max-w-[1400px] px-6 pb-24">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                        {filteredMembers.map((member) => (
                            <div key={member.id} className="group glitch-hover relative flex flex-col overflow-hidden rounded-xl bg-card border border-border shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 h-[420px]">
                                <div className="relative h-full w-full overflow-hidden bg-gray-900">
                                    <img
                                        alt={member.name}
                                        className="glitch-img h-full w-full object-cover object-top transition-transform duration-500 ease-out opacity-90 group-hover:opacity-60"
                                        src={member.image}
                                    />
                                    {/* Overlay Content */}
                                    <div className="overlay-data absolute inset-0 flex flex-col justify-end p-6">
                                        <div className="space-y-3">
                                            <div className="flex gap-2 flex-wrap">
                                                {member.tags.map(tag => (
                                                    <span key={tag} className="px-2 py-1 bg-black/40 border border-white/20 backdrop-blur-sm rounded text-[10px] uppercase tracking-wider text-cyan-300 font-mono">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="text-xs text-gray-200 font-mono border-l-2 border-cyan-400 pl-2 leading-relaxed whitespace-pre-wrap">
                                                {member.description}
                                            </div>
                                            <div className="flex gap-3 pt-2">
                                                <a
                                                    className="text-white hover:text-cyan-300 transition-colors"
                                                    href={member.github}
                                                >
                                                    <Github className="w-5 h-5" />
                                                </a>
                                                <a
                                                    className="text-white hover:text-cyan-300 transition-colors"
                                                    href={member.email}
                                                >
                                                    <AtSign className="w-5 h-5" />
                                                </a>
                                                {member.linkedin && (
                                                    <a
                                                        className="text-white hover:text-cyan-300 transition-colors"
                                                        href={member.linkedin}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Linkedin className="w-5 h-5" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Reveal / Default Legend? No, this was the static footer. 
                        Wait, in original code, there was a footer visible by default 
                        AND a hover hide on it?
                        Original:
                           <div className="hover-hide ...">
                                <h3 ...>{Name}</h3>
                                <p ...>{Role}</p>
                           </div>
                        This means it's visible by default, and HIDDEN on hover (opacity-0).
                        The "glitch-img" and "overlay-data" appear on hover.
                    */}
                                <div className="hover-hide absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent z-20 pointer-events-none group-hover:opacity-0 transition-opacity duration-200">
                                    <h3 className="text-white text-xl font-bold font-display">
                                        {member.hoverName}
                                    </h3>
                                    <p className="text-primary font-medium text-sm font-display">
                                        {member.hoverRole}
                                    </p>
                                </div>
                                <div className="scanline"></div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Stats / Info Section */}
                <section className="w-full bg-[#101023] border-y border-[#222249] py-16 px-6">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="flex flex-wrap gap-6 justify-center">
                            <div className="flex min-w-[240px] flex-1 flex-col gap-2 rounded-xl p-8 border border-[#313168] bg-[#16162c] hover:border-primary/50 transition-colors group">
                                <div className="mb-2 size-10 rounded bg-primary/20 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">
                                        deployed_code
                                    </span>
                                </div>
                                <p className="text-slate-400 text-sm font-medium leading-normal">
                                    Projects Delivered
                                </p>
                                <p className="text-white tracking-light text-4xl font-bold leading-tight group-hover:text-primary transition-colors">
                                    5+
                                </p>
                            </div>
                            {/* <div className="flex min-w-[240px] flex-1 flex-col gap-2 rounded-xl p-8 border border-[#313168] bg-[#16162c] hover:border-primary/50 transition-colors group">
                                <div className="mb-2 size-10 rounded bg-primary/20 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">
                                        library_books
                                    </span>
                                </div>
                                <p className="text-slate-400 text-sm font-medium leading-normal">
                                    Research Papers
                                </p>
                                <p className="text-white tracking-light text-4xl font-bold leading-tight group-hover:text-primary transition-colors">
                                    24
                                </p>
                            </div> */}
                            <div className="flex min-w-[240px] flex-1 flex-col gap-2 rounded-xl p-8 border border-[#313168] bg-[#16162c] hover:border-primary/50 transition-colors group">
                                <div className="mb-2 size-10 rounded bg-primary/20 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">smart_toy</span>
                                </div>
                                <p className="text-slate-400 text-sm font-medium leading-normal">
                                    Custom Agents Deployed
                                </p>
                                <p className="text-white tracking-light text-4xl font-bold leading-tight group-hover:text-primary transition-colors">
                                    10+
                                </p>
                            </div>
                            <div className="flex min-w-[240px] flex-1 flex-col gap-2 rounded-xl p-8 border border-[#313168] bg-[#16162c] hover:border-primary/50 transition-colors group">
                                <div className="mb-2 size-10 rounded bg-primary/20 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">groups</span>
                                </div>
                                <p className="text-slate-400 text-sm font-medium leading-normal">
                                    Team Members
                                </p>
                                <p className="text-white tracking-light text-4xl font-bold leading-tight group-hover:text-primary transition-colors">
                                    15
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
