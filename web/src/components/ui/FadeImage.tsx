"use client";
import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface FadeImageProps extends ImageProps {
    containerClassName?: string;
}

export default function FadeImage({
    className,
    containerClassName,
    alt,
    src,
    priority = false,
    sizes,
    ...props
}: FadeImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={cn("relative w-full h-full overflow-hidden bg-cyber-gray/20", containerClassName)}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative w-full h-full"
            >
                <Image
                    src={src}
                    alt={alt}
                    className={cn("transition-transform duration-700 ease-in-out hover:scale-105", className)}
                    onLoad={() => setIsLoaded(true)}
                    priority={priority}
                    sizes={sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
                    quality={75}
                    {...props}
                />
            </motion.div>

            {/* Skeleton/Blur Placeholder while loading */}
            {!isLoaded && (
                <div className="absolute inset-0 bg-neutral-900 animate-pulse z-0" />
            )}
        </div>
    );
}
