import getSolution2 from './2'

export const getSolution = (day: string, input: string) => {
  if (day === '2') return getSolution2(input)
  throw new Error('No solution yet')
}
