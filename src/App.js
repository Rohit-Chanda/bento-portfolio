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
import ProjectModalContent from "./components/ProjectModalContent";
import projectData from "./data/projectData";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("dark-mode");
    return saved === null ? true : JSON.parse(saved);
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  // 🎯 Get the project data from projectData.js using the ID
  const selectedProject = projectData.find(
    (project) => project.id === selectedProjectId
  );

  const openModal = (type, id = null) => {
    setModalContent(type);
    setSelectedProjectId(id);
    setModalOpen(true);
  };


  const closeModal = () => {
    setModalOpen(false);
    setSelectedProjectId(null); // optional: reset project
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

  const portfolio = projectData.find(project => project.id === "portfolio");
  const task = projectData.find(project => project.id === "task");


  return (
    <div className="app app-container glass-card">
      <div className="grid">
        <IntroCard />
        <ProjectCard project={portfolio} onClick={() => openModal("projects", portfolio.id)} />
        <SocialLinksCard />
        <AboutCard onClick={() => openModal("about")} />
        <PhotoCard />
        <BlogCard />
        <ProjectCard project={task} onClick={() => openModal("projects", task.id)} />
        <ThemeToggleCard isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <ContactCard />
        <TechStackCard />
      </div>

      <AnimatePresence>
        {modalOpen && (
          <Modal isOpen={modalOpen} onClose={closeModal}>
            {modalContent === "projects" && selectedProject && (
              <ProjectModalContent project={selectedProject} />
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
