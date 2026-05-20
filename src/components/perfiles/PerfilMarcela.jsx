import { useState } from 'react'
import './PerfilMarcela.css'
import avatar from '../../assets/avatar-marcela.png'
import proyecto1 from '../../assets/proyectosMarcela/proyecto-1.png'
import proyecto2 from '../../assets/proyectosMarcela/proyecto-2.png'
import proyecto3 from '../../assets/proyectosMarcela/proyecto-3.png'
import proyecto4 from '../../assets/proyectosMarcela/proyecto-4.png'

const habilidades = [
    { nombre: 'HTML', nivel: 90 },
    { nombre: 'CSS', nivel: 85 },
    { nombre: 'JavaScript', nivel: 75 },
    { nombre: 'Python', nivel: 70 },
    { nombre: 'Kotlin', nivel: 60 },
    { nombre: 'Git', nivel: 80 },
    { nombre: 'Figma', nivel: 75 },
    { nombre: 'MySQL', nivel: 65 },
    { nombre: 'Trello', nivel: 85 },
    { nombre: 'React', nivel: 55 },
    { nombre: 'Node.js', nivel: 50 },
]

const proyectos = [
    { id: 1, titulo: 'Proyecto 1', descripcion: 'Descripción del proyecto 1', imagen: proyecto1 },
    { id: 2, titulo: 'Proyecto 2', descripcion: 'Descripción del proyecto 2', imagen: proyecto2 },
    { id: 3, titulo: 'Proyecto 3', descripcion: 'Descripción del proyecto 3', imagen: proyecto3 },
    { id: 4, titulo: 'Proyecto 4', descripcion: 'Descripción del proyecto 4', imagen: proyecto4 },
]

const PerfilMarcela = () => {
    const [indice, setIndice] = useState(0)

    const anterior = () => setIndice((prev) => (prev === 0 ? proyectos.length - 1 : prev - 1))
    const siguiente = () => setIndice((prev) => (prev === proyectos.length - 1 ? 0 : prev + 1))
    
    return (
        <section className="perfil">

            {/* HEADER DEL PERFIL */}
            <div className="perfil-header">
                <img src={avatar} alt="Marcela Roig" className="perfil-avatar" />
                <div>
                    <h1 className="perfil-nombre">Marcela Roig</h1>
                    <p className="perfil-rol">Desarrolladora Web</p>
                    <div className="perfil-redes">
                        <a href="https://github.com/roigmar" target="_blank" className="perfil-red github">GitHub</a>
                        <a href="https://www.linkedin.com/in/marcela-roig-730a71173/" target="_blank" className="perfil-red linkedin">LinkedIn</a>
                    </div>
                </div>
            </div>

            {/* HABILIDADES */}
            <div className="perfil-seccion">
                <h2 className="perfil-subtitulo">Habilidades</h2>
                {habilidades.map((hab) => (
                    <div key={hab.nombre} className="barra-contenedor">
                        <div className="barra-label">
                            <span>{hab.nombre}</span>
                            <span>{hab.nivel}%</span>
                        </div>
                        <div className="barra-fondo">
                            <div
                                className="barra-relleno"
                                style={{ '--nivel': `${hab.nivel}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CARRUSEL DE PROYECTOS */}
            <div className="perfil-seccion">
                <h2 className="perfil-subtitulo">Proyectos</h2>
                <div className="carrusel">
    <div className="carrusel-controles">
        <button className="carrusel-btn" onClick={anterior}>←</button>

        <div className="carrusel-card">
            <img
                src={proyectos[indice].imagen}
                alt={proyectos[indice].titulo}
                className="carrusel-img"
            />
            <h3>{proyectos[indice].titulo}</h3>
            <p>{proyectos[indice].descripcion}</p>
            
                <a href={proyectos[indice].link}
                target="_blank"
                rel="noopener noreferrer"
                className="carrusel-link"
            >
                Ver proyecto
            </a>
        </div>

        <button className="carrusel-btn" onClick={siguiente}>→</button>
    </div>

    {/* PUNTITOS INDICADORES */}
    <div className="carrusel-indicadores">
        {proyectos.map((_, i) => (
            <button
                key={i}
                className={`carrusel-punto ${i === indice ? 'activo' : ''}`}
                onClick={() => setIndice(i)}
            />
        ))}
    </div>
</div>
            </div>


            {/* TECH STACK */}
            <div className="perfil-seccion">
                <h2 className="perfil-subtitulo">Tech Stack</h2>
                <div className="tech-stack">
                    {['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Python', 'Figma'].map((tech) => (
                        <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default PerfilMarcela