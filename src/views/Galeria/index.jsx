import { useState } from 'react';
import capitalesData from '../../data/capitales.json';
import Lightbox from '../../components/Lightbox';
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
        if(e && e.stopPropagation) e.stopPropagation();
        setIndiceActual((prev) => (prev === 0 ? capitalesData.length - 1 : prev - 1));
    };

    const nextImage = (e) => {
        if(e && e.stopPropagation) e.stopPropagation();
        setIndiceActual((prev) => (prev === capitalesData.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="galeria-contenedor">
            <h1 className="galeria-titulo">✦ Diario de Viaje ✦</h1>
            <p className="galeria-subtitulo">Recorrido por las capitales del mundo</p>
            
            {/* GRID DE IMÁGENES */}
            <div className="galeria-grid">
                {capitalesData.map((capital, index) => (
                    <div 
                        key={capital.id} 
                        className="galeria-item" 
                        onClick={() => abrirLightbox(index)}
                    >
                        <img 
                            src={`/src/assets/capitales/${capital.imagen}`} 
                            alt={capital.nombre} 
                            loading="lazy"
                        />
                        <div className="galeria-item-overlay">
                            <span>Ver Detalle</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* LIGHTBOX */}
            <Lightbox 
                isOpen={lightboxAberto}
                onClose={cerrarLightbox}
                onPrev={prevImage}
                onNext={nextImage}
                imageSrc={`/capitales/${capitalesData[indiceActual].imagen}`}
                title={capitalesData[indiceActual].nombre}
                subtitle={`${capitalesData[indiceActual].pais} - ${capitalesData[indiceActual].fecha}`}
            />
        </section>
    );
};

export default Galeria;
