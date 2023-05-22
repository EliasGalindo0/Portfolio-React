/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import Context from '../context/Context';

export default function Footer() {
  const { resetAllToogles } = React.useContext(Context);

  return (
    <div
      onClick={ () => {
        window.scrollTo({
          top: 100,
          behavior: 'smooth',
        });
        resetAllToogles();
      } }
    >
      <div className="btn-home-return">
        <h1>Back to top ⏫</h1>
        <a href="/Portfolio-React/">
          <h1>Return to Home 🔙</h1>
        </a>
      </div>
    </div>
  );
}
