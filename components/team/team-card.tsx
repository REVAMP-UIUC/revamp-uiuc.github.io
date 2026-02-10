"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

interface TeamMember {
    name: string;
    role: string;
    bio: string;
    image: string;
    links: {
        github?: string;
        linkedin?: string;
        email?: string;
    };
    tags: string[];
}

interface TeamCardProps {
    member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            className="group h-[400px] w-full cursor-pointer perspective-1000"
            onClick={handleFlip}
        >
            <motion.div
                className="relative h-full w-full transition-all duration-500 transform-style-3d"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* FRONT FACE */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-zinc-900 border border-white/10 overflow-hidden backface-hidden shadow-xl">
                    {/* Placeholder content for image if no real image is present */}
                    <div className="h-full w-full bg-zinc-800 flex items-center justify-center relative">
                        {/* We would typically utilize Next.js Image component here, 
                            but for potential broken links/placeholders we use a div backup */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

                        {member.image.startsWith("/") ? (
                            // Using a simple img tag for compatibility with potential external/public assets for now, 
                            // or a div background if it's a placeholder path
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url('${member.image}')` }} // Fallback if image load fails needs handling in a real app, assuming simplified for now
                            />
                        ) : (
                            <span className="text-4xl font-bold text-zinc-700 z-0">{member.name.charAt(0)}</span>
                        )}

                        {/* Hover Overlay Content */}
                        <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                            <p className="text-primary font-medium">{member.role}</p>
                            <p className="text-xs text-zinc-400 mt-2">Click to view profile</p>
                        </div>
                    </div>
                </div>

                {/* BACK FACE */}
                <div
                    className="absolute inset-0 h-full w-full rounded-xl bg-zinc-950 border border-primary/30 p-8 backface-hidden rotate-y-180 flex flex-col justify-between shadow-[0_0_30px_rgba(var(--primary),0.15)]"
                >
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                <p className="text-sm text-primary">{member.role}</p>
                            </div>
                        </div>

                        <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                            {member.bio}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {member.tags.map(tag => (
                                <Badge key={tag} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4 pt-4 border-t border-white/10">
                        {member.links.github && (
                            <Link href={member.links.github} className="text-zinc-400 hover:text-primary transition-colors hover:scale-110 transform duration-200">
                                <Github className="h-5 w-5" />
                            </Link>
                        )}
                        {member.links.linkedin && (
                            <Link href={member.links.linkedin} className="text-zinc-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        )}
                        {member.links.email && (
                            <Link href={member.links.email} className="text-zinc-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                                <Mail className="h-5 w-5" />
                            </Link>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
