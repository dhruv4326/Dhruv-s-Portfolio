"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A Portfolio Website based on Nextjs, Tailwind Css and Javascript.",
    Image: "/images/portfolioweb.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/dhruv4326/Dhruv-s-Portfolio",
    previewUrl: "https://dhruv-s-portfolio-j3dh.vercel.app/",
  },
  {
    id: 2,
    title: "Razorpay Clone",
    description: "Clone of Front-end of Razorpay based on Html, Tailwind Css and Javascript. ",
    Image: "/images/Razorpay.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/dhruv4326/Razorpay-Clone",
    previewUrl: "",
  },
  {
    id: 3,
    title: "StudySync",
    description: "A Website of StudySync will help you to learn new things.",
    Image: "/images/study-sync.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Blogverse",
    description: "A Front-end of the bloging Website where user's can read and share their thoughts.",
    Image: "/images/blogverse.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "LeetMetrics",
    description: " A Website which tracks the record of Leetcode user without login. ",
    Image: "/images/leet-metrics.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Parent container animation (staggered children)
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
      },
    },
  };

  // Each card animation
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div ref={ref} id="Projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <motion.ul
        className="grid md:grid-cols-3 gap-8 md:gap-12"
        variants={containerVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        {projectsData.map((project) => (
          <motion.li key={project.id} variants={cardVariants}>
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.Image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default ProjectSection;
