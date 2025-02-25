const containsWord = (textList: string[], wordLookup: string): boolean => {
  if (textList.length === 0) throw new Error("The informed list is empty")

  if (wordLookup.trim() === "") throw new Error("The informed text is empty")

  const foundText = textList.find((text) => text.includes(wordLookup.trim()))

  return !!foundText
}

export { containsWord }
