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
        </section>
    )
}

export default Arquitectura