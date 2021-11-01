import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Routes from '../../components/Routes';

describe('Routes component renders the navigation bar', () => {
  test('contains link to home page', () => {
    render(<Routes />);
    const link = screen.getByText(/Home/i);
    expect(link).toBeInTheDocument();
  });
  test('contains link to calculator app', () => {
    render(<Routes />);
    const link = screen.getByText(/Calculator/i);
    expect(link).toBeInTheDocument();
  });
  test('contains link to quotes page', () => {
    render(<Routes />);
    const link = screen.getByText(/Quote/i);
    expect(link).toBeInTheDocument();
  });
});
