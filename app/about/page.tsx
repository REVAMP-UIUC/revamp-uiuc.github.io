import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import { ArrowRight, Brain, Code2, Globe, Rocket } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-24 min-h-screen">
            <div className="max-w-4xl mx-auto space-y-16">

                {/* Header */}
                <div className="space-y-6 text-center">
                    <Badge variant="outline" className="px-4 py-1 border-primary/40 text-primary">Our Mission</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Bridging Academia & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Industry</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Revamp UIUC is a student-run consulting organization dedicated to designing, building, and deploying Agentic AI systems for real-world clients.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-zinc-900/50 border-white/10 backdrop-blur-sm">
                        <CardContent className="p-8 space-y-4">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                                <Brain className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold">Advanced Research</h3>
                            <p className="text-muted-foreground">
                                We leverage the latest breakthroughs in LLMs and Autonomous Agents, applying academic research to solve concrete business problems.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-zinc-900/50 border-white/10 backdrop-blur-sm">
                        <CardContent className="p-8 space-y-4">
                            <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                                <Rocket className="h-6 w-6 text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold">Client Impact</h3>
                            <p className="text-muted-foreground">
                                From startups to enterprises, we deliver deployable code. Our agents automate workflows, analyze data, and enhance user experiences.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Story Section */}
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">Why We Exist</h2>
                    <div className="prose prose-invert max-w-none text-lg text-muted-foreground space-y-6">
                        <p>
                            Artificial Intelligence is moving fast. Traditional software development is being revolutionized by
                            <span className="text-white font-medium"> Agentic Workflows</span>.
                            At the University of Illinois Urbana-Champaign, we realized there was a gap between the theoretical AI taught in classrooms and the applied AI needed in the industry.
                        </p>
                        <p>
                            Revamp was founded to close that gap. We select the top engineering talent at UIUC and form specialized teams to tackle complex challenges using tools like LangChain, AutoGen, and custom-built multi-agent architectures.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col items-center justify-center p-12 bg-zinc-900 rounded-3xl border border-white/5 space-y-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold">Ready to work with the best?</h2>
                    <p className="text-muted-foreground max-w-xl">
                        Whether you're a company looking for AI solutions or a student ready to build the future.
                    </p>
                    <div className="flex gap-4">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                            Contact Us
                        </Button>
                        <Link href="/team">
                            <Button variant="outline" size="lg">Meet the Team</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
