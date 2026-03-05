"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '@/store/cart-store';
import { useTheme } from 'next-themes';
import { ShoppingBag, Menu, X, Sun, Moon, Globe } from 'lucide-react';
import Link from 'next/link';
import { useLangStore } from '@/store/lang-store';
import { translations } from '@/lib/translations';

const NAV_LINKS_MAP = [
    { href: '/', key: 'home' },
    { href: '/archivo', key: 'archive' },
    { href: '/artesania', key: 'craft' },
    { href: '/historia', key: 'history' },
];

export default function Navbar() {
    const { toggleCart, items } = useCartStore();
    const { theme, setTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const { lang, toggleLang } = useLangStore();
    const t = translations[lang].nav;
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${isScrolled ? 'py-4 bg-background/80 backdrop-blur-xl border-b border-white/5 dark:border-white/5 border-black/5' : 'py-8'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    {/* Logo link / Home */}
                    <Link href="/" className="font-serif text-xl tracking-[0.2em] text-metal-silver hover:opacity-70 transition-opacity">
                        LA FEMMA
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-12">
                        {NAV_LINKS_MAP.map((link) => (
                            <Link key={link.href} href={link.href} className="text-xs uppercase tracking-[0.3em] hover:text-neon-purple transition-colors">
                                {t[link.key as keyof typeof t]}
                            </Link>
                        ))}

                        <button
                            onClick={toggleCart}
                            className="flex items-center gap-2 group"
                            aria-label="Abrir carrito de compras"
                        >
                            <div className="relative">
                                <ShoppingBag className="w-5 h-5 group-hover:text-neon-purple transition-colors" />
                                {totalItems > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-neon-purple text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                        {totalItems}
                                    </span>
                                )}
                            </div>
                        </button>

                        <div className="flex items-center gap-4 border-l border-white/10 pl-6 border-black/10 dark:border-white/10">
                            {/* Theme Toggle */}
                            <button
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="hover:text-neon-purple transition-colors"
                                aria-label="Cambiar tema de color"
                            >
                                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                            </button>

                            {/* Language Toggle */}
                            <button
                                onClick={toggleLang}
                                className="flex items-center gap-1 hover:text-neon-purple transition-colors"
                                aria-label="Cambiar idioma"
                            >
                                <Globe className="w-4 h-4" />
                                <span className="text-[10px] font-bold">{lang}</span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Controls */}
                    <div className="md:hidden flex items-center gap-4">
                        <button onClick={toggleCart} className="relative" aria-label="Abrir carrito">
                            <ShoppingBag className="w-6 h-6" />
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-neon-purple text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                    {totalItems}
                                </span>
                            )}
                        </button>
                        <button
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            className="p-2 hover:bg-white/5 rounded-full transition-colors"
                            aria-label={isMobileOpen ? "Cerrar menú" : "Abrir menú"}
                        >
                            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 h-full w-72 bg-cyber-gray border-l border-white/10 z-50 md:hidden flex flex-col"
                        >
                            <div className="p-6 border-b border-white/10 flex justify-end">
                                <button onClick={() => setIsMobileOpen(false)} className="p-2 hover:bg-white/5 rounded-full" aria-label="Cerrar menú">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                            <div className="flex-1 flex flex-col gap-2 p-6">
                                {NAV_LINKS_MAP.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMobileOpen(false)}
                                        className="py-4 text-sm uppercase tracking-[0.3em] text-metal-silver hover:text-neon-purple border-b border-black/10 dark:border-white/5 transition-colors"
                                    >
                                        {t[link.key as keyof typeof t]}
                                    </Link>
                                ))}
                                <div className="flex items-center justify-between py-6">
                                    <button
                                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                        className="flex items-center gap-2 text-sm uppercase tracking-widest text-metal-silver hover:text-neon-purple"
                                    >
                                        {theme === 'dark' ? <><Sun className="w-4 h-4" /> {t.lightMode}</> : <><Moon className="w-4 h-4" /> {t.darkMode}</>}
                                    </button>
                                    <button
                                        onClick={toggleLang}
                                        className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-metal-silver hover:text-neon-purple"
                                    >
                                        <Globe className="w-4 h-4" /> {lang}
                                    </button>
                                </div>
                            </div>
                            <div className="p-6 border-t border-white/10">
                                <p className="text-[8px] uppercase tracking-[0.4em] text-gray-600 text-center">
                                    Vestir es recordar
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
