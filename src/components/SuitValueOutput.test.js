import { SuitValueOutput } from './components/SuitValueOutput';

test("Checks if the component passes the correct string to the div", () => {
    const leftCard = { value: 2, suit: "clubs" }
    const rightCard = { value: 3, suit: "clubs" }

    expect(
        SuitValueOutput(leftCard, rightCard)
    ).toEqual("SNAP! Suits")
})