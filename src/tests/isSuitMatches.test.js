const isSuitMatches = require("../utils/isSuitMatches");

// Different empty cases

test("1. cards null", () => {
    expect(isSuitMatches(null, null)).toBe(false);
})

test("2. first input null, second input empty object", () => {
    expect(isSuitMatches(null, {})).toBe(false);
})

test("3. empty object and null", () => {
    expect(isSuitMatches({}, null)).toBe(false);
})

test("4. two empty objects", () => {
    expect(isSuitMatches({}, {})).toBe(false);
})

test("5. empty array and empty object", () => {
    expect(isSuitMatches([], {})).toBe(false);
})

// Pass function non objects

test("6. Array with hearts witten at [0], and an object where suit = hearts", () => {
    expect(isSuitMatches(["hearts"], { suit: "hearts" })).toBe(false);
})

test("7. An object where suit = hearts, an Array with hearts witten at [0]", () => {
    expect(isSuitMatches({ suit: "hearts" }, ["hearts"])).toBe(false);
})

test("8. string that says hearts, An object where suit = hearts", () => {
    expect(isSuitMatches("'drop tables", { suit: "hearts" })).toBe(false);
})

test("9. string that says hearts, An object where suit = hearts", () => {
    expect(isSuitMatches({ suit: "hearts" }, "heart")).toBe(false);
})

test("10. An object where suit = hearts, number 3", () => {
    expect(isSuitMatches({ suit: "hearts" }, 3)).toBe(false);
})

test("11. The number 3, An object where suit = hearts", () => {
    expect(isSuitMatches(3, { suit: "hearts" })).toBe(false);
})

// Pass function objects that are not the same

test("12. Array where [0] is An object where suit = hearts, and An object where suit = hearts", () => {
    expect(isSuitMatches([{ suit: "heart" }], { suit: "hearts" })).toBe(false);
})

test("13. An object where suit = hearts, Array where [0] is An object where suit = hearts", () => {
    expect(isSuitMatches([{ suit: "hearts" }, { suit: "The FountainHead" }])).toBe(false);
})

