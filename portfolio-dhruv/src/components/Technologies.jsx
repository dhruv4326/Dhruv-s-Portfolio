import {RiReactjsLine} from "react-icons/ri"
import {TbBrandNextjs} from "react-icons/tb"
import {SiMongodb} from "react-icons/si"
import { FaNodeJs } from 'react-icons/fa';
import { FaReact, FaJava, FaCss3Alt, FaJsSquare } from 'react-icons/fa'; // React, Java, CSS, JS
import { SiTailwindcss, SiCplusplus } from 'react-icons/si'; // Tailwind, C++





const Technologies = () => {
  return (
    <div className="pb-16 ">
    <h2 className=" mb-16 lg:mb-20 text-center text-4xl font-bold">Techologies I use</h2>
    <div className="flex flex-wrap items-center justify-center gap-4 ">
      {/* React icon */}
      <div className="p-4 animate-floatUp delay-1000">
        <RiReactjsLine className="lg:text-7xl text-6xl text-cyan-400" />
      </div>
  
      {/* Next.js icon */}
      <div className="p-4 animate-floatDown delay-2000">
        <TbBrandNextjs className="lg:text-7xl text-6xl" />
      </div>
  
      {/* MongoDB icon */}
      <div className="p-4 animate-floatUp delay-3000">
        <SiMongodb className="lg:text-7xl text-6xl text-cyan-500" />
      </div>
  
      {/* Node.js icon */}
      <div className="p-4 animate-floatDown delay-4000">
        <FaNodeJs className="lg:text-7xl text-6xl text-green-600" />
      </div>
  
      {/* JavaScript icon */}
      <div className="p-4 animate-floatUp delay-5000">
        <FaJsSquare className="lg:text-7xl text-6xl text-yellow-400" />
      </div>
  
      {/* Java icon */}
      <div className="p-4 animate-floatDown delay-6000">
        <FaJava className="lg:text-7xl text-6xl text-red-600" />
      </div>
  
      {/* Tailwind CSS icon */}
      <div className="p-4 animate-floatUp delay-7000">
        <SiTailwindcss className="lg:text-7xl text-6xl text-blue-500" />
      </div>
  
      {/* C++ icon */}
      <div className="p-4 animate-floatDown delay-8000">
        <SiCplusplus className="lg:text-7xl text-6xl text-blue-400" />
      </div>
    </div>
  </div>
  

  
  )
}

export default Technologies
