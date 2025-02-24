const averagePositiveNumbers = (numbers: number[]): number => {
  const positiveNumbers = numbers.filter((number) => number >= 0)

  if (positiveNumbers.length === 0)
    throw new Error("The informed list doesn't contain any positive number")

  const sum = positiveNumbers.reduce((sum, number) => sum + number, 0)

  return sum / positiveNumbers.length
}

export { averagePositiveNumbers }
