import React from 'react'
import './Testimonials.css'
import Image1 from '../../assets/cool2.jpg'
import Image2 from '../../assets/now2.jpg'
const testimonials = () => {
  return (

    <section id="testimonials">
      <h5>Testimonials</h5>
      <h2>Testimonials</h2>
      <div class="container testimonials__container">
        <article class="testimonial">
        <div className="client__avatar">
          <img src={Image2} alt="testimonial"/>
         
        </div>
        <h5 className="client__name">client one</h5>
          <small className="client__review">
          COMING SOON...
          </small>
        </article>

        <article class="testimonial">
        <div className="client__avatar">
          <img src={Image2} alt="testimonial"/>
         
        </div>
        <h5 className="client__name">client two</h5>
          <small className="client__review">
            COMING SOON...
          </small>
        </article>

        <article class="testimonial">
        <div className="client__avatar">
          <img src={Image1} alt="testimonial"/>
        </div>
        <h5 className="client__name">client three</h5>
          <small className="client__review">
          COMING SOON...
          </small>
        </article>

      </div>
      </section>
  )
}

export default testimonials