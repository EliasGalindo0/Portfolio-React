import React from 'react';
import { Link } from 'react-router-dom';
import About from '../Components/About';
import Repositories from '../Components/Repo';
import Social from '../Components/Social';
import Skills from '../Components/Skills';

export default function Home() {
  return (
    <section className="home">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/eliasgalindo/"
      >
        <img
          className="profile-img"
          src="https://avatars.githubusercontent.com/u/90291253?v=4"
          alt="GitHub Avatar"
        />
      </a>
      <main className="components">
        <About />
        <Repositories />
        <Social />
        <Skills />
        <Link to="/achievements">
          {' '}
          <h1>Achievements 🏆</h1>
        </Link>
        <Link to="/signin">
          {' '}
          <h1>Login</h1>
        </Link>
      </main>
    </section>
  );
}
