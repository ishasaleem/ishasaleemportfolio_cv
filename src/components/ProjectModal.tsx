import { motion, AnimatePresence } from "framer-motion";
import type { FC } from "react";
import type { Project } from "../data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const modalVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const backdropVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const ProjectModal: FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        variants={backdropVariant}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-3xl p-6 bg-white shadow-2xl dark:bg-gray-900 rounded-xl"
          variants={modalVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-2xl font-bold dark:text-white">{project.title}</h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">{project.category}</span>

          <p className="mt-4 text-gray-700 dark:text-gray-300"><strong>Goal:</strong> {project.goal}</p>
          <p className="mt-2 text-gray-700 dark:text-gray-300"><strong>Role:</strong> {project.role}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-sm font-medium text-white bg-purple-500 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-white transition bg-gray-800 rounded-full hover:bg-gray-900 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300"
              >
                GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
              >
                Live Demo
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="absolute p-2 text-xl font-bold text-gray-600 transition rounded-full top-4 right-4 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            ×
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
