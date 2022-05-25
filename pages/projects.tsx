import React from "react";
import toast from "react-hot-toast";
import { myProjects } from "@/utils/constants";

export const Projects = () => {
  return (
    <section className="mt-20">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="space-y-6">
        {myProjects.map(({ name, description }) => (
          <button
            onClick={() => toast.error("This is a private repository")}
            key={name}
            className="w-full text-left hover:scale-105 transition-all p-4 border-2 border-secondary rounded-md"
          >
            <h2 className="mb-3 text-xl font-medium">{name}</h2>
            <p className="">{description}</p>
          </button>
        ))}
      </div>
    </section>
  );
};
