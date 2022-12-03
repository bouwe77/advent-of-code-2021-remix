import getSolution_2021_1 from '~/solutions/2021/day-1'
import getSolution_2021_2 from '~/solutions/2021/day-2'
import getSolution_2021_3 from '~/solutions/2021/day-3'
import getSolution_2022_1 from '~/solutions/2022/day-1'

import { Solution } from '~/types'

type AllSolutions = Record<string, Record<string, (input: string) => Solution>>

const allSolutions: AllSolutions = {
  '2021': {
    '1': getSolution_2021_1,
    '2': getSolution_2021_2,
    '3': getSolution_2021_3,
  },
  '2022': {
    '1': getSolution_2022_1,
  },
}
export default allSolutions
