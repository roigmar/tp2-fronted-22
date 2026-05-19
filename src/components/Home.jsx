import React, { useState } from "react";
import './Home.css'

const Hero = () => {
    const [mostrarIntegrantes, setMostrarIntegrantes] = useState(false);
    return (
        <main className="index-hero">
        <section className="index-contenido">
            <h1 className="index-titulo">Grupo BAM</h1>
            {/* botón hamburguesa SOLO para integrantes */}
            <button
                    className="index-integrantes-btn"
                    onClick={() => setMostrarIntegrantes(!mostrarIntegrantes)}
                >
                    Ver integrantes ☰
            </button>

            <ul className={`index-integrantes ${mostrarIntegrantes ? 'activo' : ''}`}>
                    <li><a href="#">Andrea Durán</a></li>
                    <li><a href="#">Beatriz Gonzalez</a></li>
                    <li><a href="#">Marcela Roig</a></li>
            </ul>

            <p className="index-descripcion">
                En esta misión, nuestro escuadrón de desarrolladoras se propuso construir una poderosa aplicación web
                usando HTML, CSS y JavaScript como nuestras herramientas principales. A lo largo del recorrido,
                desplegamos habilidades especiales: navegación fluida para movernos sin fricción entre dimensiones
                (páginas), un diseño adaptable capaz de transformarse ante cualquier dispositivo, y elementos
                interactivos que responden a cada acción del usuario como si tuvieran vida propia. Siguiendo estrictos
                códigos de honor —buenas prácticas de desarrollo— mantuvimos nuestro código limpio, eficiente y listo
                para futuras batallas. En equipo, enfrentamos desafíos técnicos como verdaderos villanos, coordinando
                estrategias, optimizando nuestro tiempo y resolviendo cada obstáculo con inteligencia colectiva hasta
                completar con éxito la misión.
            </p>
        </section>

    </main>
    )
}

export default Hero