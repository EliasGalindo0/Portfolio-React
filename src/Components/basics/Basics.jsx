import React from 'react';
import projects from '../../data/projects';

export default function Basics() {
  return (
    <>
      <h1>Web Fundamentals 🚧</h1>
      <div className="projects" id="basics">
        {projects.map((project, index) => (
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
