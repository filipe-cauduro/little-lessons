import { readdir } from "fs/promises"
import { join } from "path"
import { describe, expect, it } from "vitest"

type ImportedAssignment = {
  averagePositiveNumbers: (numbers: number[]) => number
}

describe("What's the average of the positive numbers in the list?", async () => {
  const dir = await readdir(join(__dirname))
  const assignments = dir.filter((x) => x.match(/second-assignment\.[j|t]s$/))

  for (const assignmentPath of assignments) {
    const importedFile: ImportedAssignment = await import(`./${assignmentPath}`)
    const { averagePositiveNumbers } = importedFile

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
  }
})
