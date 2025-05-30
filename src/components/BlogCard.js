// components/BlogCard.js
import React from 'react';
import { motion } from 'framer-motion';

const BlogCard = () => {
  return (
    <motion.div
      className="bento-card  span-3 blog-card"
    //   whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <h2>Latest From My Blog</h2>
      <p>Explore insights on web development, design, and tech trends.</p>
      <a
        href="https://yourblogsite.com" // Replace with your actual blog URL
        target="_blank"
        rel="noopener noreferrer"
        className="glass-btn"
      >
        Read Blog
      </a>
    </motion.div>
  );
};

export default BlogCard;
