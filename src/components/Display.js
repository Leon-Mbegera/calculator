import React from 'react';
import PropTypes from 'prop-types';
import './calc.css';

function Display({ result }) {
  return <div className="display-screen">{result || '0'}</div>;
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
