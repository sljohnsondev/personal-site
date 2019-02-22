import React from 'react';
import './footer-style';

const Footer = () => {
  return (
    <section className="section-footer main">
      <a className='nav-hook' name='contact'></a>
      <h2>Contact Me</h2>
      <section className='container-social'>
        <a className="social-media" href="https://github.com/sljohnson32" target="_blank" rel="noopener">
          <img src={require("../../Images/social/github.png")} alt="Sam's GitHub profile"/></a> |
        <a className="social-media" href="https://www.instagram.com/sljohnson_" target="_blank" rel="noopener">
          <img src={require("../../Images/social/instagram.png")} alt="Sam's Instagram profile"/></a>
          <span className='social-media-divider-hide second'>|</span>
        <a className="social-media" href="https://www.linkedin.com/in/sljohnson" target="_blank" rel="noopener">
          <img src={require("../../Images/social/linkedin.png")} alt="Sam's LinkedIn profile"/></a>
          <span className='social-media-divider-hide third'>|</span>
        <a className="social-media" href="mailto:sljohnson32@gmail.com">
          <img src={require("../../Images/social/email.png")} alt="Sam's email"/></a>
      </section>
    </section>
  )
}

export default Footer;
