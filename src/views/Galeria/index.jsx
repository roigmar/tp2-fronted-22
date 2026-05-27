import { useState, useEffect } from 'react';
import zapatosData from '../../data/zapatos.json';
import './Galeria.css';


const Galeria = () => {
    const [lightboxAberto, setLightboxAberto] = useState(false);
    const [indiceActual, setIndiceActual] = useState(0);

    const abrirLightbox = (index) => {
        setIndiceActual(index);
        setLightboxAberto(true);
    };

    const cerrarLightbox = () => setLightboxAberto(false);

    const prevImage = (e) => {
        e.stopPropagation();
        setIndiceActual((prev) => (prev === 0 ? zapatosData.length - 1 : prev - 1));
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setIndiceActual((prev) => (prev === zapatosData.length - 1 ? 0 : prev + 1));
    };

    // Manejar tecla ESC y Flechas
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightboxAberto) return;
            if (e.key === 'Escape') cerrarLightbox();
            if (e.key === 'ArrowLeft') prevImage(e);
            if (e.key === 'ArrowRight') nextImage(e);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxAberto]);

    // Bloquear scroll body cuando el lightbox está abierto
    useEffect(() => {
        if (lightboxAberto) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; }
    }, [lightboxAberto]);


    return (
        <section className="galeria-contenedor">
            <h1 className="galeria-titulo">Colección Exclusiva</h1>
            
            {/* GRID DE IMÁGENES */}
            <div className="galeria-grid">
                {zapatosData.map((zapato, index) => (
                    <div 
                        key={zapato.id} 
                        className="galeria-item" 
                        onClick={() => abrirLightbox(index)}
                    >
                        <img 
                            src={`/src/assets/shoes/${zapato.imagen}`} 
                            alt={zapato.nombre} 
                            loading="lazy"
                        />
                        <div className="galeria-item-overlay">
                            <span>Ver Detalle</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* LIGHTBOX */}
            {lightboxAberto && (
                <div className="lightbox-overlay" onClick={cerrarLightbox}>
                    <button className="lightbox-cerrar" onClick={cerrarLightbox} title="Cerrar (ESC)">×</button>
                    
                    <button className="lightbox-nav prev" onClick={prevImage} title="Anterior (Flecha Izq)">❮</button>
                    
                    <div className="lightbox-contenido" onClick={(e) => e.stopPropagation()}>
                        <img 
                            src={`/src/assets/shoes/${zapatosData[indiceActual].imagen}`}
                            alt={zapatosData[indiceActual].nombre}
                            className="lightbox-img" 
                        />
                        <div className="lightbox-info">
                            <h2>{zapatosData[indiceActual].nombre}</h2>
                            <p>{zapatosData[indiceActual].marca} - {zapatosData[indiceActual].color}</p>
                        </div>
                    </div>

                    <button className="lightbox-nav next" onClick={nextImage} title="Siguiente (Flecha Der)">❯</button>
                </div>
            )}
        </section>
    );
};

export default Galeria;
