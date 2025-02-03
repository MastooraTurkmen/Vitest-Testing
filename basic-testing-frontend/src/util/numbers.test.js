import { cleanNumbers, transformToNumber } from "./numbers";
import { expect, it, describe } from "vitest";

describe("transformToNumber()", () => {
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
})

describe("cleanNumbers()", () => {
    it("should return an array of number values if an array of string number values is provided", () => {
        const numberValues = ["1", "2"]
        const cleanedNumbers = cleanNumbers(numberValues)
        expect(cleanedNumbers[0]).toBeTypeOf("number")
    })

    it("Should throw an error if an array with at least one empty string is provided", () => {
        const numberValues = ["", 1]
        const cleanFn = () => cleanNumbers(numberValues);
        expect(cleanFn).toThrow()
    })
})