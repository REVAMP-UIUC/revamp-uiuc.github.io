"use client";

import { motion } from "framer-motion";
import { Brain, Rocket, Code2, LineChart } from "lucide-react";

const features = [
    {
        icon: Brain,
        title: "Strategic Consulting",
        description: "We help you identify high-impact opportunities for AI integration, tailoring strategies to your unique business goals.",
        gradient: "from-cyan-500/20 to-blue-500/20",
        border: "group-hover:border-cyan-500/50",
        iconColor: "text-cyan-400"
    },
    {
        icon: Code2,
        title: "Agentic Development",
        description: "Our engineers build custom, autonomous agents capable of complex reasoning, task execution, and workflow automation.",
        gradient: "from-purple-500/20 to-pink-500/20",
        border: "group-hover:border-purple-500/50",
        iconColor: "text-purple-400"
    },
    {
        icon: LineChart,
        title: "Scalable Deployment",
        description: "From pilot to production, we ensure your AI systems are robust, secure, and ready to scale with your user base.",
        gradient: "from-amber-500/20 to-orange-500/20",
        border: "group-hover:border-amber-500/50",
        iconColor: "text-amber-400"
    }
];

export function FeaturesSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 mb-4 pb-2 leading-tight"
                    >
                        Redefining What's Possible
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-muted-foreground"
                    >
                        We bridge the gap between cutting-edge research and real-world application, delivering AI that actually works for you.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                            className="group relative h-full"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl`} />

                            <div className={`relative h-full bg-card/50 backdrop-blur-sm border border-border ${feature.border} rounded-2xl p-8 transition-colors duration-300 hover:bg-card/80 flex flex-col items-start shadow-sm`}>
                                <div className={`p-3 rounded-lg bg-primary/10 border border-primary/20 mb-6 ${feature.iconColor}`}>
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
