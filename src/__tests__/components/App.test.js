import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../components/App';

describe('App component', () => {
  render(<App />);

  test('contains a text element', () => {
    const text = screen.getByText('Lets do some Math!');
    expect(text).toBeInTheDocument();
  });
});
