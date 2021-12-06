import { useLoaderData, Scripts } from 'remix'
import type { LoaderFunction } from 'remix'
import { getSolution } from '../../solutions'

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.day) throw new Error('No day specified')
  const solution = await getSolution(params.day)
  return { day: params.day, solution }
}

export default function Day() {
  const { day, solution } = useLoaderData()

  return (
    <>
      <h1>DAY {day}</h1>
      <div style={{ marginBottom: '40px' }}>
        <h2>Solution</h2>
        <pre>{JSON.stringify(solution, null, 2)}</pre>
      </div>
    </>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <>
      {error.message}
      <Scripts />
    </>
  )
}
