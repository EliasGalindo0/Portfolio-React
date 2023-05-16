/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import './Page.css';
import skills from '../data/skills';

export default function Skills() {
  const { tech, setTech, showSkills, toogleSkills } = useContext(Context);
  // const foo = skills.flat();

  useEffect(() => {
    setTech(skills);
  }, [setTech]);

  return (
    <>
    <div onClick={ toogleSkills }>
      {showSkills ? <h1>Skills ⏬</h1> : <h1>Skills ⏫</h1>}
    </div>
      { !showSkills
        ? <div className="skills">
              {tech.map((tec) => (
                <section className="card" key={ Math.random() }>
                    <img
                      className="tech-img"
                      src={ tec.URL }
                      alt={ tec.name }
                    />
                    <p className="name">{ tec.name }</p>
                </section>
                ))}
          </div>
        : null }
    </>
  );
}
