import path from 'path'
import * as fs from 'fs/promises'
import { Solution } from '~/types'
import solutionFunctions from './all'

type Solutions = {
  actual: Solution
  example: Solution
}

let inputPath = path.join(__dirname, '../input')

export const getSolution = async (day: string): Promise<Solutions> => {
  const exampleInput = await fs.readFile(
    path.join(inputPath, `${day}.example-input.txt`),
  )

  const input = await fs.readFile(path.join(inputPath, `${day}.input.txt`))

  const getSolution = solutionFunctions[day]

  const solution = {
    example: getSolution(exampleInput.toString()),
    //actual: { 'Part 1': '-1', 'Part 2': '-1' },
    actual: getSolution(input.toString()),
  }

  return solution
}
