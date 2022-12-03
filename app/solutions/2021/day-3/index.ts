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

  const mostCommonDecimal = toDecimal(mostCommon)
  const leastCommonDecimal = toDecimal(leastCommon)
  const solution = mostCommonDecimal * leastCommonDecimal

  return solution.toString()
}

const toDecimal = (binary: string): number => {
  return parseInt(binary, 2)
}

const getPart2 = (input: string): string => {
  const lines = input.split('\n').filter((line) => line.trim().length > 0)

  const filter = (
    toFilter: string[],
    keepZeroesWhen: (a: number, b: number) => boolean,
  ) => {
    const zeroes = toFilter.filter(
      (line) => line.substring(position, position + 1) === '0',
    )
    const ones = toFilter.filter(
      (line) => line.substring(position, position + 1) === '1',
    )

    return keepZeroesWhen(ones.length, zeroes.length) ? zeroes : ones
  }

  // oxygen generator rating
  let position = 0
  let most = [...lines]
  for (let i = 0; i < lines.length; i++) {
    most = filter(
      most,
      (howManyOnes, howManyZeroes) => howManyOnes < howManyZeroes,
    )
    if (most.length === 1) break
    position++
  }

  // CO2 scrubber rating
  position = 0
  let least = [...lines]
  for (let i = 0; i < lines.length; i++) {
    least = filter(
      least,
      (howManyOnes, howManyZeroes) => howManyOnes >= howManyZeroes,
    )
    if (least.length === 1) break
    position++
  }

  const solution = toDecimal(most[0]) * toDecimal(least[0])

  return solution.toString()
}
