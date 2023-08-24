import Link from "next/link"

const Navbar = () => {
  return (
    <>
    <header>
    <div className="main-nav">
      <ul className="navul">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/navbar">Navbar</Link>
        </li>
        <li>
          <Link href="/quotes">Quotes</Link>
        </li>
        <li>
          <Link href="/footer">Footer</Link>
        </li>
      </ul>
    </div>
    </header>
    </>
  )
}

export default Navbar