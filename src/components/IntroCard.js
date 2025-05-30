import React from 'react';
import {motion} from 'framer-motion';

const IntroCard = () => {
    return (<motion.div
      className="bento-card span-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    //   whileHover={{ scale: 1.03 }}
    >
        <h1>Hi, I'm Rohit Chanda</h1>
        <p>Web Developer & Designer</p>
    </motion.div>
    );
}

export default IntroCard;