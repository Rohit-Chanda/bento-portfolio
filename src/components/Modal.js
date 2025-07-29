// components/Modal.js
import React from "react";
import { motion } from "framer-motion";
// import AboutModalContent from "./AboutModalContent";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
};

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <motion.div
      className="modal-overlay"
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 9999,
        overflowY: "auto", 
        padding: "2rem",
        display: "block",  
      }}
    >
      <motion.div
        className="modal-content"
        variants={modal}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--card-bg, white)",
          padding: "2rem",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "960px",
          margin: "6rem auto",           
          position: "relative",
          boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="close-button"
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            fontSize: "1.5rem",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#999",
          }}
        >
          ✕
        </button>

        {children}
        {/* <AboutModalContent /> */}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
