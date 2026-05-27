import './ProductCard.css'

const ProductCard = ({ imagenUrl, nombre, subtitulo, detalles = [], precio, onError }) => {
    return (
        <div className="product-card">
            <div className="product-img-container">
                <img 
                    src={imagenUrl} 
                    alt={nombre} 
                    className="product-img" 
                    onError={onError}
                />
            </div>
            <div className="product-info">
                <h3 className="product-nombre">{nombre}</h3>
                {subtitulo && <p className="product-subtitulo">{subtitulo}</p>}
                
                {detalles.length > 0 && (
                    <div className="product-detalles">
                        {detalles.map((det, index) => (
                            <span key={index} className="product-badge">{det}</span>
                        ))}
                    </div>
                )}
                
                {precio && <p className="product-precio">{precio}</p>}
            </div>
        </div>
    )
}

export default ProductCard
