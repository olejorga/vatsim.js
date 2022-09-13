import Link from 'next/link'
import Logo from './logo'

export default function Header() {
  return (
    <header className="border-b-[1px] border-neutral-700 bg-black py-8 text-lg">
      <nav className="container mx-auto flex items-center justify-end gap-8 [&>*]:flex [&>*]:items-center [&>*]:gap-2">
        <Link href="/">
          <a className="mr-auto">
            <Logo />
          </a>
        </Link>
        <Link href="/">
          <a>
            <span className="icon">home</span>
            <span>Home</span>
          </a>
        </Link>
        <Link href="/todos">
          <a>
            <span className="icon">check_box</span>
            <span>Todos</span>
          </a>
        </Link>
      </nav>
    </header>
  )
}
