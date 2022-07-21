import Card from "../components/Card";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

test('Does the Card component rendering and img', () => {
    let prop = { image: "websiteHere" }
    render(<Card object={prop} />);
    const linkElement = screen.getByRole("img");
    expect(linkElement).toBeInTheDocument();
});
