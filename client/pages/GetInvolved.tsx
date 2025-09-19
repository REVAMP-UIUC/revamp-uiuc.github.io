import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function GetInvolved() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form).entries());
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
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-[hsl(19,100%,50%)/8]" />
      <div className="container py-16 md:py-24 grid gap-12 md:grid-cols-2 items-start">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Get Involved
          </h1>
          <p className="mt-4 text-muted-foreground max-w-prose">
            Join Revamp to work with companies on real-world agentic AI and
            technology projects. We welcome students and professionals who are
            passionate about building and shipping.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[hsl(19,100%,50%)]" />
              Work with partner companies
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[hsl(19,100%,50%)]" />
              Ship projects that make an impact
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[hsl(19,100%,50%)]" />
              Learn with a community focused on AI
            </li>
          </ul>
        </div>
        <form
          onSubmit={onSubmit}
          className="rounded-xl border bg-card p-6 shadow-sm"
        >
          <div className="grid gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">
                Full Name
              </label>
              <Input name="name" required placeholder="Alex Doe" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium">Email</label>
                <Input
                  type="email"
                  name="email"
                  required
                  placeholder="alex@illinois.edu"
                />
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
              <label className="mb-1 block text-sm font-medium">
                Interests
              </label>
              <Input
                name="interests"
                placeholder="Agentic AI, LLM apps, integrations"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                Tell us about you
              </label>
              <Textarea
                name="about"
                rows={5}
                placeholder="What do you want to build with Revamp?"
              />
            </div>
            <Button disabled={loading} type="submit" className="mt-2">
              {loading ? "Submitting…" : "Apply Now"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
