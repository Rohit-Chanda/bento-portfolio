// ProjectModalContent.js
import React from "react";
import { motion } from "framer-motion";
import "./ProjectModalContent.css";

const ProjectModalContent = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      className="about-modal-grid"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
    >
      {/* <button className="close-btn" onClick={onClose}>×</button> */}

      <div className="modal-grid">
        <h2 className="modal-title">{project.title}</h2>
        <h3 className="modal-subtitle">{project.subtitle}</h3>

        <div className=" info-grid">
          <div className="info-card">
            <div className="info-block">
              <span className="label">Company</span>
              <span className="value">{project.company}</span>
            </div>
            <div className="info-block">
              <span className="label">My Role</span>
              <span className="value">{project.role}</span>
            </div>
            <div className="info-block">
              <span className="label">Tools</span>
              <ul className="tool-list">
                {project.tools.map((tool, idx) => (
                  <li key={idx}>{tool}</li>
                ))}
              </ul>
            </div>
            <div className="info-block">
              <span className="label">Timeline</span>
              <span className="value">{project.timeline}</span>
            </div>
          </div>

          <div className="info-card">
            <div className="info-block">
              <span className="label">Description</span>
              <p className="value">{project.description}</p>
            </div>
            <div className="info-block">
              <span className="label">Context</span>
              <p className="value">{project.context}</p>
            </div>
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
            >
              {project.cta || "Check the app"} <span>↗</span>
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <img src={project.heroImage} className="hero-img" alt="hero" />
        <section className="section-container">
          {/* Insights */}
          <div className="section-block">
            <h2>Insights</h2>
            <p>{project.insights}</p>
          </div>

          {/* Problem & Solution - side-by-side on large screens */}
          <div className="info-card problem-solution-split">
            <div className="split-column">
              <h3>Problem</h3>
              <p>{project.problem}</p>
            </div>
            <div className="split-divider"></div>
            <div className="split-column">
              <h3>Solution</h3>
              <p>{project.solution}</p>
            </div>
          </div>

          {/* Main Showcase Image */}
          <div className="single-image">
            <img src={project.images[0]} alt="project" />
          </div>

          {/* Extra Images Grid */}
          {project.extraImages?.length > 0 && (
            <div className="extra-images-block">
              <h3>Additional Visuals</h3>
              <div className="extra-image-grid">
                {project.extraImages.map((img, index) => (
                  <img key={index} src={img} alt={`extra-${index}`} />
                ))}
              </div>
            </div>
          )}

          {/* Process */}
          <div className="section-block">
            <h3>Process</h3>
            <p>{project.process}</p>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default ProjectModalContent;
