"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

// ---------------------------------------------------------
// ---------------------------------------------------------
const SERVICE_ID = "";
const TEMPLATE_ID = "";
const PUBLIC_KEY = "";

export function ContactForm({ category }: { category?: string }) {
    const form = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!SERVICE_ID.includes("YOUR_") && !TEMPLATE_ID.includes("YOUR_") && !PUBLIC_KEY.includes("YOUR_")) {
            // Proceed if keys are likely set (simple check)
        } else {
            // Let the user test the UI even if keys are placeholders, 
            // but ideally alert them if in development
            console.warn("EmailJS keys are not set correctly via the constants.");
        }

        if (form.current) {
            setIsSending(true);
            setStatus("idle");

            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
                .then((result) => {
                    console.log(result.text);
                    setStatus("success");
                    if (form.current) form.current.reset();
                }, (error) => {
                    console.error(error.text);
                    setStatus("error");
                })
                .finally(() => {
                    setIsSending(false);
                });
        }
    };

    return (
        <div className="w-full">
            <h3 className="text-xl font-bold font-display mb-2 sr-only">Send us a message</h3>
            <p className="text-muted-foreground text-sm mb-6 sr-only">
                Fill out the form below and we'll get back to you shortly.
            </p>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <input type="hidden" name="category" value={category || "General"} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="user_name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Name
                        </label>
                        <input
                            type="text"
                            name="user_name"
                            required
                            placeholder="John Doe"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="company_name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Company Name
                        </label>
                        <input
                            type="text"
                            name="company_name"
                            required
                            placeholder="Acme Inc."
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="user_email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Email
                    </label>
                    <input
                        type="email"
                        name="user_email"
                        required
                        placeholder="john@example.com"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Message
                    </label>
                    <textarea
                        name="message"
                        required
                        placeholder="Tell us about your project..."
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                    />
                </div>

                <div className="pt-2">
                    <Button type="submit" disabled={isSending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                        {isSending ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            "Send Message"
                        )}
                    </Button>
                </div>

                {/* Status Messages */}
                {status === "success" && (
                    <div className="flex items-center gap-2 p-3 text-sm text-green-600 bg-green-500/10 border border-green-500/20 rounded-md animate-in fade-in slide-in-from-top-2">
                        <CheckCircle2 className="h-4 w-4" />
                        Message sent successfully! We'll be in touch soon.
                    </div>
                )}
                {status === "error" && (
                    <div className="flex items-center gap-2 p-3 text-sm text-red-600 bg-red-500/10 border border-red-500/20 rounded-md animate-in fade-in slide-in-from-top-2">
                        <AlertCircle className="h-4 w-4" />
                        Failed to send message. Please review your EmailJS configuration.
                    </div>
                )}
            </form>
        </div>
    );
}
