import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
    return (
        <div className="relative min-h-screen w-full flex-col group/design-root transition-colors duration-300">

            {/* Hero Section */}
            <header className="relative min-h-screen flex flex-col justify-center pt-32 md:pt-40 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
                    {/* Using a placeholder for now, the source in the snippet might be restricted. If so, Next.js image opt might fail or need whitelist. Using standard img tag as per snippet. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        alt="Black and white modern university architecture representing UIUC campus"
                        className="w-full h-full object-cover grayscale opacity-60"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuArfZNGbNmWv3v-45rMRK3jBVBB7TMCeJX6mkWHEYudTtRdrCv5DzTOZr6MxcWTjSW9uYIr6qr16Wq-aJz0HoclJDA3zXgw2DQFhz20-Yd6N8dTFdpE8nHImdgmGbaa16_WZN9XpuZtdhx35eG418raSm2E4B6wHN6tpnSkPAf2vtUJI_-z7gX73dug9dz6mxkOqXFwSn09RzbKmO0vfMdpXipDNOW9pG4OuiqA5R21ofla48JtREsZCALRz4mADjw9B6i7crmGgus"
                    />
                </div>

                {/* Hero Content */}
                <div className="relative z-20 max-w-[1400px] mx-auto px-6 w-full flex flex-col gap-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 w-fit fade-in-up">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-xs font-mono text-primary uppercase tracking-widest">
                            Operational Status: Active
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter max-w-4xl fade-in-up delay-100 font-display">
                        Bridging Academia & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">
                            Industry
                        </span>
                    </h1>
                    <div className="flex flex-col md:flex-row gap-8 md:items-end max-w-5xl fade-in-up delay-200">
                        <p className="text-lg md:text-xl text-muted-foreground max-w-xl font-light leading-relaxed font-display">
                            Revamp UIUC is a student-run consulting organization dedicated to
                            designing, building, and deploying Agentic AI systems for
                            real-world clients.
                        </p>
                        <div className="h-px bg-border flex-grow mb-4 hidden md:block"></div>
                        <div className="flex flex-col font-mono text-xs text-muted-foreground gap-1 mb-1">
                            <span>LAT: 40.1020° N</span>
                            <span>LONG: 88.2272° W</span>
                            <span>SIEBEL CENTER FOR COMP SCI</span>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50 animate-bounce text-foreground">
                    <span className="text-[10px] font-mono uppercase tracking-widest">
                        Scroll to Explore
                    </span>
                    <span className="material-symbols-outlined">arrow_downward</span>
                </div>
            </header>

            {/* Data Stream Divider */}
            <div className="w-full bg-card border-y border-border py-3 overflow-hidden whitespace-nowrap">
                <div className="inline-block animate-marquee font-mono text-xs text-primary/60">
                    INITIALIZING AGENTS... // SELF-CORRECTION PROTOCOLS: ENABLED //
                    MULTI-AGENT ORCHESTRATION: ACTIVE // ENTERPRISE SECURITY: VERIFIED //
                    UIUC-AGENTIC-LAB // SYSTEM_READY // INITIALIZING AGENTS... //
                    SELF-CORRECTION PROTOCOLS: ENABLED // MULTI-AGENT ORCHESTRATION:
                    ACTIVE // ENTERPRISE SECURITY: VERIFIED // UIUC-AGENTIC-LAB //
                    SYSTEM_READY
                </div>
            </div>

            {/* Philosophy Section */}
            <section className="py-24 px-6 bg-background relative">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    {/* Left: Heading */}
                    <div className="lg:col-span-4 sticky top-24 h-fit">
                        <h2 className="text-sm font-mono font-bold text-primary mb-4 uppercase tracking-widest flex items-center gap-2">
                            <span className="w-4 h-px bg-primary"></span>
                            Why We Exist
                        </h2>
                        <h3 className="text-4xl font-bold leading-tight mb-6 font-display">
                            Closing the Gap
                        </h3>
                        <p className="text-muted-foreground mb-8 font-display">
                            The theoretical AI taught in classrooms vs the applied AI needed
                            in industry.
                        </p>
                        <Link
                            href="/join"
                            className="inline-flex items-center text-sm font-bold border-b border-primary pb-1 hover:text-primary transition-colors font-display"
                        >
                            Join the Mission
                            <span className="material-symbols-outlined text-sm ml-1">
                                arrow_outward
                            </span>
                        </Link>
                    </div>

                    {/* Right: Content Blocks */}
                    <div className="lg:col-span-8 flex flex-col gap-20">
                        {/* Block 1: Advanced Research */}
                        <div className="group relative pl-8 border-l border-border hover:border-primary transition-colors duration-500">
                            <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-border group-hover:bg-primary transition-colors duration-500"></div>
                            <span className="font-mono text-xs text-muted-foreground mb-2 block">
                                01 // ADVANCED RESEARCH
                            </span>
                            <p className="text-2xl md:text-3xl font-light leading-snug mb-4 font-display">
                                We leverage the latest breakthroughs in <span className="text-primary font-normal">LLMs and Autonomous Agents</span>, applying academic research to solve concrete business problems.
                            </p>
                            <div className="mt-6 p-4 bg-card rounded border border-border max-w-md">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="material-symbols-outlined text-primary">
                                        terminal
                                    </span>
                                    <span className="text-xs font-mono font-bold text-foreground">
                                        EXECUTION LOG
                                    </span>
                                </div>
                                <div className="font-mono text-xs text-muted-foreground space-y-1">
                                    <p>&gt; User: Analyze quarterly data</p>
                                    <p className="text-primary">
                                        &gt; Agent: Connecting to SQL database...
                                    </p>
                                    <p className="text-primary">&gt; Agent: Running query...</p>
                                    <p className="text-primary">
                                        &gt; Agent: Generating visualization...
                                    </p>
                                    <p className="text-green-500">
                                        &gt; Task Complete. Report sent.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Block 2: Client Impact */}
                        <div className="group relative pl-8 border-l border-border hover:border-primary transition-colors duration-500">
                            <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-border group-hover:bg-primary transition-colors duration-500"></div>
                            <span className="font-mono text-xs text-muted-foreground mb-2 block">
                                02 // CLIENT IMPACT
                            </span>
                            <p className="text-2xl md:text-3xl font-light leading-snug font-display">
                                From startups to enterprises, we deliver <span className="text-foreground font-normal border-b border-border">deployable code</span>. Our agents automate workflows, analyze data, and enhance user experiences.
                            </p>
                        </div>

                        {/* Block 3: Specialized Teams */}
                        <div className="group relative pl-8 border-l border-border hover:border-primary transition-colors duration-500">
                            <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-border group-hover:bg-primary transition-colors duration-500"></div>
                            <span className="font-mono text-xs text-muted-foreground mb-2 block">
                                03 // SPECIALIZED TEAMS
                            </span>
                            <p className="text-2xl md:text-3xl font-light leading-snug font-display">
                                We select the top engineering talent at UIUC and form teams to tackle complex challenges using tools like <span className="italic text-muted-foreground">LangChain</span>, <span className="italic text-muted-foreground">AutoGen</span>, and custom multi-agent architectures.
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            {/* Research Pillars */}
            <section className="py-24 px-6 bg-background">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-sm font-mono font-bold text-primary mb-4 uppercase tracking-widest flex items-center gap-2">
                                <span className="w-4 h-px bg-primary"></span>
                                Core Capabilities
                            </h2>
                            <h3 className="text-4xl font-bold font-display">
                                What We Build
                            </h3>
                        </div>
                        <p className="max-w-md text-muted-foreground text-sm font-mono">
              // Exploring the boundaries of autonomous systems through four
                            distinct vectors of inquiry.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Card 1 */}
                        <div className="group bg-card border border-border p-6 rounded-lg hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col h-full">
                            <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">network_check</span>
                            </div>
                            <h4 className="text-lg font-bold mb-2 font-display">
                                Agentic Workflows
                            </h4>
                            <p className="text-muted-foreground text-sm mb-6 flex-grow font-display">
                                Traditional software development is being revolutionized. We build
                                agents that act, verify, and complete tasks.
                            </p>
                            <div className="mt-auto border-t border-border pt-4">
                                <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">
                                    VECTOR_01 // ACTIVE
                                </span>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="group bg-card border border-border p-6 rounded-lg hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col h-full">
                            <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">hub</span>
                            </div>
                            <h4 className="text-lg font-bold mb-2 font-display">
                                Multi-Agent Orchestration
                            </h4>
                            <p className="text-muted-foreground text-sm mb-6 flex-grow font-display">
                                Choreographing swarms of specialized agents to solve complex,
                                multi-step problems collaboratively.
                            </p>
                            <div className="mt-auto border-t border-border pt-4">
                                <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">
                                    VECTOR_02 // ACTIVE
                                </span>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="group bg-card border border-border p-6 rounded-lg hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col h-full">
                            <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">security</span>
                            </div>
                            <h4 className="text-lg font-bold mb-2 font-display">
                                Security Integration
                            </h4>
                            <p className="text-muted-foreground text-sm mb-6 flex-grow font-display">
                                Ensuring agentic workflows respect enterprise permissions, data
                                privacy, and compliance standards.
                            </p>
                            <div className="mt-auto border-t border-border pt-4">
                                <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">
                                    VECTOR_03 // ACTIVE
                                </span>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="group bg-card border border-border p-6 rounded-lg hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col h-full">
                            <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">speed</span>
                            </div>
                            <h4 className="text-lg font-bold mb-2 font-display">
                                Real-World Deployment
                            </h4>
                            <p className="text-muted-foreground text-sm mb-6 flex-grow font-display">
                                Moving beyond demos to production-grade applications that
                                deliver measurable business impact.
                            </p>
                            <div className="mt-auto border-t border-border pt-4">
                                <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">
                                    VECTOR_04 // ACTIVE
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lab Stats / Technical Divider */}
            <section className="border-y border-border bg-card py-12">
                <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-around gap-8 text-center">
                    <div className="flex flex-col gap-1">
                        <span className="text-3xl font-bold text-foreground">5+</span>
                        <span className="text-xs font-mono text-muted-foreground">
                            PROJECTS COMPLETED
                        </span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-3xl font-bold text-foreground">1</span>
                        <span className="text-xs font-mono text-muted-foreground">
                            INDUSTRY PARTNERS
                        </span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-3xl font-bold text-foreground">15+</span>
                        <span className="text-xs font-mono text-muted-foreground">
                            MEMBERS
                        </span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-3xl font-bold text-foreground">Top 5</span>
                        <span className="text-xs font-mono text-muted-foreground">
                            CS RANKING GLOBALLY
                        </span>
                    </div>
                </div>
            </section>

            {/* Team / Location Section */}
            <section className="py-24 px-6 bg-background">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 font-display">Location</h3>
                        <div className="aspect-video w-full rounded-lg bg-secondary relative overflow-hidden group border border-border">
                            {/* Map Placeholder */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                alt="Satellite view dark map of Urbana-Champaign area"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                                data-location="Urbana-Champaign"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwzX40tZXkzjshipZWXvb7z2_QhrscqgHT1Sjer6_TRuu_kufut9Y-hRpsp-g__nbE5V6pyzim0WP3n3Zyj5KWViIxNQOVUcqs3I81NgkEyoPw6K0AgsTgv_k1Nf1dU2LsrFgWpg0LCXLMw9yTALpy8z1OfFdmVS7CBqIZ8qicrgAfaDR2PvzPpKzRgCxp13e2QqXBCA7HNuG7M9Np2ELJOsG8todjnzLRQQuRKo1j9Nkri9RJOceNbw8lskawsPyEg-n0KUMN0LA"
                            />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="relative">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping"></span>
                                    <span className="relative inline-flex rounded-full h-4 w-4 bg-primary border-2 border-white"></span>
                                </div>
                            </div>
                            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur border border-border p-3 rounded">
                                <p className="text-xs font-mono text-white">
                                    SIEBEL CENTER FOR COMPUTER SCIENCE
                                </p>
                                <p className="text-xs font-mono text-gray-400">
                                    201 N Goodwin Ave, Urbana, IL 61801
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-6 font-display">
                            Connect with the Lab
                        </h3>
                        <p className="text-muted-foreground mb-8 text-lg font-display">
                            We are always looking for ambitious PhD students, industry
                            partners, and bold ideas. The future is built here.
                        </p>
                        <div className="flex flex-col gap-4 max-w-md">
                            <Link href="/contact">
                                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded flex items-center justify-center gap-2 transition-colors">
                                    <span>INITIATE CONTACT</span>
                                    <span className="material-symbols-outlined text-sm">
                                        send
                                    </span>
                                </Button>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
