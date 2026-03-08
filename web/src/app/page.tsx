"use client";
import dynamic from 'next/dynamic';
import FadeImage from '@/components/ui/FadeImage';
import Footer from '@/components/shared/Footer';
import Link from 'next/link';
import { useLangStore } from '@/store/lang-store';
import { translations } from '@/lib/translations';

// Lazy load heavy components to reduce initial bundle
const FluidBackground = dynamic(() => import('@/components/shaders/FluidBackground'), { ssr: false });
const KineticText = dynamic(() => import('@/components/ui/KineticText'), { ssr: false });
const BentoGridDemo = dynamic(() => import('@/components/ui/BentoGrid').then(mod => ({ default: mod.BentoGridDemo })), { ssr: false });

export default function Home() {
  const { lang } = useLangStore();
  const t = translations[lang];

  return (
    <main className="min-h-screen relative overflow-hidden bg-background text-foreground selection:bg-neon-purple selection:text-black">

      {/* 3D Shader Background */}
      <FluidBackground />

      {/* Fallback/Overlay Gradient for depth */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_0%,_var(--background)_90%)] z-0 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 min-h-[95vh] flex flex-col items-center justify-center px-6">
        {/* Brand Symbol */}
        <div className="relative w-32 h-32 mb-4 opacity-70">
          <img
            src="/assets/Logo_LAFEMMA.png"
            alt="LA FEMMA Symbol"
            className="w-full h-full object-contain"
          />
        </div>

        <h1 className="font-serif text-[16vw] md:text-[14vw] leading-[0.7] text-foreground mix-blend-difference hover:italic transition-all duration-1000 cursor-default tracking-tighter uppercase">
          LA FEMMA
        </h1>

        <p className="mt-16 font-sans text-xs md:text-sm text-gray-500 dark:text-gray-400 tracking-[0.6em] uppercase font-light animate-pulse">
          {t.hero.subtitle}
        </p>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-12 opacity-60 hover:opacity-100 transition-opacity">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Kinetic Typography Divider */}
      <div className="relative z-20 py-8">
        <KineticText text={t.kinetic} />
      </div>

      {/* Brand Intro / Philosophy */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-5xl font-serif text-foreground leading-tight">
            {t.intro.heading}
          </h2>
          <div className="w-px h-24 bg-gradient-to-b from-foreground/20 to-transparent mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 font-light tracking-wide leading-relaxed">
            {t.intro.body}
          </p>
        </div>
      </section>

      {/* Grid Showcase */}
      <section id="archivo" className="relative z-10 py-24 px-4 bg-foreground/5 dark:bg-black/20">
        <div className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-end border-b border-foreground/10 pb-8">
          <div>
            <h2 className="text-4xl font-serif text-foreground mb-2">{t.archivePreview.title}</h2>
            <p className="text-gray-600 dark:text-gray-500 text-sm max-w-xs">{t.archivePreview.subtitle}</p>
          </div>
          <Link href="/archivo" className="hidden md:block text-xs uppercase tracking-widest border-b border-foreground pb-1 hover:text-neon-purple hover:border-neon-purple transition-colors mt-4 md:mt-0">
            {t.archivePreview.exploreBtn}
          </Link>
        </div>
        <BentoGridDemo />
      </section>

      {/* Final Call to Action / Brand Closing */}
      <section className="relative z-10 py-40 px-6 border-t border-foreground/5">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.5em] text-neon-purple mb-8 block">{t.cta.subtitle}</span>
          <h3 className="text-5xl md:text-7xl font-serif text-foreground mb-12 italic">
            {t.cta.title}
          </h3>
          <Link href="/historia" className="inline-block py-4 px-12 border border-foreground/20 uppercase tracking-widest text-xs hover:bg-foreground hover:text-background transition-all">
            {t.cta.btn}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
