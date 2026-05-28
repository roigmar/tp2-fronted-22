import './Arquitectura.css'

const Arquitectura = () => {
    return (
        <section className="arquitectura">
            <h1 className="arquitectura-titulo">✦ Árbol de Renderizado ✦</h1>
            <p className="arquitectura-subtitulo">Arquitectura de componentes</p>

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
                    <div className="nodo raiz">
                        <span className="nodo-nombre">App</span>
                        <span className="nodo-badge">raíz</span>
                    </div>
                </div>

                {/* NIVEL 1 */}
                <div className="arbol-nivel">
                    <div className="nodo raiz">
                        <span className="nodo-nombre">Layout</span>
                        <span className="nodo-badge">raíz</span>
                    </div>
                </div>

                {/* NIVEL 2 */}
                <div className="arbol-nivel">
                    <div className="nodo componente">
                        <span className="nodo-nombre">Sidebar</span>
                        <span className="nodo-badge">componente</span>
                    </div>
                    <div className="nodo componente">
                        <span className="nodo-nombre">Outlet</span>
                        <span className="nodo-badge">router</span>
                    </div>
                    <div className="nodo componente">
                        <span className="nodo-nombre">Button</span>
                        <span className="nodo-badge">componente</span>
                    </div>
                </div>

                {/* NIVEL 3 — VISTAS */}
                <div className="arbol-nivel">
                    <div className="nodo vista">
                        <span className="nodo-nombre">Home</span>
                        <span className="nodo-badge">vista</span>
                    </div>
                    <div className="nodo vista">
                        <span className="nodo-nombre">Perfil</span>
                        <span className="nodo-badge">vista</span>
                    </div>
                    <div className="nodo vista">
                        <span className="nodo-nombre">Explorador</span>
                        <span className="nodo-badge">vista</span>
                    </div>
                    <div className="nodo vista">
                        <span className="nodo-nombre">Api</span>
                        <span className="nodo-badge">vista</span>
                    </div>
                    <div className="nodo vista">
                        <span className="nodo-nombre">Galería</span>
                        <span className="nodo-badge">vista</span>
                    </div>
                    <div className="nodo vista">
                        <span className="nodo-nombre">Bitácora</span>
                        <span className="nodo-badge">vista</span>
                    </div>
                </div>

                {/* NIVEL 4 — COMPONENTES HIJOS */}
                <div className="arbol-nivel">
                    <div className="nodo componente">
                        <span className="nodo-nombre">ProductCard</span>
                        <span className="nodo-badge">componente</span>
                    </div>
                    <div className="nodo componente">
                        <span className="nodo-nombre">Barras</span>
                        <span className="nodo-badge">componente</span>
                    </div>
                    <div className="nodo componente">
                        <span className="nodo-nombre">Carrusel</span>
                        <span className="nodo-badge">componente</span>
                    </div>
                    <div className="nodo componente">
                        <span className="nodo-nombre">Tech Stack</span>
                        <span className="nodo-badge">componente</span>
                    </div>
                    <div className="nodo componente">
                        <span className="nodo-nombre">Buscador</span>
                        <span className="nodo-badge">componente</span>
                    </div>
                    <div className="nodo componente">
                        <span className="nodo-nombre">Filtros</span>
                        <span className="nodo-badge">componente</span>
                    </div>
                    <div className="nodo componente">
                        <span className="nodo-nombre">Lightbox</span>
                        <span className="nodo-badge">componente</span>
                    </div>
                </div>

                {/* NIVEL 5 — DATA */}
                <div className="arbol-nivel">
                    <div className="nodo dato">
                        <span className="nodo-nombre">integrantes.js</span>
                        <span className="nodo-badge">data</span>
                    </div>
                    <div className="nodo dato">
                        <span className="nodo-nombre">zapatos.json</span>
                        <span className="nodo-badge">data</span>
                    </div>
                    <div className="nodo dato">
                        <span className="nodo-nombre">capitales.json</span>
                        <span className="nodo-badge">data</span>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Arquitectura