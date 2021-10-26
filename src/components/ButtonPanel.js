import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './calc.css';

function clickButton(label, handleClick) {
  return <Button show={label} onClick={() => handleClick(label)} />;
}

function ButtonPanel({ clickHandler }) {
  const handleClick = (buttonName) => {
    clickHandler(buttonName);
  };

  return (
    <>
      <div className="button-panel">
        <div className="panel-row">
          {clickButton('AC', handleClick)}
          {clickButton('+/-', handleClick)}
          {clickButton('%', handleClick)}
          {clickButton('÷', handleClick)}
        </div>
        <div>
          {clickButton('7', handleClick)}
          {clickButton('8', handleClick)}
          {clickButton('9', handleClick)}
          {clickButton('x', handleClick)}
        </div>
        <div>
          {clickButton('4', handleClick)}
          {clickButton('5', handleClick)}
          {clickButton('6', handleClick)}
          {clickButton('-', handleClick)}
        </div>
        <div>
          {clickButton('1', handleClick)}
          {clickButton('2', handleClick)}
          {clickButton('3', handleClick)}
          {clickButton('+', handleClick)}
        </div>
        <div>
          {clickButton('0', handleClick)}
          {clickButton('.', handleClick)}
          {clickButton('=', handleClick)}
        </div>
      </div>
    </>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
