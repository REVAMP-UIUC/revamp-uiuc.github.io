import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cpu } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/60 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Cpu className="h-6 w-6 text-primary animate-pulse" />
                    <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                        Revamp UIUC
                    </span>
                </Link>
                <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                        About
                    </Link>
                    <Link href="/team" className="text-muted-foreground hover:text-primary transition-colors">
                        Team
                    </Link>
                    <Link href="/join" className="text-muted-foreground hover:text-primary transition-colors">
                        Recruiting
                    </Link>
                    <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                        Contact
                    </Link>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_15px_rgba(var(--primary),0.5)] hover:shadow-[0_0_25px_rgba(var(--primary),0.6)] transition-shadow duration-300">
                        Partner With Us
                    </Button>
                    <ModeToggle />
                </div>
            </div>
        </nav>
    );
}
