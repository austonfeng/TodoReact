import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App component', () => {
  test('renders App component', () => {
    const { getByText } = render(<App />);
    const titleElement = getByText(/My Tasks List TO DO/i);
    expect(titleElement).toBeInTheDocument();
  });
});
