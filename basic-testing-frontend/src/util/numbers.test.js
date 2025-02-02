import { transformToNumber } from "./numbers";
import { expect, it } from "vitest";

it("should transform to a string to a number", () => {
    const number = transformToNumber("1");
    expect(number).toBe(1);
})

it("should yield NaN for non-transformable number", () => {
    const input = "invalid"
    const input2 = {}

    const result = transformToNumber(input)
    const result2 = transformToNumber(input2)

    expect(result).toBeNaN()
    expect(result2).toBeNaN()
})

it("should yield 0 if the array is empty", () => {
    const number = []

    const result = transformToNumber(number)
    expect(result).toBe(0)
})