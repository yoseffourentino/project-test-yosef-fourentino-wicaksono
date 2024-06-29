import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Services from './pages/Services'
import Ideas from './pages/Ideas'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/ideas' element={<Ideas />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
