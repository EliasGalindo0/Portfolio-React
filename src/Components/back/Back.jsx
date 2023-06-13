import React from 'react';
import back from '../../data/back';

export default function Back() {
  return (
    <>
      <h1>Back-End 🎲</h1>
      <div className="projects" id="back">
        {back.map((project, index) => (
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
