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
              <p>Implemented design systems: Developed and maintained a consistent design system to streamline the design process and ensure a cohesive user experience across all products.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Designed mobile applications: Created user-friendly interfaces for mobile apps, focusing on intuitive navigation and visually appealing layouts.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Branding and visual identity: Designed logos, color schemes, and visual elements to establish a strong brand identity for various clients.</p>
            </li>
            
          </ul>
        </article>

        {/* WEBDEVELOPMENT */}
        <article  className="service">
          <div className="service__head">
<h3>FullStack Development</h3>
          </div>
          <ul className="service__list">
          <li>
              <BiCheck className="service__list-icon"/>
              <p>Developed and maintained web applications: Built and maintained dynamic web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>API Development: Created RESTful APIs and integrated third-party APIs to enhance application functionality..</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Frontend Development: Implemented responsive and interactive user interfaces using React.js, Redux, HTML5, and CSS3.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Backend Development: Developed server-side logic, handled authentication and authorization using Node.js, Express.js, and JWT.</p>
            </li>
          </ul>
        </article>

        {/* end of web development */}
        <article  className="service">
          <div className="service__head">
<h3>Mobile app development(Flutter) </h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Developed cross-platform mobile applications: Built high-performance mobile apps using React Native for both iOS and Android platforms.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>User Interface Design: Created intuitive and visually appealing user interfaces, adhering to platform-specific design guidelines..</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Custom Mobile Applications: Developed custom mobile applications for various clients, using both native (Swift, Kotlin) and cross-platform (Flutter) frameworks</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Client Collaboration: Worked closely with clients to understand their requirements and provide tailored mobile solutions that meet their business needs.</p>
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