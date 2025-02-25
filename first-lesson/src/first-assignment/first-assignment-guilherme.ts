const containsWord = (textList: string[], wordLookup: string): boolean => {
  if (!textList.length) throw new Error("The informed list is empty")
  if (!wordLookup.trim()) throw new Error("The informed text is empty")

  return textList.some((text) => text.includes(wordLookup.trim()))
}

export { containsWord }
