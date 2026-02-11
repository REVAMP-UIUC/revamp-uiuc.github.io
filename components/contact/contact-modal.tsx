"use client";

import { useState } from "react";
import { ContactForm } from "@/components/contact/contact-form";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    category?: string;
}

export function ContactModal({ isOpen, onClose, title = "Get in Touch", category }: ContactModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-2xl bg-card border border-border">
                <DialogHeader>
                    <DialogTitle className="font-display text-2xl">{title}</DialogTitle>
                    <DialogDescription>
                        We'd love to hear from you. Fill out the form below.
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                    <ContactForm category={category} />
                </div>
            </DialogContent>
        </Dialog>
    );
}
