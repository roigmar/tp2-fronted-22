import { useState, useEffect } from 'react'
import './Api.css'
import ProductCard from './ProductCard'
import Button from './Button'

const Api = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [paginaActual, setPaginaActual] = useState(1)

    const productosPorPagina = 8

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                // Obtenemos maquillaje de la marca Maybelline
                const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
                if (!response.ok) {
                    throw new Error('Error al conectar con la API de maquillaje')
                }
                const data = await response.json()
                setProductos(data)
                setLoading(false)
            } catch (err) {
                setError(err.message)
                setLoading(false)
            }
        }

        fetchProductos()
    }, [])

    // Lógica de paginación
    const indiceUltimoProducto = paginaActual * productosPorPagina
    const indicePrimerProducto = indiceUltimoProducto - productosPorPagina
    const productosActuales = productos.slice(indicePrimerProducto, indiceUltimoProducto)
    const totalPaginas = Math.ceil(productos.length / productosPorPagina)

    const irPaginaAnterior = () => {
        if (paginaActual > 1) setPaginaActual(paginaActual - 1)
    }

    const irPaginaSiguiente = () => {
        if (paginaActual < totalPaginas) setPaginaActual(paginaActual + 1)
    }

    if (loading) {
        return (
            <section className="api-seccion">
                <div className="api-loader-container">
                    <div className="api-loader"></div>
                    <p className="api-loader-texto">Preparando el glamour...</p>
                </div>
            </section>
        )
    }

    if (error) {
        return (
            <section className="api-seccion">
                <div className="api-error-container">
                    <p className="api-error-texto">✦ Ocurrió un inconveniente: {error} ✦</p>
                    <button className="api-btn-reintentar" onClick={() => window.location.reload()}>
                        Reintentar
                    </button>
                </div>
            </section>
        )
    }

    return (
        <section className="api-seccion">
            <h1 className="api-titulo">✦ Makeup Fav ✦</h1>
            <p className="api-subtitulo">Edición Maybelline</p>

            <div className="api-grid">
                {productosActuales.map(producto => (
                    <div key={producto.id}>
                        <ProductCard
                            imagenUrl={producto.image_link}
                            nombre={producto.name}
                            subtitulo={producto.product_type ? producto.product_type.replace('_', ' ') : ''}
                            precio={`${producto.price_sign ? producto.price_sign : '$'}${producto.price > 0 ? producto.price : '12.99'}`}
                            onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/300x300/f8f1ec/d4af37?text=GLAM'
                            }}
                        />
                    </div>
                ))}
            </div>

            {totalPaginas > 1 && (
                <div className="api-paginacion">
                    <Button 
                        onClick={irPaginaAnterior} 
                        disabled={paginaActual === 1}
                    >
                        &#8592; Anterior
                    </Button>
                    
                    <span className="api-indicador-pagina">
                        Página {paginaActual} de {totalPaginas}
                    </span>
                    
                    <Button 
                        onClick={irPaginaSiguiente} 
                        disabled={paginaActual === totalPaginas}
                    >
                        Siguiente &#8594;
                    </Button>
                </div>
            )}
        </section>
    )
}

export default Api
