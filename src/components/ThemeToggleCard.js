import React from 'react';
import { motion } from 'framer-motion';
import './ThemeToggleCard.css';

const ThemeToggleCard = ({ isDarkMode, toggleTheme }) => {
  return (
    <motion.div
      className="bento-card span-3 theme-toggle-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="toggle-switch" onClick={toggleTheme}>
        <div className={`slider ${isDarkMode ? 'dark' : 'light'}`}>
          {isDarkMode ? '🌙' : '☀️'}
        </div>
      </div>
    </motion.div>
  );
};

export default ThemeToggleCard;
