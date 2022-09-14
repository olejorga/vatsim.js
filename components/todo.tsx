import TodoType from '../types/todo'

interface TodoProps extends TodoType {
  handleChecked?: (id: number, todo: TodoType) => void
  handleDelete?: (id: number) => void
}

export default function Todo({
  id,
  description,
  checked,
  handleChecked,
  handleDelete,
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
        onChange={(e) =>
          handleChecked?.(id as any, {
            description,
            checked: e.currentTarget.checked,
          })
        }
      />
      <p className="flex-1 truncate text-lg font-bold">{description}</p>
      <button
        className="icon h-8 w-8 text-xl"
        onClick={() => handleDelete?.(id as any)}
      >
        delete
      </button>
    </article>
  )
}
