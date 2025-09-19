import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-white/70 dark:bg-background/60">
      <div className="container py-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Logo className="h-6 w-6" />
            <span className="font-semibold tracking-tight">Revamp</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Revamp is a student-led club partnering with companies on agentic AI and technology solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="mb-3 text-sm font-semibold">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link className="hover:text-primary" to="/services">Services</Link></li>
              <li><Link className="hover:text-primary" to="/projects">Case Studies</Link></li>
              <li><Link className="hover:text-primary" to="/about">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Get In Touch</h4>
            <ul className="space-y-2 text-sm">
              <li><Link className="hover:text-primary" to="/get-involved">Join</Link></li>
              <li>
                <a className="inline-flex items-center gap-2 hover:text-primary" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-sm text-muted-foreground md:text-right flex items-end">
          <p className="w-full">© {new Date().getFullYear()} Revamp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
