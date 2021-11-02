import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../components/Home';

describe('Home component', () => {
  test('renders a title', () => {
    render(<Home />);
    const text = screen.getByText('Welcome to our page!');
    expect(text).toBeInTheDocument();
  });

  test('renders a paragraph', () => {
    render(<Home />);
    const text = screen.getByText(/Math-magicians is a fictional/i);
    expect(text).toBeInTheDocument();
  });
});
