import React from 'react'
import './Portfolio.css'
import Proto1 from '../../assets/port1.jpg'
import Proto2 from '../../assets/port2.webp'
import Proto3 from '../../assets/port52.jpg'
import Proto4 from '../../assets/port3.webp'
import Proto5 from '../../assets/port4.webp'
import Proto6 from '../../assets/port6.webp'

const data = [{
  id:1,
  image:Proto1,
  title:'Ethiopian_beauty',
  github:'https://github.com',
demo:'https://guileless-crisp-5b2a7d.netlify.app/'
}
,
{
  id:2,
  image:Proto2,
  title:'Hammer Girl',
  github:'https://github.com',
demo:'https://guileless-crisp-5b2a7d.netlify.app/'
},
{
  id:3,
  image:Proto3,
  title:'Ethiopian Orthodox monk',
  github:'https://github.com',
demo:'https://guileless-crisp-5b2a7d.netlify.app/'
},
{
  id:4,
  image:Proto4,
  title:'orthodox priest teaching a student',
  github:'https://github.com',
demo:'https://guileless-crisp-5b2a7d.netlify.app/'
},
{
  id:5,
  image:Proto5,
  title:'Ethiopian_beauty',
  github:'https://github.com',
demo:'https://guileless-crisp-5b2a7d.netlify.app/'
},
{
  id:6,
  image:Proto6,
  title:'Ethiopian_beauty',
  github:'https://github.com',
demo:'https://guileless-crisp-5b2a7d.netlify.app/'
}
]
const Portfolio = () => {
  return (
   
    <section id="portfolio">
     
      <h5>My Recent work </h5>
      <h2>Portfolio</h2>
     
     <div className="container portfolio__container">
              {
                data.map(({id,image,title,github,demo})=>{
                  return(
<article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <div className="images__container">
<img src={image} alt={title}/>
            </div>
          </div>
          <h3>
            {title}
          </h3>
          <div className="portfolio__item-cta">

          <a href={github} className="btn"   target="_blank" rel="noreferrer">Github</a>
          <a href={demo} className="btn btn-primary"  target="_blank" rel="noreferrer">Live Demo</a>  
          </div>
        </article>

                  )
                })
              }

     </div>

      </section>
      
  )
}

export default Portfolio