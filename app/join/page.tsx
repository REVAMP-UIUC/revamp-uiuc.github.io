import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Code, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function JoinPage() {
    return (
        <div className="container mx-auto px-4 py-24 min-h-screen">
            <div className="max-w-4xl mx-auto space-y-16">

                {/* Header */}
                <div className="text-center space-y-6">
                    <Badge className="bg-destructive/10 text-destructive border-destructive/20 border px-4 py-1">Fall 2026 Application Closed</Badge>
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
                        Build the <span className="text-primary">Impossible</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Join the most technical AI club at UIUC. We don't just talk about potential—we deploy production-grade agents for real clients.
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <p className="text-lg font-medium text-foreground">
                            Fill out the interest form for Spring 2026
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/80 text-lg px-8 py-6 h-auto" asChild>
                                <Link href="https://forms.google.com/your-interest-form-link">Interest Form</Link>
                            </Button>
                            <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-white/20">
                                View Roles
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Roles Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="bg-zinc-900/50 border-white/10 hover:border-cyan-500/50 transition-colors">
                        <CardHeader>
                            <Code className="h-8 w-8 text-cyan-400 mb-2" />
                            <CardTitle>AI Engineer</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground space-y-2">
                            <p>Build multi-agent systems using LangChain, AutoGen, and custom/open-source models.</p>
                            <ul className="space-y-1 pt-2 text-zinc-300">
                                <li className="flex items-center gap-2"><Check className="h-3 w-3 text-cyan-400" /> Python/TypeScript</li>
                                <li className="flex items-center gap-2"><Check className="h-3 w-3 text-cyan-400" /> RAG Pipelines</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-zinc-900/50 border-white/10 hover:border-purple-500/50 transition-colors">
                        <CardHeader>
                            <Users className="h-8 w-8 text-purple-400 mb-2" />
                            <CardTitle>Product Manager</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground space-y-2">
                            <p>Lead client engagements. Translate business needs into technical requirements.</p>
                            <ul className="space-y-1 pt-2 text-zinc-300">
                                <li className="flex items-center gap-2"><Check className="h-3 w-3 text-purple-400" /> Client Strategy</li>
                                <li className="flex items-center gap-2"><Check className="h-3 w-3 text-purple-400" /> Agile/Scrum</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-zinc-900/50 border-white/10 hover:border-pink-500/50 transition-colors">
                        <CardHeader>
                            <Zap className="h-8 w-8 text-pink-400 mb-2" />
                            <CardTitle>Brand Designer</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground space-y-2">
                            <p>Craft the visual identity of Revamp and the interfaces for our agentic tools.</p>
                            <ul className="space-y-1 pt-2 text-zinc-300">
                                <li className="flex items-center gap-2"><Check className="h-3 w-3 text-pink-400" /> Figma/Next.js</li>
                                <li className="flex items-center gap-2"><Check className="h-3 w-3 text-pink-400" /> UI/UX Systems</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Timeline (Text based) */}
                <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                    <h3 className="text-2xl font-bold mb-6">Recruitment Timeline</h3>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="w-24 font-mono text-cyan-400">Aug 26</div>
                            <div>Applications Open</div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-24 font-mono text-cyan-400">Sep 10</div>
                            <div>Info Session @ Siebel</div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-24 font-mono text-cyan-400">Sep 15</div>
                            <div>Applications Close</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
