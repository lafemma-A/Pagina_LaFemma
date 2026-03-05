import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import CartSidebar from "@/components/ui/CartSidebar";
import Navbar from "@/components/shared/Navbar";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PageTransition from "@/components/shared/PageTransition";
import { ThemeProvider } from "@/components/theme-provider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lafemma.dpdns.org'),
  title: {
    default: "LA FEMMA | Diseño hecho para recordar",
    template: "%s | LA FEMMA"
  },
  description: "LA FEMMA es un mundo sensorial. Una marca de moda de lujo donde el diseño conecta con la memoria. Piezas exclusivas, archivo y artesanía.",
  keywords: ["moda", "lujo", "e-commerce", "diseño", "archivo", "artesanía", "ropa", "fashion", "luxury 2026"],
  authors: [{ name: "LA FEMMA" }],
  creator: "LA FEMMA",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.lafemma.dpdns.org",
    title: "LA FEMMA | Luxury Fashion",
    description: "Vestir es recordar. Colecciones exclusivas y artesanía de lujo.",
    siteName: "LA FEMMA",
  },
  twitter: {
    card: "summary_large_image",
    title: "LA FEMMA | Luxury Fashion",
    description: "Vestir es recordar. Colecciones exclusivas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "LA FEMMA",
  "url": "https://www.lafemma.dpdns.org",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.lafemma.dpdns.org/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <CartSidebar />
          <WhatsAppButton />
          <PageTransition>
            {children}
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
