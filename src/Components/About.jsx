/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import Context from '../context/Context';

export default function About() {
  const { showAbout, toogleAbout } = useContext(Context);

  return (
    <div>
      <div
        onClick={ toogleAbout }
      >
        {showAbout ? <h1>About ⏬</h1> : <h1>About ⏫</h1>}
      </div>
      { !showAbout ? (
        <p className="about">
          I love technology. I`m a full stack web developer and currently
          I`m studying Software Engineering.
          I`m 35 years old and I live in Presidente Prudente, São Paulo, Brazil.
        </p>
      ) : null}
    </div>
  );
}
