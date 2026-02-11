"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Terminal, Cpu, Activity } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const projects = [
    {
        title: "Atlas Voice Feedback Engine",
        category: "Conversational AI",
        description: "An automated post-showing voice system that conducts natural dialogues with buyers to collect structured feedback and log insights via Twilio and Deepgram.",
        tags: ["Twilio", "Deepgram", "ElevenLabs", "GPT-4"],
        gradient: "from-blue-600 to-indigo-600",
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
        gradient: "from-emerald-600 to-teal-600",
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
];

function ProjectTerminal({ logs, isHovered }: { logs: string[], isHovered: boolean }) {
    const [lines, setLines] = useState<string[]>([]);

    useEffect(() => {
        if (isHovered) {
            setLines([]);
            let currentLine = 0;
            const interval = setInterval(() => {
                if (currentLine < logs.length) {
                    setLines(prev => [...prev, logs[currentLine]]);
                    currentLine++;
                } else {
                    clearInterval(interval);
                }
            }, 500); // Add a line every 500ms
            return () => clearInterval(interval);
        } else {
            setLines([]); // Reset on mouse leave
        }
    }, [isHovered, logs]);

    return (
        <div className="h-48 w-full bg-[#0d1117] relative overflow-hidden font-mono text-xs p-4 flex flex-col">
            {/* Terminal Header */}
            <div className="flex items-center gap-1.5 mb-3 opacity-50">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                <div className="ml-auto text-[10px] text-muted-foreground">bash — 80x24</div>
            </div>

            {/* Terminal Content */}
            <div className="flex-grow overflow-y-auto space-y-1 text-green-400/90 scrollbar-hide">
                {!isHovered && (
                    <div className="h-full flex items-center justify-center text-muted-foreground/40 gap-2">
                        <Terminal className="w-4 h-4 animate-pulse" />
                        <span>Hover to Execute</span>
                    </div>
                )}
                {isHovered && lines.map((line, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="truncate"
                    >
                        {line}
                    </motion.div>
                ))}
                {isHovered && lines.length === logs.length && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="w-2 h-4 bg-green-500 inline-block align-middle ml-1"
                    />
                )}
            </div>

            {/* Scanline Effect */}
            <div className="absolute inset-0 bg-repeat bg-[url('https://transparenttextures.com/patterns/dark-scanlines.png')] opacity-10 pointer-events-none"></div>
        </div>
    );
}


export function ProjectsSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-black/20 relative">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 mb-4 pb-2 leading-tight"
                        >
                            Featured Projects
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-muted-foreground"
                        >
                            A glimpse into the intelligent systems we're building.
                        </motion.p>
                    </div>
                    {/* View All Projects Button removed or kept based on preference, keeping for now */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link href="/projects">
                            <Button variant="outline" className="border-primary/20 hover:bg-primary/10 hover:text-primary">
                                View Work <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Changed to 2 cols for wider terminal view */}
                    {projects.map((project, index) => (
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
                                            {index === 0 ? <Activity className="w-3 h-3 text-blue-400" /> : <Cpu className="w-3 h-3 text-emerald-400" />}
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
            </div>
        </section>
    );
}
