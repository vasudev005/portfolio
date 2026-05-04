import React from 'react';
import { skills } from '../../data/constants';
import './SkillsStyles.css';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Skills</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          My technical expertise across languages, frameworks, and tools.
        </p>

        <div className="skills-grid">
          {skills.map((category, idx) => (
            <div
              className="skill-card"
              key={category.title}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <h3 className="skill-card-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <div className="skill-tag" key={skill.name}>
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="skill-icon"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
