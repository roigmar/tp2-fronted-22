import { useParams } from 'react-router-dom'
import { useState } from 'react'
import integrantes from '../../data/integrantes'
import './Perfil.css'

const Perfil = () => {
    const { nombre } = useParams()
    const [indice, setIndice] = useState(0)

    const integrante = integrantes.find(i => i.ruta === `/${nombre}`)

    if (!integrante) return <p className="perfil-error">Integrante no encontrada ✦</p>

    const anterior = () => setIndice(prev => prev === 0 ? integrante.proyectos.length - 1 : prev - 1)
    const siguiente = () => setIndice(prev => prev === integrante.proyectos.length - 1 ? 0 : prev + 1)

    return (
        <section className="perfil">

            {/* HEADER */}
            <div className="perfil-header">
                <img src={integrante.avatar} alt={integrante.nombre} className="perfil-avatar" />
                <div>
                    <h1 className="perfil-nombre">{integrante.nombre}</h1>
                    <p className="perfil-rol">{integrante.rol}</p>
                    <div className="perfil-redes">
                        <a href={integrante.redes.github} target="_blank" rel="noopener noreferrer" className="perfil-red github">GitHub</a>
                        <a href={integrante.redes.linkedin} target="_blank" rel="noopener noreferrer" className="perfil-red linkedin">LinkedIn</a>
                    </div>
                </div>
            </div>

            {/* HABILIDADES */}
            <div className="perfil-seccion">
                <h2 className="perfil-subtitulo">Habilidades</h2>
                {integrante.habilidades.map(hab => (
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

            {/* CARRUSEL */}
            <div className="perfil-seccion">
                <h2 className="perfil-subtitulo">Proyectos</h2>
                <div className="carrusel">
                    <div className="carrusel-controles">
                        <button className="carrusel-btn" onClick={anterior}>←</button>
                        <div className="carrusel-card">
                            <img
                                src={integrante.proyectos[indice].imagen}
                                alt={integrante.proyectos[indice].titulo}
                                className="carrusel-img"
                            />
                            <h3>{integrante.proyectos[indice].titulo}</h3>
                            <p>{integrante.proyectos[indice].descripcion}</p>
                        </div>
                        <button className="carrusel-btn" onClick={siguiente}>→</button>
                    </div>
                    <div className="carrusel-indicadores">
                        {integrante.proyectos.map((_, i) => (
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
                    {integrante.techStack.map(tech => (
                        <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Perfil