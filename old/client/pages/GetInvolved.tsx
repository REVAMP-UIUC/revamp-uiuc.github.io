import { useState } from "react";
import Reveal from "@/components/site/Reveal";
import TerminalHeading from "@/components/site/TerminalHeading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const commitments = [
  "Work with partner companies",
  "Ship projects that make an impact",
  "Learn with a community focused on AI",
];

export default function GetInvolved() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 600));
      toast.success("Thanks! We'll be in touch soon.");
      form.reset();
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative overflow-hidden">
      <div className="cyber-grid" />
      <div className="container py-16 md:py-24 grid gap-12 md:grid-cols-2 items-start">
        <Reveal className="space-y-8">
          <TerminalHeading
            label="revamp/join"
            text="Get Involved"
            subtext="Join Revamp to work with companies on real-world agentic AI and technology projects. We welcome students and professionals who are passionate about building and shipping."
          />
          <ul className="space-y-4 font-mono text-sm uppercase tracking-[0.4em] text-muted-foreground/80">
            {commitments.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/70 px-4 py-3 shadow-[0_0_20px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:border-primary/60"
              >
                <span className="h-2 w-2 rounded-full bg-secondary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="command-line p-4 font-mono text-xs uppercase tracking-[0.35em] text-secondary">
            <p>status: accepting new builders ∎</p>
            <p className="mt-2 text-foreground">revamp apply --form --agentic-ai</p>
          </div>
        </Reveal>
        <Reveal>
          <form
            onSubmit={onSubmit}
            className="glitch-card rounded-2xl border border-border/60 bg-card/80 p-6 shadow-2xl backdrop-blur"
          >
            <div className="grid gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium">Full Name</label>
                <Input name="name" required placeholder="Alex Doe" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium">Email</label>
                  <Input type="email" name="email" required placeholder="alex@illinois.edu" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Role</label>
                  <select
                    name="role"
                    className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option>Student</option>
                    <option>Professional</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Interests</label>
                <Input name="interests" placeholder="Agentic AI, LLM apps, integrations" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Tell us about you</label>
                <Textarea name="about" rows={5} placeholder="What do you want to build with Revamp?" />
              </div>
              <Button
                disabled={loading}
                type="submit"
                className="mt-2 font-mono text-xs uppercase tracking-[0.4em]"
              >
                {loading ? "Submitting…" : "Apply Now"}
              </Button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
