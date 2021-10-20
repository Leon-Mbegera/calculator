import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const data = Calculate(this.state, buttonName);
    this.setState({
      next: data.next,
      total: data.total,
      operation: data.operation,
    });
  }

  render() {
    return (
      <>
        <Display show={this.state.total || this.state.next} />
        <ButtonPanel clickHandler={() => handleClick(buttonName)} />
      </>
    );
  }
}

export default App;
