import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div>
        <div>
          <Button buttonName="AC" clickHandler={clickHandler} />
          <Button buttonName="+/-" clickHandler={clickHandler} />
          <Button buttonName="%" clickHandler={clickHandler} />
          <Button buttonName="÷" clickHandler={clickHandler} />
        </div>
        <div>
          <Button buttonName="7" clickHandler={clickHandler} />
          <Button buttonName="8" clickHandler={clickHandler} />
          <Button buttonName="9" clickHandler={clickHandler} />
          <Button buttonName="x" clickHandler={clickHandler} />
        </div>
        <div>
          <Button buttonName="4" clickHandler={clickHandler} />
          <Button buttonName="5" clickHandler={clickHandler} />
          <Button buttonName="6" clickHandler={clickHandler} />
          <Button buttonName="-" clickHandler={clickHandler} />
        </div>
        <div>
          <Button buttonName="1" clickHandler={clickHandler} />
          <Button buttonName="2" clickHandler={clickHandler} />
          <Button buttonName="3" clickHandler={clickHandler} />
          <Button buttonName="+" clickHandler={clickHandler} />
        </div>
        <div>
          <Button buttonName="0" clickHandler={clickHandler} />
          <Button buttonName="." clickHandler={clickHandler} />
          <Button buttonName="=" clickHandler={clickHandler} />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
