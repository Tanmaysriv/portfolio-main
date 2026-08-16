"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./project-card";

export function ProjectList({ projects = [], className }) {
  if (projects.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">
          No projects found.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      className={`grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 ${
        className || ""
      }`}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.id || project.slug || `${project.title}-${index}`}
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
              scale: 0.98,
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
            },
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
}