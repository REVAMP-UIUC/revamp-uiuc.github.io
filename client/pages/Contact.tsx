import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/site/Reveal";
import { toast } from "sonner";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 600));
      toast.success("Thanks — we'll reach out within 24 hours.");
      form.reset();
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-[hsl(19,100%,50%)/8]" />
      <div className="container py-16 md:py-24 grid gap-12 md:grid-cols-2 items-start">
        <Reveal>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Start a Project</h1>
            <p className="mt-4 text-muted-foreground max-w-prose">
              Tell us about your goals and constraints. We’ll follow up to schedule a discovery call and propose a clear, low-risk plan.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[hsl(19,100%,50%)]" />Outcome-focused proposals</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[hsl(19,100%,50%)]" />Short build cycles with demos</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[hsl(19,100%,50%)]" />Production readiness from day one</li>
            </ul>
          </div>
        </Reveal>

        <form onSubmit={onSubmit} className="rounded-xl border bg-card p-6 shadow-sm grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">Name</label>
              <Input name="name" required placeholder="Alex Doe" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Email</label>
              <Input type="email" name="email" required placeholder="alex@company.com" />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">Company</label>
              <Input name="company" placeholder="Acme Inc." />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Timeline</label>
              <select name="timeline" className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <option>ASAP</option>
                <option>1-3 months</option>
                <option>3-6 months</option>
              </select>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">Budget</label>
              <select name="budget" className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <option>$10k–$25k</option>
                <option>$25k–$50k</option>
                <option>$50k+</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Focus Area</label>
              <select name="area" className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <option>Agentic AI</option>
                <option>LLM Product</option>
                <option>Automation / Data</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Project Brief</label>
            <Textarea name="brief" rows={6} placeholder="What problem are we solving? Success looks like..." />
          </div>
          <Button type="submit" disabled={loading}>{loading ? "Sending…" : "Request Discovery Call"}</Button>
        </form>
      </div>
    </section>
  );
}
