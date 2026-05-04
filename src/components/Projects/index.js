import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../../data/constants';
import './ProjectsStyles.css';

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Projects</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Here are some of my featured projects and creations.
        </p>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div
              className={`project-card ${hovered === project.id ? 'hovered' : ''}`}
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image / placeholder */}
              <div className="project-img-wrap">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="project-img" />
                ) : (
                  <div className="project-img-placeholder">
                    <span className="project-placeholder-icon">{'</>'}</span>
                  </div>
                )}
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-btn" aria-label="GitHub">
                        <FaGithub />
                      </a>
                    )}
                    {project.webapp && project.webapp !== '#' && (
                      <a href={project.webapp} target="_blank" rel="noopener noreferrer" className="project-link-btn" aria-label="Live Demo">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="project-content">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="project-date">{project.date}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span className="project-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* "More coming soon" placeholder */}
          <div className="project-card coming-soon" data-aos="fade-up" data-aos-delay="200">
            <div className="coming-soon-inner">
              <span className="coming-soon-icon">🚀</span>
              <h3>More Coming Soon</h3>
              <p>Stay tuned for exciting new projects!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
