export type Solution = Record<'Part 1' | 'Part 2', string>

type Error = {
  error?: string
}

export type ActionData = Solution | Error

export const isSolution = (actionData: ActionData): actionData is Solution => {
  return typeof actionData === 'object' && actionData !== null
}

export const isError = (actionData: ActionData): actionData is Error => {
  return !!(actionData as Error).error
}
