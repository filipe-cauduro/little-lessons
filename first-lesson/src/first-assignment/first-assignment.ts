const containsWord = (textList: string[], wordLookup: string): boolean => {
  if (!wordLookup) throw new Error("The informed text is empty")

  if (textList.length < 1) throw new Error("The informed list is empty")

  return textList.some((x) => x.trim().includes(wordLookup.trim()))
}

export { containsWord }
