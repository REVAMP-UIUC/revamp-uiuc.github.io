"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/contact/contact-modal";

export default function ContactPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("General");
    const searchParams = useSearchParams();

    useEffect(() => {
        const intent = searchParams.get("intent");
        if (intent === "project") {
            setSelectedCategory("Project Start");
            setIsModalOpen(true);
        }
    }, [searchParams]);

    const openModal = (category: string) => {
        setSelectedCategory(category);
        setIsModalOpen(true);
    };

    return (
        <div className="relative min-h-screen w-full flex flex-col bg-background text-foreground overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

            <main className="flex-grow flex flex-col items-center justify-center container mx-auto px-6 py-24 relative z-10">
                <div className="max-w-3xl w-full flex flex-col items-center text-center gap-8">

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest fade-in-up">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        Partnerships & Inquiries
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter fade-in-up delay-100 font-display">
                        Collaborate with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                            Revamp UIUC
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl fade-in-up delay-200 font-display">
                        We partner with forward-thinking companies to build autonomous agent solutions.
                        Whether you need a custom LLM pipeline, multi-agent system, or RAG implementation,
                        our team is ready to deploy.
                    </p>

                    <div className="w-full h-px bg-border max-w-lg fade-in-up delay-200"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mt-8 fade-in-up delay-300">
                        {/* Contact Card 1: Email */}
                        <div className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex flex-col items-center gap-4 text-center">
                            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-2xl">mail</span>
                            </div>
                            <h3 className="text-xl font-bold font-display">General Inquiries</h3>
                            <p className="text-sm text-muted-foreground">
                                For general questions, student recruitment, or potential collaborations.
                            </p>
                            <Button
                                onClick={() => openModal("General Inquiry")}
                                className="mt-2 bg-primary hover:bg-primary/90 cursor-pointer"
                            >
                                Open Contact Form
                            </Button>
                        </div>

                        {/* Contact Card 2: Partnerships */}
                        <div className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex flex-col items-center gap-4 text-center">
                            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-2xl">handshake</span>
                            </div>
                            <h3 className="text-xl font-bold font-display">Corporate Partnerships</h3>
                            <p className="text-sm text-muted-foreground">
                                Discuss project proposals, sponsorship opportunities, or technical consulting.
                            </p>
                            <Button
                                onClick={() => openModal("Corporate Partnership")}
                                className="mt-2 bg-primary hover:bg-primary/90 cursor-pointer"
                            >
                                Initiate Partnership
                            </Button>
                        </div>
                    </div>

                    <div className="mt-12 p-6 bg-secondary/30 border border-border rounded-lg max-w-2xl w-full text-left fade-in-up delay-300">
                        <h4 className="text-sm font-bold font-mono text-primary mb-2 flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">terminal</span>
                            PROJECT_INTAKE_PROTOCOL
                        </h4>
                        <p className="text-xs text-muted-foreground font-mono leading-relaxed">
                            When reaching out for a project, please include:
                            <br />1. Project Scope & Objectives
                            <br />2. Expected Timeline
                            <br />3. Technical Requirements (if known)
                            <br />This allows our project managers to assess feasibility and assign the appropriate agentic workflow team.
                        </p>
                    </div>

                    <ContactModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        title={
                            selectedCategory === "General Inquiry"
                                ? "Contact Us"
                                : selectedCategory === "Project Start"
                                    ? "Start a Project"
                                    : "Partner with Us"
                        }
                        category={selectedCategory}
                    />

                </div>
            </main>
        </div>
    );
}
