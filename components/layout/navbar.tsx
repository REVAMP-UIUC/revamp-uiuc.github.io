import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
// import { Cpu } from "lucide-react"; // Cpu is no longer used
import { ModeToggle } from "@/components/mode-toggle";

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/60 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="relative h-8 w-8">
                        <Image
                            src="/logo.svg"
                            alt="Revamp UIUC Logo"
                            fill
                            className="object-contain dark:invert"
                        />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-foreground">
                        Revamp UIUC
                    </span>
                </Link>
                <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                        Projects
                    </Link>
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

                    <ModeToggle />
                </div>
            </div>
        </nav>
    );
}
