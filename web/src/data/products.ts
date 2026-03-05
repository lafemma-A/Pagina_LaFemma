export interface Product {
    id: string;
    name: string;
    subtitle: string;
    price: number;
    image: string;
    gallery: string[];
    category: string;
    description: string;
    specs: {
        material: string;
        origin: string;
        density: string;
        care: string;
    };
    sizes: string[];
}

export const PRODUCTS: Product[] = [
    {
        id: 'arch-1',
        name: 'El Vacío',
        subtitle: 'Pieza I',
        price: 280,
        image: '/assets/LA_FEMMA_1.jpg',
        gallery: ['/assets/LA_FEMMA_1.jpg', '/assets/LA_FEMMA_7.png', '/assets/LA_FEMMA_6.png'],
        category: 'Memoria',
        description: 'Un vestido que nace del silencio. Corte fluido que acompaña el cuerpo sin imponerse. Pensado para quienes entienden que la elegancia es un gesto, no un grito.',
        specs: { material: 'Seda Italiana 100%', origin: 'Medellín, Colombia', density: '19 Momme — Caída líquida', care: 'Lavado en seco' },
        sizes: ['XS', 'S', 'M', 'L'],
    },
    {
        id: 'arch-2',
        name: 'Seda',
        subtitle: 'Pieza II',
        price: 340,
        image: '/assets/LA_FEMMA_2.png',
        gallery: ['/assets/LA_FEMMA_2.png', '/assets/LA_FEMMA_8.png', '/assets/LA_FEMMA_5.png'],
        category: 'Textura',
        description: 'Capas superpuestas que juegan con la transparencia y la densidad. Una pieza que revela y oculta al mismo tiempo, como la memoria misma.',
        specs: { material: 'Organza de seda y tul', origin: 'Medellín, Colombia', density: '12 Momme — Ultra ligero', care: 'Lavado a mano' },
        sizes: ['S', 'M', 'L'],
    },
    {
        id: 'arch-3',
        name: 'Metal',
        subtitle: 'Pieza III',
        price: 420,
        image: '/assets/LA_FEMMA_3.png',
        gallery: ['/assets/LA_FEMMA_3.png', '/assets/LA_FEMMA_9.png', '/assets/LA_FEMMA_4.png'],
        category: 'Estructura',
        description: 'Estructura rígida que dialoga con lo blando. Detalles metálicos forjados a mano que anclan la pieza al cuerpo con precisión quirúrgica.',
        specs: { material: 'Lana merino con insertos metálicos', origin: 'Medellín, Colombia', density: 'Alta — Estructura definida', care: 'Lavado en seco' },
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
        id: 'arch-4',
        name: 'Gesto',
        subtitle: 'Pieza IV',
        price: 195,
        image: '/assets/LA_FEMMA_4.png',
        gallery: ['/assets/LA_FEMMA_4.png', '/assets/LA_FEMMA_10.png', '/assets/LA_FEMMA_1.png'],
        category: 'Movimiento',
        description: 'Una prenda que solo se completa cuando se mueve. Diseñada para capturar el aire entre los gestos cotidianos.',
        specs: { material: 'Jersey de algodón orgánico', origin: 'Medellín, Colombia', density: 'Media — Drapeado natural', care: 'Lavado a máquina' },
        sizes: ['S', 'M', 'L'],
    },
    {
        id: 'arch-5',
        name: 'Silencio',
        subtitle: 'Pieza V',
        price: 310,
        image: '/assets/LA_FEMMA_5.png',
        gallery: ['/assets/LA_FEMMA_5.png', '/assets/LA_FEMMA_11.png', '/assets/LA_FEMMA_2.png'],
        category: 'Minimalismo',
        description: 'Lo esencial, sin más. Una pieza que elimina todo lo innecesario hasta encontrar la forma perfecta del silencio.',
        specs: { material: 'Crepé de seda', origin: 'Medellín, Colombia', density: '16 Momme — Fluido', care: 'Lavado en seco' },
        sizes: ['XS', 'S', 'M', 'L'],
    },
    {
        id: 'arch-6',
        name: 'Origen',
        subtitle: 'Pieza VI',
        price: 550,
        image: '/assets/LA_FEMMA_6.png',
        gallery: ['/assets/LA_FEMMA_6.png', '/assets/LA_FEMMA_12.png', '/assets/LA_FEMMA_3.png'],
        category: 'Legado',
        description: 'La pieza fundacional. Donde todo comenzó. Un homenaje al primer trazo, al primer corte, al primer recuerdo traducido en tela.',
        specs: { material: 'Seda dupión con bordado artesanal', origin: 'Medellín, Colombia', density: '22 Momme — Peso sustancial', care: 'Solo lavado en seco' },
        sizes: ['S', 'M', 'L'],
    },
    {
        id: 'arch-7',
        name: 'Tacto',
        subtitle: 'Pieza VII',
        price: 275,
        image: '/assets/LA_FEMMA_7.png',
        gallery: ['/assets/LA_FEMMA_7.png', '/assets/LA_FEMMA_1.png', '/assets/LA_FEMMA_8.png'],
        category: 'Sensorial',
        description: 'Diseñada para sentirse antes que verse. Una superficie que invita a tocar, a cerrar los ojos y reconocer la calidad con las manos.',
        specs: { material: 'Terciopelo de seda', origin: 'Medellín, Colombia', density: '18 Momme — Suavidad extrema', care: 'Lavado en seco' },
        sizes: ['XS', 'S', 'M', 'L'],
    },
    {
        id: 'arch-8',
        name: 'Vuelo',
        subtitle: 'Pieza VIII',
        price: 380,
        image: '/assets/LA_FEMMA_8.png',
        gallery: ['/assets/LA_FEMMA_8.png', '/assets/LA_FEMMA_2.png', '/assets/LA_FEMMA_5.png'],
        category: 'Aire',
        description: 'Amplitud controlada. Volúmenes que desafían la gravedad con la precisión de un patronaje obsesivo.',
        specs: { material: 'Gasa de seda multicapa', origin: 'Medellín, Colombia', density: '8 Momme — Etéreo', care: 'Lavado a mano' },
        sizes: ['S', 'M', 'L', 'XL'],
    },
    {
        id: 'arch-9',
        name: 'Corte',
        subtitle: 'Pieza IX',
        price: 460,
        image: '/assets/LA_FEMMA_9.png',
        gallery: ['/assets/LA_FEMMA_9.png', '/assets/LA_FEMMA_3.png', '/assets/LA_FEMMA_6.png'],
        category: 'Geometría',
        description: 'Líneas rectas que encuentran curvas. Una exploración geométrica del cuerpo femenino, donde cada ángulo tiene un propósito.',
        specs: { material: 'Lana fría con corte láser', origin: 'Medellín, Colombia', density: 'Alta — Estructura arquitectónica', care: 'Lavado en seco' },
        sizes: ['XS', 'S', 'M', 'L'],
    },
    {
        id: 'arch-10',
        name: 'Sombra',
        subtitle: 'Pieza X',
        price: 230,
        image: '/assets/LA_FEMMA_10.png',
        gallery: ['/assets/LA_FEMMA_10.png', '/assets/LA_FEMMA_4.png', '/assets/LA_FEMMA_11.png'],
        category: 'Claroscuro',
        description: 'Los contrastes como lenguaje. Oscuro y claro, mate y brillo, rigidez y caída. Todo coexiste en una sola pieza.',
        specs: { material: 'Satén de algodón bicolor', origin: 'Medellín, Colombia', density: 'Media — Equilibrio perfecto', care: 'Lavado a máquina' },
        sizes: ['S', 'M', 'L'],
    },
    {
        id: 'arch-11',
        name: 'Talla',
        subtitle: 'Pieza XI',
        price: 315,
        image: '/assets/LA_FEMMA_11.png',
        gallery: ['/assets/LA_FEMMA_11.png', '/assets/LA_FEMMA_5.png', '/assets/LA_FEMMA_7.png'],
        category: 'Ajuste',
        description: 'Patronaje que celebra cada cuerpo. Sin forzar, sin esconder. Una prenda que se adapta a quien la viste, no al revés.',
        specs: { material: 'Punto milano de viscosa', origin: 'Medellín, Colombia', density: 'Media-alta — Estructura con elasticidad', care: 'Lavado a máquina' },
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
        id: 'arch-12',
        name: 'Final',
        subtitle: 'Pieza XII',
        price: 890,
        image: '/assets/LA_FEMMA_12.png',
        gallery: ['/assets/LA_FEMMA_12.png', '/assets/LA_FEMMA_6.png', '/assets/LA_FEMMA_9.png'],
        category: 'Exclusivo',
        description: 'La pieza de cierre. Edición limitada. Un manifiesto vestible que resume toda la filosofía de LA FEMMA en una sola creación irrepetible.',
        specs: { material: 'Seda charmeuse con acabado artesanal', origin: 'Medellín, Colombia', density: '25 Momme — Lujo absoluto', care: 'Solo lavado en seco' },
        sizes: ['S', 'M'],
    },
];

export function getProductById(id: string): Product | undefined {
    return PRODUCTS.find((p) => p.id === id);
}
