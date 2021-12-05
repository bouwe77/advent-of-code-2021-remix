import { Solution } from '~/types'

export default (input: string): Solution => {
  return { 'Part 1': getPart1(input), 'Part 2': getPart2(input) }
}

const getIncreases = (lines: number[]): number => {
  let increases = 0

  let prev = lines[0]
  for (let i = 1; i < lines.length; i++) {
    if (lines[i] > prev) increases++
    prev = lines[i]
  }

  return increases
}

const getPart1 = (input: string): string => {
  const lines = input
    .split('\n')
    .filter((line) => line.trim().length > 0)
    .map((line) => parseInt(line))

  const increases = getIncreases(lines)

  return increases.toString()
}

const getPart2 = (input: string): string => {
  const lines = input
    .split('\n')
    .filter((line) => line.trim().length > 0)
    .map((line) => parseInt(line))

  let grouped: number[] = []
  for (let i = 0; i < lines.length; i++) {
    if (i + 2 >= lines.length) break
    grouped.push(lines[i] + lines[i + 1] + lines[i + 2])
  }

  const increases = getIncreases(grouped)

  return increases.toString()
}
