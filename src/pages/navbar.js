import Link from "next/link"

const Navbar = () => {
  return (
    <>
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/navbar">Navbar</Link>
        </li>

{/* 
        <li>
          <Link>
          <a href="/home">Home</a>
          </Link>
        </li> */}
      </ul>
    </div>
    
    </>
  )
}

export default Navbar