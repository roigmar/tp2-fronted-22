import React from 'react';

const HitoItem = ({ hito, index }) => {
  return (
    <article className="hito-container">
      {/* Hito - dd/mm/aa: Subtítulo */}
      <span className="hito-texto">
        <strong>Hito {index + 1}</strong> - {hito.fecha}: {hito.subtitulo}
      </span>

      {/* Ventana pop-up con la descripción*/}
      <div className="hito-popup">
        <p>{hito.descripcion}</p>
      </div>
    </article>
  );
};

export default HitoItem;
