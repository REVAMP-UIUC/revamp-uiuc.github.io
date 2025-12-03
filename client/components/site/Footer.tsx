import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/40 bg-background/70">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container relative py-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Logo className="h-6 w-6" />
            <span className="font-mono text-xs uppercase tracking-[0.6em] text-foreground/80">
              Revamp
            </span>
          </div>
          <p className="text-sm text-muted-foreground/80 max-w-xs leading-relaxed">
            Agentic AI & Data Analytics collective at UIUC delivering autonomous
            systems, data intelligence, and real-time ops for partners.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm font-mono uppercase tracking-[0.3em]">
          <div className="space-y-2">
            <p className="text-secondary text-xs">Navigate</p>
            <Link className="hover:text-primary block" to="/services">
              Services
            </Link>
            <Link className="hover:text-primary block" to="/projects">
              Projects
            </Link>
            <Link className="hover:text-primary block" to="/about">
              About
            </Link>
          </div>
          <div className="space-y-2">
            <p className="text-secondary text-xs">Signal</p>
            <Link className="hover:text-primary block" to="/get-involved">
              Join
            </Link>
            <a
              className="inline-flex items-center gap-2 hover:text-primary"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-end text-sm text-muted-foreground/80 md:items-end gap-3">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-foreground/70">
            status: online ∎
          </p>
          <p>Copyright {new Date().getFullYear()} Revamp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

