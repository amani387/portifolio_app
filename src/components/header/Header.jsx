import React from 'react'
import './Header.css'
import Cta from './Cta'
import Me from '../../assets/cool.JPG'
import Headersocial from './Headersocial'
const header = () => {
  return (
    <header>
        <div className="container header__container" id="home">
            <h5>Hello </h5>
            <h1>I'm Amanuel Nega</h1>
            <h5 className="text-light">A passionate full stack developer,ML&AI,mobile App development 
            enthusiast </h5>
            <Cta/>
            <Headersocial/>
            <div className="me">
              <img src={Me} alt="Me"/>
            </div>
            <a href="#contact" className="scroll__down">Scroll down</a>
 
 
        </div>
    </header>
  )
}
//I STOPED ON 49:37 AFTER THE ADITION OF CV FOLDER TO THE HEADER FOLDER

export default header