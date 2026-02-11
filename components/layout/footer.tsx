import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-background py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center bg-transparent">
                <div className="mb-4 md:mb-0">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Revamp UIUC. All rights reserved.
                    </p>
                </div>
                <div className="flex space-x-6">
                    <Link href="https://github.com/REVAMP-UIUC" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="h-5 w-5" />
                    </Link>
                    <Link href="https://www.linkedin.com/company/revamp-uiuc/?viewAsMember=true" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Instagram className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
