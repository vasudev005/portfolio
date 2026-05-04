import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { Bio, ProfileImage } from '../../data/constants';
import './HeroStyles.css';

const Hero = () => {
  return (
    <section className="hero" id="about">
      <div className="hero-container container">
        {/* Left — Text */}
        <div className="hero-text" data-aos="fade-right">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">{Bio.name}</h1>
          <h2 className="hero-role">
            I am a{' '}
            <span className="hero-typewriter">
              <Typewriter
                words={Bio.roles}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={45}
                delaySpeed={1800}
              />
            </span>
          </h2>
          <p className="hero-desc">{Bio.description}</p>

          <div className="hero-actions">
            <a href={Bio.resume} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <FaDownload /> Check Resume
            </a>
            <div className="hero-socials">
              <a href={Bio.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href={`mailto:${Bio.email}`} className="social-icon" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Right — Avatar */}
        <div className="hero-image-wrap" data-aos="fade-left">
          <div className="hero-image-glow" />
          <div className="hero-image-ring">
            <img src={ProfileImage} alt={Bio.name} className="hero-avatar" />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-indicator">
        <span />
      </div>
    </section>
  );
};

export default Hero;
