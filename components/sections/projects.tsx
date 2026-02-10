"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
    {
        title: "Autonomous Research Agent",
        category: "Internal Tool",
        description: "A multi-agent system that autonomously browses the web, synthesizes papers, and generates comprehensive research reports.",
        tags: ["LangChain", "Python", "OpenAI"],
        gradient: "from-emerald-500 to-cyan-500",
        link: "#",
        github: "#"
    },
    {
        title: "Smart Campus Assistant",
        category: "Client Project",
        description: "AI-powered concierge for university students, integrating with campus APIs to provide real-time schedule and event info.",
        tags: ["Next.js", "RAG", "Vector DB"],
        gradient: "from-violet-500 to-purple-500",
        link: "#",
        github: "#"
    },
    {
        title: "Code Review Bot",
        category: "Open Source",
        description: "An automated code review agent that integrates into GitHub workflows to provide deep logic analysis and security checks.",
        tags: ["TypeScript", "GitHub Actions", "LLMs"],
        gradient: "from-orange-500 to-amber-500",
        link: "#",
        github: "#"
    }
];

export function ProjectsSection() {
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
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Button variant="outline" className="border-primary/20 hover:bg-primary/10 hover:text-primary">
                            View All Projects <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors duration-300 flex flex-col shadow-sm"
                        >
                            {/* Visual Placeholder */}
                            <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500 relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/20" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex gap-4">
                                        <Button size="icon" variant="secondary" className="rounded-full bg-background/80 text-foreground hover:bg-background backdrop-blur-md border border-border">
                                            <Github className="h-5 w-5" />
                                        </Button>
                                        <Button size="icon" variant="secondary" className="rounded-full bg-background/80 text-foreground hover:bg-background backdrop-blur-md border border-border">
                                            <ExternalLink className="h-5 w-5" />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2 block">{project.category}</span>
                                        <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                                    </div>
                                </div>

                                <p className="text-muted-foreground mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs px-2 py-1 rounded-full bg-secondary border border-border text-muted-foreground group-hover:border-primary/20 group-hover:text-primary/80 transition-colors">
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
