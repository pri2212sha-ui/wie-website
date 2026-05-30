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
          {/* Line 1 & 2: The grand title pieces */}
  <h1 className="pixel-title reveal-line line-1">Every engineer</h1>
  <h1 className="pixel-title reveal-line line-2" style={{ marginTop: '0.5vh' }}>
    <span className="purple-gradient-text">starts somewhere</span>
  </h1>
  
  <div className="divider-line"></div>
  
  {/* Lines 3, 4, 5: The body description split up */}
  <p className="main-desc reveal-line line-3" style={{ marginTop: '4vh' }}>A little unsure. A lot curious.</p>
  <p className="main-desc reveal-line line-4">Step by step, we build confidence,</p>
  <p className="main-desc reveal-line line-5">create impact and shape the future.</p>
  
  {/* Line 6: The Action Pill Button */}
  <a href="#journey" className="btn-pill reveal-line line-6">
    BEGIN YOUR JOURNEY &rarr;
  </a>
</div>
          
      </div>
      {/* Interactive Radial Scroll Menu Layout */}
      <div className="scroll-menu-container">
        {/* Semicircular Wheel Options */}
        <div className="radial-wheel">
           {/* Purple Halo */}
  <svg
    className="halo-svg"
    viewBox="0 0 500 250"
  >
    <path
      d="M 50 220
         A 200 200 0 0 1 450 220"
      className="halo-path"
    />
  </svg>
          <a href="#about" className="wheel-item item-1"><span>ABOUT</span></a>
          <a href="#events" className="wheel-item item-2"><span>EVENTS</span></a>
          <a href="#projects" className="wheel-item item-3"><span>PROJECTS</span></a>
          <a href="#gallery" className="wheel-item item-4"><span>GALLERY</span></a>
          <a href="#contact" className="wheel-item item-5"><span>CONTACT</span></a>
        </div>

        {/* FIXED: Moved inside the scroll-menu-container so it anchors and triggers hovers properly */}
        <div className="scroll-indicator">
            <div className="scroll-button">
          <span>SCROLL</span>  </div>

          <div className="arrow-down">↓</div>
        </div>
      </div>

    </div>
  );
}

export default App;