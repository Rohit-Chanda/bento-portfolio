import React, { useRef, useEffect } from 'react';
import './TechStackCard.css';
import {motion} from 'framer-motion';
const techs = [
  { src: './icons/react.svg', alt: 'React' },
  { src: './icons/node.svg', alt: 'Node.js' },
  { src: './icons/js.svg', alt: 'JavaScript' },
  { src: './icons/css.svg', alt: 'CSS3' },
  { src: './icons/html.svg', alt: 'HTML5' },
  { src: './icons/git.svg', alt: 'Git' },
  { src: './icons/github.svg', alt: 'GitHub' },
  { src: './icons/express.svg', alt: 'Express' },
  { src: './icons/chatgpt.svg', alt: 'ChatGPT' },
  { src: './icons/ps.svg', alt: 'Photoshop' },
  { src: './icons/ai.svg', alt: 'Illustrator' },
  { src: './icons/figma.svg', alt: 'Figma' },
  { src: './icons/webflow.svg', alt: 'Webflow' },
];

const TechStackCard = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let isHovered = false;
    let start = null;

    const speedNormal = 0.5; // px per frame
    const speedSlow = 0.1;

    let scrollPos = 0;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      start = timestamp;

      if (!isHovered) {
        scrollPos += speedNormal * elapsed;
      } else {
        scrollPos += speedSlow * elapsed;
      }

      // Reset to loop
      if (scrollPos >= track.scrollWidth / 3) {
        scrollPos = 0;
      }

      track.style.transform = `translateX(-${scrollPos}px)`;
      requestAnimationFrame(step);
    };

    const handleMouseEnter = () => {
      isHovered = true;
    };
    const handleMouseLeave = () => {
      isHovered = false;
    };

    track.addEventListener('mouseenter', handleMouseEnter);
    track.addEventListener('mouseleave', handleMouseLeave);

    requestAnimationFrame(step);

    return () => {
      track.removeEventListener('mouseenter', handleMouseEnter);
      track.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div className="bento-card glass-card span-3 tech-stack-card"  initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <h4 className="mb-3">Tech Stack I use!</h4>
      <div className="logo-track-wrapper">
        <div className="logo-track" ref={trackRef}>
          {[...techs, ...techs, ...techs].map((tech, i) => (
            <div className="logo-glass" key={i}>
              <img src={tech.src} alt={tech.alt} className="tech-icon" />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TechStackCard;
