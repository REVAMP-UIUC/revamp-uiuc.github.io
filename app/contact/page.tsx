"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Loader2, Mail, Handshake, ArrowUpRight } from "lucide-react";
import { ContactModal } from "@/components/contact/contact-modal";
import { PageHeader, HeaderLine } from "@/components/anim/page-header";
import { Reveal } from "@/components/anim/reveal";

function ContactContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("General");
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("intent") === "project") {
      setSelectedCategory("Project Start");
      setIsModalOpen(true);
    }
  }, [searchParams]);

  const openModal = (category: string) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader
        eyebrow="Contact"
        sub="Thirty minutes, no deck. Walk us through the workflows that drain your team and we'll tell you — honestly — whether agents can carry them."
      >
        <HeaderLine>Tell us what</HeaderLine>
        <HeaderLine>
          <span className="text-stroke">eats your week.</span>
        </HeaderLine>
      </PageHeader>

      <section className="mx-auto w-full max-w-[1500px] px-5 pb-28 md:px-10 md:pb-40">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <button
              onClick={() => openModal("Project Start")}
              className="row-sweep group flex h-full w-full flex-col gap-8 rounded-2xl border border-white/[0.08] bg-card p-8 text-left transition-colors duration-300 md:p-12"
            >
              <div className="flex items-start justify-between">
                <Handshake className="h-8 w-8 text-lime transition-colors duration-300 group-hover:text-lime-foreground" />
                <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-lime-foreground" />
              </div>
              <div>
                <h2 className="headline mb-3 text-3xl text-foreground transition-colors duration-300 group-hover:text-lime-foreground md:text-4xl">
                  Start a project
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-lime-foreground/80">
                  You have a workflow in mind — calls to make, documents to move, data to
                  reconcile. Let&apos;s scope what an agentic system would look like.
                </p>
              </div>
              <span className="eyebrow mt-auto text-muted-foreground transition-colors duration-300 group-hover:text-lime-foreground/70">
                Avg. response — same day
              </span>
            </button>
          </Reveal>

          <Reveal delay={0.1}>
            <button
              onClick={() => openModal("General Inquiry")}
              className="row-sweep group flex h-full w-full flex-col gap-8 rounded-2xl border border-white/[0.08] bg-card p-8 text-left transition-colors duration-300 md:p-12"
            >
              <div className="flex items-start justify-between">
                <Mail className="h-8 w-8 text-lime transition-colors duration-300 group-hover:text-lime-foreground" />
                <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-lime-foreground" />
              </div>
              <div>
                <h2 className="headline mb-3 text-3xl text-foreground transition-colors duration-300 group-hover:text-lime-foreground md:text-4xl">
                  Everything else
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-lime-foreground/80">
                  Press, partnerships, speaking, or a question about how any of this
                  works. We read everything.
                </p>
              </div>
              <span className="eyebrow mt-auto text-muted-foreground transition-colors duration-300 group-hover:text-lime-foreground/70">
                General inquiries
              </span>
            </button>
          </Reveal>
        </div>

        {/* Intake protocol */}
        <Reveal delay={0.15}>
          <div className="mt-6 rounded-2xl border border-white/[0.08] bg-[#070708] p-6 md:p-8">
            <p className="eyebrow mb-4 flex items-center gap-2 text-lime">
              intake_protocol.md
            </p>
            <div className="grid grid-cols-1 gap-4 font-mono text-xs leading-relaxed text-muted-foreground md:grid-cols-3">
              <p>
                <span className="text-foreground">01 —</span> The workflow: what happens
                today, step by step, and who does it.
              </p>
              <p>
                <span className="text-foreground">02 —</span> The volume: how often it
                runs and roughly what it costs you.
              </p>
              <p>
                <span className="text-foreground">03 —</span> The stack: the tools it
                touches — CRM, phones, spreadsheets, anything.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedCategory === "Project Start" ? "Start a project" : "Get in touch"}
        category={selectedCategory}
      />
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-full items-center justify-center bg-background">
          <Loader2 className="h-8 w-8 animate-spin text-lime" />
        </div>
      }
    >
      <ContactContent />
    </Suspense>
  );
}
