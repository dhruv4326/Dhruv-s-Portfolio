import Image from "next/image";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Technologies from "../components/Technologies";
import AboutSection from "../components/AboutSection"
import ProjectSection from "../components/ProjectSection";
import EmailSection from "../components/EmailSection";
import Footer from "../components/Footer";



export default function Home() {
  return (
    
    
      <main className=" flex min-h-screen flex-col bg-[#121212] overflow-hidden  ">
        <Navbar />
       <div className="container mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        
       </div>   
       <div className="container mx-auto px-12 py-4"> <Technologies /> </div>
       <div className="container mx-auto px-12 py-4"> <ProjectSection /> </div>
       <div className="container mx-auto px-12 py-4"> <EmailSection /> </div>
       <div > <Footer /> </div>
        </main>


  );
}
