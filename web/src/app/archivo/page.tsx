"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Footer from '@/components/shared/Footer';
import FadeImage from '@/components/ui/FadeImage';
import { useCartStore } from '@/store/cart-store';
import { useLangStore } from '@/store/lang-store';
import { translations } from '@/lib/translations';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { PRODUCTS, Product } from '@/data/products';
import { sanityFetch } from '@/lib/sanity';

const FluidBackground = dynamic(() => import('@/components/shaders/FluidBackground'), { ssr: false });

export default function ArchivoPage() {
    const { addItem } = useCartStore();
    const { lang } = useLangStore();
    const t = translations[lang].archivePreview;
    const [products, setProducts] = useState<Product[]>(PRODUCTS);

    useEffect(() => {
        async function fetchProducts() {
            const query = `*[_type == "product"] | order(_createdAt desc) {
                "id": coalesce(id, _id),
                name,
                subtitle,
                price,
                "image": image.asset->url,
                category,
                sizes
            }`;
            try {
                const sanityProducts = await sanityFetch<Product[] | null>({ query });
                if (sanityProducts && sanityProducts.length > 0) {
                    setProducts(sanityProducts);
                }
            } catch (error) {
                console.error("Error fetching products from Sanity:", error);
            }
        }
        fetchProducts();
    }, []);

    return (
        <main className="min-h-screen bg-background pt-32 pb-40 relative text-foreground">
            <FluidBackground />

            {/* Header Section */}
            <header className="relative z-10 max-w-7xl mx-auto px-6 mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="space-y-4"
                >
                    <span className="text-xs uppercase tracking-[0.8em] text-neon-purple/60">Ecosistema Digital</span>
                    <h1 className="text-7xl md:text-[10rem] font-serif text-foreground uppercase leading-[0.8] tracking-tighter">
                        {t.title.split(' ')[0]} <br /> {t.title.split(' ')[1] || ''}
                    </h1>
                    <p className="max-w-xl text-muted-foreground font-light mt-12 leading-relaxed">
                        {t.subtitle}
                    </p>
                </motion.div>
            </header>

            {/* Asymmetric Editorial Grid */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {products.map((item, index) => {
                    const isLarge = index % 5 === 0;
                    const isWide = index % 5 === 2;
                    const colSpan = isLarge ? 'md:col-span-8' : isWide ? 'md:col-span-6' : 'md:col-span-4';
                    const aspectRatio = isLarge ? 'aspect-[16/9]' : isWide ? 'aspect-[4/3]' : 'aspect-[3/4]';

                    return (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.8 }}
                            className={`${colSpan} group`}
                        >
                            <Link href={`/productos/${item.id}`} className="block">
                                <div className={`relative ${aspectRatio} overflow-hidden rounded-sm border border-foreground/5 bg-background hover:border-neon-purple/30 transition-all duration-700`}>
                                    <FadeImage
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                    />

                                    {/* Cyber Glow Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <div className="absolute inset-0 pointer-events-none group-hover:shadow-[inset_0_0_100px_rgba(176,251,93,0.05)] transition-all duration-700" />

                                    {/* Metadata & Add to Cart */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                                        <span className="text-[10px] uppercase tracking-widest text-neon-purple mb-2">{item.category}</span>
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <h3 className="text-xl font-serif text-foreground uppercase mb-1">{item.subtitle}: {item.name}</h3>
                                                <p className="text-xs text-muted-foreground tracking-wider">${item.price} USD</p>
                                            </div>
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    addItem({ _id: item.id, slug: item.id, name: `${item.subtitle}: ${item.name}`, price: item.price, image: item.image, quantity: 1 });
                                                }}
                                                className="p-4 rounded-full bg-foreground/5 backdrop-blur-md border border-foreground/10 hover:bg-neon-purple hover:text-black transition-all group/btn relative z-20"
                                            >
                                                <Plus className="w-5 h-5 group-hover/btn:rotate-90 transition-transform duration-500" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>

            <Footer />
        </main>
    );
}
