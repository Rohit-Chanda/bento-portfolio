// components/AboutCard.js
import React from "react";
import { motion } from "framer-motion";

const AboutCard = ({ onClick }) => {
  return (
    <motion.div
      className="bento-card span-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onClick={onClick}
      //   whileHover={{ scale: 1.03 }}
    >
      <h2>ABOUT</h2>
      <p>Passionate about design and enjoy solving problems.</p>
      <a href="/about" class="arrow-button">
        <span class="arrow-icon">
          <img src="./icons/arrrow.svg" alt="arrow" />
        </span>
      </a>
    </motion.div>
  );
};

export default AboutCard;
