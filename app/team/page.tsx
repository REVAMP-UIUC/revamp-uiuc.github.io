import { TeamCard } from "@/components/team/team-card";

const TEAM_MEMBERS = [
    {
        name: "Alex Chen",
        role: "President",
        bio: "CS Senior specializing in LLM Infra. Previously interned at Anthropic.",
        image: "/team/alex.jpg",
        links: { github: "#", linkedin: "#", email: "#" },
        tags: ["Leadership", "System Design"],
    },
    {
        name: "Sarah Miller",
        role: "Head of Engineering",
        bio: "Building autonomous coding agents. Researcher at UIUC DAI Lab.",
        image: "/team/sarah.jpg",
        links: { github: "#", linkedin: "#", email: "#" },
        tags: ["Agents", "Python", "Rust"],
    },
    {
        name: "David Kim",
        role: "Head of Product",
        bio: "Focusing on UX for AI interfaces. Previously PM intern at Microsoft.",
        image: "/team/david.jpg",
        links: { github: "#", linkedin: "#", email: "#" },
        tags: ["Product", "Strategy"],
    },
    {
        name: "Emily Zhang",
        role: "Head of External",
        bio: "Managing client relations and partnerships. Business + CS major.",
        image: "/team/emily.jpg",
        links: { github: "#", linkedin: "#", email: "#" },
        tags: ["Partnerships", "Sales"],
    },
];

export default function TeamPage() {
    return (
        <div className="container mx-auto px-4 py-24 min-h-screen">
            <div className="space-y-12">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight">Meet the Builders</h1>
                    <p className="text-muted-foreground text-lg">
                        The minds behind Revamp. We are a collective of engineers, researchers, and designers passionate about the future of AI.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {TEAM_MEMBERS.map((member, index) => (
                        <TeamCard key={index} member={member} />
                    ))}
                </div>
            </div>
        </div>
    );
}
