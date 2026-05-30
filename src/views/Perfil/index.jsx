import { useParams } from 'react-router-dom'
import integrantes from '../../data/integrantes'
import SkillBar from '../../components/SkillBar'
import Carrusel from '../../components/Carrusel'
import TechBadge from '../../components/TechBadge'
import './Perfil.css'

const Perfil = () => {
    const { nombre } = useParams()

    const integrante = integrantes.find(i => i.ruta === `/${nombre}`)

    if (!integrante) return <p className="perfil-error">Integrante no encontrada ✦</p>

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
                    <SkillBar key={hab.nombre} nombre={hab.nombre} nivel={hab.nivel} />
                ))}
            </div>

            {/* CARRUSEL */}
            <div className="perfil-seccion">
                <h2 className="perfil-subtitulo">Proyectos</h2>
                <Carrusel items={integrante.proyectos} />
            </div>

            {/* TECH STACK */}
            <div className="perfil-seccion">
                <h2 className="perfil-subtitulo">Tech Stack</h2>
                <div className="tech-stack" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    {integrante.techStack.map(tech => (
                        <TechBadge key={tech} tech={tech} />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Perfil