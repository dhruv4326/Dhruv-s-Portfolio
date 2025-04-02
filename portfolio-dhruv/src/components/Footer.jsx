import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
   <footer className='footer border border-t-[#33353F] z-10 border-l-transparent border-r-transparent border-b-transparent text-white'>
        <div className='container p-12 flex justify-between'>
            <span>
            <Link  href='/' > 
                <Image  src='/images/logo.png' 
                alt='logo'
                height={100}
                width={70}
                

                max-width={150}
                />
                </Link>
            </span>

            <p className='text-slate-600'> &copy; 2025 Dhruv.</p>
        </div>
   </footer>
  )
}

export default Footer
