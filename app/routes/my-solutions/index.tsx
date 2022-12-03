import { redirect } from '@remix-run/server-runtime'
import type { LoaderFunction } from '@remix-run/server-runtime'

export const loader: LoaderFunction = async () => {
  return redirect(`/my-solutions/${new Date().getFullYear()}`)
}
