import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React.js', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'REST APIs', level: 80 },
    { name: 'Jest', level: 75 },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 