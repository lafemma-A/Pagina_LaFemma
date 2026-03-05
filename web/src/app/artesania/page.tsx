"use client";
import dynamic from 'next/dynamic';
import FadeImage from '@/components/ui/FadeImage';
import Link from 'next/link';
import Footer from '@/components/shared/Footer';

const FluidBackground = dynamic(() => import('@/components/shaders/FluidBackground'), { ssr: false });

export default function Artesania() {
    return (
        <main className="min-h-screen relative bg-[#050505] selection:bg-neon-purple selection:text-black pt-32">
            <FluidBackground />

            {/* Narrative Section 1: Texture & Idea */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center min-h-[80vh]">
                <div className="space-y-12">
                    <span className="text-xs uppercase tracking-[0.6em] text-neon-purple/80">Filosofía de Material</span>
                    <h1 className="text-6xl md:text-8xl font-serif text-metal-silver leading-[0.85] uppercase tracking-tighter">
                        La forma <br /> al servicio <br /> de la idea.
                    </h1>
                    <p className="max-w-md text-gray-400 font-light leading-relaxed text-lg">
                        "Diseñamos desde el concepto y la experiencia. Observamos el cuerpo, los gestos, los silencios, lo cotidiano. Nada está puesto por decoración."
                    </p>
                </div>

                <div className="relative aspect-[3/4] group overflow-hidden rounded-sm border border-white/5">
                    <FadeImage
                        src="/assets/LA_FEMMA_6.png"
                        alt="Textura Detalle"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-12 left-12">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-metal-silver/40">Seda Líquida & Texturas Metálicas</span>
                    </div>
                </div>
            </section>

            {/* Grid: Technical Details */}
            <section className="relative z-10 py-40 px-6 bg-[#050505]/80 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start justify-between border-t border-white/10 pt-20">
                    <div className="max-w-sm">
                        <h2 className="text-2xl font-serif text-metal-silver mb-6 uppercase italic">Lo que permanece</h2>
                        <p className="text-sm text-gray-500 leading-relaxed font-light">
                            Cada pieza nace de una sensación, de algo vivido. La ropa no responde a tendencias rápidas, responde a lo que permanece en el tiempo y en el cuerpo.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full max-w-2xl">
                        <div className="space-y-2">
                            <span className="block text-neon-purple text-xl font-serif tracking-widest">01</span>
                            <span className="block text-[10px] uppercase tracking-widest text-metal-silver/60">Seda Italiana</span>
                            <p className="text-[10px] text-gray-600">Densidad extrema y caída líquida.</p>
                        </div>
                        <div className="space-y-2">
                            <span className="block text-neon-purple text-xl font-serif tracking-widest">02</span>
                            <span className="block text-[10px] uppercase tracking-widest text-metal-silver/60">Metales Fríos</span>
                            <p className="text-[10px] text-gray-600">Detalles forjados para durar décadas.</p>
                        </div>
                        <div className="space-y-2">
                            <span className="block text-neon-purple text-xl font-serif tracking-widest">03</span>
                            <span className="block text-[10px] uppercase tracking-widest text-metal-silver/60">Corte honesto</span>
                            <p className="text-[10px] text-gray-600">Patronaje que acompaña el movimiento.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Footer Section */}
            <section className="relative z-10 py-60 px-6 flex flex-col items-center">
                <h3 className="text-4xl md:text-6xl font-serif text-metal-silver opacity-20 mb-20 text-center uppercase tracking-tighter">
                    Vestir es recordar.
                </h3>
                <Link href="/archivo" className="group flex items-center gap-6">
                    <span className="text-xs uppercase tracking-[0.8em] group-hover:text-neon-purple transition-all">Explorar el Archivo</span>
                    <div className="w-12 h-px bg-white group-hover:w-24 group-hover:bg-neon-purple transition-all" />
                </Link>
            </section>

            <Footer />
        </main>
    );
}
