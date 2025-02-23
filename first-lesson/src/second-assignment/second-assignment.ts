const averagePositiveNumbers = (numbers: number[]): number => {
  const positiveNumbers = numbers.filter(
    (x) => typeof x === "number" && !isNaN(x) && x >= 0,
  )

  if (positiveNumbers.length < 1)
    throw new Error("The informed list doesn't contain any positive number")

  return positiveNumbers.reduce((prev, acc) => prev + acc, 0) / positiveNumbers.length
}

export { averagePositiveNumbers }
