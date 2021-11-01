import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Display from '../../components/Display';

describe('Display component', () => {
  render(<Display />);
  test('renders a default "0" on screen', () => {
    const value = screen.getByText('0');
    expect(value).toBeInTheDocument();
  });
});
