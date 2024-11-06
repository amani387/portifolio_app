import React from 'react'
import './Portfolio.css'
import Proto1 from '../../assets/ARMPE.png'
import Proto2 from '../../assets/hita.png'
import Proto3 from '../../assets/memuya.png'
import Proto4 from '../../assets/mekdi.jpg'
import Proto5 from '../../assets/port4.webp'
import Proto6 from '../../assets/port6.webp'
import Proto7 from '../../assets/aman_mern_blog.png'
import Proto8 from '../../assets/aman_next_blog.png'

const data = [{
  id:1,
  image:Proto1,
  title:'Agricultural machinery Rental System which is done using MERN and material ui',
  github:'https://githubhttps://github.com/amani387?tab=repositories',
demo:'https://guileless-crisp-5b2a7d.netlify.app/'
}
,
{
  id:2,
  image:Proto2,
  title:'Harari Innovation Technology Agency beuruea system',
  github:'https://github.com/amani387?tab=repositories',
demo:'https://guileless-crisp-5b2a7d.netlify.app/'
},
{
  id:3,
  image:Proto3,
  title:'Memuya mobile app done using flutter',
  github:'https://github.com/amani387?tab=repositories',
demo:'https://guileless-crisp-5b2a7d.netlify.app/'
},
{
  id:4,
  image:Proto4,Proto1,
  
  title:'A beauty Saloon Logo that i have made and implimented ',
  github:'https://github.com/amani387?tab=repositories',
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
},
{
  id:7,
  image:Proto7,
  title:'Blog App using mern-stack',
  github:'https://github.com',
  demo:'https://mern-blog-application-kfqi.onrender.com'
}
,
{
  id:8,
  image:Proto8,
  title:'Blog App using Next js',
  github:'https://github.com',
  demo:'https://next-js-blog-app-a32g.vercel.app/'
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