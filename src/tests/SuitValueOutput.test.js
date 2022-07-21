import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SuitValueOutput } from "../components/SuitValueOutput"

test('Is the SuitValueOutput component renders correct string', () => {
    const testing = { value: "2" }
    render(<SuitValueOutput leftCard={testing} rightCard={testing} />);
    const linkElement = screen.getByText("SNAP VALUE!");
    expect(linkElement).toBeInTheDocument();
});

test('Is the SuitValueOutput component renders correct string', () => {
    const testing = { suit: "hearts" }
    render(<SuitValueOutput leftCard={testing} rightCard={testing} />);
    const linkElement = screen.getByText("SNAP SUIT!");
    expect(linkElement).toBeInTheDocument();
});