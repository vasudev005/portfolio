import React, { useState } from 'react';
import { education } from '../../data/constants';
import './EducationStyles.css';

const Education = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="education-section" id="education">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Education</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          My educational journey and academic background.
        </p>

        <div className="timeline">
          {education.map((edu, idx) => (
            <div
              className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
              key={edu.id}
              data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={idx * 120}
            >
              <div className="timeline-dot" />
              <div
                className="timeline-card"
                onClick={() => setExpanded(expanded === edu.id ? null : edu.id)}
              >
                <div className="tc-header">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="tc-logo"
                    onError={e => (e.target.style.display = 'none')}
                  />
                  <div className="tc-meta">
                    <h3 className="tc-role">{edu.degree}</h3>
                    <span className="tc-company">{edu.school}</span>
                    <span className="tc-date">{edu.date}</span>
                    {edu.grade && (
                      <span className="tc-grade">Grade: {edu.grade}</span>
                    )}
                  </div>
                  <span className="tc-toggle">{expanded === edu.id ? '−' : '+'}</span>
                </div>

                <div className={`tc-body ${expanded === edu.id ? 'open' : ''}`}>
                  <p className="tc-desc">{edu.desc}</p>
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

export default Education;
