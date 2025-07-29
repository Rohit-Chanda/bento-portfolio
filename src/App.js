import React, { useState, useEffect } from "react";
import "./App.css";
import PhotoCard from "./components/PhotoCard";
import AboutCard from "./components/AboutCard";
import ContactCard from "./components/ContactCard";
import ProjectCard from "./components/ProjectCard";
import IntroCard from "./components/IntroCard";
import ThemeToggleCard from "./components/ThemeToggleCard";
import SocialLinksCard from "./components/SocialLinksCard";
import BlogCard from "./components/BlogCard";
import TechStackCard from "./components/TechStackCard";
import Modal from "./components/Modal";
import { AnimatePresence } from "framer-motion";
import AboutModalContent from "./components/AboutModalContent";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("dark-mode");
    return saved === null ? true : JSON.parse(saved);
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (type) => {
    setModalContent(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // 🔒 Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "auto";
  }, [modalOpen]);

  // 🌗 Theme toggle persistence
  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light";
    localStorage.setItem("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <div className="app app-container glass-card">
      <div className="grid">
        <IntroCard />
        <ProjectCard onClick={() => openModal("projects")} />
        <SocialLinksCard />

        <AboutCard onClick={() => openModal("about")} />
        <PhotoCard />
        <BlogCard />
        <ContactCard />
        {/* <ProjectCard /> */}

        <ProjectCard />

        <ThemeToggleCard isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <TechStackCard />
      </div>

      <AnimatePresence>
        {modalOpen && (
          <Modal isOpen={modalOpen} onClose={closeModal}>
            {modalContent === "projects" && (
              <div>
                <h2>My Projects</h2>
                <p>All the cool stuff I’ve worked on!</p>
              </div>
            )}
            {modalContent === "about" && (
              <AboutModalContent onClose={closeModal} />
            )}
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
