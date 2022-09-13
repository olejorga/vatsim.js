import type { NextApiRequest, NextApiResponse } from 'next'
import Database from '../../../services/database'
import TodoType from '../../../types/todo'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TodoType[] | TodoType | undefined>,
) {
  const todos = new Database<TodoType>('todos')

  switch (req.method) {
    case 'GET':
      res.status(200).json(await todos.all())
      break

    case 'POST':
      res.status(201).json(await todos.add(req.body as TodoType))
      break

    default:
      res.status(405).json(undefined)
      break
  }
}
