const validateList = (list: string[]) => {
  if (list.length === 0) throw new Error("The informed list is empty")
  return list
}

const validateWord = (word: string) => {
  if (word.length === 0) throw new Error("The informed text is empty")
  return word
}

const containsWord = (textList: string[], wordLookup: string): boolean => {
  const validWord = validateWord(wordLookup)
  const validList = validateList(textList)

  return validList.some((x) => x.includes(wordLookup.trim()))
}

export { containsWord }
