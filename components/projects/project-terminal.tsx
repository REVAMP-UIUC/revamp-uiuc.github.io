"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { useState, useEffect } from "react";

export function ProjectTerminal({ logs, isHovered }: { logs: string[], isHovered: boolean }) {
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
