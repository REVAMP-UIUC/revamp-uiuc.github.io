"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Cpu, Search, Code, Database, Globe } from "lucide-react";

interface LogEntry {
    id: string;
    agent: string;
    action: string;
    details: string;
    cost: number;
    timestamp: string;
    icon: React.ElementType;
    color: string;
}

const AGENTS = [
    { name: "Researcher", color: "text-cyan-400", icon: Search },
    { name: "Coder", color: "text-purple-400", icon: Code },
    { name: "Architect", color: "text-amber-400", icon: Cpu },
    { name: "Deployer", color: "text-emerald-400", icon: Globe },
    { name: "Analyst", color: "text-pink-400", icon: Database },
];

const ACTIONS = [
    { action: "Querying", details: ["arXiv for RAG context", "GitHub API for repos", "StackOverflow for solutions"] },
    { action: "Generating", details: ["React Component", "SQL Schema", "Unit Tests", "Documentation"] },
    { action: "Optimizing", details: ["Bundle size", "Database queries", "Render cycles"] },
    { action: "Reasoning", details: ["Chain of Thought...", "Self-Correction...", "Multi-step plan..."] },
    { action: "Executing", details: ["Test Suite", "Deployment Script", "Vector Search"] },
];

export function LiveLog() {
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [totalCost, setTotalCost] = useState(0);

    // Initial logs
    useEffect(() => {
        const initialLogs = Array.from({ length: 3 }).map(() => generateLog());
        setLogs(initialLogs);
        setTotalCost(initialLogs.reduce((acc, log) => acc + log.cost, 0));
    }, []);

    // Scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [logs]);

    const generateLog = (): LogEntry => {
        const agent = AGENTS[Math.floor(Math.random() * AGENTS.length)];
        const act = ACTIONS[Math.floor(Math.random() * ACTIONS.length)];
        const detail = act.details[Math.floor(Math.random() * act.details.length)];
        const cost = Math.random() * 0.005; // Random micros-cost

        return {
            id: Math.random().toString(36).substr(2, 9),
            agent: agent.name,
            action: act.action,
            details: detail,
            cost: cost,
            timestamp: new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
            icon: agent.icon,
            color: agent.color
        };
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const newLog = generateLog();
            setLogs(prev => {
                const updated = [...prev, newLog];
                if (updated.length > 8) updated.shift(); // Keep logs manageable
                return updated;
            });
            setTotalCost(prev => prev + newLog.cost);
        }, 2000 + Math.random() * 1000); // Random interval 2-3s

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-sm rounded-xl border border-border bg-background/80 backdrop-blur-md shadow-2xl overflow-hidden font-mono text-xs">
            {/* Header */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-border bg-muted/50">
                <div className="flex items-center gap-2 text-muted-foreground">
                    <Terminal className="h-3 w-3" />
                    <span className="font-semibold">Agent Activity</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Session Cost:</span>
                    <span className="text-emerald-500 font-bold">${totalCost.toFixed(5)}</span>
                </div>
            </div>

            {/* Logs Area */}
            <div
                ref={scrollRef}
                className="h-48 overflow-y-auto p-3 space-y-3 custom-scrollbar"
            >
                <AnimatePresence initial={false}>
                    {logs.map((log) => (
                        <motion.div
                            key={log.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            className="flex items-start gap-2"
                        >
                            <div className="mt-0.5 opacity-70">
                                <log.icon className={`h-3 w-3 ${log.color}`} />
                            </div>
                            <div className="flex-1 space-y-0.5">
                                <div className="flex items-center justify-between">
                                    <span className={`font-bold ${log.color}`}>{log.agent}</span>
                                    <span className="text-[10px] text-muted-foreground tabular-nums">{log.timestamp}</span>
                                </div>
                                <div className="text-foreground/90 leading-tight">
                                    <span className="opacity-70">{log.action}: </span>
                                    {log.details}
                                </div>
                                <div className="text-[10px] text-muted-foreground/60 tabular-nums">
                                    Cost: ${log.cost.toFixed(6)}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Status Bar */}
            <div className="px-3 py-1 bg-muted/30 border-t border-border flex items-center gap-2 text-[10px] text-muted-foreground">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>System Active</span>
                <span className="ml-auto opacity-50">v2.4.0-stable</span>
            </div>
        </div>
    );
}
