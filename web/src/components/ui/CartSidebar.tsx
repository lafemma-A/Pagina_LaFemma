"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '@/store/cart-store';
import { ShoppingBag, X } from 'lucide-react';

export default function CartSidebar() {
    const { isOpen, toggleCart } = useCartStore();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-cyber-gray border-l border-white/10 shadow-2xl z-50 flex flex-col"
                    >
                        <div className="p-6 border-b border-white/10 flex justify-between items-center">
                            <h2 className="text-xl font-serif text-metal-silver flex items-center gap-2">
                                <ShoppingBag className="w-5 h-5" />
                                Tu Selección
                            </h2>
                            <button onClick={toggleCart} className="p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-white transition-colors">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6 flex flex-col items-center justify-center">
                            <div className="space-y-4 text-center max-w-xs">
                                <div>
                                    <p className="text-metal-silver font-serif text-lg mb-3">Pronto los recuerdos estarán aquí</p>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        Estamos preparando tu experiencia de compra. Mientras tanto, cuéntanos sobre el recuerdo que buscas.
                                    </p>
                                </div>
                                
                                <div className="pt-4 border-t border-white/10">
                                    <p className="text-xs text-gray-500 mb-4">Haz clic en el botón de chat para hacer tu pedido por WhatsApp.</p>
                                    <a
                                        href="https://wa.me/573052529208"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={toggleCart}
                                        className="block w-full"
                                    >
                                        <button className="w-full py-3 bg-neon-purple/20 border border-neon-purple/50 text-neon-purple font-bold uppercase tracking-[0.3em] hover:bg-neon-purple/30 transition-all text-sm rounded-sm">
                                            Contactar por WhatsApp
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border-t border-white/10 bg-black/20">
                            <p className="text-center text-gray-400 text-xs">Tu selección está guardada</p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
