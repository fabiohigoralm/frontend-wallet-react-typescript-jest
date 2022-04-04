import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';



test('renders page title Wish Wallet ', () => {
  render(<App />);
  const linkElement = screen.getByText(/hahahaha/i);
  expect(linkElement).toBeInTheDocument();
});

