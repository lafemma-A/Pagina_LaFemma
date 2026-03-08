"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Lock, CreditCard, Apple, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import FadeImage from '@/components/ui/FadeImage';
import { useCartStore } from '@/store/cart-store';

const FluidBackground = dynamic(() => import('@/components/shaders/FluidBackground'), { ssr: false });

export default function CheckoutPage() {
    const { items, getTotal, clearCart } = useCartStore();
    const total = getTotal();
    const [step, setStep] = useState(1); // 1: Info, 2: Success
    const [isProcessing, setIsProcessing] = useState(false);

    const shipping = 0; // Complimentary
    const taxes = total * 0.19; // 19% IVA simulation
    const grandTotal = total + shipping;

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        // Simulate payment delay
        setTimeout(() => {
            setIsProcessing(false);
            setStep(2);
            clearCart();
        }, 2500);
    };

    if (step === 2) {
        return (
            <main className="min-h-screen bg-[#050505] flex items-center justify-center relative overflow-hidden">
                <FluidBackground />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 text-center space-y-8 max-w-md px-6"
                >
                    <div className="flex justify-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                            className="w-24 h-24 bg-neon-purple rounded-full flex items-center justify-center text-black"
                        >
                            <CheckCircle2 className="w-12 h-12" />
                        </motion.div>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-4xl font-serif text-metal-silver uppercase tracking-tight">Pedido Confirmado</h1>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Vestir es recordar. Hemos recibido tu orden y estamos preparando tu pieza con la técnica artesanal de LA FEMMA. Recibirás un correo con los detalles en breve.
                        </p>
                    </div>
                    <Link href="/archivo" className="inline-block w-full py-4 border border-white/10 text-[10px] uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all">
                        Volver al Archivo
                    </Link>
                </motion.div>
            </main>
        );
    }

    if (items.length === 0) {
        return (
            <main className="min-h-screen bg-[#050505] flex items-center justify-center">
                <div className="text-center space-y-6">
                    <p className="text-gray-500 uppercase tracking-widest text-xs">Tu carrito está vacío</p>
                    <Link href="/archivo" className="inline-block py-3 px-8 border border-white/10 text-[10px] uppercase tracking-widest hover:bg-neon-purple hover:text-black transition-all">
                        Explorar Colección
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#050505] pt-28 pb-20 relative antialiased">
            <FluidBackground />

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                {/* ── LEFT: Checkout Form ── */}
                <div className="lg:col-span-7 space-y-16">
                    <header className="space-y-4">
                        <Link href="/archivo" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors">
                            <ChevronLeft className="w-3 h-3" /> Volver
                        </Link>
                        <h1 className="text-6xl font-serif text-metal-silver uppercase tracking-tighter">Checkout</h1>
                        <div className="flex items-center gap-2 text-neon-purple/50">
                            <Lock className="w-3 h-3" />
                            <span className="text-[9px] uppercase tracking-widest">Transacción Segura y Encriptada</span>
                        </div>
                    </header>

                    <form onSubmit={handlePayment} className="space-y-16">
                        {/* Section 01: Shipping */}
                        <section className="space-y-8">
                            <div className="flex items-center gap-4">
                                <span className="text-2xl font-serif text-neon-purple/20">01.</span>
                                <h2 className="text-[10px] uppercase tracking-[0.5em] text-metal-silver/40 pt-1">Información de Envío</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[9px] uppercase tracking-widest text-gray-600 block px-1">Nombre</label>
                                    <input required type="text" placeholder="Alexander" className="w-full bg-white/5 border border-white/10 rounded-sm py-4 px-6 text-sm text-white placeholder:text-white/10 focus:border-neon-purple/50 focus:outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] uppercase tracking-widest text-gray-600 block px-1">Apellido</label>
                                    <input required type="text" placeholder="McQueen" className="w-full bg-white/5 border border-white/10 rounded-sm py-4 px-6 text-sm text-white placeholder:text-white/10 focus:border-neon-purple/50 focus:outline-none transition-all" />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-[9px] uppercase tracking-widest text-gray-600 block px-1">Dirección</label>
                                    <input required type="text" placeholder="Calle de la Memoria 44, Colombia" className="w-full bg-white/5 border border-white/10 rounded-sm py-4 px-6 text-sm text-white placeholder:text-white/10 focus:border-neon-purple/50 focus:outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] uppercase tracking-widest text-gray-600 block px-1">Ciudad</label>
                                    <input required type="text" placeholder="Antioquia" className="w-full bg-white/5 border border-white/10 rounded-sm py-4 px-6 text-sm text-white placeholder:text-white/10 focus:border-neon-purple/50 focus:outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] uppercase tracking-widest text-gray-600 block px-1">Código Postal</label>
                                    <input required type="text" placeholder="050021" className="w-full bg-white/5 border border-white/10 rounded-sm py-4 px-6 text-sm text-white placeholder:text-white/10 focus:border-neon-purple/50 focus:outline-none transition-all" />
                                </div>
                            </div>
                        </section>

                        {/* Section 02: Payment */}
                        <section className="space-y-8">
                            <div className="flex items-center gap-4">
                                <span className="text-2xl font-serif text-neon-purple/20">02.</span>
                                <h2 className="text-[10px] uppercase tracking-[0.5em] text-metal-silver/40 pt-1">Método de Pago</h2>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <button type="button" className="flex flex-col items-center justify-center p-6 border border-neon-purple/40 bg-neon-purple/5 rounded-sm group">
                                    <CreditCard className="w-6 h-6 text-neon-purple mb-2" />
                                    <span className="text-[8px] uppercase tracking-widest text-neon-purple">Card</span>
                                </button>
                                <button type="button" className="flex flex-col items-center justify-center p-6 border border-white/5 bg-white/5 rounded-sm grayscale opacity-40 hover:opacity-100 transition-all">
                                    <Apple className="w-6 h-6 text-white mb-2" />
                                    <span className="text-[8px] uppercase tracking-widest">Pay</span>
                                </button>
                                <button type="button" className="flex flex-col items-center justify-center p-6 border border-white/5 bg-white/5 rounded-sm grayscale opacity-40 hover:opacity-100 transition-all">
                                    <div className="w-6 h-6 flex items-center justify-center mb-2">⚡</div>
                                    <span className="text-[8px] uppercase tracking-widest">Other</span>
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[9px] uppercase tracking-widest text-gray-600 block px-1">Número de Tarjeta</label>
                                    <input required type="text" placeholder="**** **** **** 8892" className="w-full bg-white/5 border border-white/10 rounded-sm py-4 px-6 text-sm text-white placeholder:text-white/10 focus:border-neon-purple/50 focus:outline-none transition-all" />
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[9px] uppercase tracking-widest text-gray-600 block px-1">Vencimiento</label>
                                        <input required type="text" placeholder="MM / YY" className="w-full bg-white/5 border border-white/10 rounded-sm py-4 px-6 text-sm text-white placeholder:text-white/10 focus:border-neon-purple/50 focus:outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[9px] uppercase tracking-widest text-gray-600 block px-1">CVC</label>
                                        <input required type="text" placeholder="***" className="w-full bg-white/5 border border-white/10 rounded-sm py-4 px-6 text-sm text-white placeholder:text-white/10 focus:border-neon-purple/50 focus:outline-none transition-all" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <button
                            disabled={isProcessing}
                            type="submit"
                            className="w-full py-5 bg-neon-purple text-black text-[10px] uppercase font-bold tracking-[0.5em] hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                        >
                            {isProcessing ? 'Procesando Transacción...' : `Pagar Ahora — $${grandTotal.toLocaleString()} USD`}
                        </button>

                        <p className="flex items-center justify-center gap-2 text-[8px] text-gray-600 uppercase tracking-widest">
                            <ShieldCheck className="w-3 h-3" /> Cumplimos con los protocolos de seguridad de nivel bancario
                        </p>
                    </form>
                </div>

                {/* ── RIGHT: Order Summary ── */}
                <aside className="lg:col-span-5 relative">
                    <div className="lg:sticky lg:top-32 bg-white/[0.02] border border-white/5 rounded-sm p-10 space-y-10">
                        <h3 className="text-[10px] uppercase tracking-[0.4em] text-metal-silver/40">Resumen del Pedido</h3>

                        <div className="space-y-8 max-h-[400px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-neon-purple/20">
                            {items.map((item) => (
                                <div key={`${item._id}-${item.size}`} className="flex gap-6 items-center">
                                    <div className="relative w-20 h-24 flex-shrink-0 border border-white/5 overflow-hidden">
                                        <FadeImage src={item.image || '/assets/Logo_LAFEMMA.png'} alt={item.name} fill className="object-cover" />
                                    </div>
                                    <div className="flex-grow space-y-1">
                                        <h4 className="text-sm font-serif text-metal-silver uppercase">{item.name}</h4>
                                        <div className="flex justify-between items-end">
                                            <p className="text-[10px] text-gray-600 uppercase tracking-widest">
                                                Talla: {item.size || 'Unica'} · Cant. {item.quantity}
                                            </p>
                                            <p className="text-xs text-neon-purple">${(item.price * item.quantity).toLocaleString()}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-10 border-t border-white/5 space-y-4">
                            <div className="flex justify-between text-[10px] uppercase tracking-widest text-gray-500">
                                <span>Subtotal</span>
                                <span>${total.toLocaleString()} USD</span>
                            </div>
                            <div className="flex justify-between text-[10px] uppercase tracking-widest text-gray-500">
                                <span>Envío Express</span>
                                <span className="text-neon-purple">Cortesia</span>
                            </div>
                            <div className="flex justify-between text-[10px] uppercase tracking-widest text-gray-500">
                                <span>Impuestos (Simulado)</span>
                                <span>$0.00 USD</span>
                            </div>
                            <div className="pt-6 flex justify-between items-end">
                                <span className="text-xs uppercase tracking-[0.4em] text-metal-silver">Total</span>
                                <span className="text-3xl font-serif text-neon-purple">${grandTotal.toLocaleString()} <span className="text-[10px] text-gray-500 uppercase tracking-widest ml-1">USD</span></span>
                            </div>
                        </div>

                        {/* Gift Note Simulation */}
                        <div className="space-y-4">
                            <label className="text-[9px] uppercase tracking-widest text-gray-600 block px-1">Mensaje de Regalo (Opcional)</label>
                            <textarea placeholder="Escribe tus palabras aquí..." className="w-full bg-black/40 border border-white/5 rounded-sm py-4 px-6 text-xs text-white placeholder:text-white/10 focus:border-neon-purple/30 focus:outline-none h-24 transition-all resize-none"></textarea>
                        </div>

                        <p className="text-[8px] text-gray-600 uppercase tracking-[0.2em] leading-relaxed text-center">
                            Al completar la compra, aceptas nuestros términos de servicio y políticas de privacidad diseñadas para proteger tu experiencia.
                        </p>
                    </div>
                </aside>

            </div>
        </main>
    );
}
