// components/ProjectCard.js
import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({onClick}) => {
  return (
    <motion.div
      className="bento-card span-3"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
    >
      <h2>PROJECTS</h2>
      <p>Check out my recent work in web development and UI/UX.</p>
    </motion.div>
  );
};

export default ProjectCard;
