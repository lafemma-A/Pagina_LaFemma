"use client";
import React from 'react';
import FadeImage from '@/components/ui/FadeImage';
import { Instagram, Linkedin, Mail, MessageCircle, ExternalLink } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative z-10 py-24 bg-black/40 backdrop-blur-3xl border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">

                    {/* Brand Pillar */}
                    <div className="space-y-8">
                        <div className="relative w-24 h-8 opacity-40 grayscale hover:grayscale-0 transition-all">
                            <FadeImage src="/assets/Logo_LAFEMMA2.png" alt="LA FEMMA" fill className="object-contain" containerClassName="bg-transparent" />
                        </div>
                        <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 leading-relaxed font-light">
                            Vestir es recordar. <br />
                            Hecho en Colombia.
                        </p>
                    </div>

                    {/* Social Pillar */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-metal-silver/40">Conectar</h4>
                        <div className="flex flex-col gap-4">
                            <a href="https://instagram.com/la_femma" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-gray-500 hover:text-neon-purple transition-all group">
                                <Instagram className="w-3 h-3" /> Instagram
                            </a>
                            <a href="https://tiktok.com/@la_femma" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-gray-500 hover:text-neon-purple transition-all group">
                                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.13-1.03-2.28-1.39-3.6-4.03-3.04-6.66.25-1.44.97-2.84 2.1-3.72 1.1-.91 2.5-1.38 3.94-1.37.01 1.56-.01 3.12-.02 4.68-.34-.02-.69.01-1.03.07-1.14.22-2.12 1.15-2.21 2.31-.13.88.22 1.83.94 2.37.75.59 1.8.71 2.67.35 1.14-.38 1.84-1.62 1.76-2.81-.03-2.92-.01-5.84-.02-8.76.02-4.43.01-8.86.02-13.29z" /></svg>
                                TikTok
                            </a>
                            <a href="https://www.linkedin.com/company/lafemma" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-gray-500 hover:text-neon-purple transition-all group">
                                <Linkedin className="w-3 h-3" /> LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Contact Pillar */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-metal-silver/40">Contacto</h4>
                        <div className="flex flex-col gap-4">
                            <a href="https://wa.me/573052529208" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-gray-500 hover:text-neon-purple transition-all group">
                                <MessageCircle className="w-3 h-3" /> +57 305 252 9208
                            </a>
                            <a href="mailto:laafemma@gmail.com" className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-gray-500 hover:text-neon-purple transition-all group">
                                <Mail className="w-3 h-3" /> laafemma@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Navigation Pillar */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-metal-silver/40">Explorar</h4>
                        <div className="flex flex-col gap-4">
                            <a href="https://linktr.ee/LAFEMMA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-gray-500 hover:text-neon-purple transition-all group">
                                <ExternalLink className="w-3 h-3" /> Linktree
                            </a>
                            <p className="text-[10px] uppercase tracking-widest text-metal-silver/20 cursor-default">www.lafemma.dpdns.org</p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
                    <p className="text-[8px] uppercase tracking-[0.5em] text-gray-600">&copy; 2026 LA FEMMA SAS. Todos los derechos reservados.</p>
                    <div className="flex gap-8">
                        <span className="text-[8px] uppercase tracking-[0.2em] text-gray-700 hover:text-gray-400 cursor-pointer transition-colors">Política de Privacidad</span>
                        <span className="text-[8px] uppercase tracking-[0.2em] text-gray-700 hover:text-gray-400 cursor-pointer transition-colors">Términos y Condiciones</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
