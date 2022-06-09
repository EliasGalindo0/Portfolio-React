import React, { useContext, useEffect } from "react";
import Context from "../context/Context";
import './Page.css';
import { images } from "../images";


export default function Skills() {
  const { tech, setTech, showSkills, toogleSkills } = useContext(Context)
  useEffect(() => {
    const tech = images;
    setTech(tech);
  }, [setTech]);
  
  return(
    <>
     <div onClick={toogleSkills}>
        {showSkills ? <h1>Skills ⏬</h1> : <h1>Skills ⏫</h1>}
      </div>
    { !showSkills ?
      <div className="skills">
        {tech.map((tec) => {
          return (
            <div className="card" key={tec.id}>
              <img
                className="tech-img"
                src={tec.URL}
                alt={tec.name}
              />
              <p className="tech-img">{ tec.name }</p>
            </div>
        )
    })}
    </div>
    : null }
    </>
  );
}
