import RenderNode from '../../components/RenderNode'
import './Arquitectura.css'

const Arquitectura = () => {
    return (
        <section className="arquitectura">
            <h1 className="arquitectura-titulo">✦ Arquitectura ✦</h1>
            <p className="arquitectura-subtitulo">Árbol de Renderizado</p>

            {/* LEYENDA */}
            <div className="leyenda">
                <span className="leyenda-item raiz">Raíz</span>
                <span className="leyenda-item vista">Vista</span>
                <span className="leyenda-item componente">Componente</span>
                <span className="leyenda-item dato">Data</span>
            </div>

            {/* VISTA DESKTOP */}
            <div className="arbol-desktop">
                <div className="arbol-wrapper">
                    <div className="arbol">

                        {/* NIVEL 0 — RAÍZ */}
                        <div className="arbol-nivel">
                            <RenderNode tipo="raiz" nombre="App" badge="raíz" />
                        </div>

                        {/* NIVEL 1 — ESTRUCTURA PRINCIPAL */}
                        <div className="arbol-nivel">
                            <RenderNode tipo="componente" nombre="Layout" badge="superior" />
                        </div>

                        {/* NIVEL 2 — INTERIOR DEL LAYOUT */}
                        <div className="arbol-nivel">
                            <RenderNode tipo="componente" nombre="Sidebar" badge="superior" />
                            <RenderNode tipo="componente" nombre="Outlet" badge="router" />
                        </div>

                        {/* RAMAS — VISTAS CON SUS HIJOS */}
                        <div className="arbol-ramas-container">
                            
                            {/* RAMA HOME */}
                            <div className="arbol-rama">
                                <RenderNode tipo="vista" nombre="Home" badge="vista" />
                                <div className="arbol-hijos">
                                    <RenderNode tipo="dato" nombre="integrantes.js" badge="data" />
                                </div>
                            </div>

                            {/* RAMA EXPLORADOR */}
                            <div className="arbol-rama">
                                <RenderNode tipo="vista" nombre="Explorador" badge="vista" />
                                <div className="arbol-hijos">
                                    <RenderNode tipo="dato" nombre="zapatos.json" badge="data" />
                                    <RenderNode tipo="componente" nombre="ProductCard" badge="hijo" />
                                    <RenderNode tipo="componente" nombre="Button" badge="hijo" />
                                </div>
                            </div>

                            {/* RAMA API */}
                            <div className="arbol-rama">
                                <RenderNode tipo="vista" nombre="Api" badge="vista" />
                                <div className="arbol-hijos">
                                    <RenderNode tipo="dato" nombre="Fetch (API)" badge="data" />
                                    <RenderNode tipo="componente" nombre="ProductCard" badge="hijo" />
                                    <RenderNode tipo="componente" nombre="Button" badge="hijo" />
                                </div>
                            </div>

                            {/* RAMA GALERÍA */}
                            <div className="arbol-rama">
                                <RenderNode tipo="vista" nombre="Galería" badge="vista" />
                                <div className="arbol-hijos">
                                    <RenderNode tipo="dato" nombre="capitales.json" badge="data" />
                                    <RenderNode tipo="componente" nombre="Lightbox" badge="hijo" />
                                </div>
                            </div>

                            {/* RAMA PERFIL */}
                            <div className="arbol-rama">
                                <RenderNode tipo="vista" nombre="Perfil" badge="vista" />
                                <div className="arbol-hijos">
                                    <RenderNode tipo="dato" nombre="integrantes.js" badge="data" />
                                    <RenderNode tipo="dato" nombre="techIcons.js" badge="data" />
                                    <RenderNode tipo="componente" nombre="Carrusel" badge="hijo" />
                                    <RenderNode tipo="componente" nombre="SkillBar" badge="hijo" />
                                    <RenderNode tipo="componente" nombre="TechBadge" badge="hijo" />
                                </div>
                            </div>

                            {/* RAMA ARQUITECTURA */}
                            <div className="arbol-rama">
                                <RenderNode tipo="vista" nombre="Arquitectura" badge="vista" />
                                <div className="arbol-hijos">
                                    <RenderNode tipo="componente" nombre="RenderNode" badge="hijo" />
                                </div>
                            </div>

                            {/* RAMA BITÁCORA */}
                            <div className="arbol-rama">
                                <RenderNode tipo="vista" nombre="Bitácora" badge="vista" />
                                <div className="arbol-hijos">
                                    <RenderNode tipo="dato" nombre="hitos.json" badge="data" />
                                    <RenderNode tipo="componente" nombre="Lightbox" badge="hijo" />
                                </div>  
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {/* VISTA MOBILE */}
            <div className="arbol-mobile">
                <ul className="tree-root">
                    <li>
                        <RenderNode tipo="raiz" nombre="App" badge="raíz" />
                        <ul>
                            <li>
                                <RenderNode tipo="componente" nombre="Layout" badge="superior" />
                                <ul>
                                    <li><RenderNode tipo="componente" nombre="Sidebar" badge="superior" /></li>
                                    <li>
                                        <RenderNode tipo="componente" nombre="Outlet" badge="router" />
                                        <ul>
                                            <li>
                                                <RenderNode tipo="vista" nombre="Home" badge="vista" />
                                                <ul>
                                                    <li><RenderNode tipo="dato" nombre="integrantes.js" badge="data" /></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <RenderNode tipo="vista" nombre="Explorador" badge="vista" />
                                                <ul>
                                                    <li><RenderNode tipo="dato" nombre="zapatos.json" badge="data" /></li>
                                                    <li><RenderNode tipo="componente" nombre="ProductCard" badge="hijo" /></li>
                                                    <li><RenderNode tipo="componente" nombre="Button" badge="hijo" /></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <RenderNode tipo="vista" nombre="Api" badge="vista" />
                                                <ul>
                                                    <li><RenderNode tipo="dato" nombre="Fetch (API)" badge="data" /></li>
                                                    <li><RenderNode tipo="componente" nombre="ProductCard" badge="hijo" /></li>
                                                    <li><RenderNode tipo="componente" nombre="Button" badge="hijo" /></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <RenderNode tipo="vista" nombre="Galería" badge="vista" />
                                                <ul>
                                                    <li><RenderNode tipo="dato" nombre="capitales.json" badge="data" /></li>
                                                    <li><RenderNode tipo="componente" nombre="Lightbox" badge="hijo" /></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <RenderNode tipo="vista" nombre="Perfil" badge="vista" />
                                                <ul>
                                                    <li><RenderNode tipo="dato" nombre="integrantes.js" badge="data" /></li>
                                                    <li><RenderNode tipo="dato" nombre="techIcons.js" badge="data" /></li>
                                                    <li><RenderNode tipo="componente" nombre="Carrusel" badge="hijo" /></li>
                                                    <li><RenderNode tipo="componente" nombre="SkillBar" badge="hijo" /></li>
                                                    <li><RenderNode tipo="componente" nombre="TechBadge" badge="hijo" /></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <RenderNode tipo="vista" nombre="Arquitectura" badge="vista" />
                                                <ul>
                                                    <li><RenderNode tipo="componente" nombre="RenderNode" badge="hijo" /></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <RenderNode tipo="vista" nombre="Bitácora" badge="vista" />
                                                <ul>
                                                    <li><RenderNode tipo="dato" nombre="hitos.json" badge="data" /></li>
                                                    <li><RenderNode tipo="componente" nombre="Lightbox" badge="hijo" /></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Arquitectura