"use client";
import React, { useEffect, useState } from 'react';

interface HydrationBoundaryProps {
  children: React.ReactNode;
}

export default function HydrationBoundary({ children }: HydrationBoundaryProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <>{children}</>;
  }

  return <>{children}</>;
}
