/* eslint-disable @next/next/no-img-element */
import React from "react";
import toast from "react-hot-toast";
import { myProjects } from "@/utils/constants";

const Projects = () => {
  return (
    <section>
      <h1 className="text-5xl font-bold mb-16">My Projects</h1>
      <div className="space-y-12">
        {myProjects.map(({ name, description, image }) => (
          <div
            key={name}
            className="relative w-full bg-primary text-left transition-all group rounded-md"
          >
            <img className="rounded-lg" src={image} alt="project" />

            <div className="pt-4 mb-4 absolute bg-black transition-all duration-300 scale-50 group-hover:scale-100 group-hover:bg-opacity-80 bg-opacity-0 rounded-md top-0 h-full w-full p-4 flex flex-col justify-end">
              <h2 className="text-xl mb-3 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                {name}
              </h2>
              <p className="text-secondary opacity-0 group-hover:opacity-100 transition-all duration-300">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
