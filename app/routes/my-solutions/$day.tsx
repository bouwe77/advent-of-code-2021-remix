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
    <DayWrapper day={day}>
      <div>
        {actionData && isSolution(actionData) ? (
          <>
            {actionData.solution}
            {actionData.solution === '150' ? <>☑️</> : null}
          </>
        ) : null}
      </div>
      <Form method="post">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div>
            {actionData && isError(actionData) ? (
              <em>{actionData.error}</em>
            ) : null}
            <textarea
              name="input"
              style={{ width: '300px', height: '300px' }}
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              value="Submit"
              style={{ width: '100px', height: '40px' }}
            />
          </div>
        </div>
      </Form>
    </DayWrapper>
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
