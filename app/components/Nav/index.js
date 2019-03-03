import React from 'react';
import './nav-style'

const Nav = () => {
  return (
    <div className='container-nav'>
      <nav id='container-nav'>
        <a href="#about"><h3>About</h3></a><p>-</p><a href="#contact"><h3>Contact</h3></a>
      </nav>
    </div>
  );
}

export default Nav;
