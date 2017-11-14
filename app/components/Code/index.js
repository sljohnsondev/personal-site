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
          <img className='project-img' src={require('../../Images/projects/grad-cap.png')} />
          <article className='project-text'>
            <h3>School Finder</h3>
            <h5>Google Maps web app for parents looking for nearby schools in Denver</h5>
            <h5 className='tech'>React, Redux, Node, Express, Knex, PostgreSQL, Google Maps APIs, Enzyme/Chai/Chai HTTP</h5>
            <div className='project-links'>
              <a className='project-link' href='https://github.com/sljohnson32/school-finder' target="_blank"><img src={require('../../Images/social/github.png')} /></a>
              <a className='project-link' href='https://school-finder-86e85.firebaseapp.com/' target="_blank"><img src={require('../../Images/social/browser.png')} /></a>
            </div>
          </article>
        </article>
        <article className='project'>
          <img className='project-img' src={require('../../Images/projects/grad-cap.png')} />
          <article className='project-text'>
            <h3>Colorado Education Data API</h3>
            <h5>RESTful API with publicly available, school-based education data</h5>
            <h5 className='tech'>Node, Express, Knex, PostgreSQL, Chai/Chai HTTP</h5>
            <div className='project-links'>
              <a className='project-link' href='https://github.com/sljohnson32/CDoE_data_api' target="_blank"><img src={require('../../Images/social/github.png')} /></a>
              <a className='project-link' href='https://cdoe-data-api.herokuapp.com/' target="_blank"><img src={require('../../Images/social/browser.png')} /></a>
            </div>
          </article>
        </article>
        <article className='project'>
          <img className='project-img' src={require('../../Images/projects/chat.png')} />
          <article className='project-text'>
            <h3>Shoot The Breeze</h3>
            <h5>Authenticated chat app built on top of Firebase</h5>
            <h5 className='tech'>React, Firebase, Enzyme/Chai/Sinon</h5>
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
            <h5 className='tech'>React.js, Redux, External API, Sass, Enzyme/Chai</h5>
            <div className='project-links'>
              <a className='project-link' href='https://github.com/sljohnson32/redux-weather-app' target="_blank"><img src={require('../../Images/social/github.png')} /></a>
            </div>
          </article>
        </article>
        <article className='project last-project'>
          <img className='project-img' src={require('../../Images/projects/chuckle.png')} />
          <article className='project-text'>
            <h3>Chuckle Norris Joke Machine</h3>
            <h5>Random joke generator built on external API</h5>
            <h5 className='tech'>React.js, React Router, External API, Sass, Enzyme/Chai</h5>
            <div className='project-links'>
              <a className='project-link' href='https://github.com/sljohnson32/chuckle-norris' target="_blank"><img src={require('../../Images/social/github.png')} /></a>
              <a className='project-link' href='https://sljohnson32.github.io/chuckle-norris/#/' target="_blank"><img src={require('../../Images/social/browser.png')} /></a>
            </div>
          </article>
        </article>
      </section>
    </div>
  );
}

export default Code;
