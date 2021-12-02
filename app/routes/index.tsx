import { useLoaderData, Link, Outlet } from 'remix'
import type { LoaderFunction } from 'remix'

type LoaderData = { allDays: number[]; daysWithSolution: number[] }

export const loader: LoaderFunction = async () => {
  const allDays = Array.from({ length: 25 }, (_, i) => i + 1)

  const daysWithSolution = [1, 2]

  return { allDays, daysWithSolution }
}

export default function Index() {
  const { allDays, daysWithSolution } = useLoaderData<LoaderData>()

  return (
    <div>
      {allDays.map((day) => (
        <div key={day}>
          {daysWithSolution.includes(day) ? (
            <Link to={day.toString()}>{day}</Link>
          ) : (
            <>{day}</>
          )}
        </div>
      ))}
      <div>
        <Outlet />
      </div>
    </div>
  )
}
