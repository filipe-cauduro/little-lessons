const containsWord = (textList: string[], wordLookup: string): boolean => {
  const trimmedWord = wordLookup.trim()

  if (!trimmedWord) throw new Error("The informed text is empty")
  if (textList.length === 0) throw new Error("The informed list is empty")

  return textList.some((text) => text.includes(trimmedWord))
}

export { containsWord }
