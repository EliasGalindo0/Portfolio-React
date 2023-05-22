import React from 'react';
import certificates from '../../data/certificates';

export default function Certificates() {
  return (
    <>
      <h1>Certificates 📜</h1>
      <div className="certificates">
        {certificates.map((certificate) => (
          <div key={ certificate.name }>
            <a
              target="_blank"
              href={ certificate.url }
              rel="noreferrer"
            >
              <img
                className="certificate"
                src={ certificate.src }
                alt={ certificate.name }
              />
            </a>
            <p className="name">{certificate.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
