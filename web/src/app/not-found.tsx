import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#050505] flex items-center justify-center px-6">
            <div className="text-center space-y-8 max-w-md">
                <h1 className="text-[20vw] md:text-[12rem] font-serif text-metal-silver/10 leading-none select-none">404</h1>
                <div className="space-y-4">
                    <h2 className="text-2xl font-serif text-metal-silver uppercase tracking-tighter">Página no encontrada</h2>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">
                        Esta pieza no existe en nuestro archivo. Quizás fue un recuerdo que aún no hemos diseñado.
                    </p>
                </div>
                <Link
                    href="/"
                    className="inline-block py-4 px-12 border border-white/10 text-[10px] uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all"
                >
                    Volver al Inicio
                </Link>
            </div>
        </main>
    );
}
