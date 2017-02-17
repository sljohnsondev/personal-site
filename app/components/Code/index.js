import React from 'react';
import './code-style';

const Code = () => {
  return (
    <div className='section-code main'>
      <a className='nav-hook' name='code'></a>
      <h2>Code</h2>
      <h4>Some projects I've worked on</h4>
      <section className='projects'>
        <article className='project'>
          <img className='project-img' src={require('../../Images/projects/chat.png')} />
          <article className='project-text'>
            <h3>Shoot The Breeze</h3>
            <h5>Authenticated chat app built on top of Firebase</h5>
            <h5 className='tech'>React.js - Firebase - Enzyme/Chai/Sinon</h5>
            <div className='project-links'>
              <a className='project-link' href='https://github.com/sljohnson32/shoot-the-breeze' target="_blank"><img src={require('../../Images/social/github.png')} /></a>
              <a className='project-link' href='https://shoot-the-breeze-8b841.firebaseapp.com/' target="_blank"><img src={require('../../Images/social/browser.png')} /></a>
            </div>
          </article>
        </article>
        <article className='project'>
          <img className='project-img' src={require('../../Images/projects/weatherly.png')} />
          <article className='project-text'>
            <h3>Weatherly</h3>
            <h5>Weather forecast app built on external APIs</h5>
            <h5 className='tech'>React.js - Redux - External API - Sass - Enzyme/Chai</h5>
            <div className='project-links'>
              <a className='project-link' href='https://github.com/sljohnson32/redux-weather-app' target="_blank"><img src={require('../../Images/social/github.png')} /></a>
              <a className='project-link' href='' target="_blank"><img src={require('../../Images/social/browser.png')} /></a>
            </div>
          </article>
        </article>
        <article className='project last-project'>
          <img className='project-img' src={require('../../Images/projects/chuckle.png')} />
          <article className='project-text'>
            <h3>Chuckle Norris Joke Machine</h3>
            <h5>Random joke generator built on external API</h5>
            <h5 className='tech'>React.js - React Router - External API - Sass - Enzyme/Chai</h5>
            <div className='project-links'>
              <a className='project-link' href='https://github.com/sljohnson32/chuckle-norris' target="_blank"><img src={require('../../Images/social/github.png')} /></a>
              <a className='project-link' href='' target="_blank"><img src={require('../../Images/social/browser.png')} /></a>
            </div>
          </article>
        </article>
      </section>
    </div>
  );
}

export default Code;
