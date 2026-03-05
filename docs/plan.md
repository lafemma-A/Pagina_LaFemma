# LA FEMMA - Plan Maestro de Arquitectura e Implementación

## Visión del Proyecto
**LA FEMMA** Ecosistema Digital 2026. Un enfoque "Senior Full-Stack" para el e-commerce de moda de lujo.
**Atributos Clave:** Visualmente Impactante ("Vibe Coding"), Escalable (MACH), Nativo-Agente, Obsesionado con el Rendimiento.

## Stack Tecnológico (Confirmado)
- **Núcleo:** Next.js 15+ (App Router), React Server Components.
- **Estilos:** Tailwind CSS (Base), Shaders GLSL (Visuales), CSS Modules (Detalles).
- **CMS:** Sanity.io ("Content Lake" Headless).
- **Comercio:** Lógica de Carrito Personalizada (Edge) + Stripe Connect (Pagos).
- **Animación:** GSAP (Scroll), Framer Motion (Interacciones), Three.js (3D).
- **Auth:** Clerk + Passkeys (FIDO2).

## Plan de Ejecución por Fases

### FASE 0: Arquitectura y Configuración
- [x] Definir Stack Tecnológico y Dependencias.
- [x] Crear Documentación (`plan.md`).
- [ ] Inicializar Proyecto Git y Next.js en carpeta `web`.

### FASE 1: UI/UX "La Vibra" (The Vibe)
- [ ] **Bento Grid 2.0**: Grilla modular y adaptativa para storytelling.
- [ ] **Maximalismo Táctil**: Texturas digitales (seda/metal) vía WebGL/Shaders.
- [ ] **Tipografía Cinética**: Texto que reacciona a la velocidad del scroll e interacción.
- [ ] **Responsive**: Navegación alineada a la "Thumb Zone" para móviles.

### FASE 2: Ingeniería de Rendimiento
- [ ] **Pipeline de Imágenes**: Conversión automática de Sanity a AVIF/WebP.
- [ ] **Estrategia de Carga**: Placeholders tipo Blur-up.
- [ ] **Métricas**: Objetivo LCP < 1.0s, CLS = 0.

### FASE 3: Lógica y Comercio
- [ ] **Carrito**: Estado persistente en Edge (Cookies/LocalStorage + Sincronización Servidor).
- [ ] **Checkout**: Integración Stripe Elements (PCI-DSS manejado por Stripe).
- [ ] **Portal de Usuario**: "Mi Archivo" - historial rico y recomendaciones.

### FASE 4: Seguridad
- [ ] **CSP**: Content Security Policy (Cabeceras estrictas).
- [ ] **SRI**: Integridad de Subrecursos para scripts externos.
- [ ] **Anti-Fraude**: Implementación de 3D Secure 2.0 vía Stripe.

## Estándares de Desarrollo
- **Rutas Absolutas**: Usadas para todas las importaciones (`@/components/...`).
- **TDD**: Tests escritos antes de lógica compleja.
- **Linting**: ESLint Estricto + Prettier.
