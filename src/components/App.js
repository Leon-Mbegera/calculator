import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';
import './calc.css';

function App() {
  const [state, setState] = useState({
    total: '',
    next: '',
    operation: '',
  });

  const handleClick = (buttonName) => {
    const { total, next, operation } = state;
    setState(Calculate({ total, next, operation }, buttonName));
  };

  const { total } = state;
  return (
    <>
      <div className="border">
        <Display result={total} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </>
  );
}

export default App;
