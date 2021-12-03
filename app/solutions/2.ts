export default (input: string): string => {
  let horizontalPostion = 0
  let depth = 0
  let aim = 0

  const lines = input.split('\n').filter((line) => line.trim().length > 0)

  const calculations: Record<string, (x: number) => void> = {
    forward: (x: number) => {
      horizontalPostion += x
      depth += aim * x
    },
    down: (x: number) => (aim += x),
    up: (x: number) => (aim -= x),
  }

  for (const line of lines) {
    const [command, value] = line.split(' ')
    calculations[command](parseInt(value))
  }

  return (horizontalPostion * depth).toString()
}
