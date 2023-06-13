import React from 'react';
import cs from '../../data/cs';

export default function Cs() {
  return (
    <>
      <h1>Computer Science 🔬</h1>
      <div className="projects" id="cs">
        {cs.map((project, index) => (
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
