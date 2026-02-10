"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { NetworkBackground } from "@/components/ui/network-background";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { LiveLog } from "@/components/ui/live-log";

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Animations based on scroll progress (0 to 1)
    const scale = useTransform(scrollYProgress, [0, 1], [1, 10]); // Big zoom into the net
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]); // Text fades out halfway
    const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]); // Text grows slightly before disappearing
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.6, 0]); // Dark overlay fades to let the "net" shine

    return (
        <section ref={containerRef} className="relative h-[300vh]"> {/* Tall container for scroll space */}
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">

                {/* Background Layer: Network Mesh */}
                <motion.div style={{ scale }} className="absolute inset-0 z-0 origin-center">
                    <div className="relative w-full h-full">
                        <NetworkBackground className="w-full h-full object-cover" />
                        {/* Vignette & Color Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/80 pointer-events-none" />
                        <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-background/60 pointer-events-none" />
                    </div>
                </motion.div>

                {/* Content Layer */}
                <motion.div
                    style={{ opacity, scale: textScale }}
                    className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="space-y-8 max-w-4xl"
                    >
                        {/* Apple-style typography: Heavy, clean, concise */}
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-foreground">
                            Revamp <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">UIUC</span>
                        </h1>

                        <p className="text-xl md:text-3xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                            Connecting the dots between today's innovations and tomorrow's giants.
                        </p>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    >
                        <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">Scroll to Dive In</span>
                        <ChevronDown className="h-6 w-6 text-zinc-500 animate-bounce" />
                    </motion.div>

                    {/* Live Activity Log - Desktop Only */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="absolute bottom-12 left-12 z-20 hidden xl:block"
                    >
                        <LiveLog />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
