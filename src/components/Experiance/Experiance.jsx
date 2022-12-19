import './Experiance.css'
import React from 'react'
import {BsFillBookmarkCheckFill} from 'react-icons/bs'
const Experiance = () => {
  return (
    <section id="experiance">
    <h5>What skill i have</h5>
    <h2>My Skills</h2>
    <div className="container experiance__container">
      <div className="experiance__frontend">
<h3>Front End Development</h3>
<div className="experiance__content">
  <article className="experiance__details"> 
  <BsFillBookmarkCheckFill className="experiance_detail-icon"/>
  <div>
  <h4>HTML</h4>
  <small className="text-light">
    experianced enough
  </small>
  </div>
  </article>
  <article className="experiance__details"> 
  <BsFillBookmarkCheckFill className="experiance_detail-icon"/>
  <div>
  <h4>CSS</h4>
  <small className="text-light">
    experianced enough
  </small>
  </div>
  </article>
  <article className="experiance__details"> 
  <BsFillBookmarkCheckFill className="experiance_detail-icon"/>
  <div>
  <h4>JS</h4>
  <small className="text-light">
     enough javascript
  </small>
  </div>
  </article>
  <article className="experiance__details"> 
  <BsFillBookmarkCheckFill className="experiance_detail-icon"/>
  <div>
  <h4>bootstrap</h4>
  <small className="text-light">
    experianced enough
  </small>
  </div>
  </article>
  <article className="experiance__details"> 
  <BsFillBookmarkCheckFill className="experiance_detail-icon"/>
  <div>
  <h4>React js</h4>
  <small className="text-light">
    experianced enough
  </small>
  </div>
  </article>
</div>
      </div>
{/* BACK END STARTS HERE  */}

      <div className="experiance__backend">
<h3>BACKEND EXPERIANCE</h3>
<div className="experiance__content">
  <article className="experiance__details"> 
  <BsFillBookmarkCheckFill className="experiance_detail-icon"/>
<div>
<h4>Node js</h4>
  <small className="text-light">
    experianced enough
  </small>
</div>
  </article>
  <article className="experiance__details"> 
  <BsFillBookmarkCheckFill className="experiance_detail-icon"/>
 <div>
 <h4>mongo Db</h4>
  <small className="text-light">
    experianced enough
  </small>
 </div>
  </article>
  <article className="experiance__details"> 
  <BsFillBookmarkCheckFill className="experiance_detail-icon"/>
  <div>
  <h4>PHP</h4>
  <small className="text-light">
     Intermidiate
  </small>
  </div>
  </article>
  <article className="experiance__details"> 
  <BsFillBookmarkCheckFill className="experiance_detail-icon"/>
 <div>
 <h4>mysql</h4>
  <small className="text-light">
  Beyond Basic
  </small>
 </div>
  </article>
  <article className="experiance__details"> 
  <BsFillBookmarkCheckFill className="experiance_detail-icon"/>
 <div>
 <h4>Python</h4>
  <small className="text-light">
    experianced enough of python
  </small>
 </div>
  </article>
</div>
      </div>
    </div>
      </section>
  )
}

export default Experiance