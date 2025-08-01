// ProjectCard.js
import React from "react";
import { motion } from "framer-motion";
import "./ProjectCard.css";

const ProjectCard = ({ project, onClick }) => {
  if (!project) return null; // Prevent error if project is undefined

  const { title, thumbnail } = project;

  return (
    <motion.div
      className="project-card bento-card span-3"
      style={{
        backgroundImage: `url(${thumbnail})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "12px",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer"
      }}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="hover-overlay">
        <div className="overlay-content">
          <div className="project-text">
            <h2>{title}</h2>
          </div>
          <span className="arrow-button">
            <img src="./icons/arrrow.svg" alt="arrow" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};



export default ProjectCard;
