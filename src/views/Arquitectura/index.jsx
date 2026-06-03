import RenderNode from '../../components/RenderNode'
import TreeNodeMobile from '../../components/TreeNodeMobile'
import { arquitecturaData } from '../../data/estructuraApp'
import './Arquitectura.css'

const Arquitectura = () => {
    return (
        <section className="arquitectura">
            <h1 className="arquitectura-titulo">✦ Arquitectura ✦</h1>
            <p className="arquitectura-subtitulo">Árbol de Renderizado</p>

            <div className="leyenda">
                <span className="leyenda-item raiz">Raíz</span>
                <span className="leyenda-item vista">Vista</span>
                <span className="leyenda-item componente">Componente</span>
                <span className="leyenda-item dato">Data</span>
            </div>

            {/* VISTA ESCRITORIO (Árbol horizontal) */}
            <div className="arbol-desktop">
                <div className="arbol-wrapper">
                    <div className="arbol">

                        {/* NIVEL 0 — RAÍZ */}
                        <div className="arbol-nivel">
                            <RenderNode tipo={arquitecturaData.tipo} nombre={arquitecturaData.nombre} badge={arquitecturaData.badge} />
                        </div>

                        {/* NIVEL 1 — ESTRUCTURA PRINCIPAL */}
                        <div className="arbol-nivel">
                            <RenderNode tipo={arquitecturaData.hijos[0].tipo} nombre={arquitecturaData.hijos[0].nombre} badge={arquitecturaData.hijos[0].badge} />
                        </div>

                        {/* NIVEL 2 — INTERIOR DEL LAYOUT */}
                        <div className="arbol-nivel">
                            <RenderNode tipo={arquitecturaData.hijos[0].hijos[0].tipo} nombre={arquitecturaData.hijos[0].hijos[0].nombre} badge={arquitecturaData.hijos[0].hijos[0].badge} />
                            <RenderNode tipo={arquitecturaData.hijos[0].hijos[1].tipo} nombre={arquitecturaData.hijos[0].hijos[1].nombre} badge={arquitecturaData.hijos[0].hijos[1].badge} />
                        </div>

                        {/* RAMAS — VISTAS CON SUS HIJOS */}
                        <div className="arbol-ramas-container">
                            {arquitecturaData.hijos[0].hijos[1].ramas.map((rama, index) => (
                                <div className="arbol-rama" key={index}>
                                    <RenderNode tipo={rama.tipo} nombre={rama.nombre} badge={rama.badge} />
                                    <div className="arbol-hijos">
                                        {rama.hijos && rama.hijos.map((hijo, idx) => (
                                            <RenderNode key={idx} tipo={hijo.tipo} nombre={hijo.nombre} badge={hijo.badge} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            {/* VISTA MOBILE (Árbol vertical recursivo) */}
            <div className="arbol-mobile">
                <ul className="tree-root">
                    <TreeNodeMobile node={arquitecturaData} />
                </ul>
            </div>
        </section>
    )
}

export default Arquitectura