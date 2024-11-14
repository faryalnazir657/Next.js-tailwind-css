import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font bg-amber-100">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-amber-900">
        My Projects
      </h1>
     
    </div>
    <div className="flex flex-wrap -m-5 -mt-[5rem]">
      {/*Project*/}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src='/image/faryal.jpeg'
         width={300}
         height={300}
            
          />
        
      </div>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200
           bg-orange-200 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-amber-700 mb-1">
            Hackathon projects
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
             HACKATHON
            </h1>
            <p className="leading-relaxed">
            This is my Hackathon projects .
            </p>
            <Link target="_blank" href={"https://vercel.com/faryalnazir657s-projects/milestone03"}> 
            <p className="leading-relaxed text-amber-700 hover:underline">View Projects..</p>
            </Link>
        </div>
        </div>
         {/*Project*/}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src='/image/portfolio.png'
          width={300}
          height={300}
          />
      </div>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 
           bg-orange-200  hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-amber-700 mb-1">
            Portfolio projects
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
             PORTFOLIO
            </h1>
            <p className="leading-relaxed">
            This is my Portfolio  project using HTML and CSS .
            </p>
            <Link href={"https://faryal-portfolio-main.vercel.app/"}> 
            <p className="leading-relaxed text-amber-700 hover:underline">View Projects..</p>
            </Link>
         
      
        </div>
        </div>
           {/*Project*/}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src='/image/project.png'
          width={300}
          height={300}
          />
      </div>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 
           bg-orange-200  opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-amber-700 mb-1">
            Next.js projects
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            NEXT.JS
            </h1>
            <p className="leading-relaxed">
            This is my Next.js project using Custom CSS.
            </p>
            <Link href={"https://github.com/faryalnazir657/next.js.git"}> 
            <p className="leading-relaxed text-amber-700 hover:underline">View Projects..</p>
            </Link>
         
      
        </div>
        </div>
        </div>
   </div>
 
    </section>

    </div>
  );
};

export default Project;
