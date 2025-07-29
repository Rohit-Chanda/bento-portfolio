import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const slides = [
  { title: 'Digital Design', description: 'Providing innovative problem-solving methods and impactful solutions to ensure a better experience.' },
  { title: 'UI/UX Research', description: 'Crafting user-centered designs through usability testing and interface improvements.' },
  { title: 'Web Development', description: 'Building fast, responsive, and accessible websites with modern tech stacks.' },
];

const TextSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="text-slider-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="text-slide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
        >
          <h3>{slides[index].title}</h3>
          <p>{slides[index].description}</p>
        </motion.div>
      </AnimatePresence>

      <div className="dot-indicators">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${index === i ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default TextSlider;
