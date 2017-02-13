import React from 'react';
import './header-style';
import Nav from '../Nav';

const Header = () => {
  return (
    <div className='section-header main'>
      <section className='icon-info-container'>
          <img className='icon-img' src={require('../../Images/sj-icon.png')} />
        <article className='sj-info'>
          <h5>Sam Johnson</h5>
          <h6>Front-End Developer</h6>
        </article>
      </section>
      <Nav />
    </div>
  );
}

export default Header;
