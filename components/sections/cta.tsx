"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Sparkles } from "lucide-react";

export function CTASection() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <div className="inline-flex items-center space-x-2 border border-primary/30 rounded-full px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium">
                        <Sparkles className="h-4 w-4" />
                        <span>Ready to Innovate?</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight pb-2">
                        Let's Build the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Next Generation</span> of AI
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Whether you need a custom agentic solution or want to join our team of elite developers, we're ready to collaborate.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 shadow-[0_0_30px_rgba(var(--primary),0.3)] hover:shadow-[0_0_50px_rgba(var(--primary),0.5)] transition-shadow">
                            Start a Project
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-border hover:bg-secondary backdrop-blur-sm">
                            <Mail className="mr-2 h-5 w-5" /> Contact Us
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
