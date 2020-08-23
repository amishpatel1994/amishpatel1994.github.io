import React from 'react';

export default function({ skills = [] }) {
  return (
    <div className="skills-container">
      {
        skills.map((skill) => (
          <p className="skill-badge" key={skill}>
            {skill}
          </p>
        ))
      }
    </div>
  )}