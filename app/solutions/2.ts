import { Solution } from '~/types'

export default (input: string): Solution => {
  return { 'Part 1': getPart1(input), 'Part 2': getPart2(input) }
}

const getPart1 = (input: string): string => {
  let horizontalPosition = 0
  let depth = 0

  const lines = input.split('\n').filter((line) => line.trim().length > 0)

  const calculations: Record<string, (x: number) => void> = {
    forward: (x: number) => (horizontalPosition += x),
    down: (x: number) => (depth += x),
    up: (x: number) => (depth -= x),
  }

  for (const line of lines) {
    const [command, value] = line.split(' ')
    calculations[command](parseInt(value))
  }

  return (horizontalPosition * depth).toString()
}

const getPart2 = (input: string): string => {
  let horizontalPosition = 0
  let depth = 0
  let aim = 0

  const lines = input.split('\n').filter((line) => line.trim().length > 0)

  const calculations: Record<string, (x: number) => void> = {
    forward: (x: number) => {
      horizontalPosition += x
      depth += aim * x
    },
    down: (x: number) => (aim += x),
    up: (x: number) => (aim -= x),
  }

  for (const line of lines) {
    const [command, value] = line.split(' ')
    calculations[command](parseInt(value))
  }

  return (horizontalPosition * depth).toString()
}
