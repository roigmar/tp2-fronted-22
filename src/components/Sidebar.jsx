import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-GlamSF.png'
import './Sidebar.css'

const Sidebar = ({ abierta, cerrar }) => {
    return (
        <>
            {/* Overlay oscuro en mobile cuando la sidebar está abierta */}
            {abierta && <div className="sidebar-overlay" onClick={cerrar}></div>}

            <aside className={`sidebar ${abierta ? 'sidebar-abierta' : ''}`}>
                <div className="sidebar-logo">
                    <img src={logo} alt="Logo Glam" />
                </div>

                <nav className="sidebar-nav">
                    <ul>
                        <li><NavLink to="/" onClick={cerrar}>Inicio</NavLink></li>
                        <li><NavLink to="/explorador" onClick={cerrar}>Explorador</NavLink></li>
                        <li><NavLink to="/api" onClick={cerrar}>API Externa</NavLink></li>
                        <li><NavLink to="/galeria" onClick={cerrar}>Galería</NavLink></li>
                        <li><NavLink to="/bitacora" onClick={cerrar}>Bitácora</NavLink></li>
                        <li><NavLink to="/arquitectura" onClick={cerrar}>Arquitectura</NavLink></li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}

export default Sidebar