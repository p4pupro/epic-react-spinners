import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Page App', () => {
  it('renders header', () => {
    render(<App />);
    const headerElement = screen.getByText(/React Epic Spinners/i);
    expect(headerElement).toBeInTheDocument();
  })

  it('renders sub-header', () => {
    render(<App />);
    const subHeaderElement = screen.getByText(/React Implementation of/i);
    expect(subHeaderElement).toBeInTheDocument();
  })
})

