"use client";
import React, { useRef , useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import emailjs from '@emailjs/browser';


const EmailSection = () => {
  const [emailsubmitted , setEmailSubmitted] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3npz4uc', 'template_9k46fqd', form.current, 'loal4RngLBZ5S8fQx')
      .then(
        (result) => {
          console.log('SUCCESS!',result.text);
          setEmailSubmitted(true);
         
        },
        (error) => {
          console.log('FAILED...', error.text);
         
        },
      );
  };
  return (
    <section id="contact" className='grid md:grid-cols-2  md:my-12 py-24 gap-24 relative'>
       <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-10 blur-lg absolute top-2/3 -left-8 transform -translate-x-1/2 -translate-1/2 hidden lg:block "></div>
       <div className="z-10">
       <div >
        <h5  className='text-xl font-bold text-white my-2'>Let's Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'> I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
          </p>

      <div className='socials flex flex-row gap-2'>
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          alt="Github-icon"
        >
          <FaGithub className="h-8 w-8" />
        </Link>

        {/* LinkedIn Icon */}
        <Link
          href="https://www.linkedin.com/in/dhruv-saini-941228314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="h-8 w-8" />
        </Link>
      </div>
    </div>
  </div>

  {/* Email Form */}
  <form className='flex flex-col gap-6' ref={form} onSubmit={sendEmail}>
    <div className='mb-6'>
      <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Your Email</label>
      <input
        type='email'
        id='email'
        placeholder='Enter your Email'
        required
        name="your_email"
        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
      />
    </div>

    <div className='mb-6'>
      <label htmlFor="Subject" className='text-white block mb-2 text-sm font-medium'>Subject</label>
      <input
        type='text'
        id='subject'
        placeholder='Just saying hi..!'
        required
        name="from_name"
        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
      />
    </div>

    <div className='mb-6'>
      <label htmlFor='message' className='text-white block text-sm mb-2 font-medium'>Message</label>
      <textarea
        name="message"
        id="message"
        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
        placeholder='Leave your message here...'
      ></textarea>
    </div>

    <button
      type='submit'
      className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
      value="Send"
    >
      Send Message
    </button>

    {emailsubmitted && (
      <p className='text-green-500 text-sm mt-2'>Email sent successfully!</p>
    )}
  </form>
</section>

  )
}

export default EmailSection
