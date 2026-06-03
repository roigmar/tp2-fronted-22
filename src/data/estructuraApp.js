export const arquitecturaData = {
    tipo: "raiz",
    nombre: "App",
    badge: "raíz",
    hijos: [
        {
            tipo: "componente",
            nombre: "Layout",
            badge: "superior",
            hijos: [
                {
                    tipo: "componente",
                    nombre: "Sidebar",
                    badge: "superior"
                },
                {
                    tipo: "componente",
                    nombre: "Outlet",
                    badge: "router",
                    ramas: [
                        {
                            nombre: "Home",
                            tipo: "vista",
                            badge: "vista",
                            hijos: [
                                { tipo: "dato", nombre: "integrantes.js", badge: "data" }
                            ]
                        },
                        {
                            nombre: "Explorador",
                            tipo: "vista",
                            badge: "vista",
                            hijos: [
                                { tipo: "componente", nombre: "ProductCard", badge: "hijo" },
                                { tipo: "componente", nombre: "Button", badge: "hijo" },
                                { tipo: "dato", nombre: "zapatos.json", badge: "data" }
                            ]
                        },
                        {
                            nombre: "Api",
                            tipo: "vista",
                            badge: "vista",
                            hijos: [
                                { tipo: "componente", nombre: "ProductCard", badge: "hijo" },
                                { tipo: "componente", nombre: "Button", badge: "hijo" },
                                { tipo: "dato", nombre: "Fetch (API)", badge: "data" }
                            ]
                        },
                        {
                            nombre: "Galería",
                            tipo: "vista",
                            badge: "vista",
                            hijos: [
                                { tipo: "componente", nombre: "Lightbox", badge: "hijo" },
                                { tipo: "dato", nombre: "capitales.json", badge: "data" }
                            ]
                        },
                        {
                            nombre: "Perfil",
                            tipo: "vista",
                            badge: "vista",
                            hijos: [
                                { tipo: "componente", nombre: "Carrusel", badge: "hijo" },
                                { tipo: "componente", nombre: "SkillBar", badge: "hijo" },
                                { tipo: "componente", nombre: "TechBadge", badge: "hijo" },
                                { tipo: "dato", nombre: "integrantes.js", badge: "data" },
                                { tipo: "dato", nombre: "techIcons.js", badge: "data" }
                            ]
                        },
                        {
                            nombre: "Arquitectura",
                            tipo: "vista",
                            badge: "vista",
                            hijos: [
                                { tipo: "componente", nombre: "RenderNode", badge: "hijo" },
                                { tipo: "componente", nombre: "TreeNodeMobile", badge: "hijo" },
                                { tipo: "dato", nombre: "estructuraApp.js", badge: "data" }
                            ]
                        },
                        {
                            nombre: "Bitácora",
                            tipo: "vista",
                            badge: "vista",
                            hijos: [
                                { tipo: "componente", nombre: "HitoItem", badge: "hijo" },
                                { tipo: "dato", nombre: "hitos.json", badge: "data" },
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
