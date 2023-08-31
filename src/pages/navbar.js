import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
    <nav className="main-header">
    {/* <Image id="logo" src= "/neomunsplash.jpg" alt="nav-image" priority="false"  height='50' width="100"></Image> */}

    <div className="main-nav">
    <Image id="logo" src= "/neomunsplash.jpg" alt="nav-image" priority="false"  height='50' width="100"></Image>

      <ul className="navul">

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
    </nav>

    </>
  )
}

export default Navbar