import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
describe('Page App', function () {
    it('renders header', function () {
        render(React.createElement(App, null));
        var headerElement = screen.getByText(/React Epic Spinners/i);
        expect(headerElement).toBeInTheDocument();
    });
    it('renders sub-header', function () {
        render(React.createElement(App, null));
        var subHeaderElement = screen.getByText(/React Implementation of/i);
        expect(subHeaderElement).toBeInTheDocument();
    });
});
