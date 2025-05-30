// AboutModalContent.js
import React from 'react';
import TechStackCard from './TechStackCard';
import ContactCard from './ContactCard';


const AboutModalContent = () => {
  return (
    <div className="about-modal-grid">
      <div className="about-card">
        <h2>What I'm about?</h2>
        <h5>MY STORY</h5>
        <p>
          I was born and raised in Cairo, Egypt. Ever since I was a child, I had a passion for art and design. I was captivated by the vibrant colors and intricate details of the things around me, which inspired me to learn web design, where I delved deeper into the world of UX and product design.
        </p>
        <h5>WHAT I DO NOW</h5>
        <p>
          Today I'm a Design Lead at <a href="#">mano</a> improving the daily process of ordering groceries.
        </p>
      </div>

      <div className="about-card">
        <h5>WHAT I DO BEST</h5>
        <h3>Digital Design</h3>
        <p>Providing innovative problem-solving methods and impactful solutions to ensure a better experience.</p>
      </div>
      <div className="about-card">
        <h5>EXPERIENCE</h5>
        <ul className="experience-list">
          <li><strong>Design Lead at Mano</strong><span>Current</span></li>
          <li><strong>Senior Designer at Shopify</strong><span>2021 — 2022</span></li>
          <li><strong>Product Designer at OLX</strong><span>2020 — 2021</span></li>
          <li><strong>UX/UI Designer at Shrink</strong><span>2019 — 2020</span></li>
        </ul>
      </div>
      <TechStackCard />
      {/* <div className="about-card">
        <h5>Stack I use</h5>
        <div className="stack-icons">
          <span>🧠</span>
          <span>🌐</span>
          <span>🎨</span>
          <span>🛠</span>
          <span>📝</span>
        </div>
      </div> */}

      

      {/* <div className="about-card image-card">
        <img
          src="https://images.unsplash.com/photo-1506784365847-bbad939e9335"
          alt="biking"
        />
      </div> */}
        <ContactCard />
      {/* <div className="about-card">
        <h5>Have a project in mind?</h5>
        <button className="email-button">Copy email ↗</button>
      </div> */}
    </div>
    
  );
};

export default AboutModalContent;
