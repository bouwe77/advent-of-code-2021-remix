import { useLoaderData, Link, Outlet } from 'remix'
import type { LoaderFunction } from 'remix'

type LoaderData = { allDays: number[]; daysWithSolution: number }

export const loader: LoaderFunction = async () => {
  const allDays = Array.from({ length: 25 }, (_, i) => i + 1)

  const daysWithSolution = 3

  return { allDays, daysWithSolution }
}

export default function MySolutions() {
  const { allDays, daysWithSolution } = useLoaderData<LoaderData>()

  return (
    <>
      <div style={{ display: 'flex' }}>
        {allDays.map((day, index) => (
          <div key={day} style={{ margin: '3px' }}>
            {index < daysWithSolution ? (
              <Link to={day.toString()}>{day}</Link>
            ) : (
              <>{day}</>
            )}
          </div>
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}
