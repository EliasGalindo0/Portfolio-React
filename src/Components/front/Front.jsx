import React from 'react';
import front from '../../data/front';

export default function Basics() {
  return (
    <>
      <h1>Front-end 🖥</h1>
      <div className="projects">
        {front.map((project, index) => (
          <div key={ index }>
            <a
              target="_blank"
              rel="noreferrer"
              href={ project.url }
            >
              <img
                className="project"
                src={ project.image }
                alt="lessonsLearned"
              />
            </a>
            <p className="name">{project.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
