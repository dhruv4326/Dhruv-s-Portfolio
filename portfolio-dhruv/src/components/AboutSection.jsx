"use client";
import React,{useTransition , useState }from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
const TAB_DATA =[
    {
        title:"Education",
        id:"Education",
        content:(
            <ul className='list-disc pl-4'>
                <li>B.Tech in Computer Science and Engineering: Chandigarh University, 2021-2025 </li>
                <li> Intermediate: CBSE-2020 </li>
                <li> Matriculation: CBSE-2018 </li>
            </ul>
        )
    },
    {
        title:"Certifications",
        id:"Certifications",
        content:(
            <ul className='list-disc pl-4'>
                   <li> Introduction to C++ - Coding Ninjas</li>
                <li>Data Structures and Algorithm - Coding Ninjas</li>
        </ul>
        )
    },
];

const AboutSection = () => {
    const [tab ,setTab]=useState("Education");
    const [ isPending,startTransition ]=useTransition();

    const handleTabChange =(id) =>{
        startTransition(()=>{
            setTab(id);
        }); 
    };
  return (
    <section className='text-white' id='about'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image
        alt="about-section"
        src="/images/about-image.png" 
        width={500} height={500}
        />
        {/* starting of about section */}
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full '>
            <h2 className='text-4xl font-bold text-white mb-4 '>About Me</h2>
            <p className='text-base lg:tet-lg'>  I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, Reactjs, Node.js, Express, PostgreSQL, HTML, Tailwind CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
            </p>
            <div className='flex flex-row mt-8'>
                <TabButton 
                    selectTab={() => 
                    handleTabChange("Education")
                    } 
                    active= {tab==="Education"}>
                        {" "}
                         Education {" "}
                         
                    </TabButton>
                    <TabButton 
                    selectTab={() => 
                    handleTabChange("Certifications")
                    } 
                    active= {tab==="Certifications"}>
                        {" "}
                         Certifications{" "}
                         
                    </TabButton>
               
            </div>
            <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>

      </div>
    </section>
  )
}

export default AboutSection
