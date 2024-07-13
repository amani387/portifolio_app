import React from 'react'
import './About.css';
import ME from '../../assets/drawing.jpg'
import { FaAward,FaUsers} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc'
import Cta from '../header/Cta'
const About = () => {
  return (
    <section id="about">
      <h5>Wanna know me!</h5>
      <h2>About me </h2>
      <div className="container about__container">
        <div className="about__me">
<div className="about__me-image">
  <img src={ME} alt="this is me"/>
</div>
        </div>
        <div className="about__content">
<div className="about__cards">
  <article className="about__card">
    <FaAward className="about__icon"/>
<h5> expreance</h5>
<small>1 year expreance</small>

  </article>
  <article className="about__card">
    <FaUsers className="about__icon"/>
<h5> Clients</h5>
<small>300+ customers world wide</small>

  </article>
  <article className="about__card">
    <VscFolderLibrary className="about__icon"/>
<h5> expreance</h5>
<small>Projects</small>

  </article>
</div>

<p>Amanuel nega is an
   awesome designer and web developer
   
   If you’re looking for a source of design inspiration , you’re in the right place.

</p>
<Cta/>
        </div>
       
      </div>
      
    </section>
  )
}

export default About