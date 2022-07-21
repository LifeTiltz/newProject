import Header from "../Header"
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';

test('Is there and img', () => {
    render(<Header />);
    const linkElement = screen.getByRole("img");
    expect(linkElement).toBeInTheDocument();
});

test('SNAP is being displayed', () => {
    render(<Header />);
    const linkElement = screen.queryByText("SNAP!");
    expect(linkElement).toBeInTheDocument();
});