// components/Modal.js
import React from "react";
import { motion } from "framer-motion";
import AboutModalContent from "./AboutModalContent";

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
      className="modal-backdrop"
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
      style={{
        position: "fixed", // FIXED instead of absolute
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        overflow: "auto", // enable backdrop scroll if needed
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
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
          boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="close-button"
        >
           ✕
        </button>


        {children}
        <AboutModalContent /> 
      </motion.div>
    </motion.div>
  );
};

export default Modal;
