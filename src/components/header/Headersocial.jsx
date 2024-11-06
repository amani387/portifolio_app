import React from 'react'
import {BsLinkedin,BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
const Headersocial = () => {
  return (
    <div className="header__socials">
        <a href="https://www.instagram.com/beba387aman" rel="noreferrer" target="_blank"><BsLinkedin/></a>
        <a href="https://www.linkedin.com/in/amanuel-nega-533353246" rel="noreferrer" target="_blank"><BsGithub/></a>
        <a href="https://twitter.com/Aman_nega" rel="noreferrer" target="_blank"><BsTwitter/></a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  )
}

/*
<a href="https://www.instagram.com/beba387aman" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/in/amanuel-nega-533353246" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>

*/
export default Headersocial