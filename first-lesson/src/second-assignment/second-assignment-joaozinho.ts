const validateNumber = (numbers: number[]) => {
  const positiveNumbers = numbers.filter((x) => x >= 0)

  if (positiveNumbers.length <= 0)
    throw new Error("The informed list doesn't contain any positive number")
  return positiveNumbers
}

const averagePositiveNumbers = (numbers: number[]): number => {
  const ValidNumbers = validateNumber(numbers)
  const sum = ValidNumbers.reduce(
    (previosValue, currentValue) => previosValue + currentValue,
    0,
  )
  return sum / ValidNumbers.length
}

export { averagePositiveNumbers }
