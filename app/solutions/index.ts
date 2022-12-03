import path from 'path'
import * as fs from 'fs/promises'
import { Solution } from '~/types'
import solutionFunctions from './all'

type Solutions = {
  actual: Solution
  example: Solution
}

let inputPath = path.join(__dirname, '../input')

export const howManyDaysWithSolution = (year: string) => Object.keys(solutionFunctions[year]).length

export const getSolution = async (year: string, day: string): Promise<Solutions> => {
  const exampleInput = await fs.readFile(path.join(inputPath, year, `${day}.example.txt`))

  const input = await fs.readFile(path.join(inputPath, year, `${day}.txt`))

  const getSolution = solutionFunctions[year][day]

  const solution = {
    example: getSolution(exampleInput.toString()),
    //actual: { 'Part 1': '-1', 'Part 2': '-1' },
    actual: getSolution(input.toString()),
  }

  return solution
}
