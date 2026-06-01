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
        <p className="bitacora-description">
          Este proyecto consiste en la migración del Trabajo Práctico 1 desarrollado con HTML, CSS y JavaScript a una aplicación React basada en componentes. El trabajo fue realizado por un equipo de 3 integrantes, Andrea, Beatriz y Marcela, utilizando GitHub para el control de versiones y Trello para la gestión de tareas.
        </p>        
      </header>

      <hr className="linea-horizontal"></hr>

      <p className="bitacora-subtitle">Roles</p>
      <div className="bitacora-container">        
        <ul className="bitacora-roles-list">
          <li>Andrea: Desarrollo del componente Lightbox, integración de la funcionalidad de apertura y cierre, y diseño de la interfaz de usuario. Consumo de API  </li>
          <li>Beatriz: Gestión del proyecto en Trello, implementación de la estructura de la bitácora y diseño del estilo CSS de bitácora.</li>
          <li>Marcela: Migración del contenido HTML a componentes React, control de versiones en GitHub, y desarrollo de sección explorador.</li>
        </ul>
      </div>
      <hr className="linea-horizontal"></hr>
      <p className="bitacora-subtitle">Flujo de Trabajo</p>
      <div className="bitacora-container">        
        Se utilizó GitHub para el control de versiones, con una rama principal `main` y una rama secundaria para el desarrollo de la propuesta visual. El equipo trabajó de manera colaborativa, realizando commits frecuentes con mensajes descriptivos y utilizando pull requests para revisar y fusionar cambios. Trello se empleó para organizar las tareas, asignar responsabilidades y seguir el progreso del proyecto, asegurando una comunicación fluida entre los integrantes.
      </div>

      <hr className="linea-horizontal"></hr>

      <p className="bitacora-subtitle">Hitos del Desarrollo</p>
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
