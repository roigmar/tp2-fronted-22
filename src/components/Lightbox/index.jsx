import { useEffect } from 'react';
import './Lightbox.css';

const Lightbox = ({ isOpen, onClose, onPrev, onNext, imageSrc, imageAlt, title, subtitle }) => {
    // Manejar tecla ESC y Flechas
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onPrev(e);
            if (e.key === 'ArrowRight') onNext(e);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose, onPrev, onNext]);

    // Bloquear scroll body cuando el lightbox está abierto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <button className="lightbox-cerrar" onClick={onClose} title="Cerrar (ESC)">×</button>
            
            <button className="lightbox-nav prev" onClick={onPrev} title="Anterior (Flecha Izq)">❮</button>
            
            <div className="lightbox-contenido" onClick={(e) => e.stopPropagation()}>
                <img 
                    src={imageSrc}
                    alt={imageAlt || title}
                    className="lightbox-img" 
                />
                <div className="lightbox-info">
                    <h2>{title}</h2>
                    {subtitle && <p>{subtitle}</p>}
                </div>
            </div>

            <button className="lightbox-nav next" onClick={onNext} title="Siguiente (Flecha Der)">❯</button>
        </div>
    );
};

export default Lightbox;
