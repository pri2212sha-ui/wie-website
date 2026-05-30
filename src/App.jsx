// App.jsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="hero-container">
      {/* Background Asset Layer */}
      <div className="background"></div>

      {/* TOP NAVIGATION BAR AREA */}
      <header className="navbar">
        <div className="logo-section">
          <span className="brand-logo">WIE<span className="plus">+</span></span>
          <span className="brand-subtext">IEEE WOMEN IN ENGINEERING</span>
        </div>
        <nav className="nav-links">
          <a href="#about">ABOUT</a>
          <a href="#events">EVENTS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#gallery">GALLERY</a>
          <a href="#board">BOARD</a>
          <a href="#alumni">ALUMNI</a>
          <a href="#achievements">ACHIEVEMENTS</a>
          <a href="#blogs">BLOGS</a>
          <a href="#contact">CONTACT US</a>
          <button className="nav-btn">
            <span className="bulb-icon">💡</span> SUGGEST IDEAS
          </button>
        </nav>
      </header>

      {/* Character Tracking Container */}
      <div className="character-container">
        <div className="character"></div>
      </div>

      {/* DESIGN OVERLAY INTERFACE (Layout like Picture 1) */}
      <div className="content-overlay">
        <div className="text-box">
          <h1 className="pixel-title">
            Every engineer <br />
            <span className="purple-gradient-text">starts somewhere<span className="title-sparkle"></span></span>
          </h1>
          <div className="divider-line"></div>
          <p className="main-desc">
            A little unsure. A lot curious. <br />
            Step by step, we build confidence, <br />
            create impact and shape the future.
          </p>
          <p className="sub-desc">This is where the journey begins.</p>
          <a href="#journey" className="btn-pill">
            BEGIN YOUR JOURNEY &rarr;
          </a>
        </div>
      </div>
      {/* Interactive Radial Scroll Menu Layout */}
      <div className="scroll-menu-container">
        {/* Semicircular Wheel Options */}
        <div className="radial-wheel">
          <a href="#about" className="wheel-item item-1"><span>ABOUT</span></a>
          <a href="#events" className="wheel-item item-2"><span>EVENTS</span></a>
          <a href="#projects" className="wheel-item item-3"><span>PROJECTS</span></a>
          <a href="#gallery" className="wheel-item item-4"><span>GALLERY</span></a>
          <a href="#contact" className="wheel-item item-5"><span>CONTACT</span></a>
        </div>

        {/* FIXED: Moved inside the scroll-menu-container so it anchors and triggers hovers properly */}
        <div className="scroll-indicator">
          <span>SCROLL</span>
          <div className="arrow-down">↓</div>
        </div>
      </div>

    </div>
  );
}

export default App;