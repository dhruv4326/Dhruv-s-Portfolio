"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';


 

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12  mt-24 lg:mt-40'>
       <motion.div 
       initial={{opacity:0 , scale:0.5 }} 
       animate={{opacity:1 , scale:1 }} 
       transition={{duration:0.5}}
       className='col-span-7 place-self-center text-center sm:text-left justify-self-start' >
       <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold"><span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500'>Hello, I'm {""}</span>
        <br></br>

       <TypeAnimation
        sequence={[
          'Dhruv',
          1000,
          'Web Developer',
          1000,
          'Problem Solver',
          1000,
          'Tech Enthusiast',
          1000,
        ]}
        wrapper="span"
        speed={50}
       
        repeat={Infinity}
      />
      
      </h1>
        
       <p className='text-[#ADB7BE] text-lg lg:text-xl mb-6 '>I excel at crafting elegant digital experiences and I am proficient in various languages and technologies. </p>

        {/* buttons ofhero section */}

       <div className='flex flex-col md:flex-row md:items-center sm:flex-row sm:items-center sm:gap-6'>
         <Link href='#contact'>
          <button className='px-6 py-3 w-full sm:w-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white mb-4 sm:mb-0 flex items-center justify-center'>
            Let&apos;s Connect
            <span><ArrowRightIcon className='h-4 w-4 ml-2' /></span>
          </button>
          </Link>

        <Link href='https://drive.google.com/file/d/1JHzB44Ki-N0I6kh9qy_7iHs2Q7ZqbRX2/view?usp=sharing'>
          <button className='px-1 py-1 w-full sm:w-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white '>
            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
          </button>
          </Link>
        </div>
        </motion.div>

       {/* images of hero section */}
       <motion.div
        initial={{opacity:0 , scale:0.5 }} 
        animate={{opacity:1 , scale:1 }} 
        transition={{duration:0.5}}
       className='col-span-5 place-self-center mt-4 lg:mt-0'>
        <Image
              src="/images/hero-image.png"
              alt="hero image"
              width={500}
              height={500} 
              
            />  
       </motion.div>
        </div>
        
     
    </section>
  )
}

export default HeroSection
