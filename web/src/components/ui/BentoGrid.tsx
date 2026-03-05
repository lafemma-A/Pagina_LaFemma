"use client";
import React from 'react';
import { cn } from '@/lib/utils';
import FadeImage from '@/components/ui/FadeImage';
import { useCartStore } from '@/store/cart-store';
import { Plus } from 'lucide-react';
import Link from 'next/link';

interface BentoItemProps {
    className?: string;
    title: string;
    description?: string;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}

const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: BentoItemProps) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
                "bg-cyber-gray/40 backdrop-blur-sm border-metal-silver/10 hover:border-metal-silver/30",
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <div className="font-sans font-bold text-metal-silver mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-400 text-xs">
                    {description}
                </div>
            </div>
        </div>
    );
};

export function BentoGrid({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
}

// Items using REAL Assets from RecursosBase — Prices in USD, images included for cart
export const BentoGridDemo = () => {
    const { addItem } = useCartStore();

    const items = [
        {
            _id: "arch-12",
            title: "Colección Eterna",
            price: 890,
            image: "/assets/LA_FEMMA_12.png",
            description: "Prendas que guardan memorias.",
            header: <FadeImage src="/assets/LA_FEMMA_12.png" alt="Colección Eterna" fill className="object-cover rounded-xl" containerClassName="w-full h-full min-h-[6rem] rounded-xl" />,
            className: "md:col-span-2",
        },
        {
            _id: "arch-5",
            title: "Novedades",
            price: 310,
            image: "/assets/LA_FEMMA_5.png",
            description: "Lo último en llegar al atelier.",
            header: <FadeImage src="/assets/LA_FEMMA_5.png" alt="Novedades" fill className="object-cover rounded-xl" containerClassName="w-full h-full min-h-[6rem] rounded-xl" />,
            className: "md:col-span-1",
        },
        {
            _id: "arch-7",
            title: "El Arte de Recordar",
            price: 275,
            image: "/assets/LA_FEMMA_7.png",
            description: "Nuestra filosofía de diseño.",
            header: <FadeImage src="/assets/LA_FEMMA_7.png" alt="Filosofía" fill className="object-cover rounded-xl" containerClassName="w-full h-full min-h-[6rem] rounded-xl" />,
            className: "md:col-span-1",
        },
        {
            _id: "arch-10",
            title: "Accesorios",
            price: 230,
            image: "/assets/LA_FEMMA_10.png",
            description: "Detalles que transforman.",
            header: <FadeImage src="/assets/LA_FEMMA_10.png" alt="Accesorios" fill className="object-cover rounded-xl" containerClassName="w-full h-full min-h-[6rem] rounded-xl" />,
            className: "md:col-span-2",
        },
    ];

    return (
        <BentoGrid className="max-w-6xl mx-auto px-4 md:px-0 py-20">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={
                        <Link href={`/productos/${item._id}`} className="block w-full h-full">
                            {item.header}
                        </Link>
                    }
                    className={item.className}
                    icon={
                        <button
                            onClick={() => addItem({
                                _id: item._id,
                                name: item.title,
                                price: item.price,
                                slug: item._id,
                                image: item.image,
                                quantity: 1
                            })}
                            className="p-2 bg-white/5 hover:bg-neon-purple hover:text-black rounded-full transition-all"
                            aria-label={`Añadir ${item.title} al carrito`}
                        >
                            <Plus className="w-4 h-4" />
                        </button>
                    }
                />
            ))}
        </BentoGrid>
    );
};
