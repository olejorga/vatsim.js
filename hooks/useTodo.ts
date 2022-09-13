import { useEffect, useState } from 'react'

const useTodo = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then((res) => res.json())
      .then((data) => setTodos(data))
  }, [])

  return {}
}

export default useTodo
