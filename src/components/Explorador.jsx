import { useState } from 'react'
import zapatos from '../data/zapatos.json'
import './Explorador.css'

const Explorador = () => {
    const [busqueda, setBusqueda] = useState('')
    const [filtroCategoria, setFiltroCategoria] = useState('todas')

    const categorias = ['todas', ...new Set(zapatos.map(z => z.categoria))]

    const resultados = zapatos.filter(zapato => {
        const coincideBusqueda = zapato.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
            zapato.marca.toLowerCase().includes(busqueda.toLowerCase()) ||
            zapato.color.toLowerCase().includes(busqueda.toLowerCase())

        const coincideCategoria = filtroCategoria === 'todas' || zapato.categoria === filtroCategoria

        return coincideBusqueda && coincideCategoria
    })

    return (
        <section className="explorador">
            <h1 className="explorador-titulo">✦ El Armario ✦</h1>
            <p className="explorador-subtitulo">Colección de temporada</p>

            {/* CONTROLES */}
            <div className="explorador-controles">
                <input
                    type="text"
                    placeholder="Buscar por nombre, marca o color..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="explorador-buscador"
                />

                <div className="explorador-filtros">
                    {categorias.map(cat => (
                        <button
                            key={cat}
                            className={`filtro-btn ${filtroCategoria === cat ? 'activo' : ''}`}
                            onClick={() => setFiltroCategoria(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* GRID DE ZAPATOS */}
            <div className="explorador-grid">
                {resultados.length > 0 ? (
                    resultados.map(zapato => (
                        <div key={zapato.id} className="zapato-card">
                            <img
                                src={`/src/assets/shoes/${zapato.imagen}`}
                                alt={zapato.nombre}
                                className="zapato-img"
                            />
                            <div className="zapato-info">
                                <h3 className="zapato-nombre">{zapato.nombre}</h3>
                                <p className="zapato-marca">{zapato.marca}</p>
                                <div className="zapato-detalles">
                                    <span className="zapato-badge">{zapato.categoria}</span>
                                    <span className="zapato-badge">{zapato.ocasion}</span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="explorador-vacio">No se encontraron zapatos ✦</p>
                )}
            </div>
        </section>
    )
}

export default Explorador