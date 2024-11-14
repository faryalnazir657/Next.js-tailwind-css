
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id="About">
      <section className="text-amber-600 body-font bg-amber-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
      <Image
        className="object-cover object-center rounded mx-auto"
        alt="hero"
        src={'/image/banner-bg.jpg'}
        width={300}
        height={500}
/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-amber-900">
        About Me
      </h1>
      <p className="mb-5 leading-relaxed text-amber-600">
    HELLO I am faryal nazir I am a passionate Frontend developer
    like Web designer or developer with a love for creating impactful digital experiences.
    My journey in Science field  began when i worked on Languages or project.
    Thats when I relized my passion for Frontend Developer.
    Over the past years.I have learned a lot of and honed my Skills.
    I specialize in HTML CSS TYPESCRIPTE JAVA NEXTJS FIGMA etc.
    I am experienced with relevent frameworks or tools like React Tailwind CSS.
    I love exploring new tecnologies and developing creative solutions.
    When I am not working I enjoy hobby like reading and gaming etc.
      </p>
      <div className="flex w-full md:justify-start justify-center items-end">
        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
        
        </div>
        <div className="container text-left">
            <button className="inline-flex text-white bg-amber-900 border-0 py-2 px-4
        focus:outline-none hover:bg-amber-600 rounded text-left">
          Button
        </button>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
