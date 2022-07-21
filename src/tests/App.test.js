import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import App from '../App';

test('is the button rendered', () => {
  render(<App />);
  const linkElement = screen.getByRole("button");
  expect(linkElement).toBeInTheDocument();
});

test('Value matches isnt showing', () => {
  render(<App />);
  const linkElement = screen.queryByText("Value Matches: ");
  expect(linkElement).not.toBeInTheDocument();
});