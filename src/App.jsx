import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Leistungen from './pages/Leistungen.jsx'
import UeberMich from './pages/UeberMich.jsx'
import Kontakt from './pages/Kontakt.jsx'
import Impressum from './pages/Impressum.jsx'
import Datenschutz from './pages/Datenschutz.jsx'
import FAQ from './pages/FAQ.jsx'
import Ratgeber from './pages/Ratgeber.jsx'
import FoerderCheck from './pages/FoerderCheck.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="leistungen" element={<Leistungen />} />
        <Route path="ueber-mich" element={<UeberMich />} />
        <Route path="ratgeber" element={<Ratgeber />} />
        <Route path="foerder-check" element={<FoerderCheck />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="impressum" element={<Impressum />} />
        <Route path="datenschutz" element={<Datenschutz />} />
      </Route>
    </Routes>
  )
}
