import React from 'react';
import PropTypes from 'prop-types';

function Button({ show, onClick }) {
  return (
    <>
      <button type="button" onClick={onClick}>
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
