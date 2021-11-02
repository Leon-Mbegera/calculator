import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Display from '../../components/Display';

describe('Display component', () => {
  render(<Display />);
  test('renders a default "0" on screen', () => {
    const value = screen.getByText('0');
    expect(value).toBeInTheDocument();
  });

  test('Display panel displays all calculator buttons', () => {
    const snap = renderer.create(<Display result="0" />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
