"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface NetworkBackgroundProps {
    className?: string;
}

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    pulse: number;     // 0 to 1 for opacity/size
    pulseDir: number;  // 1 or -1
    isAgent: boolean;  // Some particles are "Agents" (brighter/different color)
}

interface Packet {
    x: number;
    y: number;
    targetIndex: number; // Index of the target particle
    speed: number;
    progress: number;    // 0 to 1
    sourceIndex: number;
}

export function NetworkBackground({ className }: NetworkBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", resize);
        resize();

        // Particle configuration
        const particleCount = Math.min(Math.floor(width * height / 15000), 100);
        const particles: Particle[] = [];
        const packets: Packet[] = [];

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                pulse: Math.random(),
                pulseDir: 0.02,
                isAgent: Math.random() > 0.8 // 20% are "Agents"
            });
        }

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            // 1. Update & Draw Particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                // Pulse Logic
                p.pulse += p.pulseDir;
                if (p.pulse > 1 || p.pulse < 0.2) p.pulseDir *= -1;

                // Bounce
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                // Draw Particle
                ctx.beginPath();
                const radius = p.isAgent ? 3 + p.pulse * 1.5 : 2;
                ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);

                if (p.isAgent) {
                    // Agents are Cyan/Purple and glow
                    ctx.fillStyle = `rgba(168, 85, 247, ${0.6 + p.pulse * 0.4})`; // Purple
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = "rgba(168, 85, 247, 0.8)";
                } else {
                    // Theme-aware particle color
                    // If theme is undefined (server/hydration), default to "white" (dark mode) as safe bet
                    const isLight = theme === "light";
                    const color = isLight ? "0, 0, 0" : "255, 255, 255";
                    ctx.fillStyle = `rgba(${color}, 0.3)`;
                    ctx.shadowBlur = 0;
                }
                ctx.fill();
                ctx.shadowBlur = 0; // Reset
            }

            // 2. Draw Connections & Spawn Packets
            ctx.lineWidth = 1;

            // We use a nested loop but optimization: only check neighbors
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const p1 = particles[i];
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distSq = dx * dx + dy * dy;

                    // Connection threshold (150px -> 22500)
                    if (distSq < 22500) {
                        const dist = Math.sqrt(distSq);
                        const alpha = 0.2 * (1 - dist / 150);

                        ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`; // Cyan lines
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();

                        // Randomly spawn packet
                        if (Math.random() < 0.002) {
                            packets.push({
                                x: p1.x,
                                y: p1.y,
                                sourceIndex: i,
                                targetIndex: j,
                                progress: 0,
                                speed: 0.02 + Math.random() * 0.03
                            });
                        }
                    }
                }
            }

            // 3. Update & Draw Packets
            for (let i = packets.length - 1; i >= 0; i--) {
                const pkt = packets[i];
                const source = particles[pkt.sourceIndex];
                const target = particles[pkt.targetIndex];

                // If particles moved too far apart (connection broken), kill packet
                const dx = source.x - target.x;
                const dy = source.y - target.y;
                if (dx * dx + dy * dy > 25000) {
                    packets.splice(i, 1);
                    continue;
                }

                // Move packet
                pkt.progress += pkt.speed;
                if (pkt.progress >= 1) {
                    packets.splice(i, 1); // Reached destination
                    continue;
                }

                // Interpolate position
                const currX = source.x + (target.x - source.x) * pkt.progress;
                const currY = source.y + (target.y - source.y) * pkt.progress;

                // Draw Packet
                ctx.beginPath();
                ctx.arc(currX, currY, 2.5, 0, Math.PI * 2);
                ctx.fillStyle = "#22d3ee"; // Cyan
                ctx.shadowColor = "#22d3ee";
                ctx.shadowBlur = 8;
                ctx.fill();
                ctx.shadowBlur = 0;
            }

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationId);
        };
    }, [theme]); // Active reaction to theme

    return <canvas ref={canvasRef} className={`block ${className}`} />;
}
