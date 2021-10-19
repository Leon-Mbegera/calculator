import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

const App = () => (
  <>
    <Display showing={Calculate} />
    <ButtonPanel />
  </>
);

export default App;
