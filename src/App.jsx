import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home'
import './App.css'
import { BrowserRouter as  Router, Routes , Route } from 'react-router-dom'
import AboutUs from './pages/About/AboutUs'
import Careers from './pages/Career/Careers'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Services from './pages/Services/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>

     <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
     </Router>

     <Footer/>
    </>
  )
}

export default App
