"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Movie Streaming Website",
    description: "ReactJS, CSS3, Tailwind CSS, Firebase => Fully responsive movie streaming website built with React and Firebase.  Allow users to stream as well as upload their own movie which can be viewed by others",
    image: "/images/projects/1.png",
    tag: ["All", "ReactJS"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Photo Editing Website",
    description: " NextJS, Tailwind CSS, TypeScript, MongoDB, Clerk, Shadcn => Developed a SAAS website which is secured by Clerk Authentication and uses Shadcn components to allow various features for the user ranging from uploading of photo to removing its background , AI Genrative Fill, as well as Picture Correction Made highly performant and scalable web applications using Next.js, implementing server-side rendering (SSR) and client-side rendering (CSR) techniques",
    image: "/images/projects/2.png",
    tag: ["All", "NextJS"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "NextJS Portfolio Website",
    description: "NextJS, Tailwind CSS => Developed a Fully Responsive Portfolio Website showcasing the skills and project Enhanced its performance and loading time by using server side rendering offered by NEXTJS",
    image: "/images/projects/3.png",
    tag: ["All", "NextJS"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Text Converter Website",
    description: " Developed a Fully Responsive Text Converter Website Using Javascript Has an additional feature of Dark Mode Has a Dynamic Word counter and Various Text Converting Modes",
    image: "/images/projects/4.png",
    tag: ["All", "JavaScript"],
    gitUrl: "/",
    previewUrl: "/",
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="ReactJS"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="NextJS"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="JavaScript"
          isSelected={tag === "JavaScript"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
