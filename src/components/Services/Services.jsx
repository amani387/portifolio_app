import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
const Service = () => {
  return (
    <section id="services">
      <h5> What i offer </h5>
      <h2>Service</h2>
      <div className="container services__container">
        <article  className="service">
          <div className="service__head">
<h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>

          </ul>
        </article>

        {/* WEBDEVELOPMENT */}
        <article  className="service">
          <div className="service__head">
<h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>

          </ul>
        </article>

        {/* end of web development */}
        <article  className="service">
          <div className="service__head">
<h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>

          </ul>
        </article>
        </div>   
           </section>
  )
}

export default Service