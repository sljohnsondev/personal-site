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
          <img src={require('../../Images/project-image.jpg')} />
          <h3>Shoot The Breeze</h3>
          <h5>Authenticated chat app built on top of Firebase</h5>
          <h5 className='tech'>React.js - Firebase - Enzyme/Chai/Sinon</h5>
        </article>
        <article className='project'>
          <img src={require('../../Images/project-image.jpg')} />
          <h3>Weatherly</h3>
          <h5>Weather forecast app built on external APIs</h5>
          <h5 className='tech'>React.js - Redux - External API - Sass - Enzyme/Chai</h5>
        </article>
        <article className='project last-project'>
          <img src={require('../../Images/project-image.jpg')} />
          <h3>Chuckle Norris Joke Machine</h3>
          <h5>Random joke generator built on external API</h5>
          <h5 className='tech'>React.js - React Router - External API - Sass - Enzyme/Chai</h5>
        </article>
      </section>
    </div>
  );
}

export default Code;
