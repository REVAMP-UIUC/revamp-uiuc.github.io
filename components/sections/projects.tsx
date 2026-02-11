"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/projects/project-card";

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
                    {/* View All Projects Button */}
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Changed to 3 cols as the flip card is more compact (square-ish) */}
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ProjectCard project={project} index={index} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
