import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

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
      <Display result={total} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
}

export default App;
