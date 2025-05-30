import React from 'react';
// import './PhotoCard.css'; // optional, if you want separate styling
import {motion} from 'framer-motion';

const PhotoCard = () => {
  return (
    <motion.div className="bento-card span-3 photo-only-card"  initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    //  whileHover={{ scale: 1.03 }}
    >
      <img src="./me.jpg" alt="My Profile" className="square-photo" />
    </motion.div>
  );
};

export default PhotoCard;
