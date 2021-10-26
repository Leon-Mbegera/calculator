import React from 'react';
import PropTypes from 'prop-types';
import './calc.css';

function Button({
  show, onClick,
}) {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className="button"
        style={{
          background:
            (show !== '÷') && (show !== 'x') && (show !== '-') && (show !== '+') && (show !== '=') ? 'whitesmoke' : 'lavender',
          width: (show === '0') ? '50%' : '25%',
        }}
      >
        {show}
      </button>
    </>
  );
}

Button.propTypes = {
  show: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
