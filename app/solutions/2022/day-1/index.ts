import { Solution } from '~/types'

export default (input: string): Solution => {
  return { 'Part 1': getPart1(input), 'Part 2': getPart2(input) }
}

const getPart1 = (input: string) => 'hoi'
const getPart2 = (input: string) => 'yo'
