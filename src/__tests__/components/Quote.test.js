import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from '../../components/Quote';

describe('Quote component', () => {
  test('renders a mathematicia quote', () => {
    render(<Quote />);
    const text = screen.getByText(/A mathematician, like a painter or a poet,/i);
    expect(text).toBeInTheDocument();
  });

  it('displays the author of the quote', () => {
    render(<Quote />);
    const author = screen.getByText(/G. H. Hardy/i);
    expect(author).toBeInTheDocument();
  });
});
