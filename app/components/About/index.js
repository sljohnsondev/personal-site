import React from 'react';
import Resume from '../Resume';
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
      <p className='about-bold'>My skills as a front-end software developer allow me to be a more dangerous problem solver and solutions ninja.</p>
      <Resume />
    </div>
  );
}

export default About;
