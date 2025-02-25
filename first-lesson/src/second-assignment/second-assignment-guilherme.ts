const averagePositiveNumbers = (numbers: number[]): number => {
  const positiveNumbers = numbers.filter(
    (num) => num >= 0 && !Number.isNaN(num),
  )

  if (positiveNumbers.length === 0)
    throw new Error("The informed list doesn't contain any positive number")

  return (
    positiveNumbers.reduce((acc, num) => acc + num, 0) / positiveNumbers.length
  )
}

export { averagePositiveNumbers }
