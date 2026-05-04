import React, { useState } from 'react';
import { experiences } from '../../data/constants';
import './ExperienceStyles.css';

const Experience = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Experience</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          My work experience across companies and projects.
        </p>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div
              className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
              key={exp.id}
              data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={idx * 120}
            >
              <div className="timeline-dot" />
              <div className="timeline-card" onClick={() => setExpanded(expanded === exp.id ? null : exp.id)}>
                <div className="tc-header">
                  <img src={exp.img} alt={exp.company} className="tc-logo" onError={e => e.target.style.display='none'} />
                  <div className="tc-meta">
                    <h3 className="tc-role">{exp.role}</h3>
                    <span className="tc-company">{exp.company}</span>
                    <span className="tc-date">{exp.date}</span>
                  </div>
                  <span className="tc-toggle">{expanded === exp.id ? '−' : '+'}</span>
                </div>

                <div className={`tc-body ${expanded === exp.id ? 'open' : ''}`}>
                  <p className="tc-desc">{exp.desc}</p>
                  <div className="tc-skills">
                    {exp.skills.map(s => (
                      <span className="tc-skill-chip" key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="timeline-line" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
