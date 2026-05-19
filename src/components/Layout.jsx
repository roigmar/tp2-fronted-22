import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import logo from '../assets/logo-BAM.png'
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
                    backgroundColor: 'var(--bordo)',
                    zIndex: 9999,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: splashFading ? 0 : 1,
                    transition: 'opacity 0.5s'
                }}>
                    <img
                        src={logo}
                        style={{
                            height: '250px',
                            filter: 'drop-shadow(5px 5px 0px #000)',
                            animation: 'splashIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards'
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