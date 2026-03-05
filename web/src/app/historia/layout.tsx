import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Nuestra Historia | LA FEMMA',
    description: 'Conoce el origen de LA FEMMA. Una marca nacida del recuerdo, el diseño y la identidad colombiana.',
    openGraph: {
        title: 'Nuestra Historia | LA FEMMA',
        description: 'La historia detrás de la marca de moda artesanal.',
        type: 'website',
    },
};

export default function HistoriaLayout({ children }: { children: React.ReactNode }) {
    return children;
}
