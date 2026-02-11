"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Activity, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
    title: string;
    category: string;
    description: string; // This will become "what we did"
    shortDescription?: string; // Optional short summary for the front
    tags: string[];
    link: string;
    github?: string; // Kept in interface but optional
    logs?: string[];
}

interface ProjectCardProps {
    project: Project;
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    function handleFlip() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    }

    return (
        <div
            className="group h-[260px] w-full perspective-1000 cursor-pointer"
            onClick={handleFlip}
        >
            <motion.div
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                onAnimationComplete={() => setIsAnimating(false)}
                className="relative h-full w-full preserve-3d"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* FRONT FACE */}
                <div className="absolute inset-0 h-full w-full backface-hidden rounded-2xl bg-card border border-border shadow-sm hover:border-primary/50 transition-colors duration-300 overflow-hidden flex flex-col p-6">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                {index % 2 === 0 ? <Activity className="w-3 h-3 text-blue-400" /> : <Cpu className="w-3 h-3 text-emerald-400" />}
                                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{project.category}</span>
                            </div>
                            <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                        </div>
                    </div>

                    <div className="flex-grow flex items-center justify-center text-center">
                        <p className="text-foreground/80 text-base line-clamp-4 font-medium leading-relaxed">
                            {/* Use a truncated version if shortDescription isn't provided, or just the first part of description */}
                            {project.shortDescription || project.description.split('.')[0] + "."}
                        </p>
                    </div>

                    <div className="mt-auto pt-2 flex justify-center text-xs text-blue-400 font-mono animate-pulse">
                        [ Click to View Details ]
                    </div>
                </div>

                {/* BACK FACE */}
                <div
                    className="absolute inset-0 h-full w-full backface-hidden rounded-2xl bg-[#0d1117] border border-primary/20 shadow-xl overflow-hidden flex flex-col p-6"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    {/* Scanline Effect for back */}
                    <div className="absolute inset-0 bg-repeat bg-[url('https://transparenttextures.com/patterns/dark-scanlines.png')] opacity-10 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col h-full">
                        <h3 className="text-lg font-bold text-primary mb-2 font-mono border-b border-primary/20 pb-2">
                            &gt; {project.title}
                        </h3>

                        <div className="flex-grow overflow-y-auto scrollbar-hide mb-4">
                            <p className="text-sm text-gray-300 leading-relaxed font-mono">
                                <span className="text-emerald-400"># Execution Log:</span> <br />
                                {project.description}
                            </p>
                        </div>

                        <div className="mt-auto">
                            <span className="text-xs text-blue-400 font-mono block mb-2"># Stack:</span>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="text-[10px] px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-300 font-mono">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
