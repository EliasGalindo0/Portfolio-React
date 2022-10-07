/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import './Page.css';
import images from '../data/images';

export default function Skills() {
  const { tech, setTech, showSkills, toogleSkills } = useContext(Context);
  useEffect(() => {
    setTech(images);
  }, [setTech]);

  return (
    <>
      <div
        onClick={ toogleSkills }
      >
        {showSkills ? <h1>Skills ⏬</h1> : <h1>Skills ⏫</h1>}
      </div>
      { !showSkills
        ? <div className="skills">
          {tech.map((tec) => (
            <div className="card" key={ tec.id }>
              <img
                className="tech-img"
                src={ tec.URL }
                alt={ tec.name }
              />
              <p className="name">{ tec.name }</p>
            </div>
          ))}
          </div>
        : null }
    </>
  );
}
