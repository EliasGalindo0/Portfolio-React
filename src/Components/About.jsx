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
          As a software engineering student,
          I have gained valuable experience in the field through my work as a
          Full Stack Software Developer at
          NeoGest - Agência Digital and Evartel - Controle de Ponto.
          During my time at NeoGest,
          I was responsible for developing modules in PHP,
          creating databases, validating user information,
          creating client administrative environments,
          creating payment integrations and modules, simulating freight,
          validating and mapping data, consuming REST APIs,
          and styling front-end with Bootstrap.
          At Evartel, I continued to develop
          my full stack web development skills in PHP and JavaScript,
          while also maintaining the system and resolving bugs,
          and implementing new technologies and functionalities.
          <br />
          <br />
          In addition to my work experience,
          I also have experience as a Professor at Proz, where
          I taught the subject of digital world security.
          My responsibilities included developing research activities
          and lectures, as well as teaching topics such as HTTPS protocol,
          cryptography,
          social networks, data security, network security, and cyber attacks.
          <br />
          <br />
          Through my experiences,
          I have developed a strong understanding of software development,
          security, and the importance of staying up-to-date with the latest
          technologies and best practices.
          I am committed to continuing my education and growth in the field,
          and am excited to see where my career in software engineering takes me.
        </p>
      ) : null}
    </div>
  );
}
