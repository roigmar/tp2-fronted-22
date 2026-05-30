# ✦ BAM GLAM ✦

> Proyecto React en Equipo — TP2 Tecnicatura en Desarrollo Web  
> 🔗 [Deploy en Vercel](#) <!-- reemplazá con el link real -->

---

## Descripción

BAM GLAM es una Single Page Application (SPA) desarrollada con React y Vite, que representa la evolución del Trabajo Práctico 1 (HTML/CSS/JS) hacia una arquitectura de componentes. La aplicación presenta al equipo de desarrollo a través de un dashboard con estética glamorosa, incluyendo perfiles individuales, un explorador de datos interactivo, consumo de API externa, galería de imágenes y documentación del proceso de desarrollo.

---

## Integrantes

| Nombre | GitHub |
|---|---|
| Andrea Durán | [@andrea](#) |
| Beatriz Gonzalez | [@beatriz](#) |
| Marcela Roig | [@roigmar](https://github.com/roigmar) |

---

## Tecnologías Utilizadas

- **React 18** — biblioteca principal de UI
- **Vite** — bundler y servidor de desarrollo
- **React Router DOM** — navegación entre vistas
- **CSS3** — estilos con variables, gradientes y animaciones
- **Google Fonts** — Playfair Display y Raleway
- **JavaScript ES6+** — lógica de componentes y filtrado

---

## Estructura de Archivos

```
src/
├── assets/
│   ├── capitales/          # Imágenes de la galería
│   ├── proyectosAndrea/    # Capturas de proyectos de Andrea
│   ├── proyectosBeatriz/   # Capturas de proyectos de Beatriz
│   ├── proyectosMarcela/   # Capturas de proyectos de Marcela
│   ├── shoes/              # Imágenes del explorador de zapatos
│   └── *.png / *.jpeg      # Avatares y logos
├── components/
│   ├── Button/             # Componente botón reutilizable
│   ├── Layout/             # Estructura general con splash screen
│   ├── ProductCard/        # Cards del dashboard home
│   └── Sidebar/            # Navegación lateral fija
├── data/
│   ├── integrantes.js      # Datos del equipo (habilidades, proyectos, redes)
│   ├── zapatos.json        # 20 objetos para el explorador
│   └── capitales.json      # Datos de capitales para la galería
├── views/
│   ├── Api/                # Consumo de API externa con paginación
│   ├── Arquitectura/       # Árbol de renderizado visual
│   ├── Explorador/         # Armario de zapatos con buscador y filtros
│   ├── Galeria/            # Galería con lightbox
│   ├── Home/               # Dashboard con grilla de integrantes
│   └── Perfil/             # Perfil individual genérico
├── App.jsx                 # Configuración de rutas
├── main.jsx                # Punto de entrada
└── index.css               # Variables globales, tipografías y reset
```

---

## Guía de Estilos

### Paleta de Colores

| Variable | Hex | Uso |
|---|---|---|
| `--dorado` | `#B8860B` | Títulos y acentos principales |
| `--dorado-claro` | `#D4AF37` | Gradientes y botones |
| `--rosa-glam` | `#F5A7C7` | Nodos de vistas, acentos |
| `--rosa-fuerte` | `#E91E8C` | Bordes activos |
| `--champagne` | `#F7E7CE` | Fondo sidebar |
| `--nude` | `#E8C9A0` | Fondos secundarios y barras |
| `--blanco-perla` | `#FAF8FF` | Fondo principal |
| `--negro-elegante` | `#1A1A2E` | Textos y botón GitHub |
| `--plateado` | `#C0C0C0` | Bordes secundarios |
| `--fondo-principal` | `#FDF6EC` | Background general |

### Tipografías

- **[Playfair Display](https://fonts.google.com/specimen/Playfair+Display)** — títulos y encabezados
- **[Raleway](https://fonts.google.com/specimen/Raleway)** — cuerpo de texto, navegación y botones

### Iconografía

No se utilizó librería de íconos externa — los elementos visuales se resolvieron con CSS, gradientes y efectos de sombra.

---

## Funcionalidades Dinámicas y Componentes Clave

### Splash Screen Animado
Al cargar la aplicación se muestra un splash screen con el logo BAM GLAM sobre fondo champagne, con efecto de brillo y fade out suave implementado con `useEffect` y `useState`.

### Dashboard Home
Grilla de tres cards de integrantes con animación `fadeInUp` escalonada. Al hacer click en una card navega al perfil individual usando `useNavigate`.

### Perfil Individual Genérico
Un único componente `Perfil.jsx` que usa `useParams()` para leer la URL y cargar los datos del integrante correspondiente desde `integrantes.js`. Incluye:
- Barras de progreso animadas con CSS custom properties (`--nivel`)
- Carrusel de proyectos con controles manuales y puntitos indicadores
- Tech Stack con badges interactivos

### Explorador de Zapatos
Renderización dinámica de `zapatos.json` con 20 objetos. Incluye buscador por nombre, marca o color en tiempo real y filtros por categoría implementados con `useState` y `.filter()`.

### API Externa
Consumo asíncrono con manejo de estados de carga y error, y sistema de paginación Anterior/Siguiente con indicador de posición.

### Galería de Capitales
Grid de imágenes con Lightbox integrado — zoom, navegación interna y cierre con tecla ESC.

### Árbol de Renderizado
Diagrama visual de la arquitectura de componentes con código HTML/CSS puro, organizado por niveles y codificado por colores según el tipo de nodo (raíz, vista, componente, data).

---

## Uso de Inteligencia Artificial

| Herramienta | Uso |
|---|---|
| **Claude (Anthropic)** | Asistencia en lógica de componentes, debugging, estructura de datos y CSS |
| **Ideogram** | Generación del logo BAM GLAM y avatares de las integrantes |

**Contenido generado con IA:**
- Logo BAM GLAM con estilo marquesina dorada
- Avatares glamorosos de cada integrante a partir de fotos de perfil
- Imágenes de zapatos de lujo para el explorador
- Imágenes de paisajes de capitales internacionales para la galería

**Nota:** La IA fue utilizada como asistente de desarrollo. La autoría del proyecto, las decisiones de diseño y la integración del código corresponden al equipo.

---

## Evolución del Proyecto

### TP1 → TP2

| Aspecto | TP1 (HTML/CSS/JS) | TP2 (React) |
|---|---|---|
| Estructura | Archivos HTML separados por página | SPA con componentes reutilizables |
| Navegación | Links entre archivos `.html` | React Router con rutas dinámicas |
| Estilo | Comic book (bordo, negro, tipografía Comic Neue) | Glamour (champagne, dorado, Playfair + Raleway) |
| JavaScript | Manipulación directa del DOM | Estado con `useState` y efectos con `useEffect` |
| Datos | Hardcodeados en el HTML | Separados en archivos `.js` y `.json` |
| Componentes | Ninguno | Layout, Sidebar, Perfil, Explorador, Galería, API |

### Cambios y mejoras incorporadas
- Migración completa a arquitectura de componentes React
- Rediseño visual completo — de estilo cómic a estética BAM GLAM
- Separación de datos y presentación
- Splash screen animado al cargar la aplicación
- Sidebar responsive con menú hamburguesa para mobile
- Componente `Perfil` genérico que reemplaza tres archivos HTML separados

---

## Deploy

🔗 [Ver proyecto en Vercel](#) <!-- reemplazá con el link real -->