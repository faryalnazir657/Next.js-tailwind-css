import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-amber-200">
        <footer className="text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

      <Image
       src={'/image/logo.png'} 
       alt={"Faryal Nazir"}
       width={50}
       height={50} />

        <span className="ml-3 text-xl text-amber-800">Faryal Nazir</span>
      </a>
      <p className="text-sm text-amber-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-amber-500 sm:py-2 sm:mt-0 mt-4">
        © 2024 Faryal Nazir 
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        
        <Link
        target='blank'
         href={"https://www.linkedin.com/in/faryal-nazir-90576a328"} 
        className="text-gray-500"
        >
        <IoLogoLinkedin className="text-2xl hover:text-blue-700" />
        </Link>
      </span>
    </div>
  </footer>
  </div>
  )
}

export default Footer
