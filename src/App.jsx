import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Explorador from './components/Explorador'
/*import PerfilAndrea from './components/perfiles/PerfilAndrea'
import PerfilBeatriz from './components/perfiles/PerfilBeatriz'*/
import PerfilMarcela from './components/perfiles/PerfilMarcela'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="explorador" element={<Explorador />} />
          <Route path="api" element={<div>API próximamente</div>} />
          <Route path="galeria" element={<div>Galería próximamente</div>} />
          <Route path="bitacora" element={<div>Bitácora próximamente</div>} />
          <Route path="arquitectura" element={<div>Arquitectura próximamente</div>} />
          {/* <Route path="andrea" element={<PerfilAndrea />} /> */}
          {/* <Route path="beatriz" element={<PerfilBeatriz />} /> */}
          <Route path="marcela" element={<PerfilMarcela />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App