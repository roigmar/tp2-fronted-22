import { useState } from 'react';
import './Carrusel.css';

const Carrusel = ({ items }) => {
    const [indice, setIndice] = useState(0);

    if (!items || items.length === 0) return null;

    const anterior = () => setIndice(prev => prev === 0 ? items.length - 1 : prev - 1);
    const siguiente = () => setIndice(prev => prev === items.length - 1 ? 0 : prev + 1);

    return (
        <div className="carrusel">
            <div className="carrusel-controles">
                <button className="carrusel-btn" onClick={anterior}>←</button>
                <div className="carrusel-card">
                    <img
                        src={items[indice].imagen}
                        alt={items[indice].titulo}
                        className="carrusel-img"
                    />
                    <h3>{items[indice].titulo}</h3>
                    <p>{items[indice].descripcion}</p>
                </div>
                <button className="carrusel-btn" onClick={siguiente}>→</button>
            </div>
            <div className="carrusel-indicadores">
                {items.map((_, i) => (
                    <button
                        key={i}
                        className={`carrusel-punto ${i === indice ? 'activo' : ''}`}
                        onClick={() => setIndice(i)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carrusel;
