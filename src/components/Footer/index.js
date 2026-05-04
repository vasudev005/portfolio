import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import './FooterStyles.css';

const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

const Footer = () => {
  const handleNav = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container footer-container">
        {/* Brand */}
        <div className="footer-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="footer-bracket">&lt;</span>
          {Bio.name}
          <span className="footer-bracket">/&gt;</span>
        </div>

        {/* Nav */}
        <ul className="footer-nav">
          {navLinks.map((link) => (
            <li key={link}>
              <button className="footer-nav-btn" onClick={() => handleNav(link)}>
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Socials */}
        <div className="footer-socials">
          <a href={Bio.github} target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-icon linkedin" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={`mailto:${Bio.email}`} className="footer-social-icon email" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Copyright */}
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} {Bio.name}. Made with{' '}
          <FaHeart className="heart-icon" /> using React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
