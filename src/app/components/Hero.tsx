"use client";
import Image from 'next/image';
import React from 'react';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

const Hero = () => {
  return (
    
      <section className="text-amber-300 body-font bg-amber-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start
     md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-amber-900">
        I am
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: ['Frontend Developer', 'Web designer '],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <div className="w-[60px] h-[2px] bg-amber-700"></div>
      <p className="mb-8 leading-relaxed text-amber-600">
     Frontend developer High level experience in web design and developnment knowledge producing quality work
      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-amber-900 border-0 py-2 px-6
         focus:outline-none hover:bg-amber-600 rounded text-lg">
          contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded mx-auto w-[20rem]"
        alt="hero"
        width={300}
        height={300}
        src={'/image/banner-bg.jpg'}
      />
    </div>
  </div>
</section>

    
  )
}

export default Hero
