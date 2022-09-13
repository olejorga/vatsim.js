import type { NextApiRequest, NextApiResponse } from 'next'
import ErrorType from '../../../types/error'
import TodoType from '../../../types/todo'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TodoType[] | ErrorType>,
) {
  switch (req.method) {
    case 'GET':
      break

    case 'PATCH':
      break

    case 'DELETE':
      break

    default:
      res.status(405).json({ error: 'Method Not Allowed' })
      break
  }
}
