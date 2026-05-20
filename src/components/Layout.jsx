import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import logo from '../assets/logo-GlamSF.png'
import './Layout.css'

const Layout = () => {
    const [sidebarAbierta, setSidebarAbierta] = useState(false)
    const [splashVisible, setSplashVisible] = useState(true)
    const [splashFading, setSplashFading] = useState(false)

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        const exitTimeout = setTimeout(() => {
            setSplashFading(true)

            setTimeout(() => {
                setSplashVisible(false)
                document.body.style.overflow = 'auto'
            }, 500)
        }, 1500)

        return () => clearTimeout(exitTimeout)
    }, [])

    return (
        <>
            {splashVisible && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0,
                    width: '100vw', height: '100vh',
                    backgroundColor: 'var(--champagne)',
                    zIndex: 9999,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: splashFading ? 0 : 1,
                    transition: 'opacity 0.8s ease',
                }}>
                    {/* Destello de fondo */}
                    <div style={{
                        position: 'absolute',
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, rgba(247,231,206,0) 70%)',
                        animation: 'splashBrillo 2s ease forwards'
                    }}></div>

                    {/* Logo */}
                    <img
                        src={logo}
                        style={{
                            height: '250px',
                            position: 'relative',
                            zIndex: 1,
                            filter: 'drop-shadow(0px 0px 20px rgba(212,175,55,0.8))',
                            animation: 'splashIn 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards'
                        }}
                    />
                </div>
            )}

            <div className="layout">
                <button
                    className="hamburguesa"
                    onClick={() => setSidebarAbierta(!sidebarAbierta)}
                >
                    ☰
                </button>

                <Sidebar
                    abierta={sidebarAbierta}
                    cerrar={() => setSidebarAbierta(false)}
                />

                <main className="layout-contenido">
                    <Outlet />
                </main>
            </div>
        </>
    )
}

export default Layout