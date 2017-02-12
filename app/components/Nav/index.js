import React from 'react';

const Nav = (props) => {
  return (
    <button onClick={() => props.handleClick() }>Sam's Button</button>
  );
}

export default Nav;
