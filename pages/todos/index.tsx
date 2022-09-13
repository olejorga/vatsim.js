import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import Todo from '../../components/todo'
import TodoType from '../../types/todo'

const Todos: NextPage = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then((res) => res.json())
      .then((data) => setTodos(data))
  }, [])

  const handleSubmit = (event: any) => {
    event.preventDefault()
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit} className="container mx-auto my-16">
        <input
          type="text"
          className="block w-full border-0 border-b-2 border-neutral-700 bg-neutral-900 py-4 text-center text-2xl placeholder:text-neutral-700 focus:border-white focus:ring-0"
          placeholder="Add a todo..."
        />
      </form>
      <section className="container mx-auto">
        {todos?.map((todo: TodoType) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </section>
    </Layout>
  )
}

export default Todos
