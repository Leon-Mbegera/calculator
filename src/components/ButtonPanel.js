import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = (props) => {
  const { clickHandler } = props;

  return (
    <div>
      <div>
        <Button buttonName="AC" handleClick={clickHandler} />
        <Button buttonName="+/-" handleClick={clickHandler} />
        <Button buttonName="%" handleClick={clickHandler} />
        <Button buttonName="÷" handleClick={clickHandler} />
      </div>
      <div>
        <Button buttonName="7" handleClick={clickHandler} />
        <Button buttonName="8" handleClick={clickHandler} />
        <Button buttonName="9" handleClick={clickHandler} />
        <Button buttonName="x" handleClick={clickHandler} />
      </div>
      <div>
        <Button buttonName="4" handleClick={clickHandler} />
        <Button buttonName="5" handleClick={clickHandler} />
        <Button buttonName="6" handleClick={clickHandler} />
        <Button buttonName="-" handleClick={clickHandler} />
      </div>
      <div>
        <Button buttonName="1" handleClick={clickHandler} />
        <Button buttonName="2" handleClick={clickHandler} />
        <Button buttonName="3" handleClick={clickHandler} />
        <Button buttonName="+" handleClick={clickHandler} />
      </div>
      <div>
        <Button buttonName="0" handleClick={clickHandler} />
        <Button buttonName="." handleClick={clickHandler} />
        <Button buttonName="=" handleClick={clickHandler} />
      </div>
    </div>
  );
};

export default ButtonPanel;
