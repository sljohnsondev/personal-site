import React from 'react';

const Button = (props) => {
  return (
    <button onClick={() => props.handleClick() }>Sam's Button</button>
  );
}

export default Button;
