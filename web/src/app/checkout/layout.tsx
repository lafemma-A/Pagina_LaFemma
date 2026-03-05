import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Checkout | LA FEMMA',
    description: 'Completa tu compra de moda artesanal colombiana. Envío cortesía y transacción segura.',
    robots: { index: false, follow: false },
};

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
