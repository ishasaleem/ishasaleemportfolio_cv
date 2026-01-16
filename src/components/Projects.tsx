import React, { useState } from "react";
import type { Project } from "../data/projects";
import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal";

const categories = ["All", "Frontend", "Automation", "Full Stack"];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900 section">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-4xl font-bold dark:text-white">Projects</h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 font-semibold rounded-full transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden transition-shadow bg-white shadow-lg cursor-pointer dark:bg-gray-800 rounded-xl hover:shadow-2xl"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="mb-1 text-xl font-semibold dark:text-white">
                  {project.title}
                </h3>

                {/* Category */}
                <span className="inline-block mb-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                  {project.category}
                </span>

                {/* Short Goal */}
                <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">
                  {project.goal.length > 60
                    ? project.goal.slice(0, 60) + "..."
                    : project.goal}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded-full dark:bg-purple-800 dark:text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub / Live */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 text-sm font-medium text-white transition bg-gray-800 rounded-md hover:bg-gray-900 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 text-sm font-medium text-white transition bg-blue-600 rounded-md hover:bg-blue-700"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for detailed view */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
