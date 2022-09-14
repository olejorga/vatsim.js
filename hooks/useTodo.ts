import { useCallback, useEffect, useState } from 'react'
import TodoType from '../types/todo'

const useTodo = () => {
  const [todos, setTodos] = useState([])
  const url = `http://localhost:3000/api/todos`

  const addTodo = (todo: TodoType) => {
    fetch(url, { method: 'POST', body: JSON.stringify(todo) }).then((res) =>
      getTodo(),
    )
  }

  const changeTodo = (id: number, todo: TodoType) => {
    fetch(`${url}/${id}`, { method: 'PUT', body: JSON.stringify(todo) }).then(
      () => getTodo(),
    )
  }

  const removeTodo = (id: number) => {
    fetch(`${url}/${id}`, { method: 'DELETE' }).then(() => getTodo())
  }

  const getTodo = useCallback(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        setTodos(data.sort((a: any, b: any) => a.checked - b.checked) as any),
      )
  }, [url])

  useEffect(() => {
    getTodo()
  }, [getTodo])

  return {
    todos,
    addTodo,
    changeTodo,
    removeTodo,
  }
}

export default useTodo
