import React from 'react';
import './about-style';

const About = () => {
  return (
    <div className='section-about main'>
      <a className='nav-hook' name='about'></a>
      <h2>About</h2>
      <h4></h4>
      <p className='about-bold'>At my core, I am a pragmatic problem solver.</p>
      <p>I spent the first 11 years of my career at Teach For America building operational capacity through smart solutions to business problems.</p>
      <p>During my last five years at TFA, I worked as a product owner and team leader for Technology Solutions.</p>
      <p className='about-bold'>Having recently completed the Front-End Engineering program at Turing, my skills as a software engineer allow me to be a more dangerous problem solver and solutions ninja.</p>
      <h3 className='resume-link'><a href="https://drive.google.com/file/d/0B1LF3i2gTJgNR3p4ZzVZSndYY0E/view?usp=sharing" target='_blank'>Check out my resume </a><img className='icon-arrow' src={require('../../Images/resume-icon.png')} /></h3>
    </div>
  );
}

export default About;
