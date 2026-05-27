import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './views/Home'
import Explorador from './views/Explorador'
import Perfil from './views/Perfil'
import Api from './views/Api'
import Galeria from './views/Galeria'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="explorador" element={<Explorador />} />
          <Route path="api" element={<Api />} />
          <Route path="galeria" element={<Galeria />} />
          <Route path="bitacora" element={<div>Bitácora próximamente</div>} />
          <Route path="arquitectura" element={<div>Arquitectura próximamente</div>} />
          <Route path=":nombre" element={<Perfil />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App