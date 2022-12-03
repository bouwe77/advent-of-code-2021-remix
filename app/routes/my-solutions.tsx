import { useLoaderData, Link, Outlet } from '@remix-run/react'
import type { LoaderFunction } from '@remix-run/server-runtime'
import { howManyDaysWithSolution } from '~/solutions'

type LoaderData = {
  year: string
  allDays: number[]
  daysWithSolution: number
}

const currentYear = new Date().getFullYear()
const years = Array.from({ length: currentYear - 2020 }, (_, i) => 2021 + i).map((year) =>
  year.toString(),
)

export const loader: LoaderFunction = async ({ params }) => {
  let year = params.year || currentYear.toString()

  if (!years.includes(year)) {
    year = currentYear.toString()
  }

  const allDays = Array.from({ length: 25 }, (_, i) => i + 1)

  const daysWithSolution = howManyDaysWithSolution(year)

  return { year, allDays, daysWithSolution }
}

export default function MySolutions() {
  const { year, allDays, daysWithSolution } = useLoaderData<LoaderData>()

  return (
    <>
      <h1>Advent of Code {year}</h1>

      <div style={{ display: 'flex' }}>
        <>
          {allDays.map((day, index) => (
            <div key={day} style={{ margin: '3px' }}>
              {index < daysWithSolution ? (
                <Link to={`${year}/${day.toString()}`}>{day}</Link>
              ) : (
                <>{day}</>
              )}
            </div>
          ))}
        </>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}
