import React from 'react';
import './SocialLinksCard.css';
import { FaXTwitter, FaDribbble, FaInstagram, FaLinkedinIn, FaBehance, FaEnvelope } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const SocialLinksCard = () => {
  return (
    <motion.div
      className="social-grid"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <a href="https://twitter.com" className="social-icon twitter" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
      <a href="https://dribbble.com" className="social-icon dribbble" target="_blank" rel="noopener noreferrer"><FaDribbble /></a>
      <a href="https://instagram.com" className="social-icon instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a href="https://linkedin.com" className="social-icon linkedin" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      <a href="https://behance.net" className="social-icon behance" target="_blank" rel="noopener noreferrer"><FaBehance /></a>
      <a href="mailto:your.email@example.com" className="social-icon email"><FaEnvelope /></a>
    </motion.div>
  );
};

export default SocialLinksCard;
