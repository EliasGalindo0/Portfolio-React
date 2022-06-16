import React, { useContext } from "react";
import Context from "../context/Context";

export default function About() {
  const { showAbout, toogleAbout } = useContext(Context);

  return (
    <div>
      <div onClick={toogleAbout}>
        {showAbout ? <h1>About ⏬</h1> : <h1>About ⏫</h1>}
      </div>
      { !showAbout ? (
        <p className="about">
        I love technology. I decided to study web development in transition of a lawyer career. At the moment I'm studying at Trybe School of Technology, where I learned front-end (HTML, CSS, Javascript, React, Redux and Context API). I'm learning back-end, Node JS, MySQL and Docker so far. I'm 35 years old and I live in Presidente Prudente, São Paulo, Brazil. 
        </p>
      ) : null}
    </div>
  );
}
