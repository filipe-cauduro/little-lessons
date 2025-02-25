import { describe, it, expect } from "vitest"
import { containsFunction } from "./example"

describe("An example test to an example function", () => {
  it("should return true when the search is found on text", () => {
    const text = "this text is an example sample"
    const searchKeyword = "an"
    const result = containsFunction(text, searchKeyword)
    expect(result).toBeTruthy()
  })

  it("should return false when the search isn't found on text", () => {
    const text = "this text is an example sample"
    const searchKeyword = "neverfoundtext"
    const result = containsFunction(text, searchKeyword)
    expect(result).toBeFalsy()
  })
})
