import { useState } from 'react';
import hitosData from '../../data/hitos.json';
import Lightbox from '../../components/Lightbox';
import HitoItem from '../../components/HitoItem';
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
        <div className="bitacora-description">
          Este proyecto expone la evolución arquitectónica desde una estructura estática (HTML, CSS y JS puro) hacia una Single Page Application (SPA) utilizando React. Esta transición se fundamenta en la necesidad de escalabilidad, el mantenimiento eficiente a través de la componentización modular, y la mejora sustancial en la experiencia del usuario (UX) gracias al enrutamiento dinámico sin recargas de página.
        </div>        
      </header>

      <hr className="linea-horizontal"></hr>

      <p className="bitacora-subtitle">Roles</p>
      <div className="bitacora-container">        
        <ul className="bitacora-roles-list">
          <li><strong>Andrea:</strong> Encargada de la refactorización modular del proyecto en componentes y vistas aisladas, y desarrollo de la lógica asíncrona para el consumo de la API REST.</li>
          <li><strong>Beatriz:</strong> Lideró la organización de tareas, estructuró la vista de la bitácora y estableció las bases del diseño CSS responsivo.</li>
          <li><strong>Marcela:</strong> Responsable de la migración del contenido estático, rediseño integral de la interfaz de usuario, y desarrollo de la lógica de filtrado en el explorador.</li>
        </ul>
      </div>

      <hr className="linea-horizontal"></hr>

      <p className="bitacora-subtitle">Flujo de Trabajo</p>
      <div className="bitacora-container">        
        El ciclo de desarrollo se gestionó combinando metodologías ágiles. Se utilizó <strong>Trello</strong> como tablero Kanban para la planificación, priorización y asignación de tickets. En cuanto al control de versiones en <strong>GitHub</strong>, el equipo adoptó un enfoque directo y centralizado: todas las integrantes trabajaron haciendo push directamente a la rama <code>main</code>. No se utilizaron ramas secundarias ni Pull Requests, integrando los cambios de forma continua y sincrónica sobre la base principal del código.
      </div>

      <hr className="linea-horizontal"></hr>

      <p className="bitacora-subtitle">Hitos del Desarrollo</p>
      <div className="bitacora-list-container">
        {hitosData.map((hito, index) => (
          <HitoItem key={index} hito={hito} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Bitacora;
