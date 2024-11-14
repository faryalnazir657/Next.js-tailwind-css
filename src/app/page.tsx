
//import image from 'next/image'
import Hero from './components/Hero'; 
import Contact from './components/Contact';
import Project from './components/Project';
import About from './components/About';
import Skill from './components/Skill';


export default function Home () {
  return (
    <div>
      <Hero />
      <About />
      < Skill />  
      <Project />
      <Contact />
      
    </div>
  );
}

