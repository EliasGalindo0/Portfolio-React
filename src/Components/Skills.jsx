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

  useEffect(() => {
    setTech(skills);
  }, [setTech]);

  // const splitTechs = (param) => {
  //   // console.log(Object.keys(tech[0]));
  //   param.forEach((element) => {
  //     const keys = Object.keys(element);
  //     console.log(keys);
  //     switch (keys) {
  //       case 'languages':
  //         console.log('vsf');

  //         break;

  //       default:
  //         break;
  //     }
  //   });

    // [[element]].map((ele) => {
    //   if (keys === 'language') {
    //     return console.log(ele.languages);
    //   }
    // }));
  // };

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
