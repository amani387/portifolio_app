import React from 'react'
import './index.css'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/About/About'
import Experiance from './components/Experiance/Experiance'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/Contacts/Contacts'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <>
        <Header />
        <Nav/>
        <About/>
        <Experiance/> 
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </>
    
  )
}

export default App