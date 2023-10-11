
import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(true);

  const toggleNavbar = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
    <nav className="main-header">

    <div className="main-nav">
    <Image id="logo" src= "/sunder-unsplash.jpg" alt="nav-image" priority="false"  height='50' width="100"></Image>
      <ul className= {`navul ${navOpen ? 'navbar-open' : 'navbar-closed'}`} >

        <li>
          <Link id="nav-text" className={` ${navOpen ? 'pose-change' : 'pose1'}`} onClick={toggleNavbar} href="/">Home</Link>
        </li>

        <li>
          <Link id="nav-text" className={` ${navOpen ? 'pose-change' : 'pose2'}`} onClick={toggleNavbar} href="/navbar">Navbar</Link>
        </li>
        <li>
          <Link id="nav-text" className={` ${navOpen ? 'pose-change' : 'pose3'}`} onClick={toggleNavbar} href="/quotes">Quotes</Link>
        </li>
        <li>
          <Link id="nav-text" className={` ${navOpen ? 'pose-change' : 'pose4'}`} onClick={toggleNavbar}  href="/footer">Footer</Link>
        </li>
        
      </ul>
      <div className='button'  onClick={toggleNavbar}>
      <BiMenuAltRight size={"5rem"} color='white'/>
        </div>
    </div>
    </nav>


    </>
  )
}

export default Navbar