"use client";
import dynamic from 'next/dynamic';
import Footer from '@/components/shared/Footer';

const FluidBackground = dynamic(() => import('@/components/shaders/FluidBackground'), { ssr: false });

export default function Historia() {
    return (
        <main className="min-h-screen relative bg-deep-black selection:bg-neon-purple selection:text-black pt-32">
            <FluidBackground />

            <div className="relative z-10 max-w-3xl mx-auto px-6 pb-24">
                <header className="mb-20">
                    <h1 className="text-6xl md:text-8xl font-serif text-metal-silver mb-8 leading-none">Nuestra <br /> Historia</h1>
                    <p className="text-xl text-gray-400 font-light italic tracking-wide">
                        "¿Cuándo pertenecemos?"
                    </p>
                </header>

                <section className="space-y-16 text-gray-300 leading-relaxed text-lg font-light">
                    <div className="space-y-6">
                        <p>
                            LA FEMMA nace de una pregunta que me ha acompañado mucho tiempo: ¿cuándo pertenecemos?
                        </p>
                        <p>
                            Nunca tuve una respuesta clara. Empecé a mirar mis recuerdos, mis formas de estar, lo que me había marcado sin darme cuenta. Entendí que ahí había un hilo. Que mis recuerdos no eran solo pasado, eran lo que me daba dirección y sentido.
                        </p>
                    </div>

                    <div className="border-l border-white/10 pl-8 italic text-metal-silver/60">
                        "Diseñar se volvió una forma de explorar eso. De entenderme. De traducir lo que siento en algo que se puede vestir."
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl font-serif text-metal-silver uppercase tracking-widest">Lo que permanece</h2>
                        <p>
                            Aquí la ropa no responde a tendencias rápidas, responde a lo que permanece en el tiempo y en el cuerpo. Creamos piezas honestas, donde la forma, el material y la textura están al servicio de la idea. Nada está puesto por decoración. Todo tiene un porqué.
                        </p>
                    </div>

                    <div className="bg-white/5 p-12 rounded-2xl backdrop-blur-3xl border border-white/5">
                        <blockquote className="text-2xl font-serif text-metal-silver mb-4 uppercase tracking-tighter">
                            Vestir es recordar.
                        </blockquote>
                        <p className="text-sm text-gray-500 tracking-[0.2em] uppercase">
                            LA FEMMA diseña para quienes valoran lo que permanece.
                        </p>
                    </div>
                </section>

                <footer className="mt-32 pt-12 border-t border-white/10 opacity-60">
                    <p className="text-sm tracking-widest uppercase">Maria Fernanda Alfonso Lopez — Fundadora</p>
                </footer>
            </div>
            <Footer />
        </main>
    );
}
