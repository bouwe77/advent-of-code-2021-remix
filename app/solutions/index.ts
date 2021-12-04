import getSolution1 from './1'
import getSolution2 from './2'

export const getSolution = (day: string, input: string) => {
  if (day === '1') return getSolution1(input)
  if (day === '2') return getSolution2(input)
  throw new Error('No solution yet')
}
