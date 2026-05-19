import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="explorador" element={<div>Explorador próximamente</div>} />
          <Route path="api" element={<div>API próximamente</div>} />
          <Route path="galeria" element={<div>Galería próximamente</div>} />
          <Route path="bitacora" element={<div>Bitácora próximamente</div>} />
          <Route path="arquitectura" element={<div>Arquitectura próximamente</div>} />
          <Route path="andrea" element={<div>Perfil Andrea próximamente</div>} />
          <Route path="beatriz" element={<div>Perfil Beatriz próximamente</div>} />
          <Route path="marcela" element={<div>Perfil Marcela próximamente</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App