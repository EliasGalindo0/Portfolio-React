import React from "react";
import About from "./About";
// import Header from "./Header";
import Repositories from "./Repo";
import Social from "./Social";
import Skills from "./Skills";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div className="home">
        <h2>Elias Pires Abrão Galindo</h2>
        <a
          target="_blank"
          rel="noreferrer"
          href='https://www.linkedin.com/in/eliasgalindo/'
        >
        <img
          className="profile-img"
          src="https://avatars.githubusercontent.com/u/90291253?v=4"
          alt="GitHub Avatar"
        />
        </a>
        <div className="components">
          <About />
          {/* <Header /> */}
          <Repositories />
          <Social />
          <Skills />
        </div>
      </div>
          <Footer />
    </>
  )
}