import React from 'react';
import TechStackCard from './TechStackCard';
import ContactCard from './ContactCard';
import TextSlider from './TextSlider';

const AboutModalContent = () => {
  return (
    <div className="about-modal-grid">
      <div className="about-card about-me">
        <h2>What I'm About?</h2>
        <h5>MY STORY</h5>
        <p>
          I was born and raised in Cairo, Egypt. Ever since I was a child, I had a passion for art and design...
        </p>
        <h5>WHAT I DO NOW</h5>
        <p>
          Today I'm a Design Lead at <a href="#">mano</a> improving the daily process of ordering groceries.
        </p>
      </div>

      <div className="about-card what-i-do">
        <h5>WHAT I DO BEST</h5>
        <TextSlider />
      </div>

      <TechStackCard />

      <div className="about-card experience">
        <h5>EXPERIENCE</h5>
        <ul className="experience-list">
          <li><strong>Design Lead at Mano</strong><span>Current</span></li>
          <li><strong>Senior Designer at Shopify</strong><span>2021 — 2022</span></li>
          <li><strong>Product Designer at OLX</strong><span>2020 — 2021</span></li>
          <li><strong>UX/UI Designer at Shrink</strong><span>2019 — 2020</span></li>
        </ul>
      </div>

      <div className="about-card image-card">
        <h5>GALLERY</h5>
        <img
          src="https://images.unsplash.com/photo-1506784365847-bbad939e9335"
          alt="Sample"
        />
      </div>

      <ContactCard />
    </div>
  );
};

export default AboutModalContent;
