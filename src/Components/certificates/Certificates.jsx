import React from 'react';
import certificates from '../../data/certificates';

export default function Certificates() {
  return (
    <>
      <h1>Certificates 📜</h1>
      <div className="certificates">
        {certificates.map((project, index) => (
          <div key={ index }>
            <a
              target="_blank"
              rel="noreferrer"
              href={ project.url }
            >
              <img
                className="certificate"
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
