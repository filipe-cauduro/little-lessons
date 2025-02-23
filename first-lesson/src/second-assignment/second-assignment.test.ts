import { describe, expect, it } from "vitest"
import { averagePositiveNumbers } from "./second-assignment"

describe("What's the average of the positive numbers in the list?", () => {
  it("should return 45.6 given the list of numbers", () => {
    const numbers = [49, 46, 74, 59, -6, -12, 0]
    const result = averagePositiveNumbers(numbers)
    expect(result).toBe(45.6)
  })

  it("should return 45.6 given the list of numbers, even with NaN values", () => {
    const numbers = [49, 46, 74, 59, -6, -12, 0, NaN]
    const result = averagePositiveNumbers(numbers)
    expect(result).toBe(45.6)
  })

  it("should error if no positive number is informed", () => {
    const numbers = [-49, -46, -74, -59, -6, -12]
    expect(() => averagePositiveNumbers(numbers)).toThrowError(
      "The informed list doesn't contain any positive number",
    )
  })
})
