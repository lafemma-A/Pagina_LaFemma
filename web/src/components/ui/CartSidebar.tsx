"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '@/store/cart-store';
import { ShoppingBag, X, Minus, Plus } from 'lucide-react';
import Link from 'next/link';
import FadeImage from './FadeImage';

export default function CartSidebar() {
    const { isOpen, toggleCart, items, removeItem, addItem, getFormattedTotal } = useCartStore();

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

                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center text-gray-500">
                                    <p>Tu carrito está vacío.</p>
                                    <p className="text-sm mt-2">Empieza a coleccionar memorias.</p>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={`${item._id}-${item.size}`} className="flex gap-4">
                                        <div className="w-20 h-24 bg-neutral-800 rounded-sm relative overflow-hidden shrink-0 border border-white/5">
                                            <FadeImage src={item.image || '/assets/Logo_LAFEMMA.png'} alt={item.name} fill className="object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-serif text-white">{item.name}</h3>
                                            <p className="text-sm text-gray-400">{item.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</p>
                                            <div className="flex items-center gap-3 mt-3">
                                                <button className="p-1 rounded-full border border-white/20 hover:bg-white/10" onClick={() => removeItem(item._id)}>
                                                    <Minus className="w-3 h-3" />
                                                </button>
                                                <span className="text-sm">{item.quantity}</span>
                                                <button className="p-1 rounded-full border border-white/20 hover:bg-white/10" onClick={() => addItem(item)}>
                                                    <Plus className="w-3 h-3" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="p-6 border-t border-white/10 bg-black/20">
                            <div className="flex justify-between items-center mb-4 text-metal-silver">
                                <span>Subtotal</span>
                                <span className="font-serif text-xl">{getFormattedTotal()}</span>
                            </div>
                            <Link href="/checkout" onClick={toggleCart} className="block w-full">
                                <button className="w-full py-4 bg-neon-purple text-black font-bold uppercase tracking-[0.4em] hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed" disabled={items.length === 0}>
                                    Proceder al Pago
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
