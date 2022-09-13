type TodoProps = {
  description: string
  checked: boolean
  handleChecked?: (e: any) => void
}

export default function Todo({
  description,
  checked,
  handleChecked,
}: TodoProps) {
  return (
    <article
      className={`flex items-center gap-8 rounded-2xl border-[1px] border-neutral-700 bg-black p-8 ${
        checked && 'opacity-50'
      }`}
    >
      <input
        type="checkbox"
        className="h-8 w-8 cursor-pointer rounded-full border-2 border-neutral-700 bg-neutral-900 text-black focus:ring-0 focus:ring-offset-0"
        defaultChecked={checked}
        onChange={handleChecked}
      />
      <p className="flex-1 truncate text-lg font-bold">{description}</p>
      <button className="icon h-8 w-8 text-xl">delete</button>
    </article>
  )
}
