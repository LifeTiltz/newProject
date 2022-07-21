const isValueMatches = require("../utils/isValueMatches");

// Different empty cases

test("1. cards null", () => {
    expect(isValueMatches(null, null)).toBe(false);
})

test("2. first input null, second input empty object", () => {
    expect(isValueMatches(null, {})).toBe(false);
})

test("3. empty object and null", () => {
    expect(isValueMatches({}, null)).toBe(false);
})

test("4. two empty objects", () => {
    expect(isValueMatches({}, {})).toBe(false);
})

test("5. empty array and empty object", () => {
    expect(isValueMatches([], {})).toBe(false);
})

// Pass function non objects

test("6. Array with 3 written at [0], and an object where number is the number 3", () => {
    expect(isValueMatches(["3"], { number: 3 })).toBe(false);
})

test("7. An object where number is the number 3, an Array with a string written at [0] is 3", () => {
    expect(isValueMatches({ number: 3 }, ["3"])).toBe(false);
})

test("8. string that says drop tables, An object where number is 3", () => {
    expect(isValueMatches("'drop tables", { number: 3 })).toBe(false);
})

test("9. string that says hearts, An object where number = 3", () => {
    expect(isValueMatches({ number: "hearts" }, "3")).toBe(false);
})

test("10. An object where suit = hearts, number 3", () => {
    expect(isValueMatches({ number: 3 }, 3)).toBe(false);
})

test("11. The number 3, An object where suit = hearts", () => {
    expect(isValueMatches(3, { number: "hearts" })).toBe(false);
})

// Pass function objects that are not the same

test("12. Array where [0] is An object where suit = hearts, and An object where suit = hearts", () => {
    expect(isValueMatches([{ number: "heart" }], { number: "hearts" })).toBe(false);
})

test("13. An object where suit = hearts, Array where [0] is An object where suit = hearts", () => {
    expect(isValueMatches([{ number: "hearts" }, { number: "The FountainHead" }])).toBe(false);
})