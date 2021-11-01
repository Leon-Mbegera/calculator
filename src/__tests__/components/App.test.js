import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import App from '../../components/App';

describe('App component', () => {
  test('contains a text element', () => {
    render(<App />);
    const text = screen.getByText('Lets do some Math!');
    expect(text).toBeInTheDocument();
  });

  test('renders Display and ButtonPanel components', () => {
    const snap = renderer.create(<App />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
