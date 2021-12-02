type Solution = {
  solution?: string
}
type Error = {
  error?: string
}
export type ActionData = Solution | Error
export const isSolution = (actionData: ActionData): actionData is Solution => {
  return !!(actionData as Solution).solution
}
export const isError = (actionData: ActionData): actionData is Error => {
  return !!(actionData as Error).error
}
