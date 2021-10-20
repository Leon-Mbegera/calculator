import React from 'react';

const Button = (props) => {
  const { buttonName, handleClick } = props;

  return (
    <button type="button" label={buttonName} onClick={handleClick}></button>
  );
};

export default Button;
