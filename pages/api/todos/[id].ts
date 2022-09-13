import type { NextApiRequest, NextApiResponse } from 'next'
import Database from '../../../services/database'
import TodoType from '../../../types/todo'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TodoType[] | TodoType | undefined | void>,
) {
  const todos = new Database<TodoType>('todos')

  switch (req.method) {
    case 'GET':
      res.status(200).json(await todos.find(Number(req.query.id)))
      break

    case 'PUT':
      res.status(200).json(await todos.update(Number(req.query.id), req.body))
      break

    case 'DELETE':
      res.status(200).json(await todos.remove(Number(req.query.id)))
      break

    default:
      res.status(405).json(undefined)
      break
  }
}
