import getSolution1 from '~/solutions/day-1'
import getSolution2 from '~/solutions/day-2'
import getSolution3 from '~/solutions/day-3'

import { Solution } from '~/types'

type AllSolutions = Record<string, (input: string) => Solution>

const allSolutions: AllSolutions = {
  '1': getSolution1,
  '2': getSolution2,
  '3': getSolution3,
}
export default allSolutions
