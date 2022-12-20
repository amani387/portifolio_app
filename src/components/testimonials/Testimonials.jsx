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
        <h5 className="client__name">Fre</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Nemo delectus dolorum
             ex repellendus magni atque ipsum velit 
             unde sapiente vel.
          </small>
        </article>

        <article class="testimonial">
        <div className="client__avatar">
          <img src={Image2} alt="testimonial"/>
         
        </div>
        <h5 className="client__name">Fre</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Nemo delectus dolorum
             ex repellendus magni atque ipsum velit 
             unde sapiente vel.
          </small>
        </article>

        <article class="testimonial">
        <div className="client__avatar">
          <img src={Image1} alt="testimonial"/>
        </div>
        <h5 className="client__name">Sasi</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Nemo delectus dolorum
             ex repellendus magni atque ipsum velit 
             unde sapiente vel.
          </small>
        </article>

      </div>
      </section>
  )
}

export default testimonials