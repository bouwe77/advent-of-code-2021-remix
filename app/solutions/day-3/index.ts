import { Solution } from '~/types'

export default (input: string): Solution => {
  return { 'Part 1': getPart1(input), 'Part 2': getPart2(input) }
}

const getPart1 = (input: string): string => {
  const lines = input.split('\n').filter((line) => line.trim().length > 0)

  const bits: string[][] = []

  for (const line of lines) {
    const splitted = line.split('')
    for (let i = 0; i < splitted.length; i++) {
      if (!bits[i]) bits[i] = []
      bits[i].push(splitted[i])
    }
  }

  let mostCommon = ''
  let leastCommon = ''
  for (let i = 0; i < bits.length; i++) {
    if (
      bits[i].filter((b) => b === '1').length >
      bits[i].filter((b) => b === '0').length
    ) {
      mostCommon += '1'
      leastCommon += '0'
    } else {
      mostCommon += '0'
      leastCommon += '1'
    }
  }

  console.log(mostCommon)

  const mostCommonDecimal = toDecimal(mostCommon)

  console.log(mostCommonDecimal)

  const leastCommonDecimal = toDecimal(leastCommon)
  console.log(leastCommon)

  console.log(leastCommonDecimal)

  const solution = mostCommonDecimal * leastCommonDecimal

  console.log(solution)

  return solution.toString()
}

const toDecimal = (binary: string): number => {
  return parseInt(binary, 2)
}

const getPart2 = (input: string): string => {
  return '-1'
}
