import React from 'react'
import './Nav.css';
import {AiOutlineHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {FcSalesPerformance} from 'react-icons/fc'
import {FaServicestack} from 'react-icons/fa'
import {FcContacts} from 'react-icons/fc'
import { useState } from 'react';

const Nav = () => {
  const [state,setState] = useState("#");
  return (
    
   <nav>
    <a href="#" className={state==="#" ? "active" : ""}><AiOutlineHome/></a>
    <a href="#about" onClick={()=>setState("#about")} className={state==="#about" ? "active" : ""}><FcAbout/></a>
    <a href="#experiance" onClick={()=>setState("#experiance")} className={state==="#experiance" ? "active" : ""}><FcSalesPerformance/></a>
    <a href="#services" onClick={()=>setState("#services")} className={state==="#services"?"active":""}><FaServicestack/></a>
    <a href="#contacts" onClick={()=>setState("#contacts")} className={state==="#contacts"?'active':""}><FcContacts/></a>
   </nav>
    
  
    )
}

export default Nav