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
          I'm love technology. Decided to study web development to transit from
          lawyer carrer to web developer. For that, I started to study at Trybe
          school, where I already learned front-end stack with HTML, CSS,
          Javascript, React, Redux and Context API. I'm 35 and live in
          Presidente Prudente/SP.
        </p>
      ) : null}
    </div>
  );
}
