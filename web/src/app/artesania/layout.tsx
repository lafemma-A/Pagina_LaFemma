import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Artesanía | LA FEMMA',
    description: 'Descubre los materiales, las texturas y la filosofía detrás de cada pieza de LA FEMMA. Hecho a mano en Colombia.',
    openGraph: {
        title: 'Artesanía | LA FEMMA',
        description: 'Materiales premium y técnica artesanal colombiana.',
        type: 'website',
    },
};

export default function ArtesaniaLayout({ children }: { children: React.ReactNode }) {
    return children;
}
