import { useState } from 'react';
import hitosData from '../../data/hitos.json';
import Lightbox from '../../components/Lightbox';
import './Bitacora.css';

const Bitacora = () => {
    const [lightboxAberto, setLightboxAberto] = useState(false);
    const [indiceActual, setIndiceActual] = useState(0);
    const abrirLightbox = (index) => {
        setIndiceActual(index);
        setLightboxAberto(true);
    };
    const cerrarLightbox = () => {
        setLightboxAberto(false);
    };
    return (
    <section className="bitacora-section">
      <header className="bitacora-header">
        <h1 className="bitacora-title">✦ Bitácora ✦</h1>
        <p className="bitacora-subtitle">Hitos del Desarrollo</p>
      </header>

      <div className="bitacora-list-container">
        {hitosData.map((hito, index) => (
          /* Contenedor principal del hito */
          <article key={index} className="hito-container">
            
            {/* Texto visible: Hito # - dd/mm/aa: Subtítulo */}
            <span className="hito-texto">
              <strong>Hito {index + 1}</strong> - {hito.fecha}: {hito.subtitulo}
            </span>

            {/* Ventana pop-up con la descripción (oculta por defecto) */}
            <div className="hito-popup">
               <p>{hito.descripcion}</p>
            </div>

          </article>
        ))}
      </div>
    </section>
  );
};

export default Bitacora;
