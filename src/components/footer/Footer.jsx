import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          Social Media
        </div>
        <div className="footer__socials">
          <a href="https://www.instagram.com/beba387aman" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/in/amanuel-nega-533353246" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div className="footer__links">
          <a href="#about">About</a>
          <a href="#portfolio">Projects i have done</a>
          <a href="#contacts">Contact me</a>
        </div>
        <div className="footer__copyright">
          &copy; 2024 MyPortfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
