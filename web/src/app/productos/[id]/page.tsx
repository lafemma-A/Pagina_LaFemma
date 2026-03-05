"use client";
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ChevronLeft, Ruler, Droplets, MapPin, Sparkles } from 'lucide-react';
import Link from 'next/link';

import FluidBackground from '@/components/shaders/FluidBackground';
import FadeImage from '@/components/ui/FadeImage';
import Footer from '@/components/shared/Footer';
import { getProductById, PRODUCTS } from '@/data/products';
import { useCartStore } from '@/store/cart-store';

export default function ProductDetailPage() {
    const params = useParams();
    const id = params.id as string;
    const product = getProductById(id);
    const { addItem } = useCartStore();

    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [activeImage, setActiveImage] = useState(0);
    const [isAdded, setIsAdded] = useState(false);

    if (!product) {
        return (
            <main className="min-h-screen bg-[#050505] flex items-center justify-center">
                <div className="text-center space-y-8">
                    <h1 className="text-6xl font-serif text-metal-silver">404</h1>
                    <p className="text-gray-500 text-sm tracking-widest uppercase">Pieza no encontrada</p>
                    <Link href="/archivo" className="inline-block py-3 px-8 border border-white/10 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                        Volver al Archivo
                    </Link>
                </div>
            </main>
        );
    }

    const handleAddToCart = () => {
        addItem({
            _id: product.id,
            slug: product.id,
            name: `${product.subtitle}: ${product.name}`,
            price: product.price,
            image: product.image,
            size: selectedSize || undefined,
            quantity: 1,
        });
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    // Suggest related pieces (next 3 in catalog)
    const currentIndex = PRODUCTS.findIndex(p => p.id === product.id);
    const related = [
        PRODUCTS[(currentIndex + 1) % PRODUCTS.length],
        PRODUCTS[(currentIndex + 2) % PRODUCTS.length],
        PRODUCTS[(currentIndex + 3) % PRODUCTS.length],
    ];

    return (
        <main className="min-h-screen bg-[#050505] relative pt-28">
            <FluidBackground />

            {/* Back to Archive */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 mb-8">
                <Link href="/archivo" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.5em] text-gray-500 hover:text-neon-purple transition-colors group">
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    El Archivo
                </Link>
            </div>

            {/* ═══════════════════════════════════════════════════
                HERO: Split Layout — Gallery Left / Info Right
               ═══════════════════════════════════════════════════ */}
            <section className="relative z-10 max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                {/* LEFT: Image Gallery */}
                <div className="space-y-4">
                    {/* Main Image */}
                    <motion.div
                        key={activeImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="relative aspect-[3/4] overflow-hidden rounded-sm border border-white/5 bg-black group"
                    >
                        <FadeImage
                            src={product.gallery[activeImage]}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-1000"
                            priority
                        />
                        {/* Category Badge */}
                        <div className="absolute top-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-sm">
                            <span className="text-[9px] uppercase tracking-[0.5em] text-neon-purple">{product.category}</span>
                        </div>
                    </motion.div>

                    {/* Thumbnail Strip */}
                    <div className="flex gap-3">
                        {product.gallery.map((img, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveImage(i)}
                                className={`relative aspect-square w-20 overflow-hidden rounded-sm border transition-all duration-500 ${activeImage === i ? 'border-neon-purple/60 ring-1 ring-neon-purple/20' : 'border-white/5 opacity-50 hover:opacity-100'}`}
                            >
                                <FadeImage src={img} alt={`Vista ${i + 1}`} fill className="object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* RIGHT: Product Info */}
                <div className="lg:sticky lg:top-32 space-y-10 py-4">
                    {/* Subtitle + Name */}
                    <div className="space-y-4">
                        <span className="text-[10px] uppercase tracking-[0.8em] text-gray-500">{product.subtitle}</span>
                        <h1 className="text-5xl md:text-7xl font-serif text-metal-silver uppercase tracking-tighter leading-[0.85]">
                            {product.name}
                        </h1>
                        <p className="text-2xl font-serif text-neon-purple tracking-wider mt-4">
                            ${product.price} <span className="text-xs text-gray-500 tracking-widest">USD</span>
                        </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 font-light leading-relaxed text-base max-w-md">
                        {product.description}
                    </p>

                    {/* Size Selector */}
                    <div className="space-y-4">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-metal-silver/40">Talla</span>
                        <div className="flex gap-3">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-12 h-12 flex items-center justify-center border rounded-sm text-xs uppercase tracking-widest transition-all duration-300
                                        ${selectedSize === size
                                            ? 'border-neon-purple bg-neon-purple/10 text-neon-purple'
                                            : 'border-white/10 text-gray-500 hover:border-white/30 hover:text-white'
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <motion.button
                        onClick={handleAddToCart}
                        whileTap={{ scale: 0.97 }}
                        className={`w-full py-5 flex items-center justify-center gap-4 border rounded-sm text-xs uppercase tracking-[0.4em] transition-all duration-700
                            ${isAdded
                                ? 'bg-neon-purple text-black border-neon-purple'
                                : 'border-white/20 text-metal-silver hover:bg-white hover:text-black hover:border-white'
                            }`}
                    >
                        <ShoppingBag className="w-4 h-4" />
                        {isAdded ? 'Añadida al Carrito ✓' : 'Añadir al Carrito'}
                    </motion.button>

                    {/* ── Spec Sidebar ── */}
                    <div className="border-t border-white/5 pt-10 space-y-8">
                        <h3 className="text-[10px] uppercase tracking-[0.5em] text-metal-silver/40">Especificaciones Técnicas</h3>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-neon-purple/70">
                                    <Droplets className="w-3 h-3" />
                                    <span className="text-[9px] uppercase tracking-widest">Material</span>
                                </div>
                                <p className="text-xs text-gray-400 font-light">{product.specs.material}</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-neon-purple/70">
                                    <MapPin className="w-3 h-3" />
                                    <span className="text-[9px] uppercase tracking-widest">Origen</span>
                                </div>
                                <p className="text-xs text-gray-400 font-light">{product.specs.origin}</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-neon-purple/70">
                                    <Ruler className="w-3 h-3" />
                                    <span className="text-[9px] uppercase tracking-widest">Densidad</span>
                                </div>
                                <p className="text-xs text-gray-400 font-light">{product.specs.density}</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-neon-purple/70">
                                    <Sparkles className="w-3 h-3" />
                                    <span className="text-[9px] uppercase tracking-widest">Cuidado</span>
                                </div>
                                <p className="text-xs text-gray-400 font-light">{product.specs.care}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                MAXIMALISM TYPOGRAPHY — Background text strip
               ═══════════════════════════════════════════════════ */}
            <div className="relative z-10 overflow-hidden py-32 mt-20">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                    className="flex whitespace-nowrap"
                >
                    {Array.from({ length: 6 }).map((_, i) => (
                        <span key={i} className="text-[18vw] font-serif text-white/[0.02] uppercase tracking-tighter mx-8 select-none">
                            TACTILE · MAXIMALISM · MEMORY · FASHION ·
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* ═══════════════════════════════════════════════════
                RELATED PIECES — "Sigue Explorando"
               ═══════════════════════════════════════════════════ */}
            <section className="relative z-10 max-w-[1400px] mx-auto px-6 pb-32">
                <div className="flex justify-between items-end mb-16 border-b border-white/5 pb-6">
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.6em] text-neon-purple/60">Otras Piezas</span>
                        <h2 className="text-3xl font-serif text-metal-silver uppercase tracking-tighter mt-2">Sigue Explorando</h2>
                    </div>
                    <Link href="/archivo" className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-neon-purple transition-all border-b border-white/10 pb-1">
                        Ver Todo
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {related.map((item) => (
                        <Link key={item.id} href={`/productos/${item.id}`} className="group">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-white/5 bg-black hover:border-neon-purple/20 transition-all duration-700">
                                <FadeImage src={item.image} alt={item.name} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <span className="text-[9px] uppercase tracking-widest text-neon-purple block mb-1">{item.category}</span>
                                    <h3 className="text-lg font-serif text-metal-silver uppercase">{item.subtitle}: {item.name}</h3>
                                    <p className="text-xs text-gray-500 mt-1">${item.price} USD</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
