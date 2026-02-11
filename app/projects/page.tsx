"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Cpu, Activity, Globe, Database } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ProjectTerminal } from "@/components/projects/project-terminal";
import { cn } from "@/lib/utils";

const ALL_PROJECTS = [
    {
        title: "Atlas Voice Feedback Engine",
        category: "Conversational AI",
        description: "An automated post-showing voice system that conducts natural dialogues with buyers to collect structured feedback and log insights via Twilio and Deepgram.",
        tags: ["Twilio", "Deepgram", "ElevenLabs", "GPT-4"],
        link: "#",
        github: "#",
        logs: [
            "> Initializing Twilio Voice Client...",
            "> Incoming Call: +1 (555) 019-2834",
            "> Deepgram Stream Connected [WSS://...]",
            "> User: 'The backyard was smaller than I expected.'",
            "> Analysis: Negative Sentiment (0.87)",
            "> Logging feedback to CRM...",
            "> Task Complete."
        ]
    },
    {
        title: "Atlas Compliance Router",
        category: "Enterprise RAG",
        description: "An intelligent query routing system using LangChain to classify property inquiries into specialized pathways while enforcing strict Fair Housing regulatory compliance.",
        tags: ["LangChain", "FastAPI", "Pinecone", "Vector DB"],
        link: "#",
        github: "#",
        logs: [
            "> Intercepting Query: 'Can you show me homes in a family-oriented neighborhood?'",
            "> Compliance Check: Fair Housing Act (FHA)",
            "> Flagged: Steering Risk Detected [Code: 404]",
            "> Routing to: Restricted Response Agent",
            "> Generating Neutral Response...",
            "> Response Sent: 'I can show you homes in any area...'"
        ]
    }
    // Add more projects here as needed
];

export default function ProjectsPage() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden transition-colors duration-300">
            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center w-full">
                {/* Hero Section */}
                <section className="w-full relative px-6 py-20 lg:py-28 overflow-hidden bg-background">
                    <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none"></div>
                    <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            Innovation Lab
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[1.1] font-display">
                            Our <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                                Engineering Portfolio
                            </span>
                        </h1>
                        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed font-display">
                            Exploring the frontiers of autonomous agents, conversational AI, and distributed systems.
                        </p>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="w-full max-w-[1200px] px-6 pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {ALL_PROJECTS.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors duration-300 flex flex-col shadow-sm"
                            >
                                {/* Interactive Terminal Component */}
                                <ProjectTerminal logs={project.logs} isHovered={hoveredIndex === index} />

                                <div className="p-6 flex flex-col flex-grow border-t border-border">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                {index % 2 === 0 ? <Activity className="w-3 h-3 text-blue-400" /> : <Cpu className="w-3 h-3 text-emerald-400" />}
                                                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{project.category}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground mb-6 flex-grow text-sm leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-xs px-2 py-1 rounded bg-secondary/50 border border-border text-muted-foreground group-hover:border-primary/20 group-hover:text-primary/80 transition-colors font-mono">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
