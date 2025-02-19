import { describe, expect, it } from "vitest"
import { containsWord } from "./first-assignment"

describe("Does the list contains a string which includes the guiven text?", () => {
  it("should return true if word is in text on text list", () => {
    const textList = ["literally any", "text to", "test cool", "stuff!"]
    const wordToSearch = "stuff"
    const result = containsWord(textList, wordToSearch)
    expect(result).toBeTruthy()
  })

  it("should return true if non trimmed word is in text on text list", () => {
    const textList = ["literally any", "text to", "test cool", "stuff!"]
    const wordToSearch = " stuff "
    const result = containsWord(textList, wordToSearch)
    expect(result).toBeTruthy()
  })

  it("should return false if word isn't in any text of text list", () => {
    const textList = ["literally any", "text to", "test cool", "stuff!"]
    const wordToSearch = "dinosaur"
    const result = containsWord(textList, wordToSearch)
    expect(result).toBeFalsy()
  })

  it("should error if text list is empty", () => {
    const emptyTextList: string[] = []
    const wordToSearch = "dinosaur"
    expect(() => containsWord(emptyTextList, wordToSearch)).toThrowError(
      "The informed list is empty",
    )
  })

  it("should error if word string is empty", () => {
    const textList = ["literally any", "text to", "test cool", "stuff!"]
    const wordToSearch = ""
    expect(() => containsWord(textList, wordToSearch)).toThrowError(
      "The informed text is empty",
    )
  })
})
