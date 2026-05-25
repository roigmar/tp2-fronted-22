import { useNavigate } from 'react-router-dom'
import integrantes from '../data/integrantes'
import './Home.css'

const Home = () => {
    const navigate = useNavigate()

    return (
        <section className="home">
            <h1 className="home-titulo">Bienvenido/a</h1>
            <p className="home-subtitulo">Seleccioná una integrante para ver su perfil</p>

            <div className="home-grid">
                {integrantes.map((integrante) => (
                    <div
                        key={integrante.id}
                        className="home-card"
                        onClick={() => navigate(integrante.ruta)}
                    >
                        <img
                            src={integrante.avatar}
                            alt={integrante.nombre}
                            className="home-card-avatar"
                        />
                        <h2 className="home-card-nombre">{integrante.nombre}</h2>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Home