
"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

type TeamMember = {
    id: string;
    name: string;
    role: string;
    image: string;
    tags: string[];
    description: string;
    github?: string;
    email?: string;
    hoverName: string; // The name that appears on hover (glitch effect)
    hoverRole: string; // The role that appears on hover
    category: "all" | "pm" | "scrum" | "swe"; // For simpler filtering
};

const TEAM_DATA: TeamMember[] = [
    {
        id: "raaghav",
        name: "Dr. Elena Vance",
        role: "Chief Scientist",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAq7X-N9HbrJTAUd-w98uZRrmFD_VliTx_Hx9UBVyRSL1LTL94gk7cO6SdSnAW99QkOCL--txSQ0-YO4JK7CsHd4MUhmdyQ_sXJ_nvv3363fjQ8yhd9mDuRSQ4om15vsaVUY9YwnBQjjmTWVdwAxDqOCN1lgGQ7yLlECnX6cU_bHRBYIJA2Uq0dKMINQDwmZ1OY2PQvFHPhZ1mBe6Joaqf43Kq7mezwTQt8CQz_aAehKGM33RBkGg4He2G9tUjtjc2uX1pwipQ-9ls",
        tags: ["Project Manager", "LLM Ops"],
        category: "pm",
        description: "> Leading architectural decisions for autonomous deployments.\n> System efficiency: 99.8%",
        github: "https://github.com/Raaghav-Pillai",
        email: "mailto:raaghavpillai@gmail.com",
        hoverName: "Raaghav Pillai",
        hoverRole: "Project Manager"
    },
    {
        id: "diti",
        name: "Diti Chhaproo",
        role: "Lead Engineer",
        image: "/team/member-2.jpg",
        tags: ["Neural Nets", "Vision"],
        category: "scrum",
        description: "> Specialist in computer vision pipelines.\n> Optimizing inference latency.",
        email: "#",
        github: "#",
        hoverName: "Diti Chhaproo",
        hoverRole: "Lead Engineer"
    },
    {
        id: "swarnika",
        name: "Swarnika",
        role: "Robotics Integration",
        image: "/team/member-1.jpg",
        tags: ["Robotics", "Control"],
        category: "swe",
        description: "> Integrating heavy machinery with light-weight agents.\n> Safety protocols initialized.",
        email: "#",
        github: "#",
        hoverName: "Swarnika",
        hoverRole: "Robotics Integration"
    },
    {
        id: "david",
        name: "David Kim",
        role: "Data Systems Lead",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCU9q1eEoCo0uuKA1kFPixkHCJaE-jEmUpe2LjkrbI_x90xOomZJ9d9fmz1ba2_EhXiIJPxanwgdVUQAR391_AtY6WxlMuXrQ7vN_dmgMs2aqWWvisY6HMbNQFpsaf8Jbrn9hPphYLiOdk83zr1NLk8GG8lx5_jh3TN1A5uVpcbNHgX7pLQlM_cgfW8_Lkvr3YARk87nFIk_3NbtiFoLibW_J73iX9RacvaBwA4g2lcP51wIR0SpfQupe5JTtMmqPDIEpaizGZmtlQ",
        tags: ["RAG", "Vector DB"],
        category: "swe",
        description: "> Building enterprise knowledge bases.\n> Context window optimization expert.",
        email: "#",
        github: "#",
        hoverName: "David Kim",
        hoverRole: "Data Systems Lead"
    },
    {
        id: "priya",
        name: "Priya Patel",
        role: "Senior AI Researcher",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD19O9ZydTdZXeIPNP9wzgS_3svxSG6BLB8dplQCmIyMkJ7fY076dZn7UqIEDF_-u-5nMhARzBpJ8m2Yn0kd4ipQZBGKvaMBruKagC5WwDrvhf8vO8yoiCNs-Yvz1SZz8ZMo6QNqF-fsGsVfO2QXrtcJpblOmz90MVVmZ73NOdrtud2DdZYPxUT5hqyO9V9NSSXVcYyhRjHVBrkF9FEQSWCwYkjbLk-qtNKCw7IRI1hI7UVQ9AhBtR8RIudToNVz00yUPyYPFl5oyk",
        tags: ["Agent Swarms", "Multi-Agent"],
        category: "swe",
        description: "> Orchestrating 100+ agent environments.\n> Emergent behavior analysis.",
        email: "#",
        github: "#",
        hoverName: "Priya Patel",
        hoverRole: "Senior AI Researcher"
    },
    {
        id: "james",
        name: "James Wilson",
        role: "Platform Architect",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGWYVm4xu_vx9oC2rxHFOfWj0ClU2zOzrkfQF_lQmi0aZif_eSUZTxjOUZhciD5i-hdWOnB6BClxKHGYVm_c-XIyAJvAHl4iL2ku_TxzQLKelWaepYxGY3kLplWHHtSTjAlMmoF0fYJTTnV5Vxp0lyI_J2jD-lAbOQF_ndKgm1moM1K0BCP588OnTpZHLmytB9fxxY59400-w0igMm6vbRr_RWsRt491bfzqB5NOCAnwB31ETATZgiPDMkMWtdUOt3m2eFIE_1CYE",
        tags: ["Backend", "Infrastructure"],
        category: "swe",
        description: "> Scaling Kubernetes clusters for training.\n> 99.99% uptime maintenance.",
        email: "#",
        github: "#",
        hoverName: "James Wilson",
        hoverRole: "Platform Architect"
    },
    {
        id: "robert",
        name: "Dr. Robert Alquist",
        role: "AI Ethics Lead",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCheSkM_AlvEHb9tGlxGvHEJkxaSCrnI0C-B-NT_HMSdwGV7bAfJU0sMzXVZgEhDy2t87HJtKbanV1yvptAGB0XrCJ7Vr_3s9WiwQxFYyuGAoYgL7aLICSHHtaCgUkFnsb2PWzr1ph64vvBJkEgD-bSVQvmFaS4-7TxI6kD6_w6b94sFXson5kLk_oDQ96r1fz5Ftra5M_0vkqHoDqA4jZ1bVbhan5jMNRwpIUxGy33MAOlRINwWbaQNFrNoAKz_VkZ36lWur2wxpk",
        tags: ["Ethics", "Policy"],
        category: "pm", // Assigned to PM for lack of better fit in "SWE/Scrum" unless "Policy" is separate
        description: "> Ensuring alignment in autonomous systems.\n> Bias mitigation strategies.",
        email: "#",
        github: "#",
        hoverName: "Dr. Robert Alquist",
        hoverRole: "AI Ethics Lead"
    },
    {
        id: "nina",
        name: "Nina Gomez",
        role: "Product Designer",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkY4PINy-_uG8uOqGnPv7HTCyfZvxjooQStThUPxMKzTdVjR1aFlHMnFoVPMOwSGAxEbG5fSMDSxzvkdPnLkh6oqqU_vEN3kvnnyQQDRsXQQlhVQWEpVkYXZW5myEs43b60bwWmhZQO7EWTaQbSC71pqItCxOe8ndB_B6bjfL8hNFxvF7OiRCiKzxsRpMzJZ1pl0x2MpA8FUbxqz6sSOdoZPFuzpEIF6kjnjV77Sh0oB8rC1lcAhzuLHzqKf_NZapDytQ_TMrHVsk",
        tags: ["Frontend", "UX/UI"],
        category: "swe", // Designer is technically distinct but closest to SWE in this simplistic filter
        description: "> Human-Agent interaction design.\n> Visualizing complex agent thoughts.",
        email: "#",
        github: "#",
        hoverName: "Nina Gomez",
        hoverRole: "Product Designer"
    }
];

// Helper to make "Project Manager" text in Raaghav's card actually match "Project Managers" filter
// We will assign a 'category' property to each member to map to the buttons.

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
                                                    <span className="material-symbols-outlined text-lg">
                                                        code
                                                    </span>
                                                </a>
                                                <a
                                                    className="text-white hover:text-cyan-300 transition-colors"
                                                    href={member.email}
                                                >
                                                    <span className="material-symbols-outlined text-lg">
                                                        alternate_email
                                                    </span>
                                                </a>
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
                                    50+
                                </p>
                            </div>
                            <div className="flex min-w-[240px] flex-1 flex-col gap-2 rounded-xl p-8 border border-[#313168] bg-[#16162c] hover:border-primary/50 transition-colors group">
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
                            </div>
                            <div className="flex min-w-[240px] flex-1 flex-col gap-2 rounded-xl p-8 border border-[#313168] bg-[#16162c] hover:border-primary/50 transition-colors group">
                                <div className="mb-2 size-10 rounded bg-primary/20 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">smart_toy</span>
                                </div>
                                <p className="text-slate-400 text-sm font-medium leading-normal">
                                    Custom Agents Deployed
                                </p>
                                <p className="text-white tracking-light text-4xl font-bold leading-tight group-hover:text-primary transition-colors">
                                    100+
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
