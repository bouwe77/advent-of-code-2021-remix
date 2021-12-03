import { Form, useLoaderData, Scripts, useActionData } from 'remix'
import type { LoaderFunction, ActionFunction } from 'remix'
import DayWrapper from '~/components/DayWrapper'
import invariant from 'tiny-invariant'
import { ActionData, isSolution, isError } from '../../types'
import { getSolution } from '../../solutions'

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.day) throw new Error('No day specified')
  return params.day
}

export const action: ActionFunction = async ({ params, request }) => {
  if (!params.day) throw new Error('No day specified')

  const formData = await request.formData()
  const input = formData.get('input')

  if (!input) return { error: 'Please provide some input' }

  invariant(typeof input === 'string')
  const solution = getSolution(params.day, input)

  return { solution }
}

export default function Day() {
  const day = useLoaderData<number>()
  const actionData = useActionData<ActionData>()

  return (
    <>
      <h1>DAY {day}</h1>
      <div style={{ marginBottom: '40px' }}>
        <Form method="post">
          <div>
            <div>
              <h2>
                <label htmlFor="input">Input</label>
              </h2>
            </div>
            <div>
              {actionData && isError(actionData) ? (
                <em>{actionData.error}</em>
              ) : null}
              <textarea
                name="input"
                id="input"
                style={{ width: '300px', height: '200px' }}
              ></textarea>
            </div>
            <div>
              <input type="submit" value="Submit" className="submit" />
            </div>
          </div>
        </Form>
      </div>
      <div style={{ marginBottom: '40px' }}>
        {actionData && isSolution(actionData) ? (
          <>
            <h2>Solution</h2>
            {actionData.solution}
          </>
        ) : null}
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
