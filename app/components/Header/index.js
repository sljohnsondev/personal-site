import React from 'react';
import './header-style';
import Nav from '../Nav';

const Header = () => {
  return (
    <div className='section-header'>
      <a href='#home'><section className='icon-info-container'>
          <img className='icon-img' src={require('../../Images/sj-icon.png')} />
        <article className='sj-info'>
          <h1>Sam Johnson</h1>
          <h3>Front-End Developer</h3>
        </article>
      </section></a>
      <Nav />
    </div>
  );
}

export default Header;
