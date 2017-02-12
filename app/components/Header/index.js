import React from 'react';
import './header-style';
import Nav from '../Nav';

const Header = () => {
  return (
    <div className="header">
      <section id='sj-icon-container'>
        <img src='../../imgs/sj-icon.png' />
      </section>
      <section id='signature'>
        <h5>Sam Johnson</h5>
        <h6>Front-End Developer</h6>
      </section>
    </div>
  );
}

export default Header;
