/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useEffect, useState } from 'react';

export default function Header() {
  const [header, setHeader] = useState(false);
  const offSet = 500;

  const toogleVisible = () => {
    if (window.pageYOffset > offSet) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toogleVisible);

    return () => {
      window.removeEventListener('scroll', toogleVisible);
    };
  }, []);

  return (
    <a
      href="/Portfolio-React/"
    >
      { header
        ? <h1 className="return-btn">Return to Home 🔙</h1>
        : null }
    </a>

  );
}
