// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { SuitValueOutput } from './components/SuitValueOutput';

test("Checks if the component passes the correct string to the div", () => {
    const leftCard = { value: 2, suit: "clubs" }
    const rightCard = { value: 3, suit: "clubs" }

    expect(
        SuitValueOutput(leftCard, rightCard)
    ).toEqual("SNAP! Suits")
})