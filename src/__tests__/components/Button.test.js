import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../../components/Button';

test('Button component', () => {
  const clickHandler = () => 'clickme';
  render(<Button type="button" name="clickme" handleClick={clickHandler} />);

  const btn = screen.getByText(/clickme/i);
  expect(btn).toBeInTheDocument();
});
