import React from 'react';
import './footer-style';

const Footer = () => {
  return (
    <section className="section-footer">
      <h2>Contact Me</h2>
      <section className='container-social'>
        <a className="social-media" href="https://github.com/sljohnson32" target="_blank">
          <img src={require("../../Images/social/github.png")} alt="Sam's GitHub profile"/></a> |
        <a className="social-media" href="https://www.facebook.com/sljohnson32" target="_blank">
          <img src={require("../../Images/social/facebook.png")} alt="Sam's Facebook profile"/></a> |
        <a className="social-media" href="https://www.instagram.com/sljohnson_" target="_blank">
          <img src={require("../../Images/social/instagram.png")} alt="Sam's Instagram profile"/></a> |
        <a className="social-media" href="https://www.twitter.com/sjohnson_" target="_blank">
          <img src={require("../../Images/social/twitter.png")} alt="Sam's Twitter profile"/></a> |
        <a className="social-media" href="https://www.linkedin.com/in/sljohnson" target="_blank">
          <img src={require("../../Images/social/linkedin.png")} alt="Sam's LinkedIn profile"/></a> |
          <a className="social-media" href="mailto:sljohnson32@gmail.com" target="_blank">
            <img src={require("../../Images/social/email.png")} alt="Sam's email"/></a>
      </section>
    </section>
  )
}
// <section className="email-msg">
//   <p>or hit me up at  <a href="mailto:sljohnson32@gmail.com">sljohnson32@gmail.com</a></p>
// </section>

export default Footer;
