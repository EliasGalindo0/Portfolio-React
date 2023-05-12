/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import Context from '../context/Context';

export default function Repositories() {
  const { showRepo, toogleRepo } = useContext(Context);

  return (
    <>
      <div
        onClick={ toogleRepo }
      >
        {showRepo ? <h1>Projects ⏬</h1> : <h1>Projects ⏫</h1>}
      </div>
      {!showRepo ? (
        <div className="repo">
          <div className="card">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/EliasGalindo0"
            >
              <img
                className="tech-img"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub"
              />
            </a>
            <p className="name">GitHub</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
