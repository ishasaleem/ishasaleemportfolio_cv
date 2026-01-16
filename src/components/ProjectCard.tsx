import type { FC } from "react";
import { motion } from "framer-motion";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ProjectCard: FC<ProjectCardProps> = ({ project, onOpen }) => {
  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ scale: 1.05 }}
      className="overflow-hidden transition-shadow bg-white shadow-lg cursor-pointer dark:bg-gray-900 rounded-xl hover:shadow-2xl"
      onClick={() => onOpen(project)}
    >
      <img
        src={project.image}
        alt={project.title}
        className="object-cover w-full h-48"
      />

      <div className="p-4">
        <h3 className="mb-1 text-xl font-semibold dark:text-white">{project.title}</h3>

        <span className="inline-block mb-2 text-xs font-medium text-gray-500 dark:text-gray-400">
          {project.category}
        </span>

        <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">
          <strong>Goal:</strong> {project.goal.length > 60 ? project.goal.slice(0, 60) + "..." : project.goal}
        </p>

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
    </motion.div>
  );
};

export default ProjectCard;
