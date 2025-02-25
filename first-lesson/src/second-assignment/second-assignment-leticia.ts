const sumPositiveNumbers = (numbers: number[]): number => {
  let sum = 0

  numbers.forEach((num) => {
    if (num >= 0 && !isNaN(num)) {
      sum += num
    }
  })

  return sum
}

const averagePositiveNumbers = (numbers: number[]): number => {
  const positiveNumbers = numbers.filter((num) => num >= 0 && !isNaN(num))

  if (positiveNumbers.length === 0) {
    throw new Error("The informed list doesn't contain any positive number")
  }

  const sumNumbers = sumPositiveNumbers(positiveNumbers)

  return sumNumbers / positiveNumbers.length
}

export { averagePositiveNumbers }
