import React from "react";

import Project from "./_components/project";
import { projects } from "./projects";

export default function Projects() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="font-[family-name:var(--font-montserrat)] text-2xl font-medium mb-8">
        Projects
      </h1>
      <div className="space-y-2">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            role={project.role}
            year={project.year}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}
