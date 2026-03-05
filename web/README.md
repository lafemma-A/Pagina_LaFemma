# LA FEMMA — Digital E-Commerce Platform

> "Vestir es recordar. Diseño hecho para permanecer."

Plataforma de comercio electrónico (E-commerce) de alta gama y diseño maximalista/sensorial para la marca de moda **LA FEMMA**, basada en Medellín, Colombia.

![LA FEMMA Banner](public/assets/Logo_LAFEMMA.png)

## 📌 Tecnologías Base (Tech Stack)

La plataforma está construida utilizando las librerías y frameworks más modernos para garantizar rendimiento, seguridad y una experiencia visual inmersiva.

- **Framework Core:** [Next.js 16.1.6](https://nextjs.org/) (App Router, Turbopack)
- **Librería de UI:** [React 19.2.3](https://react.dev/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) (diseño custom vía `globals.css`)
- **Animaciones 2D:** [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **Animaciones 3D (WebGL):** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) & [Three.js](https://threejs.org/) (Para `FluidBackground`)
- **Gestión de Estado Global:** [Zustand](https://github.com/pmndrs/zustand) (Para el Carrito de Compras)
- **Sistema de Pagos Simulados / Listo para Integrar:** [Stripe](https://stripe.com/)
- **Gestión de Contenido (Preparado para Integrar):** [Sanity.io](https://www.sanity.io/)

---

## 🏗️ Arquitectura y Estructura del Proyecto

El código fuente principal se encuentra en la carpeta `src/`.

```text
src/
├── app/                  # Rutas principales (Home, Archivo, Artesanía, Historia, Checkout, Productos)
│   ├── globals.css       # Tokens de diseño Tailwind v4 y colores de marca
│   ├── layout.tsx        # Layout maestro (Navbar, Footer, Providers)
│   └── not-found.tsx     # Página 404 personalizada
│
├── components/           # Componentes UI reutilizables
│   ├── shaders/          # Componentes WebGL/Three.js (FluidBackground)
│   ├── shared/           # Footer, Navbar
│   └── ui/               # BentoGrid, CartSidebar, FadeImage, KineticText, etc.
│
├── data/                 # Base de datos mockeada e info estática temporal
│   └── products.ts       # Catálogo de piezas
│
├── lib/                  # Utilidades y configuración de clientes
│   ├── stripe.ts         # Cliente de Stripe
│   ├── sanity.ts         # Cliente de CMS Sanity
│   └── utils.ts          # Funciones de ayuda general (ej. 'cn' para Tailwind)
│
└── store/                # Estado global
    └── cart-store.ts     # Lógica del carrito con persistencia local (Zustand)
```

---

## 🚀 Empezando (Getting Started)

### Requisitos Previos
- Node.js versión **20.x** o superior.
- Gestor de paquetes `npm`, `yarn` o `pnpm`.

### Instalación
1. Clona el repositorio.
2. Navega al directorio de la aplicación:
   ```bash
   cd web
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

### Desarrollo Local
Arranca el servidor en modo desarrollo:
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la página.

### Compilando para Producción
Para compilar la aplicación y verificar optimizaciones:
```bash
npm run build
npm run start
```

---

## 📖 Manual de Buenas Prácticas (Best Practices) Impuestas

Durante el ciclo de desarrollo y la **Auditoría de Rendimiento de Marzo 2026**, se implementaron y deben seguirse las siguientes reglas estrictas para mantener el grado de Calidad.

### 1. Optimizaciones de Rendimiento (Imágenes y WebGL)
- **Uso Estricto de `<FadeImage>` (basado en `next/image`):** TODA imagen debe usar el componente `FadeImage` alojado en `components/ui/FadeImage.tsx`. Este componente se encarga de servir las imágenes en WebP/AVIF con tamaños precalculados (`sizes`) para dispositivos móviles y evitar First Contentful Paint pesados, logrando evitar descargar imágenes enteras (hasta 3MB cada una) en móviles.
- **Lazy Loading de Scripts Pesados:** Componentes no cruciales o pesados, como el lienzo 3D de `FluidBackground`, TIENEN que importarse usando `dynamic` de `next/dynamic` con `{ ssr: false }`. Evita cargar *Three.js* de forma síncrona en el bundle principal.

### 2. Seguridad
- **Content Security Policy (CSP):** El archivo `middleware.ts` del root intercepta y refuerza todas las consultas usando encabezados de seguridad (HSTS, CSP, XSS-Protection). Modifica el archivo únicamente si integras nuevos dominios externos (ej. iframes, CDNs nuevas de imágenes).
- **Referrer-Policy:** Definido globalmente en `next.config.ts`.
- **Links Externos:** Cualquier etiqueta `<a>` con `target="_blank"` debe obligatoriamente poseer el atributo `rel="noopener noreferrer"`.

### 3. SEO y Accesibilidad (a11y)
- **Metadata por Página:** Cada subcarpeta en `app/` (ej. `app/archivo`) posee un archivo `layout.tsx` el cual exporta `metadata` única para SEO y OpenGraph (`og:title`, `og:description`).
- **Botones y Formularios:** Aquellos botones que usen puros íconos deben llevar su respectivo atributo `aria-label`. Los Labels de formulario (ej. en el Checkout) deben estar integrados a inputs de forma adecuada con su atributo `id`.

### 4. Arquitectura de Estado
- Evitar prop-drilling. El carrito y sus lógicas compartidas entre componentes dispares (Botón agregar en PDP, Header contador de ítems, y Sidebar Carrito) está gobernado por [Zustand](https://github.com/pmndrs/zustand) vía `src/store/cart-store.ts`.  Tiene un cache `localstorage` incrustado por convención.

---

## 📱 Flujos Críticos 

1. **Home:** Componentes de introducción animada (`KineticText`, `React Three Fiber`).
2. **El Archivo (Catálogo):** Grillas de exhibición inmersivas (`BentoGrid`). Uso asíncrono.
3. **Product Detail Page (PDP):** Desglose detallado vía rutas dinámicas (`app/productos/[id]/page.tsx`).
4. **Resumen de Pedido (Checkout):** Integración de formularios, resumen visual de ítems estandarizando la moneda (USD), y simulacro de procesamiento seguro y UI de pantalla de éxito final.

***

*Creado por Antigravity Systems (Marzo 2026).*
