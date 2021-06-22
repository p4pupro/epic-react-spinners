import { render, screen } from '@testing-library/react';
import App from './App';

describe('Page App', () => {
  it('renders header', () => {
    render(<App />);
    const headerElement = screen.getByText(/Epic React Spinners/i);
    expect(headerElement).toBeInTheDocument();
  })

  it('renders sub-header', () => {
    render(<App />);
    const subHeaderElement = screen.getByText(/React Implementation of/i);
    expect(subHeaderElement).toBeInTheDocument();
  })

  it('renders spinners', () => {
    render(<App />);
    const atomElement = screen.getByText(/Atom Spinner/i);
    expect(atomElement).toBeInTheDocument();
    const orbitElement = screen.getByText(/Orbit Spinner/i);
    expect(orbitElement).toBeInTheDocument();
    const trinityElement = screen.getByText(/Trinity Spinner/i);
    expect(trinityElement).toBeInTheDocument();
    const electronElement = screen.getByText(/Electron Spinner/i);
    expect(electronElement).toBeInTheDocument();
    const squaresElement = screen.getByText(/Squares Spinner/i);
    expect(squaresElement).toBeInTheDocument();
    const selfSquareElement = screen.getByText(/SelfSquare Spinner/i);
    expect(selfSquareElement).toBeInTheDocument();
    const flowerElement = screen.getByText(/Flower Spinner/i);
    expect(flowerElement).toBeInTheDocument();
    const rhombusesElement = screen.getByText(/Rhombuses Spinner/i);
    expect(rhombusesElement).toBeInTheDocument();
    const halfCircleElement = screen.getByText(/Half Circle Spinner/i);
    expect(halfCircleElement).toBeInTheDocument();
    const fingerPrintElement = screen.getByText(/FingerPrint Spinner/i);
    expect(fingerPrintElement).toBeInTheDocument();
  })

  it('renders footer', () => {
    render(<App />);
    const footerElement = screen.getByText(/@p4pupro/i);
    expect(footerElement).toBeInTheDocument();
  })
})

