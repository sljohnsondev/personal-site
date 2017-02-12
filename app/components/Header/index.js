import React from 'react';
import './header-style';
import Nav from '../Nav';

const Header = () => {
  return (
    <div className="header">
      <section id='sj-icon-container'>
        <img src={require('../../Images/sj-icon.png')} />
      </section>
      <section id='sj-info'>
        <h5>Sam Johnson</h5>
        <h6>Front-End Developer</h6>
      </section>
      <Nav />
    </div>
  );
}

export default Header;
