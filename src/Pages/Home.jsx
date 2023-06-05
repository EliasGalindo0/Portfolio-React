import React from 'react';
import { Link } from 'react-router-dom';
import About from '../Components/About';
import Social from '../Components/Social';
import Skills from '../Components/Skills';

export default function Home() {
  return (
    <section className="home">
      <Link to="/signin">
        <img
          className="profile-img"
          src="https://avatars.githubusercontent.com/u/90291253?v=4"
          alt="GitHub Avatar"
        />
      </Link>
      <main className="components">
        <About />
        <Social />
        <Skills />
        <Link to="/achievements">
          {' '}
          <h1>Achievements 🏆</h1>
        </Link>
      </main>
    </section>
  );
}
