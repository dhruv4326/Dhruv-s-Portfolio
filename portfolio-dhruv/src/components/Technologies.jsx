import {RiReactjsLine} from "react-icons/ri"
import {TbBrandNextjs} from "react-icons/tb"
import {SiMongodb} from "react-icons/si"
import { FaNodeJs } from 'react-icons/fa';
import { FaReact, FaJava, FaCss3Alt, FaJsSquare } from 'react-icons/fa'; // React, Java, CSS, JS
import { SiTailwindcss, SiCplusplus } from 'react-icons/si'; // Tailwind, C++
import Link from "next/link";





const Technologies = () => {
  return (
    <div className="pb-16 ">
    <h2 className=" mb-16 lg:mb-20 text-center text-4xl font-bold">Techologies I use</h2>
    <div className="flex flex-wrap items-center justify-center gap-4 ">
      {/* React icon */}
      <Link href="https://react.dev/">
      <div className="p-4 animate-floatUp delay-1000">
        <RiReactjsLine className="lg:text-7xl text-6xl text-cyan-400" />
      </div>
      </Link>
  
      {/* Next.js icon */}
      <Link href="https://nextjs.org/">
      <div className="p-4 animate-floatDown delay-2000">
        <TbBrandNextjs className="lg:text-7xl text-6xl" />
      </div>
      </Link>
  
      {/* MongoDB icon */}
      <Link href="https://www.mongodb.com/?msockid=18b60695ae846926140a15c2af566816">
      <div className="p-4 animate-floatUp delay-3000">
        <SiMongodb className="lg:text-7xl text-6xl text-cyan-500" />
      </div>
      </Link>
  
      {/* Node.js icon */}
      <Link href="https://nodejs.org/en">
      <div className="p-4 animate-floatDown delay-4000">
        <FaNodeJs className="lg:text-7xl text-6xl text-green-600" />
      </div>
      </Link>
  
      {/* JavaScript icon */}
      <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
      <div className="p-4 animate-floatUp delay-5000">
        <FaJsSquare className="lg:text-7xl text-6xl text-yellow-400" />
      </div>
      </Link>
  
      {/* Java icon */}
      <Link href="https://www.java.com/en/">
      <div className="p-4 animate-floatDown delay-6000">
        <FaJava className="lg:text-7xl text-6xl text-red-600" />
      </div>
      </Link>
  
      {/* Tailwind CSS icon */}
      <Link href="https://tailwindcss.com/">
      <div className="p-4 animate-floatUp delay-7000">
        <SiTailwindcss className="lg:text-7xl text-6xl text-blue-500" />
      </div>
      </Link>
  
      {/* C++ icon */}
      <Link href="https://isocpp.org/">
      <div className="p-4 animate-floatDown delay-8000">
        <SiCplusplus className="lg:text-7xl text-6xl text-blue-400" />
      </div>
      </Link>
    </div>
  </div>
  

  
  )
}

export default Technologies
