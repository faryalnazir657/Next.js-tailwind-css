import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {IoCloudDownloadOutline} from 'react-icons/io5';

const Navbar = () => {
  return (
    <div className=" bg-amber-500 z-50 sticky top-0">
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

<Image src={'/image/logo.png'} 
alt={"Faryal Nazir"}
width={50}
height={50} />

      <span className="ml-3 text-xl text-amber-900">Faryal Nazir</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"}className="mr-5 hover:text-amber-300 text-amber-800">
      Home
      </Link>
      <Link href={"#About"} className="mr-5 text-amber-800 hover:text-amber-300">
      About
      </Link>
      <Link href={"#Skills"}className="mr-5 hover:text-amber-300 text-amber-800">
      Skills
      </Link>
      <Link href={"#Project"}className="mr-5 hover:text-amber-300 text-amber-800">
      Projects 
      </Link>
      <Link href={"#Contact"}className="mr-5 hover:text-amber-300 text-amber-800">
      Contact 
      </Link>
    </nav>
    <a href="/">
    <button className="inline-flex items-center  border-0 py-1 px-3 
    focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-amber-700 ">
 Download CV
 <IoCloudDownloadOutline className="text-xl ml-2" />
    </button>
    </a>
  </div>
</header>
    </div>
  )
}

export default Navbar
