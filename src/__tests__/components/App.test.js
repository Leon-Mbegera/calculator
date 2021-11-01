import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../components/App';

describe('App component', () => {
  test('contains a text element', () => {
    render(<App />);
    const text = screen.getByText('Lets do some Math!');
    expect(text).toBeInTheDocument();
  });
});
