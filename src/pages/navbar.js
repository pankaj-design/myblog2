import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
    <header>
      {/* <Image src= "/neomunsplash.jpg" alt="nav-image" priority="false" height='100' width="100"></Image> */}
    <div className="main-nav">
      <ul className="navul">
      <li>
      <Image src= "/neomunsplash.jpg" alt="nav-image" priority="false" height='30' width="100"></Image>

        </li>

        <li>
          <Link id="nav-text" href="/">Home</Link>
        </li>

        <li>
          <Link id="nav-text" href="/navbar">Navbar</Link>
        </li>
        <li>
          <Link id="nav-text" href="/quotes">Quotes</Link>
        </li>
        <li>
          <Link id="nav-text" href="/footer">Footer</Link>
        </li>
      </ul>
    </div>
    </header>

    </>
  )
}

export default Navbar