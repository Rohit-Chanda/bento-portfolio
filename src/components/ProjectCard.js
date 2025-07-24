// ProjectCard.js
import React from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ onClick }) => {
  return (
    <motion.div
      className="project-card bento-card span-3"
      style={{
        backgroundImage: `url("/me.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "12px",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer"
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
    >
      <div className="hover-overlay">
        <div className="overlay-content">
          <div className="project-text">
            <h2>BoostPro</h2>
          </div>
          <a href="/projects" class="arrow-button">
          <span class="">
            <img src="./icons/arrrow.svg" alt="arrow" />
          </span>
      </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
