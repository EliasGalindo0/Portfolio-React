/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useEffect, useState, useContext } from 'react';
import Context from '../context/Context';

export default function Footer() {
  const [isVisible, setVisible] = useState(false);
  const { resetAllToogles } = useContext(Context);
  const offSet = 500;

  const toogleVisible = () => {
    if (window.pageYOffset > offSet) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toogleVisible);

    return () => {
      window.removeEventListener('scroll', toogleVisible);
    };
  }, []);

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
      { isVisible
        ? <h1 className="return-btn-footer">
          Back to top ⏫
        </h1>
        : null }
    </div>
  );
}
