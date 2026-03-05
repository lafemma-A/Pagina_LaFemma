"use client";
import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/573052529208"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 group transition-all duration-500 hover:scale-110"
            aria-label="Contact on WhatsApp"
        >
            {/* Outer Glow/Pulse */}
            <div className="absolute inset-0 bg-neon-purple/20 rounded-full blur-xl group-hover:bg-neon-purple/40 transition-all duration-500 animate-pulse" />

            {/* Main Button */}
            <div className="relative bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-full text-white group-hover:border-neon-purple/50 group-hover:text-neon-purple transition-all duration-500">
                <MessageCircle className="w-6 h-6" />

                {/* Tooltip */}
                <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-black/80 border border-white/5 text-[10px] uppercase tracking-[0.3em] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-sm">
                    En qué puedo ayudarte?
                </span>
            </div>
        </a>
    );
}
