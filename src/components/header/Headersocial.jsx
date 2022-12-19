import React from 'react'
import {BsLinkedin,BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
const Headersocial = () => {
  return (
    <div className="header__socials">
        <a href="https://linkdin.com/" rel="noreferrer" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/" rel="noreferrer" target="_blank"><BsGithub/></a>
        <a href="https://twitter.com/" rel="noreferrer" target="_blank"><BsTwitter/></a>
    </div>
  )
}

export default Headersocial