import { useState } from 'react';
import {motion} from 'framer-motion';

const ContactCard = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('your.email@example.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div className="bento-card span-3 contact-card" initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <h2>Have a Project in Mind?</h2>
      <button onClick={handleCopy} className="copy-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v16h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 18H8V7h11v16z" />
        </svg>
        {copied ? 'Email Copied!' : 'Copy Email'}
      </button>
    </motion.div>
  );
};

export default ContactCard;
