import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'El Archivo | LA FEMMA',
    description: 'Explora nuestra colección de piezas honestas que conectan la memoria con el diseño. Ediciones exclusivas desde Colombia.',
    openGraph: {
        title: 'El Archivo | LA FEMMA',
        description: 'Colección exclusiva de moda artesanal colombiana.',
        type: 'website',
    },
};

export default function ArchivoLayout({ children }: { children: React.ReactNode }) {
    return children;
}
