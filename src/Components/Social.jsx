/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useContext } from 'react';
import Context from '../context/Context';

export default function Social() {
  const { showSocial, toogleSocial } = useContext(Context);
  return (
    <>
      <div
        onClick={ toogleSocial }
      >
        {showSocial ? <h1>Social ⏬</h1> : <h1>Social ⏫</h1>}
      </div>
      {
        !showSocial
          ? <div className="social">
            <div className="card">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/eliasgalindo/"
              >
                <img
                  className="tech-img"
                  src="https://www.pngplay.com/wp-content/uploads/9/Linkedin-PNG-Free-File-Download.png"
                  alt="Linkedin"
                />
              </a>
              <p className="name">Linkedin</p>
            </div>
            <div className="card">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/eliasgalindo0/"
              >
                <img
                  className="tech-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                  alt="Instagram"
                />
              </a>
              <p className="name">Instagram</p>
            </div>
            <div className="card">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/elias_galindo0"
              >
                <img
                  className="tech-img"
                  src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png"
                  alt="Facebook"
                />
              </a>
              <p className="name">Facebook</p>
            </div>
            <div className="card">
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:eliasgalindo@gmail.com"
              >
                <img
                  className="tech-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Logo_Gmail_%282015-2020%29.svg/1200px-Logo_Gmail_%282015-2020%29.svg.png"
                  alt="Gmail"
                />
              </a>
              <p className="name">Gmail</p>
            </div>
          </div>
          : null
      }
    </>
  );
}
