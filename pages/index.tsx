import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/layout'
import Todo from '../components/todo'

const HomePage: NextPage = () => {
  return (
    <Layout>
      <article className="border-b-[1px] border-neutral-700 bg-black py-32">
        <div className="container mx-auto flex flex-col items-center gap-8">
          <h1 className="text-center text-5xl font-bold md:text-8xl">
            An awesome todo app.
          </h1>
          <p className="mx-8 text-center text-xl italic md:mx-32 md:text-2xl">
            Built from the ground up using NextJS for unrivaled performance.
          </p>
          <Link href="/todos">
            <a className="rounded-xl bg-white py-4 px-8 text-lg text-black hover:animate-pulse">
              Start plotting
            </a>
          </Link>
        </div>
      </article>
      <article className="container mx-auto flex flex-col gap-8 py-16 md:flex-row md:py-32">
        <section>
          <h2 className="mb-8 text-4xl font-bold">Designed to perfection.</h2>
          <p className="text-xl text-neutral-500">
            We have painstakingly designed each component to perfection, as that
            is what our customers expect from a todo app.
          </p>
        </section>
        <figure className="relative flex flex-1 flex-col gap-4">
          <div className="absolute z-20 h-full w-full"></div>
          <Todo id={1} description="Brush teeth" checked={false} />
          <Todo id={2} description="Eat breakfast" checked={false} />
          <Todo id={3} description="Wake up" checked={true} />
        </figure>
      </article>
    </Layout>
  )
}

export default HomePage
