/* eslint-disable @next/next/no-img-element */
import React from "react";
import toast from "react-hot-toast";
import { myProjects } from "@/utils/constants";

const Projects = () => {
  return (
    <section>
      <h1 className="text-5xl font-bold mb-16">My Projects</h1>
      <div className="space-y-8 md:space-y-12">
        {myProjects.map(({ name, description, image, link }) => (
          <a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (!link) toast.error("This is a private repository");
            }}
            className="block relative w-full bg-primary text-left transition-all group rounded-md"
          >
            <img className="rounded-lg" src={image} alt="project" />

            <div className="absolute bg-black transition-all duration-300 scale-50 group-hover:scale-100 group-hover:bg-opacity-90 bg-opacity-0 rounded-md top-0 h-full w-full md:p-6 p-2 flex flex-col justify-end">
              <h2 className="md:text-xl mb-3 font-medium project-info">
                {name}
              </h2>
              <p className="project-info text-xs md:text-base text-secondary">
                {description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
