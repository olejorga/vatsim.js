export default function Todo() {
  return (
    <article className="flex items-center gap-8 rounded-2xl border-[1px] border-neutral-700 bg-black p-8">
      <input
        type="checkbox"
        className="h-8 w-8 cursor-pointer rounded-full border-2 border-neutral-700 bg-neutral-900 text-black focus:ring-0 focus:ring-offset-0"
      />
      <p className="flex-1 truncate text-lg font-bold">Mow the lawn</p>
      <button className="icon h-8 w-8 text-xl">delete</button>
    </article>
  )
}
